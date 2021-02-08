import React, { Component } from "react";
import { connect } from "react-redux";

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "itemContainer");
    return <div>items</div>;
  }
}

const mapState = (storeState) => {
  return {
    item: storeState.items,
  };
};

export default connect(mapState, null)(ItemContainer);
