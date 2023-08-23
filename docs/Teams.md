# Teams









## Methods

### _nodes

```solidity
function _nodes(address node) external view returns (bool isNode)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| node | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| isNode | bool | undefined |

### addNode

```solidity
function addNode(address node) external nonpayable
```

Adds a node to the contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| node | address | The address of the node to add |

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*See {IERC721-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {IERC721-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### createTeam

```solidity
function createTeam(address to) external nonpayable returns (uint256 newTeamId)
```

Sets the address of the organisations contract.



#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | The address of the organisations contract. |

#### Returns

| Name | Type | Description |
|---|---|---|
| newTeamId | uint256 | The teamId of the EtchUID |

### delegateCallsToSelf

```solidity
function delegateCallsToSelf(bytes[] _calldata) external nonpayable
```

Delegates calls to the parent contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _calldata | bytes[] | The calldata to send to the parent contract |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getNumberOfTeamsCreated

```solidity
function getNumberOfTeamsCreated() external view returns (uint256 totalAmountOfTeams)
```

Returns the number of teams created.




#### Returns

| Name | Type | Description |
|---|---|---|
| totalAmountOfTeams | uint256 | The total number of teams created. |

### getParent

```solidity
function getParent() external view returns (address)
```

Returns the address of the parent contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### hasPermission

```solidity
function hasPermission(uint256 teamId, address user, enum ITeams.EPermissions permission) external view returns (bool _hasPermission)
```

Returns an indication of whether the user has the permission for the team.



#### Parameters

| Name | Type | Description |
|---|---|---|
| teamId | uint256 | The teamId of the EtchUID |
| user | address | The user to check the permission for |
| permission | enum ITeams.EPermissions | The permission to check, See EPermissions for more details |

#### Returns

| Name | Type | Description |
|---|---|---|
| _hasPermission | bool | Whether the user has the permission for the team. |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*See {IERC721-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isNode

```solidity
function isNode(address node) external view returns (bool)
```

Returns an indication of whether the address is a node



#### Parameters

| Name | Type | Description |
|---|---|---|
| node | address | The address to check |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | Whether the address is a node |

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) external nonpayable returns (bytes4)
```

Always returns `IERC721Receiver.onERC721Received.selector`.

*We are not implementing any logic here, but we need to implement this function to be ERC721 compliant.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | uint256 | undefined |
| _3 | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### organisationOf

```solidity
function organisationOf(uint256 team) external view returns (uint256 organisation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| team | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| organisation | uint256 | undefined |

### organisations

```solidity
function organisations() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*See {IERC721-ownerOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### permissionsOfTeam

```solidity
function permissionsOfTeam(uint256 team, address user) external view returns (enum ITeams.EPermissions permission)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| team | uint256 | undefined |
| user | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| permission | enum ITeams.EPermissions | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setPermission

```solidity
function setPermission(uint256 teamId, address user, enum ITeams.EPermissions permission) external nonpayable
```

Sets the permission of a user for a team.

*Only the owner of the team can set permissions. Let it be an organisation, or a user.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| teamId | uint256 | Set the permission of a user for a team |
| user | address | The user to set the permission for |
| permission | enum ITeams.EPermissions | The permission to set, See EPermissions for more details |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```



*See {IERC721Metadata-tokenURI}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### transferToOrganisation

```solidity
function transferToOrganisation(uint256 teamId, uint256 orgId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| teamId | uint256 | undefined |
| orgId | uint256 | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```



*Emitted when `owner` enables `approved` to manage the `tokenId` token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```



*Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```



*Emitted when `tokenId` token is transferred from `from` to `to`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



