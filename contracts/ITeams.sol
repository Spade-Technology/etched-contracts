// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

abstract contract ITeams is IERC721 {
    enum EPermissions {
        None, // Id 0 is reserved for None, as it is the default value
        Read,
        ReadWrite
    }

    function hasPermission(
        uint256 teamId,
        address user,
        EPermissions permission
    ) public view virtual returns (bool);

    function getNumberOfTeamsCreated() public view virtual returns (uint256);
}
