// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface ITeams is IERC721 {
    enum EPermissions {
        None, // Id 0 is reserved for None, as it is the default value
        Read,
        ReadWrite
    }

    event TeamCreated(uint256 indexed teamId, address indexed to);
    event TransferToOrganisation(uint256 indexed teamId, uint256 indexed orgId);
    event PermissionsUpdated(uint256 indexed teamId, address indexed account, EPermissions newPermission);

    function createTeam(address to) external returns (uint256 newTeamId);

    function hasPermission(uint256 teamId, address user, EPermissions permission) external view returns (bool);

    function setPermission(uint256 teamId, address user, EPermissions permission) external;

    function transferToOrganisation(uint256 teamId, uint256 orgId) external;

    function getNumberOfTeamsCreated() external view returns (uint256);
}
