// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./SignatureVerifier.sol";
import "./Team.sol";

contract Etch is Ownable, ERC721, SignatureVerifier {
    uint256 public totalEtches;

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


    constructor(address _owner, address _paymaster) ERC721("Etch", "ETCH") SignatureVerifier(_paymaster) {
        transferOwnership(_owner);
    }

    function _checkOwner(address _account) internal view {
        require(Team(owner).owner() == _account, "Caller is not the owner");
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
        require(Team(owner).getEffectivePermission(signature.signer, tokenId) == Team.Permission.Write, "Caller does not have write permission");
        require(ownerOf(tokenId) == owner(), "Token not owned by contract owner");
        Message memory newMessage = Message(signature.signer, messageIPFSCID);
        etches[tokenId].messages.push(newMessage);
    }

    function burn(Signature memory signature, uint256 tokenId) external verifySignature(signature) {
        _checkOwner(signature.signer);
        _burn(tokenId);
        delete etches[tokenId];
    }

    function transferOwnership(Signature memory signature, address newOwner) public verifySignature(signature) virtual override {
        _checkOwner(signature.signer);
        super.transferOwnership(newOwner);
    }
}
