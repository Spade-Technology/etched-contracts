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

    // Enum to describe the permission levels
    enum Permission {
        NoAccess,
        Read,
        Write,
        Admin
    }

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

    // Function to set default permissions for a user
    function setDefaultPermission(address account, Permission perm, bytes memory signature, uint256 blockNumber) public {
        bytes memory params = abi.encode(account, perm);
        require(verifyRoleOrSignature(DEFAULT_ADMIN_ROLE, signature, blockNumber, "setDefaultPermission", params), "Unauthorized");
        defaultPermissions[account] = perm;
    }

    // Function to set permissions
    function setPermission(address account, uint256 tokenId, Permission perm, bytes memory signature, uint256 blockNumber) public {
        bytes memory params = abi.encode(account, tokenId, perm);
        require(verifyRoleOrSignature(ADMIN_ROLE, signature, blockNumber, "setPermission", params), "Unauthorized");
        permissions[account][tokenId] = perm;
    }

    // Function to get effective permission
    function getEffectivePermission(address account, uint256 tokenId) public view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }

    // Function to check read permission
    function canRead(address account, uint256 tokenId) public view returns (bool) {
        return getEffectivePermission(account, tokenId) >= Permission.Read;
    }

    // Function to check write permission
    function canWrite(address account, uint256 tokenId) public view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Write;
    }

    // Function to check write permission
    function isAdmin(address account, uint256 tokenId) public view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Admin;
    }

    // Function to transfer NFTs
    function transferNFT(IERC1155 nft, address from, address to, uint256 tokenId, uint256 amount, bytes memory signature, uint256 blockNumber) public {
        bytes memory params = abi.encode(nft, from, to, tokenId, amount);
        require(verifyRoleOrSignature(TRANSFER_ROLE, signature, blockNumber, "transferNFT", params), "Unauthorized");
        nft.safeTransferFrom(from, to, tokenId, amount, "");
    }

    // Function to verify role or signature
    function verifyRoleOrSignature(bytes32 role, bytes memory signature, uint256 blockNumber, string memory functionSelector, bytes memory params) private view returns (bool) {
        return hasRole(role, msg.sender) || verifySignature(role, signature, blockNumber, functionSelector, params);
    }

    // Function to verify signature for role
    function verifySignature(bytes32 role, bytes memory signature, uint256 blockNumber, string memory functionSelector, bytes memory params) private view returns (bool) {
        require(block.number <= blockNumber, "Signature has expired");

        bytes32 dataHash = keccak256(abi.encodePacked(address(this), blockNumber, functionSelector, params));
        address signer = ECDSA.recover(dataHash, signature);
        return hasRole(role, signer);
    }

    // Override grantRole function
    function grantRole(bytes32 role, address account, bytes memory signature, uint256 blockNumber) public virtual {
        bytes memory params = abi.encode(role, account);
        require(verifyRoleOrSignature(DEFAULT_ADMIN_ROLE, signature, blockNumber, "grantRole", params), "AccessControl: caller is not an admin");
        _grantRole(role, account);
    }

    // Override revokeRole function
    function revokeRole(bytes32 role, address account, bytes memory signature, uint256 blockNumber) public virtual {
        bytes memory params = abi.encode(role, account);
        require(verifyRoleOrSignature(DEFAULT_ADMIN_ROLE, signature, blockNumber, "revokeRole", params), "AccessControl: caller is not an admin");
        _revokeRole(role, account);
    }
}
