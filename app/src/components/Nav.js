import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleClick = (e) => {
    const {dispatch } = this.props
    dispatch(setAuthedUser(null));
  }
  render() {
    return (
      <header>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/newPoll" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderBoard" activeClassName="active">
                LeaderBoard
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav">
          <ul>
            <li>user component</li>
            <li>
              <NavLink to="/login" className="btn" onClick={this.handleClick}>
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  }
}
export default connect(mapStateToProps)(Nav);