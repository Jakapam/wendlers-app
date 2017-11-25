import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
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
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" onChange={this.handleUserName} />
          Password:
          <input type="text" onChange={this.handlePasswprd} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
