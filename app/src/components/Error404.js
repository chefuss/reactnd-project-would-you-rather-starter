import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Error404 extends Component {
  render() {
    const { pollsId } = this.props;
    console.log(pollsId);
    return (
      <Fragment>
        <div className="error-container"></div>
        <Link to='/' className="btn">
          Go to home page
        </Link>
      </Fragment>
    );
  }
}

function mapStateToProps({ polls }) {
  const pollsId = Object.keys(polls).sort((a, b) => polls[b].timestamp - polls[a].timestamp);
  return {
    pollsId
  }
}
export default connect(mapStateToProps)(Error404);
