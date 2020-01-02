import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Home from './Home'
import PollPage from './PollPage';

//import login

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
      {
        this.props.loading === true ? null : (
          <PollPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
        )
      }
        
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
