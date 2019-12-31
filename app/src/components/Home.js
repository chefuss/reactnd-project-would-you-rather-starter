import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from './Poll';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Answered Questions</h3>
        <ul className="poll-list">
          {this.props.pollsIds.map(id => (
            <li key={id}>
              <Poll id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ polls }) {
  return {
    pollsIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    )
  };
}
export default connect(mapStateToProps)(Home);
