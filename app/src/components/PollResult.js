import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
  render() {
    const {authedUser, poll, author, optionOne, optionTwo } = this.props;
    const totalVotes = optionOne.length + optionTwo.length;
    //the width is (100% / totalVotes ) / option
    const optionOneWidth = optionOne.length > 0 ? (totalVotes / optionOne.length) * 100 : 0;
    console.log(optionOneWidth);
    const optionTwoWidth = optionTwo.length > 0 ? (totalVotes / optionTwo.length) * 100 : 0;
    console.log(optionTwoWidth)
    const findOne = optionOne.filter(userId => userId === authedUser);
    const findTwo = optionTwo.filter(userId => userId === authedUser);


    return (
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
