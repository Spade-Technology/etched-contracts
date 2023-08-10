// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Organization.sol";

contract Etch is ERC721URIStorage {
    uint256 public totalEtches;
    Organization public organization;

    constructor(address organizationAddress) ERC721("Etch", "ETCH") {
        organization = Organization(organizationAddress);
    }

    // Ensure that only the organization can perform certain actions
    modifier onlyOrganization() {
        require(msg.sender == address(organization), "Not authorized");
        _;
    }

    // Minting a new token
    function mint(
        string memory tokenURI
    ) external onlyOrganization returns (uint256) {
        uint256 tokenId = totalEtches++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return tokenId;
    }

    // Changing the token URI
    function setTokenURI(
        uint256 tokenId,
        string memory tokenURI
    ) external onlyOrganization {
        _setTokenURI(tokenId, tokenURI);
    }

    function burn(uint256 tokenId) external onlyOrganization {
        _burn(tokenId);
    }

    // Overriding transferFrom to check permissions
    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        if (ownerOf(tokenId) == address(organization)) {
            require(
                organization.verifyOwnershipofEtch(from, tokenId),
                "Transfer not authorized"
            );
        }
        super.transferFrom(from, to, tokenId);
    }
}
