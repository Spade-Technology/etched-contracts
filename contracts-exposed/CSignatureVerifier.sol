// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0;

import "../contracts/CSignatureVerifier.sol";

contract $SignatureVerifier is SignatureVerifier {
    bytes32 public constant __hh_exposed_bytecode_marker = "hardhat-exposed";

    constructor() payable {
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

    receive() external payable {}
}
