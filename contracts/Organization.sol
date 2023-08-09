// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SignatureVerifier.sol";
import "./Team.sol";

/**
    @title Organization Contract
    @notice This contract deploys and manages Team contracts.
 */
contract Organization is SignatureVerifier {
    // Stores deployed Team contracts
    address[] public teams;

    // Event to log the creation of an Team contract
    event TeamCreated(
        address indexed creator,
        address indexed team
    );

    /**
       @notice Initializes the Team Factory contract.
    */
    constructor(address _paymaster) SignatureVerifier(_paymaster) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    // Function to deploy a new Team contract
    function createTeam(
        Signature memory signature,
        address _admin
    ) external verifySignature(ADMIN_ROLE, signature) returns (address) {
        Team org = new Team(PayMaster, _admin);
        teams.push(address(org));
        emit TeamCreated(msg.sender, address(org));
        return address(org);
    }

    // Function to get the total number of deployed Team contracts
    function getTeamCount() external view returns (uint256) {
        return teams.length;
    }

    // Function to get a specific Team contract address
    function getTeam(uint256 index) external view returns (address) {
        require(index < teams.length, "Index out of bounds");
        return teams[index];
    }
}
