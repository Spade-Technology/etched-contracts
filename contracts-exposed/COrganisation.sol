// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0;

import "../contracts/COrganisation.sol";
import "../contracts/CNodeHandler.sol";
import "../contracts/CSignatureVerifier.sol";
import "../contracts/forks/Ownable.sol";
import "../contracts/IOrganisation.sol";
import "../@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../contracts/forks/ERC721.sol";
import "../@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "../@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "../@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "../contracts/forks/Context.sol";

contract $Organisations is Organisations {
    bytes32 public constant __hh_exposed_bytecode_marker = "hardhat-exposed";

    constructor() payable {
    }

    function $_owners(uint256 arg0) external view returns (address) {
        return _owners[arg0];
    }

    function $_ownerOf(uint256 orgId) external view returns (address ret0) {
        (ret0) = super._ownerOf(orgId);
    }

    function $getMessageHash(bytes calldata _data) external pure returns (bytes32 ret0) {
        (ret0) = super.getMessageHash(_data);
    }

    function $getEthSignedMessageHash(bytes32 _messageHash) external pure returns (bytes32 ret0) {
        (ret0) = super.getEthSignedMessageHash(_messageHash);
    }

    function $checkMessageValidity(EncodedMessage calldata _encodedMessage) external view returns (bool ret0) {
        (ret0) = super.checkMessageValidity(_encodedMessage);
    }

    function $_checkOwner() external view {
        super._checkOwner();
    }

    function $_transferOwnership(address newOwner) external {
        super._transferOwnership(newOwner);
    }

    function $_baseURI() external view returns (string memory ret0) {
        (ret0) = super._baseURI();
    }

    function $_safeTransfer(address from,address to,uint256 tokenId) external {
        super._safeTransfer(from,to,tokenId);
    }

    function $_safeTransfer(address from,address to,uint256 tokenId,bytes calldata data) external {
        super._safeTransfer(from,to,tokenId,data);
    }

    function $_exists(uint256 tokenId) external view returns (bool ret0) {
        (ret0) = super._exists(tokenId);
    }

    function $_isApprovedOrOwner(address spender,uint256 tokenId) external view returns (bool ret0) {
        (ret0) = super._isApprovedOrOwner(spender,tokenId);
    }

    function $_safeMint(address to,uint256 tokenId) external {
        super._safeMint(to,tokenId);
    }

    function $_safeMint(address to,uint256 tokenId,bytes calldata data) external {
        super._safeMint(to,tokenId,data);
    }

    function $_mint(address to,uint256 tokenId) external {
        super._mint(to,tokenId);
    }

    function $_burn(uint256 tokenId) external {
        super._burn(tokenId);
    }

    function $_transfer(address from,address to,uint256 tokenId) external {
        super._transfer(from,to,tokenId);
    }

    function $_approve(address to,uint256 tokenId) external {
        super._approve(to,tokenId);
    }

    function $_setApprovalForAll(address owner,address operator,bool approved) external {
        super._setApprovalForAll(owner,operator,approved);
    }

    function $_requireMinted(uint256 tokenId) external view {
        super._requireMinted(tokenId);
    }

    function $_beforeTokenTransfer(address from,address to,uint256 firstTokenId,uint256 batchSize) external {
        super._beforeTokenTransfer(from,to,firstTokenId,batchSize);
    }

    function $_afterTokenTransfer(address from,address to,uint256 firstTokenId,uint256 batchSize) external {
        super._afterTokenTransfer(from,to,firstTokenId,batchSize);
    }

    function $__unsafe_increaseBalance(address account,uint256 amount) external {
        super.__unsafe_increaseBalance(account,amount);
    }

    function $_msgSender() external view returns (address ret0) {
        (ret0) = super._msgSender();
    }

    function $_msgData() external view returns (bytes memory ret0) {
        (ret0) = super._msgData();
    }

    receive() external payable {}
}
