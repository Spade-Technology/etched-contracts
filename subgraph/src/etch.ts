import { log } from "matchstick-as";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CommentAdded as CommentAddedEvent,
  EtchCreated as EtchCreatedEvent,
  EtchTransferedToTeam as EtchTransferedToTeamEvent,
  InvididualPermissionsUpdated as InvididualPermissionsUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
} from "../generated/Etch/Etch";

import {
  EtchApproval,
  EtchApprovalForAll,
  EtchCommentAdded,
  EtchCreated,
  EtchTransferedToTeam,
  EtchPermissionsUpdated,
  EtchOwnershipTransferred,
  EtchTransfer,
  Etch,
  EtchOwnership,
  EtchPermission,
} from "../generated/schema";
import { getOrCreateWallet } from "./wallet";

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

  entity.etch = event.params.tokenId.toString();

  entity.save();
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

  const newEtchId = event.params.tokenId.toString() + "-Etch";
  const newEtchOwnershipId = event.params.tokenId.toString() + "-Etch-Ownership";

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

  etch.save();
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

  // Update the Etch Ownership
  let etchOwnership = EtchOwnership.load(entity.tokenId.toString() + "-Etch-Ownership");
  if (etchOwnership == null) etchOwnership = new EtchOwnership(entity.tokenId.toString() + "-Etch-Ownership");

  etchOwnership.etch = entity.tokenId.toString() + "-Etch";
  etchOwnership.team = entity.to.toString() + "-Team";
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
  let etchPermission = EtchPermission.load(
    entity.tokenId.toString() + "-" + event.params.account.toString() + "-Etch-Permission"
  );
  if (etchPermission == null)
    etchPermission = new EtchPermission(entity.tokenId.toString() + "-" + event.params.account.toString() + "-Etch-Permission");

  etchPermission.etch = entity.tokenId.toString() + "-Etch";
  etchPermission.wallet = entity.account;
  etchPermission.permissionLevel = entity.newPermission;

  etchPermission.save();
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

  // Update the Etch Ownership
  let etchOwnership = EtchOwnership.load(entity.etch + "-Etch-Ownership");
  if (etchOwnership == null) etchOwnership = new EtchOwnership(entity.etch + "-Etch-Ownership");

  etchOwnership.unset("team");
  etchOwnership.owner = event.params.to;
  etchOwnership.etch = entity.etch;

  etchOwnership.save();
}

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
