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

    constructor(
        address _owner,
        address _paymaster
    ) ERC721("Etch", "ETCH") SignatureVerifier(_paymaster) {
        transferOwnership(_owner);
    }

    function _checkOwner(address _account) internal view {
        require(Team(owner()).owner() == _account, "Caller is not the owner");
    }

    function mint(
        Signature memory signature,
        string memory IPFSCID
    ) external verifySignature(signature) returns (uint256) {
        _checkOwner(signature.signer);
        uint256 tokenId = totalEtches++;
        _safeMint(owner(), tokenId);

        // Initialize etch without messages
        etches[tokenId].IPFSCID = IPFSCID;

        etchesByOwner[owner()].push(tokenId);
        return tokenId;
    }

    function writeToEtch(
        Signature memory signature,
        uint256 tokenId,
        string memory messageIPFSCID
    ) external verifySignature(signature) {
        _requireMinted(tokenId);
        if (signature.signer != ownerOf(tokenId)) {
            require(
                Team(owner()).getEffectivePermission(
                    signature.signer,
                    tokenId
                ) >= Team.Permission.Write,
                "Caller does not have write permission"
            );
        }
        Message memory newMessage = Message(signature.signer, messageIPFSCID);
        etches[tokenId].messages.push(newMessage);
    }

    function burn(
        Signature memory signature,
        uint256 tokenId
    ) external verifySignature(signature) {
        _checkOwner(signature.signer);
        _burn(tokenId);
        delete etches[tokenId];
    }

    function transferOwnership(
        Signature memory signature,
        address newOwner
    ) public virtual verifySignature(signature) {
        _checkOwner(signature.signer);
        super.transferOwnership(newOwner);
    }

    // Function to check read permission
    function canRead(
        address account,
        uint256 tokenId
    ) external view returns (bool) {
        _requireMinted(tokenId);
        bool isOwner = account == ownerOf(tokenId);
        return
            isOwner
                ? true
                : Team(owner()).getEffectivePermission(account, tokenId) >=
                    Team.Permission.Read;
    }

    // Function to check write permission
    function canWrite(
        address account,
        uint256 tokenId
    ) external view returns (bool) {
        _requireMinted(tokenId);
        bool isOwner = account == ownerOf(tokenId);
        return
            isOwner
                ? true
                : Team(owner()).getEffectivePermission(account, tokenId) ==
                    Team.Permission.Write;
    }

    // function to transfer an Etch by owner
    function transferEtch(
        Signature memory signature,
        address to,
        uint256 tokenId
    ) external verifySignature(signature) {
        _checkOwner(signature.signer);
        _transfer(owner(), to, tokenId);
    }
}
