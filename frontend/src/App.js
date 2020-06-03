import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/homepage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
