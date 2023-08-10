// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SignatureVerifier.sol";
import "./Team.sol";
import "./Etch.sol";

/**
    @title Organization Contract
    @notice This contract deploys and manages Team contracts.
 */
contract Organization is SignatureVerifier {
    // Role constants
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    // Stores deployed Team contracts
    address[] public teams;

    // Stores deployed Etch contract
    Etch public etch;

    // Mapping from tokenId to address for team admin access
    mapping(uint256 => mapping(address => bool)) private adminAccess;

    // Event to log the creation of a Team contract
    event TeamCreated(address indexed creator, address indexed team);

    /**
       @notice Initializes the Team Factory contract.
    */
    constructor(
        address _paymaster,
        address _admin
    ) SignatureVerifier(_paymaster) {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(ADMIN_ROLE, _admin);

        etch = new Etch(address(this));
    }

    // Function to deploy a new Team contract
    function createTeam(
        Signature memory signature,
        address _admin
    ) external verifySignature(ADMIN_ROLE, signature) returns (address) {
        Team team = new Team(PayMaster, _admin);
        address teamAddress = address(team);

        teams.push(teamAddress);

        emit TeamCreated(_admin, teamAddress);
        return teamAddress;
    }

    // Function to set default permission for a user in a specific Team
    function setDefaultPermissionForTeam(
        Signature memory signature,
        address teamAddress,
        address account,
        Team.Permission perm
    ) external verifySignature(ADMIN_ROLE, signature) {
        Team(teamAddress).setDefaultPermission(account, perm);
    }

    // Function to set role for a user in a specific Team
    function setAdminRoleForTeam(
        Signature memory signature,
        address teamAddress,
        address account
    ) external verifySignature(ADMIN_ROLE, signature) {
        Team(teamAddress).grantRole(ADMIN_ROLE, account);
    }

    function revokeAdminRoleForTeam(
        Signature memory signature,
        address teamAddress,
        address account
    ) external verifySignature(ADMIN_ROLE, signature) {
        Team(teamAddress).revokeRole(ADMIN_ROLE, account);
    }

    function setAdminAccesstoEtch(
        Signature memory signature,
        address teamAddress,
        uint256 tokenId,
        bool access
    ) external verifySignature(ADMIN_ROLE, signature) {
        adminAccess[tokenId][teamAddress] = access;
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

    // Function to verify if the team has admin access to a specific Etch
    function verifyOwnershipofEtch(
        address team,
        uint256 tokenId
    ) public view returns (bool) {
        return adminAccess[tokenId][team];
    }

    function mintEtch(
        Signature memory signature,
        string memory uri
    ) external verifySignature(ADMIN_ROLE, signature) {
        etch.mint(uri);
    }

    function burnEtch(
        Signature memory signature,
        uint256 tokenId
    ) external verifySignature(ADMIN_ROLE, signature) {
        etch.burn(tokenId);
    }

    function totalEtches() external view returns (uint256) {
        return etch.totalEtches();
    }
}
