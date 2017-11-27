import React, { Component } from "react";
import SignUp from "./containers/SignUp";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.username);
    return (
      <div>
        <SignUp />
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
