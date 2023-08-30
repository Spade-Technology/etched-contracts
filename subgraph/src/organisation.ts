import { BigInt } from "@graphprotocol/graph-ts";
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
  OrganisationOwnership,
  Organisation,
  OrganisationPermission,
} from "../generated/schema";
import { getOrCreateWallet } from "./wallet";
import { upsertOrg, upsertOrgOwnership, upsertOrgPermission } from "./utils";

export enum EOID {
  Org,
  Ownership,
  Permission,
}

export function getOrgId({ type, orgId, wallet }: { type: EOID; orgId: BigInt; wallet?: string }): string {
  if (type == EOID.Org) return orgId.toString() + "-Organisation";
  else if (type == EOID.Ownership) return orgId.toString() + "-Organisation-Ownership";
  else if (type == EOID.Permission) return orgId.toString() + "-" + wallet + "-Organisation-Permission";
  else return "";
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

  const wallet = getOrCreateWallet(event.params.to);

  const orgId = event.params.orgId.toString() + "-Organisation";
  const orgOwnershipId = event.params.orgId.toString() + "-Organisation-Ownership";

  // create the organisation
  upsertOrg({ dbOrgId: orgId, orgId: event.params.orgId });

  // create the organisation ownership record
  upsertOrgOwnership({ dbOwnershipId: orgOwnershipId, owner: event.params.to, dbOrgId: orgId });
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

  const orgId = getOrgId({ type: EOID.Org, orgId: event.params.orgId });
  const orgPermissionId = getOrgId({
    type: EOID.Permission,
    orgId: event.params.orgId,
    wallet: event.params.account.toString(),
  });

  // create or update the organisation permission record
  upsertOrgPermission({
    dbPermissionId: orgPermissionId,
    orgId: event.params.orgId,
    wallet: event.params.account,
    permissionLevel: entity.newPermission,
  });
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

  const ownershipId = getOrgId({ type: EOID.Ownership, orgId: event.params.tokenId });
  const orgId = getOrgId({ type: EOID.Org, orgId: event.params.tokenId });

  // Update the Etch Ownership
  upsertOrgOwnership({ dbOwnershipId: ownershipId, owner: event.params.to, dbOrgId: orgId });
}

// No need to handle this events, but parsing them for completeness

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

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  const entity = new OrganisationContractOwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
