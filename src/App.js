import React, { Component } from "react";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userIsNotAuthenticated, userIsAuthenticated } from "./utils/auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/profile" component={userIsAuthenticated(Profile)} />
        <Route path="/login" component={userIsNotAuthenticated(Login)} />
        <Route path="/signup" component={userIsNotAuthenticated(SignUp)} />
      </div>
    );
  }
}

export default App;
