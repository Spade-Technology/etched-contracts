// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
    @title Signature Verifier
    @notice This contract provides signature verification functionalities.
 */
abstract contract SignatureVerifier is AccessControl {
    // Struct to store signature data
    struct Signature {
        bytes encodedMessage;
        bytes32 messageHash;
        bytes signature;
        address signer;
        uint256 nonce;
    }

    struct EncodedMessage {
        address target;
        uint256 blockNumber;
        uint8 opCode;
        bytes params;
    }

    // Stores used signatures
    mapping(bytes => bool) internal usedSignatures;

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

    modifier verifySignature(bytes32 role, Signature memory _signature) {
        require(
            !usedSignatures[_signature.signature],
            "Signature already used"
        );

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
        require(hasRole(role, signer), "Unauthorized");

        _;

        usedSignatures[_signature.signature] = true;
    }

    function checkMessageValidity(
        uint8 _opCode,
        EncodedMessage memory _encodedMessage
    ) internal view returns (bool) {
        // (address _target, uint256 _blockNumber, string _functionName, ) = abi.decode(_encodedMessage.params, (address, uint256, string, bytes));
        require(
            _encodedMessage.target == address(this),
            "Target address doesn't match"
        );
        require(
            _encodedMessage.blockNumber >= block.number,
            "Message is expired"
        );
        require(
            _encodedMessage.opCode == _opCode,
            "Function name doesn't match"
        );
        return true;
    }
}
