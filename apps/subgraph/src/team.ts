import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermissionsUpdated as PermissionsUpdatedEvent,
  TeamCreated as TeamCreatedEvent,
  TeamRenamed as TeamRenamedEvent,
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
  TeamRenamed,
  Team,

} from "../generated/schema";
import { getOrCreateWallet } from "./wallet";

import { EOID, ETID, getOrgId, getTeamId, upsertTeam, upsertTeamOwnership, upsertTeamPermission } from "./utils";

export function handlePermissionsUpdated(event: PermissionsUpdatedEvent): void {
  const entity = new TeamPermissionsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.account = event.params.account;
  entity.newPermission = event.params.newPermission;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();

  const teamId = getTeamId(ETID.Team, event.params.teamId);
  const teamPermissionId = getTeamId(ETID.Permission, event.params.teamId, event.params.account.toString());

  upsertTeamPermission(teamId, teamPermissionId, event.params.account, event.params.newPermission);
}

export function handleTeamRenamed(event: TeamRenamedEvent): void {
  const entity = new TeamRenamed(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.newName = event.params.newName;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();

  const teamId = getTeamId(ETID.Team, event.params.teamId);
  let team = Team.load(teamId);
  if (team == null) team = new Team(teamId); // create if it doesn't exist yet. Shouldn't happen

  team.name = entity.newName;

  team.save();
}

export function handleTeamCreated(event: TeamCreatedEvent): void {
  const entity = new TeamCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = event.params.teamId.toString();

  entity.save();

  const wallet = getOrCreateWallet(event.params.to);

  const teamId = getTeamId(ETID.Team, event.params.teamId);
  const teamOwnershipId = getTeamId(ETID.Ownership, event.params.teamId);

  // create the team ownership
  upsertTeamOwnership(teamOwnershipId, teamId, event.params.to);

  // create the team
  upsertTeam(teamId, event.params.teamId, event.block);
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

  const ownershipId = getTeamId(ETID.Ownership, event.params.tokenId);
  const teamId = getTeamId(ETID.Team, event.params.tokenId);

  // Update the Etch Ownership
  upsertTeamOwnership(ownershipId, teamId, event.params.to);
}

export function handleTransferToOrganisation(event: TransferToOrganisationEvent): void {
  const ownershipId = getTeamId(ETID.Ownership, event.params.teamId);
  const teamId = getTeamId(ETID.Team, event.params.teamId);
  const organisationId = getOrgId(EOID.Org, event.params.orgId);

  const entity = new TeamTransferToOrganisation(event.transaction.hash.concatI32(event.logIndex.toI32()));

  entity.orgId = event.params.orgId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.team = teamId;
  entity.organisation = organisationId;

  entity.save();

  // Update the Etch Ownership
  upsertTeamOwnership(ownershipId, teamId, null, organisationId);
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
