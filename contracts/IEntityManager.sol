// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

abstract contract IEntityManager is IERC721 {
    uint8 constant PERM_ADMIN = 1;
    uint8 constant PERM_CAN_READ = 2;
    uint8 constant PERM_CAN_WRITE = 4;
    uint8 constant PERM_CAN_SHARE = 8;
    uint8 constant PERM_DENY = 16;

    enum ImmutableType {
        Organization,
        Team,
        Folder,
        File,
        Share
    }

    enum ShareStatus {
        Pending,
        Accepted,
        Revoked
    }

    struct SPermissions {
        address user;
        uint8 permissions;
    }

    struct STogglePerms {
        //Only using because of "pass by ref"
        uint8 _curPerms;
        uint256 _totalChecks;
    }

    struct SShareMeta {
        //id comes from the `tokenId` of the associated `Entity` info . . . this section is simply data for share navigation
        uint256 originalEntityId;
        uint8 maxPermissionsPerOwner;
        uint256 timestamp;
        ShareStatus status;
    }

    struct SFileMeta {
        address creator;
        string documentName;
        string documentDescription;
        string ipfsCid;
        uint256 commentsCount;
        uint256 timestamp;
    }

    struct SComments {
        string commentIpfsCid;
        uint256 timestamp;
    }

    struct Entity {
        //NOTE: Even though it feels a bit cluttered, we don't want separate mappings for each entity type
        //NOTE: ... because we'd need to track that on the parent attribute of each entity
        //NOTE: ... better to leave it "opaque" and determine it after retrieval from the `entities` mapping.
        string name; //CONSIDER: potentially duplicate of metadata, might need to be aware of keeping them in sync.
        uint256 tokenId; // comes from `ownerOf(tokenId)`
        uint256 parentId; //is *always* a number representative of `tokenId` or 0 for top level
        uint256[] children;
        uint8 basePermissions; //(PERM_READ + PERM_WRITE + ...) set of base permissions on folder in the event specific user permissions aren't defined otherwise
        mapping(address user => uint8 permissions) userPermissions;
        ImmutableType entityType;
        SShareMeta shareMeta;
        SFileMeta fileMeta; //only useful if ImmutableType.File
    }

    function getTotalSupply() external view virtual returns (uint256) {}

    //Common
    function findOwnerOfEntityOrganization(uint256 _entityId) public {
        //basically walk tree up and find owner of top level org.
    }

    function getUserPermissionsForEntity(
        uint256 _entityId,
        address _userAddress
    ) public view virtual returns (uint8) {}

    function setUserPermissionsForEntity(
        uint256 _entityId,
        address _userAddress,
        uint8 _permissions
    ) public virtual {}

    function getOwner() public {
        //owner of current tokenId
    }

    function move(uint256 _entityId, address _destId) internal {
        //finall call from each `create...()`
        //validate both entities are ultimately part of the same organization
    }

    function transferItemToOrganization(
        uint256 _entityId,
        uint256 _destOrgId
    ) public {
        //verify item itself is not an Org
        //verify owner of current Org (should we request acceptance from _destOrgId)
        //verify write ability on destination
        //find owner of destination org
        //actually transfer
    }

    //Organizations
    function transferOrganizationOwnership(
        uint256 _orgId,
        address _newOwner
    ) public {}

    function createOrganization(
        string memory _name,
        uint8 _basePerms
    ) public virtual {}

    // Teams
    function createTeam(
        uint256 _parentId,
        string memory _name,
        uint8 _basePerms
    ) public virtual {}

    function moveTeam(uint256 _teamId, address _destId) public {
        //validate team
        //Validate _destId significance is >= team (basically can be moved between Orgs or)
        //call move
    }

    //Folders
    function createFolder(
        uint256 _parentId,
        string memory _name,
        uint8 _basePerms
    ) public virtual {}

    function moveFolder(uint256 _orgId, address _destId) public {
        //validate folder
        //call move
    }

    //Files
    function createFile(
        uint256 _parentId,
        string memory _name,
        uint8 _basePerms
    ) public virtual {}

    function moveFile(uint256 _orgId, address _destId) public virtual {
        //validate folder
        //call move
    }
}
