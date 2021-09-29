import React from 'react';
import './App.css';
import { Switch, Route, Router, Link } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import HomePage from '../src/pages/Home/Home';
import ProfilePage from '../src/pages/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
