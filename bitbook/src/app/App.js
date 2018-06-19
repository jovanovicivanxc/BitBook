import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProfilePage from './profile/ProfilePage';
import ProfileOtherPage from './profileOther/ProfileOtherPage';
import PeoplePage from './people/PeoplePage';
import FeedPage from './feed/FeedPage';
import SingleFeedPage from './singleFeed/SingleFeedPage';
import LoginPage from './login/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('user')) {
      this.setState({
        logged: true,
      })
    }
  }

  render() {
    if (this.state.logged) {
      return (
        <div className="App">
          <Header />
          < Switch >
            <Route exact path='/Profile' component={ProfilePage} />
            <Route path='/People/:id' component={ProfileOtherPage} />
            <Route exact path='/People' component={PeoplePage} />
            <Route exact path='/' component={FeedPage} />
            <Route path='/SingleFeed/:type/:id' component={SingleFeedPage} />
          </Switch>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Header />
          < Switch >
            <Route path='/' component={LoginPage} />
          </Switch>
        </div>
      )
    }
  }
}


export default App;
