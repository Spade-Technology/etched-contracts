import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  PermissionsUpdated,
  TeamCreated,
  Transfer,
  TransferToOrganisation
} from "../generated/Team/Team"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPermissionsUpdatedEvent(
  teamId: BigInt,
  account: Address,
  newPermission: i32
): PermissionsUpdated {
  let permissionsUpdatedEvent = changetype<PermissionsUpdated>(newMockEvent())

  permissionsUpdatedEvent.parameters = new Array()

  permissionsUpdatedEvent.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  permissionsUpdatedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  permissionsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPermission",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newPermission))
    )
  )

  return permissionsUpdatedEvent
}

export function createTeamCreatedEvent(
  teamId: BigInt,
  to: Address
): TeamCreated {
  let teamCreatedEvent = changetype<TeamCreated>(newMockEvent())

  teamCreatedEvent.parameters = new Array()

  teamCreatedEvent.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  teamCreatedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return teamCreatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createTransferToOrganisationEvent(
  teamId: BigInt,
  orgId: BigInt
): TransferToOrganisation {
  let transferToOrganisationEvent = changetype<TransferToOrganisation>(
    newMockEvent()
  )

  transferToOrganisationEvent.parameters = new Array()

  transferToOrganisationEvent.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  transferToOrganisationEvent.parameters.push(
    new ethereum.EventParam("orgId", ethereum.Value.fromUnsignedBigInt(orgId))
  )

  return transferToOrganisationEvent
}
