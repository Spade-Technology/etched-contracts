// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SignatureVerifier.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./Etch.sol";

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

    Etch public etchContract;

    // Mapping from address to token ID to permission level
    mapping(address => mapping(uint256 => Permission)) public permissions;

    // Mapping for default permissions for users
    mapping(address => Permission) public defaultPermissions;

    constructor(address _owner, address _paymaster) SignatureVerifier(_paymaster) {
        transferOwnership(_owner);
        etchContract = new Etch(address(this), _paymaster);
    }

    function _checkOwner(address _account) internal view {
        // require(Team(owner).owner() == _account, "Caller is not the owner");
        require(owner() == _account, "Caller is not the owner");
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
    function getEffectivePermission(address account, uint256 tokenId) public view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }

    // Function to check read permission
    function canRead(address account, uint256 tokenId) external view returns (bool) {
        return getEffectivePermission(account, tokenId) >= Permission.Read;
    }

    // Function to check write permission
    function canWrite(address account, uint256 tokenId) external view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Write;
    }

    // function to transfer an ERC721 token
    function transferEtch(Signature memory signature, address _to, address _etchAddress, uint256 _etchId) external {
        _checkOwner(signature.signer);
        IERC721(_etchAddress).safeTransferFrom(address(this), _to, _etchId);
    }
}
