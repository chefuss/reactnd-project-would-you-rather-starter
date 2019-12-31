import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Home from './Home'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    console.log(this.props)
  }

  render() {
    return (
      <div className="container">
        <Home />
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
