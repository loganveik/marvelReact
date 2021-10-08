import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Nav from '../src/components/Nav/Nav';
import HomePage from '../src/pages/Home/Home';
import ProfilePage from '../src/pages/Profile/Profile';
import CharSearchPage from '../src/pages/CharSearch/CharSearch';
import ComicSearchPage from '../src/pages/ComicSearch/ComicSearch';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/search/character" component={CharSearchPage} />
        <Route path="/search/comic" component={ComicSearchPage} />
      </Switch>
    </div>
  );
}

export default App;
