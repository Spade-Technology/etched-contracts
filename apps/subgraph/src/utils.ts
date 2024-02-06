import { BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
// import { Organisation, OrganisationOwnership, OrganisationPermission, Team, TeamOwnership, TeamPermission, EntityUserPermission } from '../generated/schema';
import { FileMeta, EntityUserPermission, FSEntity, ShareMeta, EntityIndividualUserPermissionsChanged, Wallet } from '../generated/schema';
import {
  FileMetaChanged as EntityMetaChangedEvent,
  ShareMetaChanged as ShareMetaChangedEvent,
  EntityIndividualUserPermissionsChanged as EntityIndividualUserPermissionsChangedEvent,
} from '../generated/FSEntityManager/FSEntityManager';

//UTILITY FUNCTIONS
const getFileMetaIdForEntity = (_entityId: string): string => {
  return `${_entityId}-FMETA`;
};

const getShareMetaIdForEntity = (_entityId: string): string => {
  return `${_entityId}-SMETA`;
};

export const decodeCidv0BytesToBase58String = (bytes: Bytes): string => {
  const prefix = new Uint8Array(2);
  prefix[0] = 18;
  prefix[1] = 32;

  // Combine the prefix and the original bytes
  let combined = new Uint8Array(prefix.length + bytes.length);
  combined.set(prefix, 0);
  combined.set(bytes, prefix.length);

  return Bytes.fromUint8Array(combined).toBase58();
};

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

  fileMeta._fsEntity = event.params._entityId.toString();
  fileMeta._creator = event.params._creator;
  fileMeta._documentName = event.params._documentName;
  fileMeta._ipfsCid = decodeCidv0BytesToBase58String(event.params._ipfsCid);
  fileMeta._timestamp = event.params._timestamp;
  fileMeta.save();

  return fileMeta;
};

export const upsertShareMeta = (event: ShareMetaChangedEvent): ShareMeta => {
  let shareMeta = ShareMeta.load(getShareMetaIdForEntity(event.params._shareId.toString()));
  //NOTE: Relationship is 1-to-1 so we shouldn't have multiple "meta"s
  if (shareMeta == null) shareMeta = new ShareMeta(getShareMetaIdForEntity(event.params._shareId.toString()));

  shareMeta._fsEntity = event.params._shareId.toString();
  shareMeta._originalEntity = event.params._originalEntityId.toString();
  shareMeta._maxPermissionsPerOwner = event.params._maxPermissionsPerOwner;
  shareMeta.save();

  return shareMeta;
};
