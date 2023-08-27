// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "hardhat/console.sol";

import "./ITeams.sol";

abstract contract IEtches is IERC721 {
    struct SComments {
        string commentIpfsCid;
        uint256 timestamp;
    }

    struct SEtch {
        address creator;
        string documentName;
        // IPFS CID of the Etch's file
        string ipfsCid;
        uint256 commentsCount;
        uint256 timestamp;
    }

    event EtchCreated(uint256 indexed tokenId, address indexed to, string ipfsCid, string documentName);
    event EtchTransferedToTeam(uint256 indexed tokenId, address indexed from, uint256 indexed to);
    event InvididualPermissionsUpdated(uint256 indexed tokenId, address indexed account, ITeams.EPermissions newPermission);
    event CommentAdded(uint256 indexed tokenId, uint256 indexed commentId, SComments comment);

    function setIndividualPermissions(uint256 tokenId, address account, ITeams.EPermissions permission) external virtual {}

    // User Related Functions
    function safeMint(address to, string calldata documentName, string calldata ipfsCid) external virtual {}

    function commentOnEtch(uint256 tokenId, string memory commentIpfsCid) external virtual {}

    function transferToTeam(uint256 tokenId, uint256 teamId) external virtual {}

    // Team Related Functions
    function safeMintForTeam(uint256 teamId, string calldata documentName, string calldata ipfsCid) external virtual {}

    function hasReadPermission(address account, uint256 tokenId) public view virtual returns (bool) {}

    function hasWritePermission(address account, uint256 tokenId) public view virtual returns (bool) {}

    function getTotalSupply() external view virtual returns (uint256) {}
}
