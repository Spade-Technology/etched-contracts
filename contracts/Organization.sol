// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./SignatureVerifier.sol";
import "./Team.sol";

/**
    @title Organization Contract
    @notice This contract deploys and manages Team contracts.
 */
contract Organization is Ownable, SignatureVerifier {
    // Stores deployed Team contracts
    address[] public teams;

    // Event to log the creation of a Team contract
    event TeamCreated(address indexed creator, address indexed team);

    /**
       @notice Initializes the Team Factory contract.
    */
    constructor(
        Signature memory signature,
        address _paymaster,
        address _admin
    ) SignatureVerifier(_paymaster) {
        _checkSignature(signature);
        transferOwnership(_admin);
    }

    function _checkOwner(address _account) internal view {
        require(_account == owner(), "Caller is not the owner");
    }

    // Function to deploy a new Team contract
    function createTeam(
        Signature memory signature
    ) external verifySignature(signature) returns (address) {
        _checkOwner(signature.signer);
        Team team = new Team(signature, address(this), PayMaster, true);
        address teamAddress = address(team);

        teams.push(teamAddress);

        emit TeamCreated(signature.signer, teamAddress);
        return teamAddress;
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
