import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollQuestion extends Component {
  render() {
    const { poll, author } = this.props;
    console.log(this.props);
    return (
      <div className="poll-container">
        <h3 className="user-name">{`${author.name} says:`}</h3>
        <div className="user-image">
          <img src={author.avatarURL} alt={author.name} />
        </div>
        <div className="poll-info">
          <h4>Would you rather ...</h4>
          <form className="poll-form">
            <div className="poll-option">
              <input type="radio" name="options" id="optionOne" />
              <label htmlFor="optionOne">{poll.optionOne.text}</label>
            </div>
            <div className="poll-option">
              <input type="radio" name="options" id="optionTwo" />
              <label htmlFor="optionTwo">{poll.optionTwo.text}</label>
            </div>
            <button className="btn submit">Vote</button>
          </form>
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
export default connect(mapStateToProps)(PollQuestion);