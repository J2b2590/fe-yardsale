import React, { Component } from "react";
import "./styles.scss";

import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { allItems } from "../../actions/items";
import { allYards } from "../../actions/yardsale";

import ItemContainer from "../../containers/ItemContainer";
import ItemShow from "../ItemShow";
import Login from "../Login/Login";
import YardSaleContainer from "../../containers/yardsaleContainer";
// import Operator from "../Operator";

const APIItems = "http://localhost:3000/items";
const APIYards = "http://localhost:3000/yardsales";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      yardsale: [],
    };
  }

  componentDidMount() {
    Promise.all([fetch(APIYards), fetch(APIItems)])

      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        console.log(res1, res2, "PROMISE");
        // set state in here
        this.setState({
          items: res2,
          yardsale: res1,
        });
        this.props.allYards(res1);
        this.props.allItems(res2);
      });
  }
  // componentDidMount() {
  //   fetch(APIYards)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data, "YARD");
  //       this.setState({
  //         yardsale: data,
  //       });
  //       this.props.allYards(data);
  //       console.log(data, "YARD");
  //     });
  // }

  // componentDidMount() {
  //   fetch(APIItems)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       this.setState({
  //         items: data,
  //       });
  //       this.props.allItems(data);
  //       console.log(data);
  //     });
  // }

  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={ItemShow} exact path="/items/show/:id" />
        <Route
          path="/items"
          render={(props) => {
            return <ItemContainer items={this.state.items} />;
          }}
        />
        <Route
          path="/yardsales"
          render={(props) => {
            return <YardSaleContainer yardsale={this.state.yardsale} />;
          }}
        />
      </Switch>
    );
  }
}

export default withRouter(connect(null, { allItems, allYards })(App));
