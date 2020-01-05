import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion'
import PollResult from './PollResult'

class PollPage extends Component {
  state = {
    toResult: false
  };
  //todo: we can set a state for before the user has answer, and another when it has not.
  //then if one show PollQuestion, if two show PollResult
  //in that case we have to bring all the data that PollResults needs.
  showResults = e => {
    this.setState({
      toResult: true
    });
  };
  render() {
    const { id } = this.props;
    const { toResult } = this.state;

    return (
      <div className="poll-page">
        {toResult === false ? (
          <PollQuestion id={id} showResults={this.showResults} />
        ) : (
          <PollResult id={id} />
        )}
      </div>
    );
  }
}

function mapStateToProps({authedUser}, props) {
  const { id } = props.match.params;
  return {
    id,
    authedUser
  };
}
export default connect(mapStateToProps)(PollPage);
