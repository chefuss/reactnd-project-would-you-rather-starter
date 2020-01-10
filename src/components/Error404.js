import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {
  render() {
    const { pollsId } = this.props;
    console.log(pollsId);
    return (
      <Fragment>
        <div className="error-container"></div>
        <div className="buttons">
          <Link to="/" className="btn">
            Go to home page
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Error404;