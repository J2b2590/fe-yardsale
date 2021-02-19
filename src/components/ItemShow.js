import React, { Component } from "react";

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return <div>show</div>;
  }
}

export default ItemShow;
