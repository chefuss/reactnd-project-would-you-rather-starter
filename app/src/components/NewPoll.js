import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/polls'
import { Redirect } from 'react-router-dom';


class NewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    message: '',
    toHome: false
  };
  handleChange = e => {
    const target = e.target.name;
    const option = e.target.value;

    this.setState({
      [target]: option
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText))
    this.setState({
      message: 'Question added successfully, redirecting to home'
    })
    setTimeout(() => {

      return (this.setState({
        optionOneText: '',
        optionTwoText: '',
        toHome: true
      })
    )}, 1500)
  }
  render() {
    const { toHome, message } = this.state
    if (toHome) {
      return <Redirect to='/' />
    }
    return (
      <div className="poll-container">
        <h2>Create a New Poll, add Two option to the form and save.</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input_group">
            <label htmlFor="optionOne">Enter the text for the option one</label>
            <input
              type="text"
              name="optionOneText"
              id="optionOne"
              className="input_text"
              placeholder="enter the option one"
              onChange={this.handleChange}
            />
            {/* {invalid === true && <p className="error">Invalid username</p>} */}
          </div>
          <div className="input_group">
            <label htmlFor="optionTwo">Enter the text for the option one</label>
            <input
              type="text"
              name="optionTwoText"
              id="optionTwo"
              className="input_text"
              placeholder="enter the option two"
              onChange={this.handleChange}
            />
            {/* {invalid === true && <p className="error">Invalid username</p>} */}
          </div>
          {
            message !== '' && <p className="form-message">{message}</p>
          }
          <button className="btn submit" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewPoll);
