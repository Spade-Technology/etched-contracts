import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermissionsUpdated as PermissionsUpdatedEvent,
  TeamCreated as TeamCreatedEvent,
  Transfer as TransferEvent,
  TransferToOrganisation as TransferToOrganisationEvent
} from "../generated/Team/Team"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  PermissionsUpdated,
  TeamCreated,
  Transfer,
  TransferToOrganisation
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionsUpdated(event: PermissionsUpdatedEvent): void {
  let entity = new PermissionsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.teamId = event.params.teamId
  entity.account = event.params.account
  entity.newPermission = event.params.newPermission

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTeamCreated(event: TeamCreatedEvent): void {
  let entity = new TeamCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.teamId = event.params.teamId
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferToOrganisation(
  event: TransferToOrganisationEvent
): void {
  let entity = new TransferToOrganisation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.teamId = event.params.teamId
  entity.orgId = event.params.orgId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
