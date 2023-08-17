// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./forks/ERC721.sol";

contract Organisation is ERC721 {
    address public teams;

    constructor() ERC721("Etch Organisation", "o-ETCH") {}

    function ownerOf(
        uint256 tokenId
    ) public view virtual override returns (address) {
        address owner = _ownerOf(tokenId);
        try this.ownerOf(tokenId) returns (address _owner) {
            return _owner;
        } catch {
            return owner;
        }
    }
}
