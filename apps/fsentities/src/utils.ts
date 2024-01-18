import { BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
// import { Organisation, OrganisationOwnership, OrganisationPermission, Team, TeamOwnership, TeamPermission, EntityUserPermission } from '../generated/schema';
import { FileMeta, EntityUserPermission, FSEntity, ShareMeta, EntityIndividualUserPermissionsChanged, Wallet } from '../generated/schema';
import { FileMetaChanged as EntityMetaChangedEvent, ShareMetaChanged as ShareMetaChangedEvent, EntityIndividualUserPermissionsChanged as EntityIndividualUserPermissionsChangedEvent } from "../generated/FSEntityManager/FSEntityManager"


//UTILITY FUNCTIONS
const getFileMetaIdForEntity = (_entityId: string): string => {
  return `${_entityId}-FMETA`
}

const getShareMetaIdForEntity = (_entityId: string): string => {
  return `${_entityId}-SMETA`
}


//EXPORT FUNCTIONS
export const upsertEntityUserPermission = (event: EntityIndividualUserPermissionsChangedEvent, wallet: Wallet): EntityUserPermission => {
  const dbPermissionId = `${event.params._entityId}-${wallet.eoa}`;
  let entityPermission = EntityUserPermission.load(dbPermissionId);
  if (entityPermission == null) entityPermission = new EntityUserPermission(dbPermissionId);

  entityPermission._entity = event.params._entityId.toString();
  entityPermission._user = wallet.id;
  entityPermission._permissions = event.params._permissions;
  // entityPermission.blockNumber = event.block.number;
  // entityPermission.blockTimestamp = event.block.timestamp;
  // entityPermission.transactionHash = event.block.hash;
  entityPermission.save();

  return entityPermission;
};

//CONSIDER: Will comments be threaded?  No, per Lance.
//CONSIDER: Comments on non-files?  No, per Lance.
//CONSIDER: Delete comments?  Archive, per Lance. All handled in TheGraph.  Contract simply used as permission/gatekeeper.
export const upsertFileMeta = (event: EntityMetaChangedEvent): FileMeta => {
  //CONSIDER: This should honestly never change once set.  Not sure if we allow document name changes, etc.
  //DETAIL: Primarily for files/etches (i.e. not folders or otherwise, although we could)
  let fileMeta = FileMeta.load(getFileMetaIdForEntity(event.params._entityId.toString()));
  //NOTE: Relationship is 1-to-1 so we shouldn't have multiple "meta"s
  if (fileMeta == null) fileMeta = new FileMeta(getFileMetaIdForEntity(event.params._entityId.toString()));

  fileMeta._fsEntity = event.params._entityId.toString()
  fileMeta._creator = event.params._creator
  fileMeta._documentName = event.params._documentName
  fileMeta._documentDescription = event.params._documentDescription
  fileMeta._ipfsCid = event.params._ipfsCid
  fileMeta._timestamp = event.params._timestamp
  fileMeta.save();

  return fileMeta;
};

export const upsertShareMeta = (event: ShareMetaChangedEvent): ShareMeta => {

  let shareMeta = ShareMeta.load(getShareMetaIdForEntity(event.params._shareId.toString()));
  //NOTE: Relationship is 1-to-1 so we shouldn't have multiple "meta"s
  if (shareMeta == null) shareMeta = new ShareMeta(getShareMetaIdForEntity(event.params._shareId.toString()));

  shareMeta._originalEntity = event.params._originalEntityId.toString()
  shareMeta._maxPermissionsPerOwner = event.params._maxPermissionsPerOwner
  shareMeta.save();

  return shareMeta;
};

// export const upsertOrgOwnership = (dbOwnershipId: string, dbOrgId: string, owner: Bytes): void => {
//   let organisationOwnership = OrganisationOwnership.load(dbOwnershipId);
//   if (organisationOwnership == null) organisationOwnership = new OrganisationOwnership(dbOwnershipId);

//   organisationOwnership.owner = owner;
//   organisationOwnership.organisation = dbOrgId;
//   organisationOwnership.save();
// };

// export const upsertOrg = (dbOrgId: string, orgId: BigInt, block: ethereum.Block): void => {
//   let org = Organisation.load(dbOrgId);
//   if (org == null) org = new Organisation(dbOrgId);
//   org.createdAt = block.timestamp;
//   org.orgId = orgId;
//   org.save();
// };

// export const upsertOrgPermission = (dbPermissionId: string, dbOrgId: string, wallet: Bytes, permissionLevel: i32): void => {
//   let orgPermission = OrganisationPermission.load(dbPermissionId);
//   if (orgPermission == null) orgPermission = new OrganisationPermission(dbPermissionId);

//   orgPermission.organisation = dbOrgId;
//   orgPermission.wallet = wallet;
//   orgPermission.permissionLevel = permissionLevel;
//   orgPermission.save();
// };

// export const upsertTeamPermission = (dbOwnershipId: string, dbTeamId: string, wallet: Bytes, permissionLevel: i32): void => {
//   let teamOwnership = TeamPermission.load(dbOwnershipId);
//   if (teamOwnership == null) teamOwnership = new TeamPermission(dbOwnershipId);

//   teamOwnership.team = dbTeamId;
//   teamOwnership.wallet = wallet;
//   teamOwnership.permissionLevel = permissionLevel;
//   teamOwnership.save();
// };

// export const upsertTeamOwnership = (
//   dbOwnershipId: string,
//   dbTeamId: string,
//   owner: Bytes | null = null,
//   organisation: string | null = null
// ): void => {
//   let teamOwnership = TeamOwnership.load(dbOwnershipId);
//   if (teamOwnership == null) teamOwnership = new TeamOwnership(dbOwnershipId);

//   teamOwnership.team = dbTeamId;
//   teamOwnership.owner = owner ? owner : null;
//   teamOwnership.organisation = organisation ? organisation : null;

//   teamOwnership.save();
// };

// export const upsertTeam = (dbTeamId: string, teamId: BigInt, block: ethereum.Block): void => {
//   const team = new Team(dbTeamId);
//   team.teamId = teamId;
//   team.createdAt = block.timestamp;
//   team.save();
// };

// // Identifiers

// export enum EID {
//   Etch,
//   Ownership,
//   Permission,
// }

// export function getEtchId (type: EID, tokenId: BigInt, walletOrTeamId: string = ''): string {
//   if (type == EID.Etch) return tokenId.toString() + '-Etch';
//   else if (type == EID.Ownership) return tokenId.toString() + '-Etch-Ownership';
//   else if (type == EID.Permission) return tokenId.toString() + '-' + walletOrTeamId + '-Etch-Permission';
//   else return '';
// }

// export enum ETID {
//   Team,
//   Ownership,
//   Permission,
// }

// export function getTeamId (type: ETID, teamId: BigInt, wallet: string = ''): string {
//   if (type == ETID.Team) return teamId.toString() + '-Team';
//   else if (type == ETID.Ownership) return teamId.toString() + '-Team-Ownership';
//   else if (type == ETID.Permission) return teamId.toString() + '-' + wallet + '-Team-Permission';
//   else return '';
// }

// export enum EOID {
//   Org,
//   Ownership,
//   Permission,
// }

// export function getOrgId (type: EOID, orgId: BigInt, wallet: string = ''): string {
//   if (type == EOID.Org) return orgId.toString() + '-Organisation';
//   else if (type == EOID.Ownership) return orgId.toString() + '-Organisation-Ownership';
//   else if (type == EOID.Permission) return orgId.toString() + '-' + wallet + '-Organisation-Permission';
//   else return '';
// }
