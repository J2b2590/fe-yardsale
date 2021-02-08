import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ItemContainer from "./containers/ItemContainer";

const API = "http://localhost:3000/items";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          items: data,
        });
        console.log(data);
      });
  }

  render() {
    return (
      <Switch>
        <Route
          path="/items"
          render={(props) => {
            return <ItemContainer items={this.state.items} />;
          }}
        />
      </Switch>
    );
  }
}

export default connect(null)(App);
