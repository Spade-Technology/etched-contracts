// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import "./forks/ERC721.sol";
import "./CNodeHandler.sol";
import "./IOrganisation.sol";

contract Organisations is ERC721, IERC721Receiver, IOrganisation, NodeHandler {
    using Counters for Counters.Counter;

    // Counter for the total number of organisations created
    Counters.Counter private totalSupply;

    // Mapping of the permissions of a user for a organisation
    mapping(uint256 organisation => mapping(address user => EPermissions permission))
        public permissionOf;

    /**
     *
     */
    constructor()
        ERC721("Etch Organisation", "o-ETCH")
        NodeHandler(address(0))
    {}

    /**
     * @notice Sets the address of the organisations contract.
     *
     * @param to The address of the organisations contract.
     * @param name The name of the organisation
     *
     * @return newOrgId The orgId of the organisation
     */
    function createOrganisation(
        address to,
        string memory name,
        IOrganisation.userPermission[] memory users
    ) external override returns (uint256 newOrgId) {
        totalSupply.increment();
        uint256 orgId = totalSupply.current();

        _safeMint(to, orgId);

        emit OrganisationCreated(orgId, to);
        emit OrganisationRenamed(orgId, name);

        if (users.length > 0) setPermissionBulk(orgId, users);

        return orgId;
    }

    /**
     * @notice Renames the organisation.
     *
     * @param orgId The orginisationId
     * @param name The new name of the organisation
     *
     * @dev Only an admin of the organisation can rename it.
     * @dev This function doesn't write to the contract, it only emits an event, which is picked up by the UI.
     */
    function renameOrganisation(
        uint256 orgId,
        string memory name
    ) external override {
        require(
            isAdmin(orgId, _msgSender()),
            "ORGANISATION: Only an admin of the organisation can rename it."
        );

        emit OrganisationRenamed(orgId, name);
    }

    /**
     * @notice Returns an indication of whether the user is an admin for the organisation.
     *
     * @param orgId The orginisationId
     * @param user The user to check the permission for
     *
     * @return _isAdmin Whether the user is an admin for the organisation.
     */
    function isAdmin(
        uint256 orgId,
        address user
    ) public view override returns (bool _isAdmin) {
        if (ownerOf(orgId) == user) return true;
        return permissionOf[orgId][user] == EPermissions.Admin;
    }

    /**
     * @notice Returns an indication of whether the user is a member for the organisation.
     *
     * @param orgId The orginisationId
     * @param user The user to check the permission for
     *
     * @return _isMember Whether the user is a member for the organisation.
     */
    function isMember(
        uint256 orgId,
        address user
    ) public view override returns (bool _isMember) {
        if (ownerOf(orgId) == user) return true;
        return permissionOf[orgId][user] >= EPermissions.Member;
    }

    /**
     * @notice Sets the permission of a user for a organisation.
     *
     * @param orgId The orginisationId
     * @param user The user to set the permission for
     * @param permission The permission to set, See EPermissions for more details
     *
     * @dev Only an admin of the organisation can set permissions.
     */
    function setPermission(
        uint256 orgId,
        address user,
        EPermissions permission
    ) external override {
        require(
            isAdmin(orgId, _msgSender()),
            "ORGANISATION: Only an admin of the organisation can set permissions."
        );
        permissionOf[orgId][user] = permission;

        emit PermissionsUpdated(orgId, user, permission);
    }

    /**
     * @notice Sets the permission of a user for a organisation.
     *
     * @param orgId The orginisationId
     * @param users [address, uint] The user to set the permission for
     *
     * @dev Only an admin of the organisation can set permissions.
     */
    function setPermissionBulk(
        uint256 orgId,
        IOrganisation.userPermission[] memory users
    ) public override {
        require(
            isAdmin(orgId, _msgSender()),
            "ORGANISATION: Only an admin of the organisation can set permissions."
        );

        for (uint256 i = 0; i < users.length; i++) {
            permissionOf[orgId][users[i].user] = users[i].permission;
            emit PermissionsUpdated(orgId, users[i].user, users[i].permission);
        }
    }

    /**
     * @notice Returns the number of organisations created.
     *
     * @return totalAmountOfOrganisations The total number of organisations created.
     */
    function getNumberOfOrganisationsCreated()
        external
        view
        virtual
        override
        returns (uint256 totalAmountOfOrganisations)
    {
        return totalSupply.current();
    }

    /**
     * @notice Override of the ERC721 implementation to allow for the organisations contract to be the owner of the Etch, through the underlying organisation of the organisation
     *
     * @param orgId The organisation's ID to check the owner of
     *
     * @return address The owner of the Organisation
     */
    function _ownerOf(
        uint256 orgId
    ) internal view virtual override returns (address) {
        address owner = _owners[orgId];
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

    // Should we implement a safety check like this ?
    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 firstTokenId,
    //     uint256 batchSize
    // ) internal virtual override {
    //     require(
    //         from == address(0) || to != organisations,
    //         "ORGANISATIONS: cannot transfer to organisations, you'll need to call transfer to Organisation directly."
    //     );
    // }
}
