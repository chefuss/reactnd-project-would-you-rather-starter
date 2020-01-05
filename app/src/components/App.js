import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Login from './Login'

import './App.css';
import PrivateApp from './PrivateApp';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props
    console.log(authedUser)
    return (
      <Router>
        <Fragment>
        {authedUser === null ? <Login /> : <PrivateApp />}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);