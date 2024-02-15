import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CommentAdded as CommentAddedEvent,
  EtchCreated as EtchCreatedEvent,
  EtchMetadataUpdated,
  EtchTransferedToTeam as EtchTransferedToTeamEvent,
  InvididualPermissionsUpdated as InvididualPermissionsUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TagAdded,
  TagModified,
  TagRemoved,
  TeamPermissionsUpdated,
  Transfer as TransferEvent,
} from '../generated/Etch/Etch';

import {
  Etch,
  EtchApproval,
  EtchApprovalForAll,
  EtchCommentAdded,
  EtchCreated,
  EtchOwnership,
  EtchOwnershipTransferred,
  EtchPermission,
  EtchPermissionsUpdated,
  EtchTagAdded,
  EtchTagModified,
  EtchTagRemoved,
  EtchTeamPermissionsUpdated,
  EtchTransfer,
  EtchTransferedToTeam,
  Tag,
} from '../generated/schema';
import { getOrCreateWallet } from './wallet';

import { EID, ETID, getEtchId, getTeamId } from './utils';
import { store } from '@graphprotocol/graph-ts';

enum EtchPermissionLevel {
  None = 0,
  Read = 1,
  Write = 2,
}

export function handleCommentAdded(event: CommentAddedEvent): void {
  const entity = new EtchCommentAdded(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.tokenId = event.params.tokenId;
  entity.commentId = event.params.commentId;
  entity.comment_commentIpfsCid = event.params.comment.commentIpfsCid;
  entity.comment_timestamp = event.params.comment.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.etch = getEtchId(EID.Etch, event.params.tokenId);
  entity.owner = event.params.owner;

  entity.save();
}

export function handleTagAdded(event: TagAdded): void {
  const id = event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString());
  const entity = new EtchTagAdded(id);

  entity.tokenId = event.params.tokenId;
  entity.tag = event.params.tag.toString();
  entity.owner = event.params.owner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Create the Tag Entity
  const tag = new Tag(getEtchId(EID.Tag, event.params.tokenId, event.params.owner.toHexString() + '-' + event.params.tag.toString()));
  tag.tag = entity.tag;
  tag.save();

  // Update the Etch Entity
  const etch = Etch.load(getEtchId(EID.Etch, event.params.tokenId));
  if (etch) {
    if (etch.tags) etch.tags.unshift(tag.id);
    else etch.tags = [tag.id];
    etch.save();
  }
}

export function handleTagModified(event: TagModified): void {
  const id = event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString());
  const entity = new EtchTagModified(id);

  entity.tokenId = event.params.tokenId;
  entity.oldTag = event.params.oldTag.toString();
  entity.newTag = event.params.newTag.toString();
  entity.owner = event.params.owner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Load the existing tag using the old tag value and the owner's wallet
  let tag = Tag.load(getEtchId(EID.Tag, event.params.tokenId, event.params.owner.toHexString() + '-' + event.params.oldTag.toString()));
  if (!tag) tag = new Tag(getEtchId(EID.Tag, event.params.tokenId, event.params.owner.toHexString() + '-' + event.params.newTag.toString()));
  else tag.id = getEtchId(EID.Tag, event.params.tokenId, event.params.owner.toHexString() + '-' + event.params.newTag.toString());

  tag.tag = entity.newTag;
  tag.save();

  // Update the Etch Entity
  const etch = Etch.load(getEtchId(EID.Etch, event.params.tokenId));
  if (etch) {
    let filteredTags = [] as string[];
    if (etch.tags) {
      for (let i = 0; i < etch.tags.length; i++) {
        if (etch.tags[i] != getEtchId(EID.Tag, event.params.tokenId, event.params.oldTag.toString())) {
          filteredTags.push(etch.tags[i]);
        }
      }
    }
    etch.tags = [tag.id].concat(filteredTags);
    etch.save();
  }
}

export function handleTagRemoved(event: TagRemoved): void {
  const id = event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString());
  const entity = new EtchTagRemoved(id);

  entity.tokenId = event.params.tokenId;
  // Correcting the property names according to the event definition
  entity.tag = event.params.tag.toString(); // Assuming this is the correct field based on the context provided
  entity.owner = event.params.owner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Update the Etch Entity
  const etch = Etch.load(getEtchId(EID.Etch, event.params.tokenId));
  if (etch) {
    let updatedTags = [] as string[];
    for (let i = 0; i < (etch.tags || []).length; i++) {
      if ((etch.tags || [])[i] != getEtchId(EID.Tag, event.params.tokenId, event.params.tag.toString())) {
        updatedTags.push((etch.tags || [])[i]);
      }
    }
    etch.tags = updatedTags;

    etch.save();
  }

  // Remove the Tag Entity
  store.remove('Tag', getEtchId(EID.Tag, event.params.tokenId, event.params.owner.toHexString() + '-' + event.params.tag.toString()));
}

