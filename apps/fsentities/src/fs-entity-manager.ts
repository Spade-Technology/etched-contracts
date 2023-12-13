import { getOrCreateWallet } from "./wallet"
import {
  CommentOnEntity as CommentOnEntityEvent,
  EntityBasePermissionsChanged as EntityBasePermissionsChangedEvent,
  EntityCreated as EntityCreatedEvent,
  EntityIndividualUserPermissionsChanged as EntityIndividualUserPermissionsChangedEvent,
  EntityMetaChanged as EntityMetaChangedEvent,
  EntityMoved as EntityMovedEvent,
  EntityShareMaxPermissionsChanged as EntityShareMaxPermissionsChangedEvent,
  EntityTransferredToOrganization as EntityTransferredToOrganizationEvent,
  OrganizationTransferredToIndividual as OrganizationTransferredToIndividualEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/FSEntityManager/FSEntityManager"
import {
  FSEntity,
  CommentOnEntity,
  EntityBasePermissionsChanged,
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

export function handleCommentOnEntity (event: CommentOnEntityEvent): void {
  let entity = new CommentOnEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._commentIpfsCid = event.params._commentIpfsCid
  entity._timestamp = event.params._timestamp
  entity._commentCount = event.params._commentCount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityBasePermissionsChanged (
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

export function handleEntityCreated (event: EntityCreatedEvent): void {
  let wallet = getOrCreateWallet(event.params._to);

  let entity = new FSEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._to = event.params._to
  entity._parentId = event.params._parentId
  entity._name = event.params._name
  entity._type = event.params._type
  entity._basePermissions = event.params._basePermissions
  entity.owner = wallet.id

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityIndividualUserPermissionsChanged (
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

export function handleEntityMetaChanged (event: EntityMetaChangedEvent): void {
  let entity = new EntityMetaChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._creator = event.params._creator
  entity._documentName = event.params._documentName
  entity._documentDescription = event.params._documentDescription
  entity._ipfsCid = event.params._ipfsCid
  entity._commentsCount = event.params._commentsCount
  entity._timestamp = event.params._timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityMoved (event: EntityMovedEvent): void {
  let entity = new EntityMoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._entityId = event.params._entityId
  entity._fromParentId = event.params._fromParentId
  entity._toParentId = event.params._toParentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEntityShareMaxPermissionsChanged (
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

export function handleEntityTransferredToOrganization (
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

export function handleOrganizationTransferredToIndividual (
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

export function handleOwnershipTransferred (
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

export function handleTransfer (event: TransferEvent): void {
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
