import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Home extends Component {
  state = {
    showing: 'Answered Questions'
  };
  handleClick = e => {
    const state = e.target.textContent;
    console.log(state);
    this.setState({
      showing: state
    });
  };
  render() {
    const { hasAnswerd, hasentAnswerd } = this.props;
    const { showing } = this.state;
    console.log(hasentAnswerd.length)
    return (
      <Fragment>
        <h3>
          <span
            onClick={this.handleClick}
            className={showing === 'Unanswered Questions' ? 'active' : ''}
          >
            Unanswered Questions
          </span>{' '}
          /{' '}
          <span
            onClick={this.handleClick}
            className={showing === 'Answered Questions' ? 'active' : ''}
          >
            Answered Questions
          </span>
        </h3>
        {showing === 'Answered Questions' && (
          <Fragment>
            <ul className="poll-list">
              {hasAnswerd.length === 0 && (
                <li className="notice">You have not Answerd Questions yet!!</li>
              )}
              {hasAnswerd.length > 0 &&
                hasAnswerd.map(id => (
                  <li key={id}>
                    <Poll id={id} />
                  </li>
                ))}
            </ul>
          </Fragment>
        )}
        {showing === 'Unanswered Questions' && (
          <Fragment>
            <ul className="poll-list">
              {hasentAnswerd.length === 0 && (
                <li className="notice">You have no Unanswered Questions!!</li>
              )}
              {hasentAnswerd.length > 0 && (
                hasentAnswerd.map(id => (
                <li key={id}>
                  <Poll id={id} />
                </li>
                ))
              )}
            </ul>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  const hasAnswerd = Object.keys(polls).filter((id) => users[authedUser].answers.hasOwnProperty(id)).sort((a,b) => polls[b].timestamp - polls[a].timestamp)
  const hasentAnswerd = Object.keys(polls)
    .filter(id => !users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => polls[b].timestamp - polls[a].timestamp);
  return {
    pollsIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    ),
    hasAnswerd,
    hasentAnswerd
  };
}
export default connect(mapStateToProps)(Home);
