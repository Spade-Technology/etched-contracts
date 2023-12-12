import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  InviteAccepted,
  InviteDeclined,
  InviteRevoked,
  InviteSent,
  OwnershipTransferred,
  Transfer
} from "../generated/ShareInvites/ShareInvites"

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

export function createInviteAcceptedEvent(
  inviteId: BigInt,
  acceptedBy: Address
): InviteAccepted {
  let inviteAcceptedEvent = changetype<InviteAccepted>(newMockEvent())

  inviteAcceptedEvent.parameters = new Array()

  inviteAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "inviteId",
      ethereum.Value.fromUnsignedBigInt(inviteId)
    )
  )
  inviteAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedBy",
      ethereum.Value.fromAddress(acceptedBy)
    )
  )

  return inviteAcceptedEvent
}

export function createInviteDeclinedEvent(
  inviteId: BigInt,
  declinedBy: Address
): InviteDeclined {
  let inviteDeclinedEvent = changetype<InviteDeclined>(newMockEvent())

  inviteDeclinedEvent.parameters = new Array()

  inviteDeclinedEvent.parameters.push(
    new ethereum.EventParam(
      "inviteId",
      ethereum.Value.fromUnsignedBigInt(inviteId)
    )
  )
  inviteDeclinedEvent.parameters.push(
    new ethereum.EventParam(
      "declinedBy",
      ethereum.Value.fromAddress(declinedBy)
    )
  )

  return inviteDeclinedEvent
}

export function createInviteRevokedEvent(
  inviteId: BigInt,
  revokedBy: Address
): InviteRevoked {
  let inviteRevokedEvent = changetype<InviteRevoked>(newMockEvent())

  inviteRevokedEvent.parameters = new Array()

  inviteRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "inviteId",
      ethereum.Value.fromUnsignedBigInt(inviteId)
    )
  )
  inviteRevokedEvent.parameters.push(
    new ethereum.EventParam("revokedBy", ethereum.Value.fromAddress(revokedBy))
  )

  return inviteRevokedEvent
}

export function createInviteSentEvent(
  from: Address,
  externalOrgOrTeamId: BigInt,
  sourceEntityId: BigInt,
  baseSharePerms: i32,
  status: i32
): InviteSent {
  let inviteSentEvent = changetype<InviteSent>(newMockEvent())

  inviteSentEvent.parameters = new Array()

  inviteSentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  inviteSentEvent.parameters.push(
    new ethereum.EventParam(
      "externalOrgOrTeamId",
      ethereum.Value.fromUnsignedBigInt(externalOrgOrTeamId)
    )
  )
  inviteSentEvent.parameters.push(
    new ethereum.EventParam(
      "sourceEntityId",
      ethereum.Value.fromUnsignedBigInt(sourceEntityId)
    )
  )
  inviteSentEvent.parameters.push(
    new ethereum.EventParam(
      "baseSharePerms",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(baseSharePerms))
    )
  )
  inviteSentEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return inviteSentEvent
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
