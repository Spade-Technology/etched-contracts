// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.19;

// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

// import "./forks/ERC721.sol";
// import "./IGroups.sol";

// contract Groups is ERC721, IGroups {
//     using Counters for Counters.Counter;
//     Counters.Counter private totalSupply;

//     struct Group {
//         uint256 parentId;
//         string name;
//         mapping(uint256 => uint256[]) children;
//     }

//     Group[] storage groups;

//     constructor() ERC721("Group", "GRP") {}

//     function createRootGroup(string memory name) public returns (uint256) {
//         totalSupply.increment();
//         uint256 newGroupId = totalSupply.current();

//         groups[newGroupId].parentId = 0;
//         groups[newGroupId].name = name;

//         _safeMint(msg.sender, newGroupId);

//         return newGroupId;
//     }

//     function createSubGroup(
//         uint256 parentId,
//         string memory name
//     ) public returns (uint256) {
//         require(_exists(parentId), "Parent Group does not exist");

//         totalSupply.increment();
//         uint256 newGroupId = totalSupply.current();

//         groups[newGroupId].parentId = parentId;
//         groups[newGroupId].name = name;

//         _safeMint(msg.sender, newGroupId);

//         return newGroupId;
//     }

//     function getGroup(
//         uint256 groupId
//     ) public view returns (uint256, string memory) {
//         require(_exists(groupId), "Group does not exist");

//         Group storage group = groups[groupId];
//         return (group.parentId, group.name);
//     }

//     function renameGroup(
//         uint256 groupId,
//         uint256 newName
//     ) external returns (bool) {
//         return true;
//     }

//     function hasPermissions(
//         address user,
//         uint256 desiredPermissions
//     ) external view returns (bool) {
//         return true;
//     }

//     function setPermissions(uint256 user, uint256 permissions) external {}

//     function setPermissionBulk(
//         uint256 groupId,
//         uint256[] calldata users,
//         uint256[] calldata permissions
//     ) external {}

//     function move(uint groupId, uint newParentId) public {
//         Group storage group = groups[groupId];
//         require(groupId != 0, "Group does not exist");

//         Group storage newParent = groups[newParentId];
//         require(newParentId != 0, "New parent Group does not exist");

//         require(
//             !isDescendant(groupId, newParentId),
//             "New parent is a descendant"
//         );

//         // Remove from old parent
//         delete groups[group.parentId].children[groupId];

//         // Add to new parent
//         group.parentId = newParentId;
//         newParent.children[groupId] = group;
//     }

//     function archive(uint groupId) public {
//         Group storage group = groups[groupId];
//         require(group.id != 0, "Group does not exist");

//         // Remove from parent
//         delete groups[group.parentId].children[groupId];

//         // Delete Group
//         delete groups[groupId];
//     }

//     function isDescendant(
//         uint ancestor,
//         uint descendant
//     ) private view returns (bool) {
//         Group storage current = groups[descendant];

//         while (current.id != 0) {
//             if (current.id == ancestor) {
//                 return true;
//             }
//             current = groups[current.parentId];
//         }

//         return false;
//     }

//     function getNumberOfGroupsCreated() external view returns (uint256) {
//         return totalSupply;
//     }
// }
