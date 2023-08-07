// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
    @title Signature Verifier
    @notice This contract provides signature verification functionalities.
 */
contract SignatureVerifier is AccessControl {
    // Struct to store signature data
    struct Signature {
        bytes encodedMessage;
        bytes32 messageHash;
        bytes signature;
        address signer;
    }

    // Stores used signatures
    mapping(bytes => bool) internal usedSignatures;

    bytes32 public constant SIGNER_ROLE = keccak256("SIGNER_ROLE");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
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
}
