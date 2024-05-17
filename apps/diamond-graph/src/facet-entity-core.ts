import { getOrCreateWallet } from './wallet';
import { upsertFileMeta, upsertEntityUserPermission, upsertShareMeta } from './utils';

import {
  CommentOnEntity as CommentOnEntityEvent,
  EntityBasePermissionsChanged as EntityBasePermissionsChangedEvent,
  EntityCreated as EntityCreatedEvent,
  FileMetaChanged as FileMetaChangedEvent,
  EntityMoved as EntityMovedEvent,
  EntityTransferredToIndividual as EntityTransferredToIndividualEvent,
  Transfer as TransferEvent,
  ShareMetaChanged as ShareMetaChangedEvent,
} from "../generated/FacetEntityCore/FacetEntityCore"
import { FSEntity, CommentOnEntity, OrganizationTransferredToIndividual } from '../generated/schema';

const hrTypes = ['PersonalOrg', 'Organization', 'Team', 'Folder', 'File', 'Share'];

export function handleEntityCreated (event: EntityCreatedEvent): void {
  // console.log(event.params._basePermissions.toString())
  // console.log(event.params._entityId.toString())
  // console.log(event.params._name.toString())
  // console.log(event.params._parentId.toString())
  // console.log(event.params._to.toString())
  // console.log(event.params._type.toString())

  let wallet = getOrCreateWallet(event.params._to);

  let fsEntity = new FSEntity(event.params._entityId.toString());
  // entity._entityId = event.params._entityId
  fsEntity._sortableId = (event.params._entityId.toI32());
  fsEntity._to = event.params._to;
  fsEntity._parent = event.params._parentId.toString();
  fsEntity._name = event.params._name;
  fsEntity._type = event.params._type;
  fsEntity._humanReadableType = hrTypes[event.params._type];
  fsEntity._basePermissions = event.params._basePermissions;
  fsEntity.owner = wallet.id;

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  fsEntity.save();
}

export function handleEntityMoved (event: EntityMovedEvent): void {
  //DETAIL: ADJUST ACTUAL FSEntity
  let fsEntity = FSEntity.load(event.params._entityId.toString());
  if (!!fsEntity) {
    fsEntity._parent = event.params._destId.toString();
    fsEntity.save();
  }
}

// export function handleEntityIndividualUserPermissionsChanged(event: EntityIndividualUserPermissionsChangedEvent): void {
//   let wallet = getOrCreateWallet(event.params._user);
//   let entity = upsertEntityUserPermission(event, wallet);
// }

export function handleCommentOnEntity (event: CommentOnEntityEvent): void {
  let entity = new CommentOnEntity(event.params._commentIpfsCid);
  entity._entityId = event.params._entityId;
  entity._commentIpfsCid = event.params._commentIpfsCid;
  entity._timestamp = event.params._timestamp;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleEntityBasePermissionsChanged (event: EntityBasePermissionsChangedEvent): void {
  //DETAIL: Update comment count on main
  let fsEntity = FSEntity.load(event.params._entityId.toString());
  if (!!fsEntity) {
    fsEntity._basePermissions = event.params._newPermissions;
    fsEntity.save();
  }
}

export function handleFileMetaChanged (event: FileMetaChangedEvent): void {
  let entity = upsertFileMeta(event);
}

export function handleShareMetaChanged (event: ShareMetaChangedEvent): void {
  //NOTE: This "meta" pertains to the `Entity` that is of type `Share`
  let sMeta = upsertShareMeta(event);
}

export function handleEntityTransferredToIndividual (event: EntityTransferredToIndividualEvent): void {
  let fsEntity = FSEntity.load(event.params._entityId.toString());

  if (!!fsEntity) {
    let wallet = getOrCreateWallet(event.params._user);
    fsEntity.owner = wallet.id;
    fsEntity.save();
  }
}
