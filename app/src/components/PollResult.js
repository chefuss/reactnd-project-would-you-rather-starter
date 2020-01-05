import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
  render() {
    const { authedUser, poll, author, optionOne, optionTwo } = this.props;
    const totalVotes = optionOne.length + optionTwo.length;
    const optionOneWidth =
      optionOne.length > 0 ? (optionOne.length * 100) / totalVotes : 0;
    const optionTwoWidth =
      optionTwo.length > 0 ? (optionTwo.length * 100) / totalVotes : 0;
    const findOne = optionOne.filter(userId => userId === authedUser);
    const findTwo = optionTwo.filter(userId => userId === authedUser);

    return (
      <Fragment>
        <h1>Poll Results</h1>
        <div className="poll-container">
          <h3 className="user-name">{`${author.name} says:`}</h3>
          <div className="user-image">
            <img src={author.avatarURL} alt={author.name} />
          </div>
          <div className="poll-info">
            <h4>Would you rather ...</h4>
            <div
              className={
                'option-container' + (findOne.length > 0 ? ' selected' : '')
              }
            >
              <p className="poll-options-title">{`${poll.optionOne.text}`}</p>
              <div className="percentage">
                <span
                  className="votes"
                  style={{ width: optionOneWidth + '%' }}
                ></span>
              </div>
              <p>{`${poll.optionOne.votes.length} out of ${totalVotes}`}</p>
            </div>
            <div
              className={
                'option-container' + (findTwo.length > 0 ? ' selected' : '')
              }
            >
              <p className="poll-options-title">{`${poll.optionTwo.text}`}</p>
              <div className="percentage">
                <span
                  className="votes"
                  style={{ width: optionTwoWidth + '%' }}
                ></span>
              </div>
              <p>{`${poll.optionTwo.votes.length} out of ${totalVotes}`}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users, polls }, { id }) {
  const poll = polls[id];  
  return {
    authedUser,
    author: users[poll.author],
    poll,
    optionOne: poll.optionOne.votes,
    optionTwo: poll.optionTwo.votes,
  };
}
export default connect(mapStateToProps)(PollResult);
