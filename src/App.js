import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Projetos from './pages/Projetos';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/projects" component={ Projetos } />
      </Switch>
    </div>
  );
}

export default App;
