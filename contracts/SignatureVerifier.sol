// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
    @title Signature Verifier
    @notice This contract provides signature verification functionalities.
 */
abstract contract SignatureVerifier is AccessControl {
    // Role constants
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Address of the paymaster
    address public PayMaster;

    constructor(address _paymaster) {
        PayMaster = _paymaster;
    }

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

    modifier verifySignature(bytes32 role, Signature memory _signature) {
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
        require(
            msg.sender == signer || msg.sender == PayMaster,
            "Invalid sender"
        );
        require(hasRole(role, signer), "Unauthorized");

        EncodedMessage memory encodedMessage = abi.decode(
            _signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(encodedMessage);

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

    function setPayMaster(
        Signature memory signature,
        address _paymaster
    ) public verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        EncodedMessage memory encodedMessage = abi.decode(
            signature.encodedMessage,
            (EncodedMessage)
        );
        checkMessageValidity(encodedMessage);
        PayMaster = _paymaster;
    }

    // Override grantRole function
    function grantRole(
        Signature memory signature,
        bytes32 role,
        address account
    ) public virtual verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        _grantRole(role, account);
    }

    // Override revokeRole function
    function revokeRole(
        Signature memory signature,
        bytes32 role,
        address account
    ) public virtual verifySignature(DEFAULT_ADMIN_ROLE, signature) {
        _revokeRole(role, account);
    }
}
