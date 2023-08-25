import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OrganisationCreated as OrganisationCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermissionsUpdated as PermissionsUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Organisation/Organisation"
import {
  Approval,
  ApprovalForAll,
  OrganisationCreated,
  OwnershipTransferred,
  PermissionsUpdated,
  Transfer
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

export function handleOrganisationCreated(
  event: OrganisationCreatedEvent
): void {
  let entity = new OrganisationCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orgId = event.params.orgId
  entity.to = event.params.to

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
  entity.orgId = event.params.orgId
  entity.account = event.params.account
  entity.newPermission = event.params.newPermission

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
