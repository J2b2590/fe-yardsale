import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import ItemContainer from "./containers/ItemContainer";

const API = "http://localhost:3000/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <Switch>
        <Route component={ItemContainer} path="/items" />
      </Switch>
    );
  }
}

export default App;
