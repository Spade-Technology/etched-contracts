// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./SignatureVerifier.sol";

contract Etch is ERC721, Ownable, SignatureVerifier {
    uint256 public totalEtches;
    address public teamAddress;
    
    enum Permission {
        NoAccess,
        Read,
        Write
    }

    struct Message {
        address from;
        string IPFSCid;
    }
    
    struct EtchData {
        string IPFSCID;
        Message[] messages;
    }

    mapping(uint256 => EtchData) public etches;
    mapping(address => uint256[]) public etchesByOwner;
    mapping(address => mapping(uint256 => Permission)) public permissions;
    mapping(address => Permission) public defaultPermissions;

    constructor(address _owner, address _teamAddress, address _paymaster) ERC721("Etch", "ETCH") SignatureVerifier(_paymaster) {
        transferOwnership(_owner);
        teamAddress = _teamAddress;
    }

    function _checkOwnerOrTeam(address _account) internal view {
        require(owner() == _account || teamAddress == _account, "Caller is not the owner or team");
    }

    function _checkOwner(address _account) internal view {
        require(owner() == _account, "Caller is not the owner");
    }

    function setTeamAddress(Signature memory signature, address _teamAddress) verifySignature(signature) external {
        _checkOwner(_teamAddress);
        teamAddress = _teamAddress;
    }

    function mint(Signature memory signature, string memory IPFSCID) external verifySignature(signature) returns (uint256) {
        _checkOwner(signature.signer);
        uint256 tokenId = totalEtches++;
        _safeMint(owner(), tokenId);
        etches[tokenId] = EtchData(IPFSCID, new Message[](0));
        etchesByOwner[owner()].push(tokenId);
        return tokenId;
    }

    function addMessage(Signature memory signature, uint256 tokenId, string memory messageIPFSCID) external verifySignature(signature) {
        require(getEffectivePermission(signature.signer, tokenId) == Permission.Write, "Caller does not have write permission");
        require(ownerOf(tokenId) == owner(), "Token not owned by contract owner");
        Message memory newMessage = Message(signature.signer, messageIPFSCID);
        etches[tokenId].messages.push(newMessage);
    }

    function burn(Signature memory signature, uint256 tokenId) external verifySignature(signature) {
        _checkOwner(signature.signer);
        _burn(tokenId);
        delete etches[tokenId];
    }

    function getEtchesLength(address _owner) external view returns (uint256) {
        return etchesByOwner[_owner].length;
    }

    function setDefaultPermission(Signature memory signature, address account, Permission perm) external verifySignature(signature) {
        _checkOwner(signature.signer);
        defaultPermissions[account] = perm;
    }

    function setPermission(Signature memory signature, address account, uint256 tokenId, Permission perm) external verifySignature(signature) {
        _checkOwnerOrTeam(signature.signer);
        permissions[account][tokenId] = perm;
    }

    function getEffectivePermission(address account, uint256 tokenId) public view returns (Permission) {
        Permission specificPerm = permissions[account][tokenId];
        if (specificPerm != Permission.NoAccess) {
            return specificPerm;
        }
        return defaultPermissions[account];
    }

    function canRead(address account, uint256 tokenId) external view returns (bool) {
        return getEffectivePermission(account, tokenId) >= Permission.Read;
    }

    function canWrite(address account, uint256 tokenId) external view returns (bool) {
        return getEffectivePermission(account, tokenId) == Permission.Write;
    }

    function transferOwnership(Signature memory signature, address newOwner) public verifySignature(signature) virtual {
        _checkOwner(signature.signer);
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }
}
