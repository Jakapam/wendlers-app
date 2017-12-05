import React, { Component } from "react";
import { connect } from "react-redux";
import ProgramContainer from "./ProgramContainer";

class Profile extends Component {
  render() {
    const message = `Hi ${this.props.user.username}!`;
    return (
      <div>
        {message}
        <ProgramContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
