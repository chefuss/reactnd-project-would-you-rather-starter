import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <h1>New Question</h1>
        <h2>Create a New Poll, add two options to the form and save.</h2>
        <form onSubmit={this.handleSubmit} className="new-question-form">
          <legend>Would you rather ...</legend>
          <div className="input_group">
            <input
              type="text"
              name="optionOneText"
              id="optionOne"
              className="input_text"
              placeholder="enter the option one"
              onChange={this.handleChange}
            />
          </div>
          <div className="input_group">
            <input
              type="text"
              name="optionTwoText"
              id="optionTwo"
              className="input_text"
              placeholder="enter the option two"
              onChange={this.handleChange}
            />
          </div>
          {
            message !== '' && <p className="form-message">{message}</p>
          }
          <button className="btn submit" type="submit">
            Save
          </button>
        </form>
      </Fragment>
    );
  }
}

export default connect()(NewPoll);
