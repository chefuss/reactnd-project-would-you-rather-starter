import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Poll extends Component {
  render() {
    const { poll, author } = this.props
    return (
      <Fragment>
        <h3 className="user-name">{`${author.name} says:`}</h3>
        <div className="user-image">
          <img src={author.avatarURL} alt={author.name} />
        </div>
        <div className="poll-info">
          <h4>Would you rather ...</h4>
          <p className="poll-options">{`${poll.optionOne.text} or ${poll.optionTwo.text}`}</p>
          <Link to={`/poll/${poll.id}`}>
            <button className="btn">View Poll</button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ( { users, polls }, { id }) {
  const poll = polls[id]
  return {
    author: users[poll.author],
    poll
  }
}
export default connect(mapStateToProps)(Poll);