// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./Organization.sol";

/**
    @title Organization Factory Contract
    @notice This contract deploys and manages Organization contracts.
 */
contract OrganizationFactory is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Stores deployed Organization contracts
    address[] public organizations;

    // Event to log the creation of an Organization contract
    event OrganizationCreated(address indexed creator, address organization);

    /**
        @notice Initializes the Organization Factory contract.
     */
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    // Function to deploy a new Organization contract
    function createOrganization(address _admin, bytes memory signature, uint256 blockNumber) public onlyRole(ADMIN_ROLE) returns (address) {
        bytes memory params = abi.encode(_admin);
        require(verifyRoleOrSignature(ADMIN_ROLE, signature, blockNumber, "createOrganization", params), "Unauthorized");
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

    // Function to verify role or signature
    function verifyRoleOrSignature(bytes32 role, bytes memory signature, uint256 blockNumber, string memory functionSelector, bytes memory params) private view returns (bool) {
        return hasRole(role, msg.sender) || verifySignature(role, signature, blockNumber, functionSelector, params);
    }

    // Function to verify signature for role
    function verifySignature(bytes32 role, bytes memory signature, uint256 blockNumber, string memory functionSelector, bytes memory params) private view returns (bool) {
        require(block.number <= blockNumber, "Signature has expired");

        bytes32 dataHash = keccak256(abi.encodePacked(address(this), blockNumber, functionSelector, params));
        address signer = ECDSA.recover(dataHash, signature);
        return hasRole(role, signer);
    }

    // Override grantRole function
    function grantRole(bytes32 role, address account, bytes memory signature, uint256 blockNumber) public virtual {
        bytes memory params = abi.encode(role, account);
        require(verifyRoleOrSignature(DEFAULT_ADMIN_ROLE, signature, blockNumber, "grantRole", params), "AccessControl: caller is not an admin");
        _grantRole(role, account);
    }

    // Override revokeRole function
    function revokeRole(bytes32 role, address account, bytes memory signature, uint256 blockNumber) public virtual {
        bytes memory params = abi.encode(role, account);
        require(verifyRoleOrSignature(DEFAULT_ADMIN_ROLE, signature, blockNumber, "revokeRole", params), "AccessControl: caller is not an admin");
        _revokeRole(role, account);
    }
}
