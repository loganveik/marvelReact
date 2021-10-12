import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home/Home';
import ProfilePage from '../src/pages/Profile/Profile';
import CharSearchPage from '../src/pages/CharSearch/CharSearch';
import ComicSearchPage from '../src/pages/ComicSearch/ComicSearch';
import WritePage from '../src/pages/WriteReview/WriteReview';
import ReviewsPage from '../src/pages/ViewReviews/ViewReviews';
import { onAuthStateChanged, getAuth } from '@firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/search/character" component={CharSearchPage} />
        <Route path="/search/comic" component={ComicSearchPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/view" component={ReviewsPage} />
      </Switch>
    </div>
  );
}

export default App;