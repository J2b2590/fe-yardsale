import React, { Component } from "react";
import { connect } from "react-redux";
import Username from "../components/Username"
import ItemDashboard from "../components/ItemDashboard";
import { withRouter } from "react-router-dom";

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
        <Username />
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
      </div>
    );
  }
}

const mapState = (storeState) => {
  return {
    item: storeState.items,
  };
};

export default withRouter(connect(mapState, null)(ItemContainer));
