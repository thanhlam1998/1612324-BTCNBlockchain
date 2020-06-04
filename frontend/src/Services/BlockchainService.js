import React, { useState } from 'react';

import Blockchain from '../Blockchain/BlockChain';
import EC from 'elliptic';

const blockchainInstance = new Blockchain();

var walletKeys = [];

const generateWalletKey = () => {
  const ec = new EC.ec('secp256k1');
  const key = ec.genKeyPair();

  walletKeys.push({
    keyObj: key,
    publicKey: key.getPublic('hex'),
    privateKey: key.getPrivate('hex')
  })
};

generateWalletKey();
blockchainInstance.difficulty = 1;
blockchainInstance.minePendingTransaction('my-wallet-address');

const getPendingTransaction = () =>{
  return blockchainInstance.pendingTransaction;
}

const minePendingTransaction = () => {
  blockchainInstance.minePendingTransaction(
    walletKeys[0].publicKey
  )
  console.log(blockchainInstance)
}

const getBlocks = () => {
  return blockchainInstance;
};

const addTransaction = (tx) =>{
  blockchainInstance.addTransaction(tx);
}



export {walletKeys, getBlocks, generateWalletKey, addTransaction, getPendingTransaction, minePendingTransaction};
