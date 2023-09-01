// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "hardhat/console.sol";

import "./ITeams.sol";

abstract contract IEtchENS is IERC721 {
    struct SEtchENS {
        address creator;
        uint256 timestamp;
    }

    function safeMint(address to, string calldata name) external virtual {}

    function getTotalSupply() external view virtual returns (uint256) {}

    function getENS(
        address wallet
    ) external view virtual returns (string[] memory) {}

    event EtchENSCreated(
        uint256 indexed tokenId,
        address indexed to,
        string indexed name
    );
}
