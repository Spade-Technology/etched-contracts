import { Address } from '@graphprotocol/graph-ts';
import { Wallet } from '../generated/schema';

export const getOrCreateWallet = (address: Address): Wallet => {
  let wallet = Wallet.load(address);

  if (wallet == null) {
    wallet = new Wallet(address);

    wallet.eoa = address.toString();

    wallet.save();
  }

  return wallet;
};
