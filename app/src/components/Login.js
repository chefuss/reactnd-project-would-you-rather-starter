import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    invalid: ''
  };
  handleChange = e => {
    const username = e.target.value;
    const { users } = this.props
    const validUser = users.some(user => user === username);
    if (validUser) {
      this.setState({
        username,
        invalid: false
      });
    } else {
      this.setState({
        invalid: true
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(username));
  };
  render() {
    const { username, invalid } = this.state
    return (
      <div className="login container">
        <h1 className="center">Welcome to Would You Rather ...</h1>
        <h2>Login to gain access</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input_group">
            <input
              type="text"
              name="username"
              id="username"
              className="input_text"
              placeholder="enter your username"
              onChange={this.handleChange}
            />
            {invalid === true && <p className="error">Invalid username</p>}
          </div>
          <button
            className="btn submit"
            type="submit"
            disabled={username === ''}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users: Object.keys(users)
  };
}
export default connect(mapStateToProps)(Login);