import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav navbar-dark bg-dark ">
      <NavLink className="navbar-brand ml-3 font-weight-bold" to="/">
        1612324 - EthWallet
      </NavLink>

      <ul className="navbar-nav ml-auto mr-2">
        <li>
          <NavLink className="btn btn-outline-light mr-3" to="/settings">
            Settings
          </NavLink>
          <NavLink className="btn btn-outline-light mr-3" to="/create">
            Create Transaction
          </NavLink>
          <NavLink className="btn btn-outline-light mr-3" to="/pendingTransactions">
            Pending Transaction
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
