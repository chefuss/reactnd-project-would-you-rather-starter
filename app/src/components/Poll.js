import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { formatQuestion } from '../utils/_DATA'

class Poll extends Component {
  render() {
    const { poll, author } = this.props
    console.log(this.props)
    return (
      <div className="poll-container">
        <h3 className="user-name">{author.name}</h3>
        <div className="user-image">
          <img src={author.avatarURL} alt={author.name} />
        </div>
        <div className="poll-info">
          <h4>Would you rather ...</h4>
          <p className="poll-options">{`${poll.optionOne.text} or ${poll.optionTwo.text}`}</p>
        </div>
        <button className="btn">View Poll</button>
      </div>
    );
  }
}

function mapStateToProps ( { users, polls }, { id }) {
  const poll = polls[id]
  return {
    author : users[poll.author],
    poll
  }
}
export default connect(mapStateToProps)(Poll);