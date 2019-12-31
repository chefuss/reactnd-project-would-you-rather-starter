import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
  render() {
    const { authedUser, poll, author } = this.props;
    const totalVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length;
    console.log(this.props);
    return (
      <div className="poll-container">
        <h3 className="user-name">{`${author.name} says:`}</h3>
        <div className="user-image">
          <img src={author.avatarURL} alt={author.name} />
        </div>
        <div className="poll-info">
          <h4>Would you rather ...</h4>
          <div className="optionOne-container">
            <p className="poll-options-title">{`${poll.optionOne.text}`}</p>
            <div className="porcentage"></div>
            <p>{`${poll.optionOne.votes.length} out of ${totalVotes}`}</p>
          </div>
          <div className="optionOne-container">
            <p className="poll-options-title">{`${poll.optionTwo.text}`}</p>
            <div className="porcentage"></div>
            <p>{`${poll.optionTwo.votes.length} out of ${totalVotes}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, polls }, { id }) {
  const poll = polls[id];
  return {
    author: users[poll.author],
    poll
  };
}
export default connect(mapStateToProps)(PollResult);
