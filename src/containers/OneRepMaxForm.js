import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../actions/users";

class OneRepMaxForm extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return;
  }
}

export default connect(null, { signup })(OneRepMaxForm);
