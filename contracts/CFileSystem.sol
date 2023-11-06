// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";

import "./forks/ERC721.sol";
import "./CNodeHandler.sol";

contract CFileSystem is ERC721 {
    using Counters for Counters.Counter;

    bytes32[] arr;

    constructor() ERC721("Etches", "Etches") {
        for (uint256 i = 0; i < 1024; i++) arr[i] = bytes32(0x0);
    }

    uint maxDepth = 10;

    // The total number of Entities minted
    Counters.Counter private totalSupply;

    // File system
    enum ImmutableType {
        File,
        Folder,
        SymLink
    }

    enum FilePermission {
        None,
        DeniedAccess, // For override
        Read,
        Write,
        AllAccess
    }
    enum SharePermission {
        None,
        ShareRead,
        ShareWrite,
        Admin
    }

    struct Permission {
        bool entityIsAddress;
        bytes32 entity;
        FilePermission filePermission;
        SharePermission sharePermission;
    }

    struct Entity {
        ImmutableType immutable_type;
        uint256 immutable_721_id;
        bool parentIsTypeAddress; // should the parent be case to address() or uint256()
        bytes32 parent;
        bytes32[] children;
        Permission[] perms;
    }

    mapping(bytes32 => Entity) public entities;

    function createFile(
        string memory title, // Required
        string memory description, // Optional
        string memory IPFS // Required (IPFS hash to the encrypted file)
    ) public {
        // Implementation goes here
    }

    function bytes32ToAddress(bytes32 b) public pure returns (address) {
        return address(uint160(uint256(b)));
    }

    function addressToBytes32(address a) public pure returns (bytes32) {
        return bytes32(uint256(uint160(a)));
    }

    function ownerOf(bytes32 _entity) public view returns (address) {
        Entity memory entity = entities[_entity];
        if (!entity.parentIsTypeAddress) return ownerOf(entity.parent);
        else return bytes32ToAddress(entity.parent);
    }

    function _hasPermission(
        bytes32 _entity,
        address account,
        FilePermission permission,
        uint256 depth
    ) internal view returns (bool, uint256) {
        uint256 depth = depth;

        // Check if the owner of the entity is account
        if (ownerOf(_entity) == account) return (true, depth);

        Entity memory entity = entities[_entity];

        while (!entity.parentIsTypeAddress) {
            // check for DENY perm, if we got one that matched the requested perm, fuck off
        }



        // check all items of depth X, keep going till we find something or that we went through 1024 references



        return (true,1);

    }

    // Owner                Owner                   Owner
    //   |                    |                       |
    // Folder -> U    U <-  Folder -> U       U <-  Folder -> U (Write)
    //   |                    |                       |
    // Folder -> U     U <- Folder --------------- Symlink
    //   |                    |
    // SymLink ------------- File
}