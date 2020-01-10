import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeAuthedUser } from '../actions/authedUser';
import User from './User'

class Nav extends Component {
  handleClick = (e) => {
    const {dispatch } = this.props
    dispatch(removeAuthedUser());
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
            <li>
              <User />
            </li>
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