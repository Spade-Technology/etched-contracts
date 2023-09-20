// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0;

import "../contracts/CNodeHandler.sol";
import "../contracts/CSignatureVerifier.sol";
import "../contracts/forks/Ownable.sol";
import "../contracts/forks/Context.sol";

contract $NodeHandler is NodeHandler {
    bytes32 public constant __hh_exposed_bytecode_marker = "hardhat-exposed";

    constructor(address _parent) NodeHandler(_parent) payable {
    }

    function $getMessageHash(bytes calldata _data) external pure returns (bytes32 ret0) {
        (ret0) = super.getMessageHash(_data);
    }

    function $getEthSignedMessageHash(bytes32 _messageHash) external pure returns (bytes32 ret0) {
        (ret0) = super.getEthSignedMessageHash(_messageHash);
    }

    function $checkMessageValidity(EncodedMessage calldata _encodedMessage) external view returns (bool ret0) {
        (ret0) = super.checkMessageValidity(_encodedMessage);
    }

    function $_checkOwner() external view {
        super._checkOwner();
    }

    function $_transferOwnership(address newOwner) external {
        super._transferOwnership(newOwner);
    }

    function $_msgSender() external view returns (address ret0) {
        (ret0) = super._msgSender();
    }

    function $_msgData() external view returns (bytes memory ret0) {
        (ret0) = super._msgData();
    }

    receive() external payable {}
}
