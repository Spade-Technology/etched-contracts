// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0;

import "../../contracts/forks/ERC721.sol";
import "../../@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "../../@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../../@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "../../@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "../../contracts/forks/Context.sol";

contract $ERC721 is ERC721 {
    bytes32 public constant __hh_exposed_bytecode_marker = "hardhat-exposed";

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) payable {
    }

    function $_owners(uint256 arg0) external view returns (address) {
        return _owners[arg0];
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

    function $_ownerOf(uint256 tokenId) external view returns (address ret0) {
        (ret0) = super._ownerOf(tokenId);
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
