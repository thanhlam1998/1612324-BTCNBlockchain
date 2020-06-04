import React, { useState } from 'react';

import Blockchain from '../Blockchain/BlockChain';
import EC from 'elliptic';

const blockchainInstance = new Blockchain();

const walletKeys = [];

blockchainInstance.difficulty = 1;
blockchainInstance.minePendingTransaction('my-wallet-address');

const getBlocks = () => {
  return blockchainInstance;
};

const addTransaction = (tx) =>{
  this.blockchainInstance.addTransaction(tx);
}

const generateWalletKey = () => {
  const ec = new EC('secp256k1');
  const key = ec.genKeyPair();

  this.walletKeys.push({
    keyObj: key,
    publicKey: key.getPublic('hex'),
    privateKey: key.getPrivate('hex')
  })
};

export {walletKeys, getBlocks, generateWalletKey};
