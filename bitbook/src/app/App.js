import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProfilePage from './profile/ProfilePage';
import PeoplePage from './people/PeoplePage';
import FeedPage from './feed/FeedPage';
import SingleFeedPage from './singleFeed/SingleFeedPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/Profile' component={ProfilePage} />
          <Route path='/People/:id' component={ProfilePage} />
          <Route exact path='/People' component={PeoplePage} />
          <Route exact path='/' component={FeedPage} />
          <Route path='/SingleFeed/:type/:id' component={SingleFeedPage} />
        </Switch>


      </div>
    );
  }
}

export default App;
