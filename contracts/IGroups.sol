// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IGroups is IERC721 {
    struct userPermissions {
        address user;
        uint256 permissions; //READ/WRITE/ADMIN (ex: 0b110 or 0b001)
    }

    event GroupCreated(uint256 indexed groupId, address indexed to);
    event GroupRenamed(uint256 indexed groupId, string newName);
    event GroupMoved(uint256 indexed groupId, uint256 indexed parentId);
    event PermissionsUpdated(
        uint256 indexed groupId,
        address indexed account,
        uint256 newPermissions
    );

    function createRootGroup(
        // address ownedBy, //Not going to pass a group
        string memory GroupName,
        IGroups.userPermissions[] memory users
    ) external returns (uint256 newGroupId);

    function createSubGroup(
        // address ownedBy, //Not going to pass a group
        string memory GroupName,
        uint256 parentId,
        IGroups.userPermissions[] memory users
    ) external returns (uint256 newGroupId);

    function renameGroup(uint256 groupId, string memory newName) external;

    function hasPermissions(
        address user,
        uint256 desiredPermissions
    ) external view returns (bool);

    function setPermissions(
        uint256 groupId,
        address user,
        uint256 permissions
    ) external;

    function setPermissionBulk(
        uint256 groupId,
        userPermissions[] memory users
    ) external;

    function getNumberOfGroupsCreated() external view returns (uint256);
}
