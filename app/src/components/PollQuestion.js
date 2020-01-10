import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/polls'
// import { withRouter } from 'react-router-dom';

class PollQuestion extends Component {
  state = {
    userAnswer: ''
  };
  handleChange = e => {
    const answer = e.target.value;
    this.setState({
      userAnswer: answer
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, id, authedUser } = this.props;
    const { userAnswer } = this.state;

    dispatch(
      handleAddAnswer({
        qid: id,
        answer: userAnswer,
        authedUser
      })
    );
    this.setState({
      userAnswer: ''
    });
    this.props.showResults();
  };
  render() {
    const { poll, author } = this.props;
    const { userAnswer } = this.state;
    return (
      <Fragment>
        <h1>Poll Question</h1>
        <div className="poll-container">
          <h3 className="user-name">{`${author.name} says:`}</h3>
          <div className="user-image">
            <img src={author.avatarURL} alt={author.name} />
          </div>
          <div className="poll-info">
            <h4>Would you rather ...</h4>
            <form className="poll-form" onSubmit={this.handleSubmit}>
              <div className="input_group">
                <input
                  type="radio"
                  name="options"
                  id="optionOne"
                  value="optionOne"
                  checked={userAnswer === 'optionOne'}
                  onChange={this.handleChange}
                  className="input_radio"
                />
                <label htmlFor="optionOne">{poll.optionOne.text}</label>
              </div>
              <div className="input_group">
                <input
                  type="radio"
                  name="options"
                  id="optionTwo"
                  value="optionTwo"
                  checked={userAnswer === 'optionTwo'}
                  onChange={this.handleChange}
                  className="input_radio"
                />{' '}
                <label htmlFor="optionTwo">{poll.optionTwo.text}</label>
              </div>
              <button className="btn submit" disabled={userAnswer === ''}>
                Vote
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({authedUser, users, polls }, props) {
  const poll = polls[props.id]
  return {
    authedUser,
    id : props.id,
    author: users[poll.author],
    poll
  };
}
export default connect(mapStateToProps)(PollQuestion);
