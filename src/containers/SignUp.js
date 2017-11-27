import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/users";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup({
      username: this.state.username,
      password: this.state.password
    });
  };

  handleUserName = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Username:
        <input
          type="text"
          onChange={this.handleUserName}
          value={this.state.username}
        />
        Password:
        <input
          type="text"
          onChange={this.handlePassword}
          value={this.state.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, { signup })(SignUp);
