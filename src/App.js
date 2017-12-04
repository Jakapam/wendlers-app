import React, { Component } from "react";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username
  };
}

export default connect(mapStateToProps)(App);
