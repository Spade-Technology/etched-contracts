// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./SignatureVerifier.sol";
import "./Etches.sol";
import "./Organization.sol";

/**
    @title Team Contract
    @notice This contract manages permissions and roles within a team of an organization.
 */
contract Team is Ownable, SignatureVerifier, IERC721Receiver {
    // Enum to describe the permission levels
    enum Permission {
        NoAccess,
        Read,
        Write
    }

    Etches public etch;

    bool public isOrganizationOwned;

    // Mapping from address to token ID to permission level
    mapping(address => mapping(uint256 => Permission)) public permissions;

    // Mapping for default permissions for users
    mapping(address => Permission) public defaultPermissions;

    constructor(
        address _owner,
        address _paymaster,
        bool _isOrganizationOwned
    ) SignatureVerifier(_paymaster) {
        isOrganizationOwned = _isOrganizationOwned;
        etch = new Etches(address(this), _paymaster);
        defaultPermissions[_owner] = Permission.Write;
        _transferOwnership(_owner);
    }

    function delegateOwnership() internal view returns (address) {
        return isOrganizationOwned ? Organization(owner()).owner() : owner();
    }

    function _checkOwner(address _account) internal view {
        require(_account == delegateOwnership(), "Caller is not the owner");
    }

    // Function to set default permissions for a user
    function setDefaultPermission(
        Signature memory signature,
        address account,
        Permission perm
    ) external verifySignature(signature) {
        _checkOwner(signature.signer);
        defaultPermissions[account] = perm;
    }

    // Function to set permissions for a specific token ID
    function setPermission(
        Signature memory signature,
        address account,
        uint256 tokenId,
        Permission perm
    ) external verifySignature(signature) {
        _checkOwner(signature.signer);
        permissions[account][tokenId] = perm;
    }

    // Function to get effective permission
    function getEffectivePermission(
        address account,
        uint256 tokenId
    ) external view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        // Here, you can add any custom logic you want to execute when your contract receives an ERC721 token.
        // For now, we're just returning the function selector to indicate the transfer was accepted.
        return this.onERC721Received.selector;
    }
}
