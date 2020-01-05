import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <h1>LeaderBoard</h1>
        <ul className="leader-list">
          {users.map((id, index) => (
            <li key={id} className="leader-container">
              <Leader id={id} position={index + 1} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  
  const userOrder = Object.keys(users).sort(
    (a, b) => {
      const questionsAnswerdA = Object.keys(users[a].answers);
      const questionsAnswerdB = Object.keys(users[b].answers);
      return (questionsAnswerdB.length + users[b].questions.length) - (questionsAnswerdA.length + users[a].questions.length)
    }
  )
  return {
    users: userOrder
  };
}

export default connect(mapStateToProps)(LeaderBoard);
