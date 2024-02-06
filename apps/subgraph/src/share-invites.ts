import {
  InviteAccepted as InviteAcceptedEvent,
  InviteDeclined as InviteDeclinedEvent,
  InviteRevoked as InviteRevokedEvent,
  InviteSent as InviteSentEvent,
} from '../generated/ShareInvites/ShareInvites';
import { InviteAccepted, InviteDeclined, InviteRevoked, InviteSent } from '../generated/schema';

export function handleInviteAccepted(event: InviteAcceptedEvent): void {
  let entity = new InviteAccepted(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.inviteId = event.params.inviteId;
  entity.acceptedBy = event.params.acceptedBy;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInviteDeclined(event: InviteDeclinedEvent): void {
  let entity = new InviteDeclined(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.inviteId = event.params.inviteId;
  entity.declinedBy = event.params.declinedBy;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInviteRevoked(event: InviteRevokedEvent): void {
  let entity = new InviteRevoked(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.inviteId = event.params.inviteId;
  entity.revokedBy = event.params.revokedBy;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInviteSent(event: InviteSentEvent): void {
  let entity = new InviteSent(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.externalOrgOrTeamId = event.params.externalOrgOrTeamId;
  entity.sourceEntityId = event.params.sourceEntityId;
  entity.baseSharePerms = event.params.maxSharePerms;
  entity.status = event.params.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
