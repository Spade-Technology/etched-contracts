// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SignatureVerifier.sol";
import "./Organization.sol";

/**
    @title Organization Factory Contract
    @notice This contract deploys and manages Organization contracts.
 */
contract OrganizationFactory is SignatureVerifier {
    // Stores deployed Organization contracts
    address[] public organizations;

    // Event to log the creation of an Organization contract
    event OrganizationCreated(
        address indexed creator,
        address indexed organization
    );

    /**
       @notice Initializes the Organization Factory contract.
    */
    constructor(address _paymaster) SignatureVerifier(_paymaster) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    // Function to deploy a new Organization contract
    function createOrganization(
        Signature memory signature,
        address _admin
    ) public verifySignature(ADMIN_ROLE, signature) returns (address) {
        Organization org = new Organization(PayMaster, _admin);
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
