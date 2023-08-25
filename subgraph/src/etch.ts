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
  Approval,
  ApprovalForAll,
  CommentAdded,
  EtchCreated,
  EtchTransferedToTeam,
  InvididualPermissionsUpdated,
  OwnershipTransferred,
  Transfer,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCommentAdded(event: CommentAddedEvent): void {
  let entity = new CommentAdded(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.commentId = event.params.commentId;
  entity.comment_commentIpfsCid = event.params.comment.commentIpfsCid;
  entity.comment_timestamp = event.params.comment.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEtchCreated(event: EtchCreatedEvent): void {
  let entity = new EtchCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEtchTransferedToTeam(event: EtchTransferedToTeamEvent): void {
  let entity = new EtchTransferedToTeam(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.from = event.params.from;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInvididualPermissionsUpdated(event: InvididualPermissionsUpdatedEvent): void {
  let entity = new InvididualPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.account = event.params.account;
  entity.newPermission = event.params.newPermission;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
