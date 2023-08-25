// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
    @title Signature Verifier
    @notice This contract provides signature verification functionalities.
 */
abstract contract SignatureVerifier {

    // Struct to store signature data
    struct Signature {
        bytes encodedMessage;
        bytes32 messageHash;
        bytes signature;
        address signer;
    }

    struct EncodedMessage {
        address target;
        uint256 blockNumber;
    }

    function getMessageHash(
        bytes memory _data
    ) internal pure returns (bytes32) {
        return keccak256(_data);
    }

    function getEthSignedMessageHash(
        bytes32 _messageHash
    ) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19Ethereum Signed Message:\n32",
                    _messageHash
                )
            );
    }

    function _checkSignature(Signature memory _signature) internal view {
        require(
            getMessageHash(_signature.encodedMessage) == _signature.messageHash,
            "The message hash doesn't match the original!"
        );

        bytes32 ethSignedMessageHash = getEthSignedMessageHash(
            _signature.messageHash
        );
        address signer = ECDSA.recover(
            ethSignedMessageHash,
            _signature.signature
        );
        require(signer == _signature.signer, "Invalid signer");

        EncodedMessage memory encodedMessage = abi.decode(
            _signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(encodedMessage);

    }

    modifier verifySignature(Signature memory _signature) {
        _checkSignature(_signature);
        _;
    }

    function checkMessageValidity(
        EncodedMessage memory _encodedMessage
    ) internal view returns (bool) {
        require(
            _encodedMessage.target == address(this),
            "Target address doesn't match"
        );
        require(
            _encodedMessage.blockNumber >= block.number,
            "Message is expired"
        );
        return true;
    }
}
