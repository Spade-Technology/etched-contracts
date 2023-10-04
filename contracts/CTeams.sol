// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import "./CNodeHandler.sol";
import "./forks/ERC721.sol";
import "./IOrganisation.sol";
import "./ITeams.sol";

contract Teams is ERC721, IERC721Receiver, ITeams, NodeHandler {
    using Counters for Counters.Counter;

    // Counter for the total number of teams created
    Counters.Counter private totalSupply;

    // Mapping of the organisations contract
    address public organisations;

    // Mapping of the permissions of a user for a team
    mapping(uint256 team => mapping(address user => EPermissions permission))
        public permissionsOfTeam;

    // Mapping of Team ID to Organisation ID
    mapping(uint256 team => uint256 organisation) public organisationOf;

    /**
     *
     */
    constructor(
        address organisationsContract
    ) ERC721("Etch Team", "t-ETCH") NodeHandler(organisationsContract) {
        organisations = organisationsContract;
    }

    /**
     * @notice Sets the address of the organisations contract.
     *
     * @param to The address of the organisations contract.
     * @param teamName The name of the team
     * @param users The users to set the permissions for
     *
     * @return newTeamId The teamId of the EtchUID
     */
    function createTeam(
        address to,
        string memory teamName,
        ITeams.userPermissions[] memory users
    ) external override returns (uint256 newTeamId) {
        totalSupply.increment();
        uint256 teamId = totalSupply.current();

        _safeMint(to, teamId);

        emit TeamCreated(teamId, to);
        emit TeamRenamed(teamId, teamName);

        if (users.length > 0) setPermissionBulk(teamId, users);

        return teamId;
    }

    /**
     * @notice Sets the address of the organisations contract.
     *
     * @param orgId the ID of the organisation to create the team for
     * @param teamName The name of the team
     * @param users The users to set the permissions for
     *
     * @return newTeamId The teamId of the EtchUID
     */
    function createTeamForOrganisation(
        uint256 orgId,
        string memory teamName,
        ITeams.userPermissions[] memory users
    ) external override returns (uint256 newTeamId) {
        totalSupply.increment();
        uint256 teamId = totalSupply.current();

        _safeMint(organisations, teamId);
        organisationOf[teamId] = orgId;

        emit TeamCreated(teamId, organisations);
        emit TeamRenamed(teamId, teamName);
        emit TransferToOrganisation(teamId, orgId);

        if (users.length > 0) setPermissionBulk(teamId, users);

        return teamId;
    }

    /**
     * @notice Renames the team.
     *
     * @param teamId The teamId of the EtchUID
     * @param newName The new name of the team
     *
     * @dev Only the owner of the team can rename it.
     */
    function renameTeam(
        uint256 teamId,
        string memory newName
    ) external override {
        require(
            ownerOf(teamId) == _msgSender(),
            "TEAMS: Only the Owner can rename the team."
        );

        emit TeamRenamed(teamId, newName);
    }

    function transferToOrganisation(
        uint256 teamId,
        uint256 orgId
    ) external override {
        require(
            ownerOf(teamId) == _msgSender(),
            "TEAMS: Only Owner can transfer to Organisation"
        );
        _transfer(_msgSender(), organisations, teamId);
        organisationOf[teamId] = orgId;

        emit TransferToOrganisation(teamId, orgId);
    }

    /**
     * @notice Sets the permission of a user for a team.
     *
     * @param teamId Set the permission of a user for a team
     * @param user The user to set the permission for
     * @param permission The permission to set, See EPermissions for more details
     *
     * @dev Only the owner of the team can set permissions. Let it be an organisation, or a user.
     */
    function setPermission(
        uint256 teamId,
        address user,
        EPermissions permission
    ) external override onlyAdmin(teamId) {
        permissionsOfTeam[teamId][user] = permission;

        emit PermissionsUpdated(teamId, user, permission);
    }

    /**
     * @notice Sets the permission of a user for a team.
     *
     * @param teamId Set the permission of a user for a team
     * @param users [address, uint] The user to set the permission for
     *
     * @dev Only the owner of the team can set permissions. Let it be an organisation, or a user.
     */
    function setPermissionBulk(
        uint256 teamId,
        ITeams.userPermissions[] memory users
    ) public override onlyAdmin(teamId) {
        for (uint256 i = 0; i < users.length; i++) {
            permissionsOfTeam[teamId][users[i].user] = users[i].permission;
            emit PermissionsUpdated(teamId, users[i].user, users[i].permission);
        }
    }

    /**
     * @notice Returns an indication of whether the user has the permission for the team.
     *
     * @param teamId The teamId of the EtchUID
     * @param user The user to check the permission for
     * @param permission The permission to check, See EPermissions for more details
     *
     * @return _hasPermission Whether the user has the permission for the team.
     */
    function hasPermission(
        uint256 teamId,
        address user,
        EPermissions permission
    ) external view override returns (bool _hasPermission) {
        if (ownerOf(teamId) == user) return true;
        else return permissionsOfTeam[teamId][user] >= permission;
    }

    /**
     * @notice Returns the number of teams created.
     *
     * @return totalAmountOfTeams The total number of teams created.
     */
    function getNumberOfTeamsCreated()
        external
        view
        override
        returns (uint256 totalAmountOfTeams)
    {
        return totalSupply.current();
    }

    /**
     * @notice Override of the ERC721 implementation to allow for the teams contract to be the owner of the Team, through  ownership, or the underlying organisation
     *
     * @param teamId The Team's ID to check the owner of
     *
     * @return address The owner of the Team
     */
    function _ownerOf(
        uint256 teamId
    ) internal view virtual override returns (address) {
        address owner = _owners[teamId];

        if (owner == organisations)
            return IOrganisation(organisations).ownerOf(organisationOf[teamId]);
        return owner;
    }

    /**
     * @notice Always returns `IERC721Receiver.onERC721Received.selector`.
     * @dev We are not implementing any logic here, but we need to implement this function to be ERC721 compliant.
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }

    modifier onlyAdmin(uint256 teamId) {
        require(
            ownerOf(teamId) == _msgSender() ||
                IOrganisation(organisations).isAdmin(
                    organisationOf[teamId],
                    _msgSender()
                ),
            "TEAMS: Only the Owner, or an Organisation Admin can set permissions."
        );
        _;
    }

    // Should we implement a safety check like this ?
    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 firstTokenId,
    //     uint256 batchSize
    // ) internal virtual override {
    //     require(
    //         from == address(0) || to != organisations,
    //         "TEAMS: cannot transfer to organisations, you'll need to call transfer to Organisation directly."
    //     );
    // }
}
