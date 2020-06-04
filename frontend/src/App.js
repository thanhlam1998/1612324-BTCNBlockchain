import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Homepage from './Components/Homepage/homepage'
import SettingPage from './Components/SettingPage/SettingPage'

function App() {
  return (
    <div className="App">
       <nav className="nav navbar-dark bg-dark ">
                <a className="navbar-brand ml-3 font-weight-bold" href="/">1612324 - EthWallet</a>

                <ul className="navbar-nav ml-auto mr-2">
                    <li><NavLink className="btn btn-outline-light" to="/settings">Settings</NavLink></li>
                </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/settings" component={SettingPage}/>
      </Switch>
    </div>
  );
}

export default App;
