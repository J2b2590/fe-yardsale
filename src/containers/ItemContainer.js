import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDashboard from "../components/ItemDashboard";

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.history, "itemContainer");
    let items = this.props.items;
    // console.log(items);
    return (
      <div>
        {items.map((item) => {
          return (
            <ItemDashboard
              key={item.key}
              history={this.props.history}
              {...item}
            />
          );
        })}
      </div>
    );
  }
}

const mapState = (storeState) => {
  return {
    item: storeState.items,
  };
};

export default connect(mapState, null)(ItemContainer);
