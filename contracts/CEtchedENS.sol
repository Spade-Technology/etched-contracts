// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";

import "./forks/ERC721.sol";
import "./CNodeHandler.sol";
import "./IEtchENS.sol";

import "hardhat/console.sol";

contract EtchENS is ERC721, IEtchENS, NodeHandler {
    using Counters for Counters.Counter;

    // The total number of ENS minted
    Counters.Counter private totalSupply;

    // Mapping of ENS to its owner
    mapping(string ens => address wallet) public walletOf;

    // Mapping of ENS to the metadata
    mapping(string ens => SEtchENS metadata) public metadataOf;

    // Mapping of wallet to its ENS names
    mapping(address wallet => string[] ens) public ensOfWallet;

    string public constant extension = ".etched";

    /**
     * @notice Creates and allocates a new ENS to the specified address
     *
     * @param organisationContract The address of the Organisation contract
     */
    constructor(
        address organisationContract
    ) ERC721(".etches", "ens-ETCH") NodeHandler(organisationContract) {}

    /**
     * @notice Creates a new Etch ENS, mints it to the specified address
     *
     * @param to The address to mint the Etch ENS to
     * @param name The name of the Etch ENS
     */
    function safeMint(
        address to,
        string memory name
    ) public virtual override onlyNodes {
        require(walletOf[name] == address(0), "Etches: ENS already exists");

        checkENSValidity(name);

        totalSupply.increment();
        uint256 tokenId = totalSupply.current();

        _safeMint(to, tokenId);

        walletOf[name] = to;
        ensOfWallet[to].push(name);
        metadataOf[name] = SEtchENS({
            creator: _msgSender(),
            timestamp: block.timestamp
        });

        emit EtchENSCreated(tokenId, to, name);
    }

    /**
     * @notice Gets all the ENS names of the specified wallet
     *
     * @param wallet The address of the wallet
     */
    function getENS(
        address wallet
    ) public view override returns (string[] memory) {
        return ensOfWallet[wallet];
    }

    /**
     * @notice Gets the total number of ENS minted
     */
    function getTotalSupply() public view override returns (uint256) {
        return totalSupply.current();
    }

    function checkENSValidity(string memory str) internal pure returns (bool) {
        bytes memory b = bytes(str);
        bytes memory etched = bytes(extension);
        if (b.length > 30) revert("ENS: Name too long");
        if (b.length < etched.length) revert("ENS: Name too short");

        // Check if it ends with ".etched"
        for (uint i = 0; i < etched.length; i++) {
            if (b[b.length - etched.length + i] != etched[i]) {
                revert("ENS: Name must end with .etched");
            }
        }

        // Check the remaining part for valid characters
        for (uint i = 0; i < b.length - etched.length; i++) {
            bytes1 char = b[i];
            if (
                !(char >= 0x30 && char <= 0x39) && // 0-9
                !(char >= 0x41 && char <= 0x5A) && // A-Z
                !(char >= 0x61 && char <= 0x7A) && // a-z
                !(char == 0x5F) // _ (underscore)
            ) revert("ENS: Invalid character in ENS name");
        }

        return true;
    }
}
