import { EtchENSCreated as EtchENSCreatedEvent, Transfer as TransferEvent } from '../generated/EtchENS/EtchENS';
import { EtchENS, EtchENSCreated, EtchENSTransfer } from '../generated/schema';
import { getOrCreateWallet } from './wallet';

export function handleEtchENSCreated (event: EtchENSCreatedEvent): void {
  let entity = new EtchENSCreated(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.tokenId = event.params.tokenId;
  entity.to = event.params.to;
  entity.name = event.params.name;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  const wallet = getOrCreateWallet(event.params.to);

  let etchEns = EtchENS.load(event.params.tokenId.toString() + '-ENS');
  if (etchEns == null) etchEns = new EtchENS(event.params.tokenId.toString() + '-ENS');

  etchEns.name = entity.name;
  etchEns.tokenId = entity.tokenId;
  etchEns.owner = wallet.id;

  etchEns.save();
}

export function handleENSTransfer (event: TransferEvent): void {
  let entity = new EtchENSTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  const wallet = getOrCreateWallet(event.params.to);

  let etchEns = EtchENS.load(event.params.tokenId.toString() + '-ENS');
  if (etchEns == null) return; // should never happen

  etchEns.owner = wallet.id;

  etchEns.save();
}
