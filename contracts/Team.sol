// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./SignatureVerifier.sol";
import "./Etch.sol";
import "./Organization.sol";

/**
    @title Team Contract
    @notice This contract manages permissions and roles within a team of an organization.
 */
contract Team is Ownable, SignatureVerifier {

    // Enum to describe the permission levels
    enum Permission {
        NoAccess,
        Read,
        Write
    }

    Etch public etch;

    bool private isOrganizationOwned;

    // Mapping from address to token ID to permission level
    mapping(address => mapping(uint256 => Permission)) public permissions;

    // Mapping for default permissions for users
    mapping(address => Permission) public defaultPermissions;

    constructor(Signature memory signature, address _owner, address _paymaster, bool _isOrganizationOwned) SignatureVerifier(_paymaster) {
        if (!_isOrganizationOwned) {
            _checkSignature(signature);
        }
        isOrganizationOwned = _isOrganizationOwned;
        etch = new Etch(address(this), _paymaster);
        defaultPermissions[_owner] = Permission.Write;
        transferOwnership(_owner);
    }

    function delegateOwnership() internal view returns (address) {
        return isOrganizationOwned ? Organization(super.owner()).owner() : super.owner();
    }

    function owner() public view override returns (address) {
        return delegateOwnership();
    }


    function _checkOwner(address _account) internal view {
        require(_account == delegateOwnership(), "Caller is not the owner");
    }

    // Function to set default permissions for a user
    function setDefaultPermission(Signature memory signature, address account, Permission perm) external verifySignature(signature) {
        _checkOwner(signature.signer);
        defaultPermissions[account] = perm;
    }

    // Function to set permissions for a specific token ID
    function setPermission(Signature memory signature, address account, uint256 tokenId, Permission perm) external verifySignature(signature) {
        _checkOwner(signature.signer);
        permissions[account][tokenId] = perm;
    }

    // Function to get effective permission
    function getEffectivePermission(address account, uint256 tokenId) external view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }
}
