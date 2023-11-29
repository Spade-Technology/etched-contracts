import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
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
} from "../generated/EntityManager/EntityManager"

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

export function createCommentOnEntityEvent(
  _entityId: BigInt,
  _commentId: BigInt
): CommentOnEntity {
  let commentOnEntityEvent = changetype<CommentOnEntity>(newMockEvent())

  commentOnEntityEvent.parameters = new Array()

  commentOnEntityEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  commentOnEntityEvent.parameters.push(
    new ethereum.EventParam(
      "_commentId",
      ethereum.Value.fromUnsignedBigInt(_commentId)
    )
  )

  return commentOnEntityEvent
}

export function createEntityBasePermissionsChangedEvent(
  _entityId: BigInt,
  _newPermissions: i32
): EntityBasePermissionsChanged {
  let entityBasePermissionsChangedEvent = changetype<
    EntityBasePermissionsChanged
  >(newMockEvent())

  entityBasePermissionsChangedEvent.parameters = new Array()

  entityBasePermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityBasePermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newPermissions",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_newPermissions))
    )
  )

  return entityBasePermissionsChangedEvent
}

export function createEntityCreatedEvent(
  _entityId: BigInt,
  _type: i32,
  _to: Address
): EntityCreated {
  let entityCreatedEvent = changetype<EntityCreated>(newMockEvent())

  entityCreatedEvent.parameters = new Array()

  entityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type))
    )
  )
  entityCreatedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )

  return entityCreatedEvent
}

export function createEntityIndividualUserPermissionsChangedEvent(
  _entityId: BigInt,
  _user: Address,
  _permissions: i32
): EntityIndividualUserPermissionsChanged {
  let entityIndividualUserPermissionsChangedEvent = changetype<
    EntityIndividualUserPermissionsChanged
  >(newMockEvent())

  entityIndividualUserPermissionsChangedEvent.parameters = new Array()

  entityIndividualUserPermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityIndividualUserPermissionsChangedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  entityIndividualUserPermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_permissions",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_permissions))
    )
  )

  return entityIndividualUserPermissionsChangedEvent
}

export function createEntityMetaChangedEvent(
  _entityId: BigInt,
  meta: ethereum.Tuple
): EntityMetaChanged {
  let entityMetaChangedEvent = changetype<EntityMetaChanged>(newMockEvent())

  entityMetaChangedEvent.parameters = new Array()

  entityMetaChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityMetaChangedEvent.parameters.push(
    new ethereum.EventParam("meta", ethereum.Value.fromTuple(meta))
  )

  return entityMetaChangedEvent
}

export function createEntityMovedEvent(
  _entityId: BigInt,
  _entityType: i32,
  _fromParentId: BigInt,
  _toParentId: BigInt
): EntityMoved {
  let entityMovedEvent = changetype<EntityMoved>(newMockEvent())

  entityMovedEvent.parameters = new Array()

  entityMovedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityMovedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_entityType))
    )
  )
  entityMovedEvent.parameters.push(
    new ethereum.EventParam(
      "_fromParentId",
      ethereum.Value.fromUnsignedBigInt(_fromParentId)
    )
  )
  entityMovedEvent.parameters.push(
    new ethereum.EventParam(
      "_toParentId",
      ethereum.Value.fromUnsignedBigInt(_toParentId)
    )
  )

  return entityMovedEvent
}

export function createEntityShareMaxPermissionsChangedEvent(
  _entityId: BigInt,
  _newPermissions: i32
): EntityShareMaxPermissionsChanged {
  let entityShareMaxPermissionsChangedEvent = changetype<
    EntityShareMaxPermissionsChanged
  >(newMockEvent())

  entityShareMaxPermissionsChangedEvent.parameters = new Array()

  entityShareMaxPermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityShareMaxPermissionsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newPermissions",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_newPermissions))
    )
  )

  return entityShareMaxPermissionsChangedEvent
}

export function createEntityTransferredToOrganizationEvent(
  _entityId: BigInt,
  _orgId: BigInt
): EntityTransferredToOrganization {
  let entityTransferredToOrganizationEvent = changetype<
    EntityTransferredToOrganization
  >(newMockEvent())

  entityTransferredToOrganizationEvent.parameters = new Array()

  entityTransferredToOrganizationEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  entityTransferredToOrganizationEvent.parameters.push(
    new ethereum.EventParam("_orgId", ethereum.Value.fromUnsignedBigInt(_orgId))
  )

  return entityTransferredToOrganizationEvent
}

export function createOrganizationTransferredToIndividualEvent(
  _entityId: BigInt,
  _userId: Address
): OrganizationTransferredToIndividual {
  let organizationTransferredToIndividualEvent = changetype<
    OrganizationTransferredToIndividual
  >(newMockEvent())

  organizationTransferredToIndividualEvent.parameters = new Array()

  organizationTransferredToIndividualEvent.parameters.push(
    new ethereum.EventParam(
      "_entityId",
      ethereum.Value.fromUnsignedBigInt(_entityId)
    )
  )
  organizationTransferredToIndividualEvent.parameters.push(
    new ethereum.EventParam("_userId", ethereum.Value.fromAddress(_userId))
  )

  return organizationTransferredToIndividualEvent
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
