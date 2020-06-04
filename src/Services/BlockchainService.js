import React, { useState } from 'react';

import Blockchain from '../Blockchain/BlockChain';
import EC from 'elliptic';

const blockchainInstance = new Blockchain();
blockchainInstance.difficulty = 3;
blockchainInstance.miningReward = 100;

var walletKeys = [];
var myWallet;

const generateWalletKey = () => {
  const ec = new EC.ec('secp256k1');
  const key = ec.genKeyPair();

  walletKeys.push({
    keyObj: key,
    publicKey: key.getPublic('hex'),
    privateKey: key.getPrivate('hex')
  })

  blockchainInstance.minePendingTransaction(key.getPublic('hex'));
  myWallet = walletKeys[walletKeys.length-1];
};

blockchainInstance.minePendingTransaction('address 1');
blockchainInstance.minePendingTransaction('address 2');
blockchainInstance.minePendingTransaction('address 3');

// generateWalletKey();

const getPendingTransaction = () =>{
  return blockchainInstance.pendingTransaction;
}

const getBalance = () =>{
    return blockchainInstance.getBalanceOfAddress(myWallet.publicKey);
}

const minePendingTransaction = () => {
  blockchainInstance.minePendingTransaction(
    walletKeys[0].publicKey
  )
}

const getBlocks = () => {
  return blockchainInstance;
};

const addTransaction = (tx) =>{
  blockchainInstance.addTransaction(tx);
}



export {walletKeys, getBlocks, generateWalletKey, addTransaction, getPendingTransaction, minePendingTransaction, myWallet, getBalance};
