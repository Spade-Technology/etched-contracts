import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermissionsUpdated as PermissionsUpdatedEvent,
  TeamCreated as TeamCreatedEvent,
  Transfer as TransferEvent,
  TransferToOrganisation as TransferToOrganisationEvent,
} from "../generated/Team/Team";
import {
  TeamApproval,
  TeamApprovalForAll,
  TeamOwnershipTransferred,
  TeamPermissionsUpdated,
  TeamCreated,
  TeamTransfer,
  TeamTransferToOrganisation,
  TeamOwnership,
  EtchOwnership,
  Team,
} from "../generated/schema";
import { getOrCreateWallet } from "./wallet";

export function handlePermissionsUpdated(event: PermissionsUpdatedEvent): void {
  const entity = new TeamPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.teamId = event.params.teamId;
  entity.account = event.params.account;
  entity.newPermission = event.params.newPermission;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();
}

export function handleTeamCreated(event: TeamCreatedEvent): void {
  const entity = new TeamCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.teamId = event.params.teamId;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();

  const wallet = getOrCreateWallet(event.params.to);

  const teamId = event.params.teamId.toString() + "-Team";
  const teamOwnershipId = event.params.teamId.toString() + "-Team-Ownership";

  // create the team ownership
  const teamOwnership = new TeamOwnership(teamOwnershipId);

  teamOwnership.team = teamId;
  teamOwnership.owner = event.params.to;
  teamOwnership.organisation = null;

  teamOwnership.save();

  // create the team
  const team = new Team(teamId);

  team.teamId = event.params.teamId;

  team.save();
}

export function handleTransfer(event: TransferEvent): void {
  const entity = new TeamTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.tokenId = event.params.tokenId;
  entity.team = event.params.tokenId.toString();

  entity.save();
}

export function handleTransferToOrganisation(event: TransferToOrganisationEvent): void {
  const entity = new TeamTransferToOrganisation(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.teamId = event.params.teamId;
  entity.orgId = event.params.orgId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();
}

export function handleApproval(event: ApprovalEvent): void {
  const entity = new TeamApproval(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.tokenId.toString();

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  const entity = new TeamApprovalForAll(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  const entity = new TeamOwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
