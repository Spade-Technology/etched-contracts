import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OrganisationCreated as OrganisationCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermissionsUpdated as PermissionsUpdatedEvent,
  Transfer as TransferEvent,
} from "../generated/Organisation/Organisation";
import {
  OrganisationApproval,
  OrganisationApprovalForAll,
  OrganisationCreated,
  OrganisationPermissionsUpdated,
  OrganisationTransfer,
  OrganisationContractOwnershipTransferred,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  const entity = new OrganisationApproval(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  const entity = new OrganisationApprovalForAll(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOrganisationCreated(event: OrganisationCreatedEvent): void {
  const entity = new OrganisationCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.orgId = event.params.orgId;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.organisation = event.params.orgId.toString();

  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  const entity = new OrganisationContractOwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePermissionsUpdated(event: PermissionsUpdatedEvent): void {
  const entity = new OrganisationPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.orgId = event.params.orgId;
  entity.account = event.params.account;
  entity.newPermission = event.params.newPermission;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.organisation = event.params.orgId.toString();

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  const entity = new OrganisationTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.organisation = event.params.tokenId.toString();

  entity.save();
}
