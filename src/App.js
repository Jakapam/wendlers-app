import React, { Component } from "react";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Home from "./components/Home";
import Loading from "./components/Loading";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userIsNotAuthenticated, userIsAuthenticated } from "./utils/auth";
import { getUserInfo } from "./actions/users";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getUserInfo(token);
    }
  }

  render() {
    const displayDiv = this.props.loading ? (
      <Loading />
    ) : (
      <div className="App">
        <Route exact path="/" component={userIsNotAuthenticated(Home)} />
        <Route path="/profile" component={userIsAuthenticated(Profile)} />
        <Route path="/login" component={userIsNotAuthenticated(Login)} />
        <Route path="/signup" component={userIsNotAuthenticated(SignUp)} />
      </div>
    );
    return displayDiv;
  }
}

const mapStateToProps = state => {
  return { loading: state.user.loading };
};

export default withRouter(connect(mapStateToProps, { getUserInfo })(App));
