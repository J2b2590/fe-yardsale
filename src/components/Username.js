import React, { Component } from "react";
import { connect } from "react-redux";

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user, "USERNAME");
    const currentUsername = this.props.user.name;
    return (
      <div>
        <h2>{currentUsername}</h2>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateProps)(Username);
