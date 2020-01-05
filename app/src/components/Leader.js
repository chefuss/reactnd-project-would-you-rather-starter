import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leader extends Component {
  render() {
    const { user, position } = this.props;
    const questionsAnswerd = Object.keys(user.answers)
    const questionsAsked = user.questions

    return (
      <div className="poll-container">
        <div className="position">{position}</div>
        <div className="content">
          <h3 className="user-name">{user.name}</h3>
          <div className="user-image">
            <img src={user.avatarURL} alt={user.name} />
          </div>
          <div className="poll-info">
            <p>Questions answerd: {questionsAnswerd.length}</p>
            <p>Questions asked: {questionsAsked.length}</p>
          </div>
        </div>
        <div className="score">
          <h3>Score</h3>
          {questionsAnswerd.length + questionsAsked.length}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id, position }) {
  const user = users[id]
  return {
    user,
  };
}
export default connect(mapStateToProps)(Leader);
