# Etches









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

### commentOnEtch

```solidity
function commentOnEtch(uint256 tokenId, string commentIpfsCid) external nonpayable
```

Comments on an Etch (Ex: Signature, Approval, etc.)

*This function can only be called by a user with read permission for the Etch*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | The Etch&#39;s ID to comment on |
| commentIpfsCid | string | The IPFS CID of the comment&#39;s document |

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

### getParent

```solidity
function getParent() external view returns (address)
```

Returns the address of the parent contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### hasReadPermission

```solidity
function hasReadPermission(address account, uint256 tokenId) external view returns (bool)
```

Checks if the account has read permission for the Etch



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The account to check for read permission |
| tokenId | uint256 | The Etch&#39;s ID to check for read permission |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | bool True if the account has read permission for the Etch |

### hasWritePermission

```solidity
function hasWritePermission(address account, uint256 tokenId) external view returns (bool)
```

Checks if the account has write permission for the Etch



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | The account to check for write permission |
| tokenId | uint256 | The Etch&#39;s ID to check for write permission |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | bool True if the account has write permission for the Etch |

### individualPermissionsOf

```solidity
function individualPermissionsOf(uint256 etch, address user) external view returns (enum ITeams.EPermissions permission)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| etch | uint256 | undefined |
| user | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| permission | enum ITeams.EPermissions | undefined |

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

### metadataOf

```solidity
function metadataOf(uint256 etch) external view returns (address creator, string documentName, string ipfsCid, uint256 commentsCount, uint256 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| etch | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| creator | address | undefined |
| documentName | string | undefined |
| ipfsCid | string | undefined |
| commentsCount | uint256 | undefined |
| timestamp | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

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

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### safeMint

```solidity
function safeMint(address to, string documentName, string ipfsCid) external nonpayable
```

Creates a new Etch, mints it to the specified address



#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | The address to mint the Etch to |
| documentName | string | undefined |
| ipfsCid | string | undefined |

### safeMintForTeam

```solidity
function safeMintForTeam(uint256 teamId, string documentName, string ipfsCid) external nonpayable
```

Mints an Etch for the specified team

*This function can only be called by a user with read/write permission for the team*

#### Parameters

| Name | Type | Description |
|---|---|---|
| teamId | uint256 | The team to mint the Etch for, will revert if the team does not exist |
| documentName | string | undefined |
| ipfsCid | string | undefined |

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

### setIndividualPermissions

```solidity
function setIndividualPermissions(uint256 tokenId, address account, enum ITeams.EPermissions permission) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |
| account | address | undefined |
| permission | enum ITeams.EPermissions | undefined |

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

### teamOf

```solidity
function teamOf(uint256 etch) external view returns (uint256 team)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| etch | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| team | uint256 | undefined |

### teams

```solidity
function teams() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### transferToTeam

```solidity
function transferToTeam(uint256 tokenId, uint256 teamId) external nonpayable
```

Transfers an Etch to the specified team

*This function can only be called by a user with ownership of the Etch*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | The Etch&#39;s ID to transfer |
| teamId | uint256 | The team to transfer the Etch to, will revert if the team does not exist |



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

### EtchCreated

```solidity
event EtchCreated(uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |

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



