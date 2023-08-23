// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract NodeHandler is Ownable {
    address private parent;

    mapping(address node => bool isNode) public _nodes;

    constructor(address _parent) {
        parent = _parent;
    }

    /**
     * @notice Returns the address of the parent contract
     */
    function getParent() public view returns (address) {
        return parent;
    }

    /**
     * @notice Returns an indication of whether the address is a node
     *
     * @param node The address to check
     *
     * @return Whether the address is a node
     */
    function isNode(address node) public view returns (bool) {
        if (parent == address(0)) return NodeHandler(parent).isNode(node);
        else return _nodes[msg.sender];
    }

    /**
     * @notice Modifier that only allows nodes to call the function
     */
    modifier onlyNodes() {
        require(isNode(msg.sender), "NODEHANDLER: PERMISSION_DENIED");
        _;
    }

    /**
     * @notice Delegates calls to the parent contract
     *
     * @param _calldata The calldata to send to the parent contract
     */
    function delegateCallsToSelf(bytes[] memory _calldata) public onlyNodes {
        for (uint256 i = 0; i < _calldata.length; i++) {
            (bool success, bytes memory returnData) = address(this)
                .delegatecall(_calldata[i]);
            require(success, string(returnData));
        }
    }

    /**
     * @notice Adds a node to the contract
     *
     * @param node The address of the node to add
     */
    function addNode(address node) public onlyOwner {
        _nodes[node] = true;
    }
}
