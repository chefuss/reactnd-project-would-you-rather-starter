import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    console.log(users)
    return (
      <Fragment>
        <h1>LeaderBoard</h1>
        <ol className="leader-list">
          {users.map(id => (
            <li key={id} className="leader-container">
              <Leader id={id} />
            </li>
          ))}
        </ol>
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
