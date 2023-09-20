# NodeHandler









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

### delegateCallsToSelf

```solidity
function delegateCallsToSelf(bytes[] _calldata) external nonpayable
```

Delegates calls to the parent contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _calldata | bytes[] | The calldata to send to the parent contract |

### getParent

```solidity
function getParent() external view returns (address)
```

Returns the address of the parent contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

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

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



