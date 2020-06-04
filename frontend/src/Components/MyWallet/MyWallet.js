import React from 'react';
import {myWallet, getBalance} from '../../Services/BlockchainService'
import './MyWallet.scss'

const MyWallet = () => {
    console.log(myWallet.publicKey)
  return (
    <div className="card myWallet">
      <div className="card-header">YOUR WALLET</div>
      <span>Your ID</span>
      <br />
      <div className="text-truncate">
        <small>{myWallet.publicKey}</small>
      </div>
      <hr/>
      <span>Your balance</span>
      <br />
      <div className="text-truncate">
        <small>{getBalance()}</small>
      </div>
    </div>
  );
};

export default MyWallet;
