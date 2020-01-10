import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Home from './Home';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import PollPage from './PollPage';
import Nav from './Nav';
import PollResult from './PollResult'
import Error404 from './Error404'
// import LoadingBar from 'react-redux-loading'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          {this.props.loading === true ? null : (
            <main className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/newPoll" component={NewPoll} />
                <Route path="/leaderBoard" component={LeaderBoard} />
                <Route path="/poll/:id" component={PollPage} />
                <Route path="/poll-result/:id" component={PollResult} />
                <Route component={Error404} />
              </Switch>
            </main>
          )}
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
