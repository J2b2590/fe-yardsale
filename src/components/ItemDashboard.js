import React, { Component } from "react";

class ItemDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "item Dash");
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default ItemDashboard;
