// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IEntityManager.sol";

contract EntityManager is ERC721, IEntityManager {
    //NOTE: Little chance of "entity" collision since all NFTs are minted from the same pool
    //NOTE: Each item here is merely representative of the entity structure
    using Counters for Counters.Counter;
    Counters.Counter private totalSupply;

    mapping(uint256 entity => SFileMeta fileMeta) public metadataOf;
    mapping(uint256 entity => SComments[] comments) public commentsOf;

    // mapping(uint256 entity => mapping(bytes32 user => uint8))
    //     public permissionsPerEntity;

    mapping(uint256 entity => Entity) public entities;

    // bytes32[] arr;

    constructor() ERC721("EntitySystem", "FS") {
        // for (uint256 i = 0; i < 1024; i++) arr[i] = bytes32(0x0);
    }

    function canPerform(
        uint256 _entityId,
        address _user,
        uint256[] memory _permissions
    ) public returns (bool) {
        //NOTE:  A "org/team" at any level is just a "folder/group" with individual permissions set
        //get permission
        uint8 curPerm = entities[_entityId].userPermissions[_user];
        bool allowed = _permissions.length > 0;

        for (uint256 i = 0; i < _permissions.length; i++) {
            allowed = allowed && (_permissions[i] & curPerm > 0);
        }

        return allowed;
    }

    function walkUpPermissionsTreeAndToggle(
        uint256 _entityId,
        address _user,
        STogglePerms memory _tPerms //likely starts empty (already passed by ref so no need for another internal var)
    ) public view returns (uint8) {
        //WARNING: Doesn't maintain `alreadyVisited` array yet.
        //CONSIDER: Depth should start at 0 and increment, or start at max and decrement.
        //...current attempt too high stop (do this later)
        require(
            _exists(_entityId),
            "Entity does not exist.  Broken parent/child chain."
        );

        //increment count
        _tPerms._totalChecks += 1;

        // Check if the owner of the entity is account
        if (_ownerOf(_entityId) == _user) {
            //Do we care whether we're at the top or not? (Not sure)
            //Do we care whether this is a share? (Not really)
            _tPerms._curPerms = _tPerms._curPerms | PERM_ADMIN;
        }
        //STEP: check for DENY
        if (
            entities[_entityId].userPermissions[_user] & PERM_DENY == PERM_DENY
        ) {
            _tPerms._curPerms = _tPerms._curPerms | PERM_DENY;
        }
        //STEP: permissions of current entity
        if (entities[_entityId].userPermissions[_user] > 0) {
            _tPerms._curPerms =
                _tPerms._curPerms |
                entities[_entityId].userPermissions[_user];
        }
        //STEP: permissions of parentEntity
        if (entities[_entityId].parentId > 0) {
            walkUpPermissionsTreeAndToggle(
                entities[_entityId].parentId,
                _user,
                _tPerms
            );
        }
        //STEP: permissions of originalFileId
        if (entities[_entityId].entityType == ImmutableType.Share) {
            walkUpPermissionsTreeAndToggle(
                entities[_entityId].shareMeta.originalEntityId,
                _user,
                _tPerms
            );
        }
        //NOTE: A `Share` isn't technically allowed to reference a `Share`
        //NOTE: ...so we can assume any references to the parent will be an actual `Folder`
        return _tPerms._curPerms;
    }

    // function walkUpPermissionsTree(
    //     uint256 _entityId,
    //     address _user,
    //     uint8[] memory _curPerms //likely starts empty (already passed by ref so no need for another internal var)
    // ) public view returns (uint8[] memory) {
    //     //WARNING: Doesn't maintain `alreadyVisited` array yet.
    //     //CONSIDER: Depth should start at 0 and increment, or start at max and decrement.
    //     //...current attempt too high stop (do this later)
    //     require(
    //         _exists(_entityId),
    //         "Entity does not exist.  Broken parent/child chain."
    //     );
    //     // Check if the owner of the entity is account
    //     if (_ownerOf(_entityId) == _user) {
    //         //Do we care whether we're at the top or not? (Not sure)
    //         //Do we care whether this is a share? (Not really)
    //         _curPerms[_curPerms.length] = PERM_ADMIN;
    //     }

    //     console.log("PERMCHECK...");
    //     console.log(_curPerms[_curPerms.length]);
    //     //STEP: check for DENY
    //     if (
    //         entities[_entityId].userPermissions[_user] & PERM_DENY == PERM_DENY
    //     ) {
    //         _curPerms[_curPerms.length] = PERM_DENY;
    //     }

    //     console.log("PERMCHECK...");
    //     console.log(_curPerms[_curPerms.length - 1]);
    //     //STEP: permissions of current entity
    //     if (entities[_entityId].userPermissions[_user] > 0) {
    //         _curPerms[_curPerms.length] = entities[_entityId].userPermissions[
    //             _user
    //         ];
    //     }

    //     console.log("PERMCHECK...");
    //     console.log(_curPerms[_curPerms.length]);
    //     //STEP: permissions of parentEntity
    //     if (entities[_entityId].parentId > 0) {
    //         walkUpPermissionsTree(
    //             entities[_entityId].parentId,
    //             _user,
    //             _curPerms
    //         );
    //     }

    //     console.log("PERMCHECK...");
    //     console.log(_curPerms[_curPerms.length - 1]);
    //     //STEP: permissions of originalFileId
    //     if (entities[_entityId].entityType == ImmutableType.Share) {
    //         walkUpPermissionsTree(
    //             entities[_entityId].shareMeta.originalEntityId,
    //             _user,
    //             _curPerms
    //         );
    //     }
    //     //NOTE: A `Share` isn't technically allowed to reference a `Share`
    //     //NOTE: ...so we can assume any references to the parent will be an actual `Folder`
    //     // check all items of depth X, keep going till we find something or that we went through 1024 references
    //     console.log("PERMCHECK...");
    //     console.log(_curPerms[_curPerms.length]);
    //     return _curPerms;
    // }

    // function resolveMaxPerms(
    //     uint256 _entity,
    //     address _account,
    //     uint8[] memory _permChain
    // ) public returns (uint256) {
    //     _permChain = walkUpPermissionsTree(_entity, _account, _permChain);
    //     //Binary math . . .

    //     return 1;
    // }

    function createOrganization(
        string memory _name,
        uint8 _basePerms
    ) public override {
        totalSupply.increment();
        uint256 newTokenId = totalSupply.current();
        _safeMint(msg.sender, newTokenId);
        entities[newTokenId].parentId = 0;
        entities[newTokenId].name = _name;
        entities[newTokenId].tokenId = newTokenId;
        entities[newTokenId].entityType = ImmutableType.Organization;

        console.log("CREATED TEAM:");
        console.log(newTokenId);
    }

    function createTeam(
        uint256 _parentId,
        string memory _name,
        uint8 _basePerms
    ) public override {
        require(_exists(_parentId), "Parent folder does not exist");
        require(
            entities[_parentId].entityType == ImmutableType.Organization,
            "You may only add a Team to an Organization!"
        );

        totalSupply.increment();
        uint256 newTokenId = totalSupply.current();
        _safeMint(msg.sender, newTokenId);
        entities[newTokenId].parentId = _parentId;
        entities[newTokenId].name = _name;
        entities[newTokenId].tokenId = newTokenId;
        entities[newTokenId].entityType = ImmutableType.Team;

        //Append to parent
        // entities[_parentId].children.push(newTokenId);

        // console.log("CREATED TEAM:");
        // console.log(newTokenId);
    }

    function createFolder(
        uint256 _parentId,
        string memory _name,
        uint8 _basePerms
    ) public override {
        require(_parentId > 0 || _exists(_parentId), "Parent does not exist!");
        require(
            entities[_parentId].entityType != ImmutableType.File,
            "You can't store a folder inside a file!"
        );

        totalSupply.increment();
        uint256 newTokenId = totalSupply.current();
        _safeMint(msg.sender, newTokenId);
        entities[newTokenId].parentId = _parentId; //0 for root folder
        entities[newTokenId].name = _name;
        entities[newTokenId].tokenId = newTokenId;
        entities[newTokenId].entityType = ImmutableType.Folder;

        //Append to parent
        entities[_parentId].children.push(newTokenId);

        console.log("CREATED FOLDER:");
        console.log(newTokenId);
    }

    function createFile(
        string calldata _name, // Required
        string memory _description, // Optional
        string calldata _ipfsCid,
        uint256 _parentId //Optional
    ) public {
        require(_exists(_parentId), "Parent does not exist!");
        uint256 newTokenId = safeMintFile(
            msg.sender,
            _name,
            _description,
            _ipfsCid
        );
        entities[newTokenId].parentId = _parentId;
        entities[newTokenId].name = _name;
        entities[newTokenId].tokenId = newTokenId;
        entities[newTokenId].entityType = ImmutableType.File;

        //Append to parent
        entities[_parentId].children.push(newTokenId);

        console.log("CREATED FILE:");
        console.log(newTokenId);
    }

    function createShare(
        uint256 _existingEntityId,
        string memory _name, //Optional
        uint256 _externalOrgOrTeamId, //Optional (//NOTE: Should probably force this to be a TEAM or ORG on initial share)
        uint8 _filterPermissionsFromOriginalOwner //combo of entityperm/shareperm
    ) public {
        require(_exists(_existingEntityId), "Share target doesn't exist!");
        require(
            entities[_existingEntityId].entityType == ImmutableType.Folder ||
                entities[_existingEntityId].entityType == ImmutableType.File,
            "You may only create Shares for entities or folders."
        );
        require(
            _exists(_externalOrgOrTeamId) &&
                (entities[_existingEntityId].entityType ==
                    ImmutableType.Organization ||
                    entities[_existingEntityId].entityType ==
                    ImmutableType.Team),
            "You may only share with Organizations or Teams!"
        );

        //ALSO NEED TO REQUIRE PERMISSIONS TO SHARE FOLDER
        totalSupply.increment();
        uint256 newShareId = totalSupply.current();
        _safeMint(msg.sender, newShareId);
        _transfer(msg.sender, ownerOf(_externalOrgOrTeamId), newShareId);
        entities[newShareId].parentId = _externalOrgOrTeamId; //NOTE: Should be intended ORG or TEAM `tokenId`
        entities[newShareId].basePermissions = PERM_CAN_READ; //Could be any sum of PERM_* constants
        entities[newShareId].name = _name;
        entities[newShareId].tokenId = newShareId;
        entities[newShareId].entityType = ImmutableType.Share;
        entities[newShareId].shareMeta = SShareMeta({
            originalEntityId: _existingEntityId,
            maxPermissionsPerOwner: _filterPermissionsFromOriginalOwner,
            status: ShareStatus.Pending,
            timestamp: block.timestamp
        });
    }

    // function moveEntity(uint _entityId, uint _newparentId) public {
    //     require(ownerOf(_entityId) == msg.sender, "Not entity owner");
    // require can't move org
    // require all other moves to be to folders of greater "type" significance than they are
    //     entities[_entityId].parentId = _newparentId;
    // }

    //Actions on entity...
    function commentOnEntity(
        uint256 tokenId,
        string memory commentIpfsCid
    ) external virtual {
        // require(
        //     hasWritePermission(_msgSender(), tokenId),
        //     "ETCH: Not allowed to read this Etch"
        // );
        //TODO: Does this just replace en masse?
        commentsOf[tokenId].push(
            SComments({
                commentIpfsCid: commentIpfsCid,
                timestamp: block.timestamp
            })
        );

        metadataOf[tokenId].commentsCount++;

        // emit CommentAdded(
        //     tokenId,
        //     metadataOf[tokenId].commentsCount,
        //     commentsOf[tokenId]
        // );
    }

    function setMetadata(
        uint256 _tokenId,
        string memory _documentName,
        string memory _documentDescription,
        string memory _ipfsCid
    ) external virtual {
        //CONSIDER: Need an actual "updateMetadata"
        // require(
        //     hasWritePermission(_msgSender(), tokenId) || isNode(_msgSender()),
        //     "ETCH: Not allowed to write this Etch"
        // );
        // require(
        //     bytes(metadataOf[tokenId].ipfsCid).length == 0,
        //     "ETCH: Metadata already initialized"
        // );

        metadataOf[_tokenId] = SFileMeta({
            creator: _msgSender(),
            documentName: _documentName,
            documentDescription: _documentDescription,
            ipfsCid: _ipfsCid,
            commentsCount: 0,
            timestamp: block.timestamp
        });

        // emit EtchMetadataUpdated(tokenId, ipfsCid, description, documentName);
    }

    // Minting and whatnot ...
    function safeMintFile(
        address _to,
        string memory _documentName,
        string memory _documentDescription,
        string memory _ipfsCid
    ) internal virtual returns (uint256) {
        totalSupply.increment();
        uint256 tokenId = totalSupply.current();

        _safeMint(_to, tokenId, "");

        if (bytes(_ipfsCid).length > 0)
            metadataOf[tokenId] = (
                SFileMeta({
                    creator: _to,
                    documentName: _documentName,
                    documentDescription: _documentDescription,
                    ipfsCid: _ipfsCid,
                    commentsCount: 0,
                    timestamp: block.timestamp
                })
            );

        // emit EtchCreated(tokenId, to, ipfsCid, documentName);

        return tokenId;
    }

    //PERMISSIONS AND WHATNOT
    function getUserPermissionsForEntity(
        uint256 _entityId,
        address _userAddress
    ) public view override returns (uint8) {
        //NEED TO SEE IF THEY HAVE PERMISSIONS TO SET PERMISSIONS, BUT WE'LL LET ANYONE DO THIS FOR NOW
        require(_exists(_entityId), "Invalid entity!");
        return entities[_entityId].userPermissions[_userAddress];
    }

    function setUserPermissionsForEntity(
        uint256 _entityId,
        address _userAddress,
        uint8 _permissions
    ) public override {
        //NEED TO SEE IF THEY HAVE PERMISSIONS TO SET PERMISSIONS, BUT WE'LL LET ANYONE DO THIS FOR NOW
        require(_exists(_entityId), "Invalid entity!");
        entities[_entityId].userPermissions[_userAddress] = _permissions;
    }

    function bytes32ToAddress(bytes32 b) public pure returns (address) {
        return address(uint160(uint256(b)));
    }

    function addressToBytes32(address a) public pure returns (bytes32) {
        return bytes32(uint256(uint160(a)));
    }

    function getTotalSupply() public view virtual override returns (uint256) {
        return totalSupply.current();
    }
}
