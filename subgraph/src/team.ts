import { BigInt } from "@graphprotocol/graph-ts";
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
  TeamPermission,
} from "../generated/schema";
import { getOrCreateWallet } from "./wallet";
import { EOID, getOrgId } from "./organisation";
import { upsertTeam, upsertTeamOwnership, upsertTeamPermission } from "./utils";

export enum ETID {
  Team,
  Ownership,
  Permission,
}

export function getTeamId({ type, teamId, wallet }: { type: ETID; teamId: BigInt; wallet?: string }): string {
  if (type == ETID.Team) return teamId.toString() + "-Team";
  else if (type == ETID.Ownership) return teamId.toString() + "-Team-Ownership";
  else if (type == ETID.Permission) return teamId.toString() + "-" + wallet + "-Team-Permission";
  else return "";
}

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

  const teamId = getTeamId({ type: ETID.Team, teamId: event.params.teamId });
  const teamPermissionId = getTeamId({
    type: ETID.Permission,
    teamId: event.params.teamId,
    wallet: event.params.account.toString(),
  });

  upsertTeamPermission({
    dbTeamId: teamId,
    dbOwnershipId: teamPermissionId,
    wallet: event.params.account,
    permissionLevel: event.params.newPermission,
  });
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

  const teamId = getTeamId({ type: ETID.Team, teamId: event.params.teamId });
  const teamOwnershipId = getTeamId({ type: ETID.Ownership, teamId: event.params.teamId });

  // create the team ownership
  upsertTeamOwnership({ dbOwnershipId: teamOwnershipId, dbTeamId: teamId, owner: event.params.to });

  // create the team
  upsertTeam({ dbTeamId: teamId, teamId: event.params.teamId });
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

  const ownershipId = getTeamId({ type: ETID.Ownership, teamId: event.params.tokenId });
  const teamId = getTeamId({ type: ETID.Team, teamId: event.params.tokenId });

  // Update the Etch Ownership
  upsertTeamOwnership({ dbOwnershipId: ownershipId, dbTeamId: teamId, owner: event.params.to });
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

  const ownershipId = getTeamId({ type: ETID.Ownership, teamId: event.params.teamId });
  const teamId = getTeamId({ type: ETID.Team, teamId: event.params.teamId });
  const organisationId = getOrgId({ type: EOID.Org, orgId: event.params.orgId });

  // Update the Etch Ownership
  upsertTeamOwnership({ dbOwnershipId: ownershipId, dbTeamId: teamId, organisation: organisationId });
}

// No need to handle this events, but parsing them for completeness

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
