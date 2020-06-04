import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Homepage from './Components/Homepage/homepage'
import SettingPage from './Components/SettingPage/SettingPage'
import Navbar from './Components/Navbar/Navbar'
import CreateTransaction from './Components/CreateTransaction/CreateTransaction'
import PendingTransactions from './Components/PendingTransactions/PendingTransactions';

function App() {
  return (
    <div className="App"> 
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/settings" component={SettingPage}/>
        <Route exact path='/create' component={CreateTransaction}/>
        <Route exact path="/pendingTransactions" component={PendingTransactions}/>
      </Switch>
    </div>
  );
}

export default App;
