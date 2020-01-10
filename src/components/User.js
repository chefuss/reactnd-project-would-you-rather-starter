import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <div className="user-image">
          <img src={user.avatarURL} alt={user.name} />
        </div>
        <p className="user-name">{user.name}</p>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user
  };
}
export default connect(mapStateToProps)(User);
