import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { generateWalletKey, walletKeys } from '../../Services/BlockchainService';

const Navbar = () => {
  const [isWalletCreated, setIsWalletCreated] = useState(false);

  const createWallet = () => {
    generateWalletKey();
    const myWallet = walletKeys[walletKeys.length-1]
    setIsWalletCreated(true);
    alert("Your wallet is created");
    alert(`Your public address is: ${myWallet.publicKey}`)
    alert(`Your private key is: ${myWallet.privateKey}`)
  }

  return (
    <nav className="nav navbar-dark bg-dark ">
      <NavLink className="navbar-brand ml-3 font-weight-bold" to="/">
        1612324 - EthWallet
      </NavLink>

      <ul className="navbar-nav ml-auto mr-2">
        {isWalletCreated === false ? (
          <li>
            <NavLink className="btn btn-outline-light mr-3" to="/" onClick={() => createWallet()}>
              Create Wallet
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink className="btn btn-outline-light mr-3" to="/settings">
              Settings
            </NavLink>
            <NavLink className="btn btn-outline-light mr-3" to="/create">
              Create Transaction
            </NavLink>
            <NavLink
              className="btn btn-outline-light mr-3"
              to="/pendingTransactions">
              Pending Transaction
            </NavLink>
            <NavLink
              className="btn btn-outline-light mr-3"
              to="/mywallet">
              My wallet
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
