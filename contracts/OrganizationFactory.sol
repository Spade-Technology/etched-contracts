// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SignatureVerifier.sol";
import "./Organization.sol";

/**
    @title Organization Factory Contract
    @notice This contract deploys and manages Organization contracts.
 */
contract OrganizationFactory is SignatureVerifier{
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Stores deployed Organization contracts
    address[] public organizations;

    // Event to log the creation of an Organization contract
    event OrganizationCreated(address indexed creator, address organization);

    struct EncodedMessage{
        address target;
        uint256 blockNumber;
        OPCode opCode;
        bytes params;
    }

    enum OPCode {
        GrantRole,
        RevokeRole,
        CreateOrganization
    }

    /**
       @notice Initializes the Organization Factory contract.
    */
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }


    function checkMessageValidity(OPCode _opCode, EncodedMessage memory _encodedMessage) internal view returns (bool){
        // (address _target, uint256 _blockNumber, string _functionName, ) = abi.decode(_encodedMessage.params, (address, uint256, string, bytes));
        require(_encodedMessage.target == address(this), "Target address doesn't match");
        require(_encodedMessage.blockNumber >= block.number, "Messade is expired");
        require(_encodedMessage.opCode == _opCode, "Function name doesn't match");
        return true;
    }

    // Override grantRole function
    function grantRole(Signature memory signature) public verifySignature(DEFAULT_ADMIN_ROLE, signature) virtual {
        EncodedMessage memory encodedMessage = abi.decode(signature.encodedMessage, (EncodedMessage));
        checkMessageValidity(OPCode.GrantRole, encodedMessage);
        (bytes32 role, address account) = abi.decode(encodedMessage.params, (bytes32, address));
        _grantRole(role, account);
    }

    // Override revokeRole function
    function revokeRole(Signature memory signature) public verifySignature(DEFAULT_ADMIN_ROLE, signature) virtual {
        EncodedMessage memory encodedMessage = abi.decode(signature.encodedMessage, (EncodedMessage));
        checkMessageValidity(OPCode.RevokeRole, encodedMessage);
        (bytes32 role, address account) = abi.decode(encodedMessage.params, (bytes32, address));
        _revokeRole(role, account);
    }

    // Function to deploy a new Organization contract
    function createOrganization(Signature memory signature) public verifySignature(ADMIN_ROLE, signature) returns (address) {
        EncodedMessage memory encodedMessage = abi.decode(signature.encodedMessage, (EncodedMessage));
        checkMessageValidity(OPCode.CreateOrganization, encodedMessage);
        (address _admin) = abi.decode(encodedMessage.params, (address));
        Organization org = new Organization(_admin);
        organizations.push(address(org));
        emit OrganizationCreated(msg.sender, address(org));
        return address(org);
    }

    // Function to get the total number of deployed Organization contracts
    function getOrganizationCount() public view returns (uint256) {
        return organizations.length;
    }

    // Function to get a specific Organization contract address
    function getOrganization(uint256 index) public view returns (address) {
        require(index < organizations.length, "Index out of bounds");
        return organizations[index];
    }
}