import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion'
import PollResult from './PollResult'

class PollPage extends Component {

  render() {
    const { id } = this.props;
    return (
      <Fragment>
        <h1>Poll</h1>
        {/* <PollQuestion id={id} /> */}
        <PollResult id={id}/>
      </Fragment>
    );
  }
}

function mapStateToProps({}, props) {
  const { id } = props.match.params;
  return {
    id,
  };
}
export default connect(mapStateToProps)(PollPage);
