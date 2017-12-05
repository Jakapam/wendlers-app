import React, { Component } from "react";
import { connect } from "react-redux";
import { getProgramInfo } from "../actions/programs";

class ProgramContainer extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getProgramInfo(token);
  }

  render() {
    console.log(this.props.program);
    return <div>Program Goes Here</div>;
  }
}

const mapStateToProps = state => {
  return { program: state.program };
};

export default connect(mapStateToProps, { getProgramInfo })(ProgramContainer);
