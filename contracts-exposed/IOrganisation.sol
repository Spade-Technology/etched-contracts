// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0;

import "../contracts/IOrganisation.sol";
import "../@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../@openzeppelin/contracts/utils/introspection/IERC165.sol";

abstract contract $IOrganisation is IOrganisation {
    bytes32 public constant __hh_exposed_bytecode_marker = "hardhat-exposed";

    constructor() payable {
    }

    receive() external payable {}
}
