import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/users";

class Profile extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getUserInfo(token);
  }

  render() {
    console.log(this.props.user);
    const name = !this.props.user ? "Loading" : this.props.user.username;
    console.log(name);
    return <div>Hi {name}!</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.user.user };
};

export default connect(mapStateToProps, { getUserInfo })(Profile);
