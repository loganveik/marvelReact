import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../src/pages/Home/Home';
import ProfilePage from '../src/pages/Profile/Profile';
import CharSearchPage from '../src/pages/CharSearch/CharSearch';
import ComicSearchPage from '../src/pages/ComicSearch/ComicSearch';
import WritePage from '../src/pages/WriteReview/WriteReview';
import ReviewsPage from '../src/pages/ViewReviews/ViewReviews';

import AuthContextProvider, { useAuth } from './context/AuthContext';

const App = () => {

  function ProtectedRoute(props) {
    const { currentUser } = useAuth();

    const { path } = props;

    if (path == "/") {
      return currentUser ? (
        <Redirect to={"/profile"} />
      ) : (
          <Route {...props} />
        )
    }

    return currentUser ? (
      <Route {...props} />
    ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: path }
        }}
        />
      )
  }

  return (
    <div className="app">
      <AuthContextProvider>
        <Switch>
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <ProtectedRoute path="/search/character" component={CharSearchPage} />
          <ProtectedRoute path="/search/comic" component={ComicSearchPage} />
          <ProtectedRoute path="/write" component={WritePage} />
          <ProtectedRoute path="/view" component={ReviewsPage} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
