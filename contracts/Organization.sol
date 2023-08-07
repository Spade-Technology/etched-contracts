// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

/**
    @title Organization Contract
    @notice This contract manages permissions and roles within an organization.
 */
contract Organization is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    // Struct to store signature data
    struct Signature {
        bytes encodedMessage;
        bytes32 messageHash;
        bytes signature;
    }

    struct EncodedMessage {
        address target;
        uint256 blockNumber;
        OPCode opCode;
        bytes params;
    }

    // Enum to describe the permission levels
    enum Permission {
        NoAccess,
        Read,
        Write,
        Admin
    }

    enum OPCode {
        GrantRole,
        RevokeRole,
        SetDefaultPermission,
        SetPermission,
        TransferEtch
    }

    // Stores used signatures
    mapping(bytes => bool) private usedSignatures;

    // Mapping from address to token ID to permission level
    mapping(address => mapping(uint256 => Permission)) public permissions;

    // Mapping for default permissions for users
    mapping(address => Permission) public defaultPermissions;

    /**
        @notice Initializes the Organization contract with an admin address.
        @param _admin The address of the admin.
     */
    constructor(address _admin) {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(ADMIN_ROLE, _admin);
        _setupRole(TRANSFER_ROLE, _admin);
    }

    function getMessageHash(
        bytes memory _data
    ) internal pure returns (bytes32) {
        return keccak256(_data);
    }

    function getEthSignedMessageHash(
        bytes32 _messageHash
    ) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19Ethereum Signed Message:\n32",
                    _messageHash
                )
            );
    }

    modifier verifySignature(bytes32 role, Signature memory _signature) {
        require(
            !usedSignatures[_signature.signature],
            "Signature already used"
        );

        require(
            getMessageHash(_signature.encodedMessage) == _signature.messageHash,
            "The message hash doesn't match the original!"
        );

        bytes32 ethSignedMessageHash = getEthSignedMessageHash(
            _signature.messageHash
        );
        address signer = ECDSA.recover(
            ethSignedMessageHash,
            _signature.signature
        );
        require(hasRole(role, signer), "Unauthorized");

        _;

        usedSignatures[_signature.signature] = true;
    }

    function checkMessageValidity(
        OPCode _opCode,
        EncodedMessage memory _encodedMessage
    ) internal view returns (bool) {
        // (address _target, uint256 _blockNumber, string _functionName, ) = abi.decode(_encodedMessage.params, (address, uint256, string, bytes));
        require(
            _encodedMessage.target == address(this),
            "Target address doesn't match"
        );
        require(
            _encodedMessage.blockNumber >= block.number,
            "Messade is expired"
        );
        require(
            _encodedMessage.opCode == _opCode,
            "Function name doesn't match"
        );
        return true;
    }

    // Override grantRole function
    function grantRole(
        Signature memory signature
    ) public virtual verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(OPCode.GrantRole, encodedMessage);
        (bytes32 role, address account) = abi.decode(
            encodedMessage.params,
            (bytes32, address)
        );
        _grantRole(role, account);
    }

    // Override revokeRole function
    function revokeRole(
        Signature memory signature
    ) public virtual verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(OPCode.RevokeRole, encodedMessage);
        (bytes32 role, address account) = abi.decode(
            encodedMessage.params,
            (bytes32, address)
        );
        _revokeRole(role, account);
    }

    // Function to set default permissions for a user
    function setDefaultPermission(
        Signature memory signature
    ) public verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(OPCode.SetDefaultPermission, encodedMessage);
        (address account, Permission perm) = abi.decode(
            encodedMessage.params,
            (address, Permission)
        );
        defaultPermissions[account] = perm;
    }

    // Function to set permissions
    function setPermission(
        Signature memory signature
    ) public verifySignature(ADMIN_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(OPCode.SetPermission, encodedMessage);
        (address account, uint256 tokenId, Permission perm) = abi.decode(
            encodedMessage.params,
            (address, uint256, Permission)
        );
        permissions[account][tokenId] = perm;
    }

    // Function to get effective permission
    function getEffectivePermission(
        address account,
        uint256 tokenId
    ) public view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }

    // Function to check read permission
    function canRead(
        address account,
        uint256 tokenId
    ) public view returns (bool) {
        return getEffectivePermission(account, tokenId) >= Permission.Read;
    }

    // Function to check write permission
    function canWrite(
        address account,
        uint256 tokenId
    ) public view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Write;
    }

    // Function to check write permission
    function isAdmin(
        address account,
        uint256 tokenId
    ) public view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Admin;
    }

    // Function to transfer NFTs
    function transferEtch(
        Signature memory signature
    ) public verifySignature(TRANSFER_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        (
            IERC1155 nft,
            address from,
            address to,
            uint256 tokenId,
            uint256 amount
        ) = abi.decode(
                encodedMessage.params,
                (IERC1155, address, address, uint256, uint256)
            );
        checkMessageValidity(OPCode.TransferEtch, encodedMessage);
        nft.safeTransferFrom(from, to, tokenId, amount, "");
    }
}
