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
          <Route path='/People' component={PeoplePage} />
          <Route path='/Feed' component={FeedPage} />
          <Route path='/SingleFeed' component={SingleFeedPage} />

        </Switch>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