export function handleEtchCreated(event: EtchCreatedEvent): void {
  const eventEntity = new EtchCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  eventEntity.tokenId = event.params.tokenId;
  eventEntity.to = event.params.to;

  eventEntity.blockNumber = event.block.number;
  eventEntity.blockTimestamp = event.block.timestamp;
  eventEntity.transactionHash = event.transaction.hash;

  eventEntity.save();

  // Setup the Metadata
  const wallet = getOrCreateWallet(event.params.to);

  const newEtchId = getEtchId(EID.Etch, event.params.tokenId);
  const newEtchOwnershipId = getEtchId(EID.Ownership, event.params.tokenId);

  // Create the Etch Ownership Entity
  const ownership = new EtchOwnership(newEtchOwnershipId);

  // Assuming Wallet and Team are other entities you've defined
  ownership.owner = event.params.to;
  ownership.team = null;
  ownership.etch = newEtchId;

  ownership.save();

  // Create the Etch Entity
  const etch = new Etch(newEtchId);

  etch.tokenId = event.params.tokenId;
  etch.ipfsCid = event.params.ipfsCid;
  etch.documentName = event.params.documentName;
  etch.createdAt = event.block.timestamp;
  etch.tags = [] as string[];

  etch.save();
}

export function handleTeamPermissionsUpdated(event: TeamPermissionsUpdated): void {
  const entity = new EtchTeamPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.teamId = event.params.teamId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.teamId = event.params.teamId;
  entity.newPermission = event.params.newPermission;

  entity.save();

  const wallet = getOrCreateWallet(event.transaction.from);

  // Update the Etch Permissions
  // PermissionID is the combination of the Etch ID and the Wallet ID
  const permissionId = getEtchId(EID.Permission, event.params.tokenId, event.params.teamId.toString());
  let etchPermission = EtchPermission.load(permissionId);
  if (etchPermission == null) etchPermission = new EtchPermission(permissionId);

  etchPermission.etch = getEtchId(EID.Etch, event.params.tokenId);
  etchPermission.wallet = null;
  etchPermission.team = getTeamId(ETID.Team, event.params.teamId);
  etchPermission.permissionLevel = entity.newPermission;

  etchPermission.save();
}

export function handleEtchTransferedToTeam(event: EtchTransferedToTeamEvent): void {
  const entity = new EtchTransferedToTeam(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.from = event.params.from;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  const ownershipId = getEtchId(EID.Ownership, event.params.tokenId);

  // Update the Etch Ownership
  let etchOwnership = EtchOwnership.load(ownershipId);
  if (etchOwnership == null) etchOwnership = new EtchOwnership(ownershipId);

  etchOwnership.etch = getEtchId(EID.Etch, event.params.tokenId);
  etchOwnership.team = getTeamId(ETID.Team, event.params.to);
  etchOwnership.owner = null;

  etchOwnership.save();
}

export function handleInvididualPermissionsUpdated(event: InvididualPermissionsUpdatedEvent): void {
  const entity = new EtchPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.account = event.params.account;
  entity.newPermission = event.params.newPermission;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  const wallet = getOrCreateWallet(event.params.account);

  // Update the Etch Permissions
  // PermissionID is the combination of the Etch ID and the Wallet ID
  const permissionId = getEtchId(EID.Permission, event.params.tokenId, event.params.account.toString());
  let etchPermission = EtchPermission.load(permissionId);
  if (etchPermission == null) etchPermission = new EtchPermission(permissionId);

  etchPermission.etch = getEtchId(EID.Etch, event.params.tokenId);
  etchPermission.wallet = entity.account;
  etchPermission.team = null;
  etchPermission.permissionLevel = entity.newPermission;

  etchPermission.save();
}

export function handleEtchMetadataUpdated(event: EtchMetadataUpdated): void {
  const etchId = getEtchId(EID.Etch, event.params.tokenId);

  // Update the Etch Entity
  let etch = Etch.load(etchId);
  if (etch == null) etch = new Etch(etchId);

  etch.ipfsCid = event.params.ipfsCid;
  etch.documentName = event.params.documentName;
  etch.description = event.params.description;

  etch.save();
}

export function handleTransfer(event: TransferEvent): void {
  const entity = new EtchTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.etch = event.params.tokenId.toString();

  entity.save();

  const ownershipId = getEtchId(EID.Ownership, event.params.tokenId);

  // Update the Etch Ownership
  let etchOwnership = EtchOwnership.load(ownershipId);
  if (etchOwnership == null) etchOwnership = new EtchOwnership(ownershipId);

  etchOwnership.unset('team');
  etchOwnership.owner = event.params.to;
  etchOwnership.etch = getEtchId(EID.Etch, event.params.tokenId);

  etchOwnership.save();
}

// No need to handle this events, but parsing them for completeness

export function handleApproval(event: ApprovalEvent): void {
  const entity = new EtchApproval(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.etch = event.params.tokenId.toString();

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  const entity = new EtchApprovalForAll(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  const entity = new EtchOwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
