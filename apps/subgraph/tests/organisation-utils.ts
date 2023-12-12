import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import { newMockEvent } from 'matchstick-as';
import {
  Approval,
  ApprovalForAll,
  OrganisationCreated,
  OwnershipTransferred,
  PermissionsUpdated,
  Transfer,
} from '../generated/Organisation/Organisation';

export function createApprovalEvent(owner: Address, approved: Address, tokenId: BigInt): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent());

  approvalEvent.parameters = new Array();

  approvalEvent.parameters.push(new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner)));
  approvalEvent.parameters.push(new ethereum.EventParam('approved', ethereum.Value.fromAddress(approved)));
  approvalEvent.parameters.push(new ethereum.EventParam('tokenId', ethereum.Value.fromUnsignedBigInt(tokenId)));

  return approvalEvent;
}

export function createApprovalForAllEvent(owner: Address, operator: Address, approved: boolean): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent());

  approvalForAllEvent.parameters = new Array();

  approvalForAllEvent.parameters.push(new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner)));
  approvalForAllEvent.parameters.push(new ethereum.EventParam('operator', ethereum.Value.fromAddress(operator)));
  approvalForAllEvent.parameters.push(new ethereum.EventParam('approved', ethereum.Value.fromBoolean(approved)));

  return approvalForAllEvent;
}

export function createOrganisationCreatedEvent(orgId: BigInt, to: Address): OrganisationCreated {
  let organisationCreatedEvent = changetype<OrganisationCreated>(newMockEvent());

  organisationCreatedEvent.parameters = new Array();

  organisationCreatedEvent.parameters.push(new ethereum.EventParam('orgId', ethereum.Value.fromUnsignedBigInt(orgId)));
  organisationCreatedEvent.parameters.push(new ethereum.EventParam('to', ethereum.Value.fromAddress(to)));

  return organisationCreatedEvent;
}

export function createOwnershipTransferredEvent(previousOwner: Address, newOwner: Address): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(newMockEvent());

  ownershipTransferredEvent.parameters = new Array();

  ownershipTransferredEvent.parameters.push(new ethereum.EventParam('previousOwner', ethereum.Value.fromAddress(previousOwner)));
  ownershipTransferredEvent.parameters.push(new ethereum.EventParam('newOwner', ethereum.Value.fromAddress(newOwner)));

  return ownershipTransferredEvent;
}

export function createPermissionsUpdatedEvent(orgId: BigInt, account: Address, newPermission: i32): PermissionsUpdated {
  let permissionsUpdatedEvent = changetype<PermissionsUpdated>(newMockEvent());

  permissionsUpdatedEvent.parameters = new Array();

  permissionsUpdatedEvent.parameters.push(new ethereum.EventParam('orgId', ethereum.Value.fromUnsignedBigInt(orgId)));
  permissionsUpdatedEvent.parameters.push(new ethereum.EventParam('account', ethereum.Value.fromAddress(account)));
  permissionsUpdatedEvent.parameters.push(new ethereum.EventParam('newPermission', ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newPermission))));

  return permissionsUpdatedEvent;
}

export function createTransferEvent(from: Address, to: Address, tokenId: BigInt): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent());

  transferEvent.parameters = new Array();

  transferEvent.parameters.push(new ethereum.EventParam('from', ethereum.Value.fromAddress(from)));
  transferEvent.parameters.push(new ethereum.EventParam('to', ethereum.Value.fromAddress(to)));
  transferEvent.parameters.push(new ethereum.EventParam('tokenId', ethereum.Value.fromUnsignedBigInt(tokenId)));

  return transferEvent;
}
