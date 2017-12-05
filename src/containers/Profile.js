import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const message = `Hi ${this.props.user.username}!`;
    return <div>{message}</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
