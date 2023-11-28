import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CommentOnEntity as CommentOnEntityEvent,
  EntityBasePermissionsChanged as EntityBasePermissionsChangedEvent,
  EntityBulkUserPermissionsChanged as EntityBulkUserPermissionsChangedEvent,
  EntityCreated as EntityCreatedEvent,
  EntityIndividualUserPermissionsChanged as EntityIndividualUserPermissionsChangedEvent,
  EntityMetaChanged as EntityMetaChangedEvent,
  EntityMoved as EntityMovedEvent,
  EntityShareMaxPermissionsChanged as EntityShareMaxPermissionsChangedEvent,
  EntityTransferredToOrganization as EntityTransferredToOrganizationEvent,
  OrganizationTransferredToIndividual as OrganizationTransferredToIndividualEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/EntityManager/EntityManager"
import {
  Approval,
  ApprovalForAll,
  CommentOnEntity,
  EntityBasePermissionsChanged,
  EntityBulkUserPermissionsChanged,
  EntityCreated,
  EntityIndividualUserPermissionsChanged,
  EntityMetaChanged,
  EntityMoved,
  EntityShareMaxPermissionsChanged,
  EntityTransferredToOrganization,
  OrganizationTransferredToIndividual,
  OwnershipTransferred,
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

export function handleCommentOnEntity(event: CommentOnEntityEvent): void {
  let entity = new CommentOnEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._commentId = event.params._commentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityBasePermissionsChanged(
  event: EntityBasePermissionsChangedEvent
): void {
  let entity = new EntityBasePermissionsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._newPermissions = event.params._newPermissions

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityBulkUserPermissionsChanged(
  event: EntityBulkUserPermissionsChangedEvent
): void {
  let entity = new EntityBulkUserPermissionsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._permissions = event.params._permissions

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityCreated(event: EntityCreatedEvent): void {
  let entity = new EntityCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._type = event.params._type
  entity._to = event.params._to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityIndividualUserPermissionsChanged(
  event: EntityIndividualUserPermissionsChangedEvent
): void {
  let entity = new EntityIndividualUserPermissionsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._user = event.params._user
  entity._permissions = event.params._permissions

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityMetaChanged(event: EntityMetaChangedEvent): void {
  let entity = new EntityMetaChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity.meta_creator = event.params.meta.creator
  entity.meta_documentName = event.params.meta.documentName
  entity.meta_documentDescription = event.params.meta.documentDescription
  entity.meta_ipfsCid = event.params.meta.ipfsCid
  entity.meta_commentsCount = event.params.meta.commentsCount
  entity.meta_timestamp = event.params.meta.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityMoved(event: EntityMovedEvent): void {
  let entity = new EntityMoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._entityType = event.params._entityType
  entity._fromParentId = event.params._fromParentId
  entity._toParentId = event.params._toParentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityShareMaxPermissionsChanged(
  event: EntityShareMaxPermissionsChangedEvent
): void {
  let entity = new EntityShareMaxPermissionsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._newPermissions = event.params._newPermissions

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityTransferredToOrganization(
  event: EntityTransferredToOrganizationEvent
): void {
  let entity = new EntityTransferredToOrganization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._orgId = event.params._orgId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrganizationTransferredToIndividual(
  event: OrganizationTransferredToIndividualEvent
): void {
  let entity = new OrganizationTransferredToIndividual(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._userId = event.params._userId

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
