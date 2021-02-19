import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { allItems } from "./actions/items";

import ItemContainer from "./containers/ItemContainer";
import Login from "./components/Login";

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
        this.props.allItems(data);
        console.log(data);
      });
  }

  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route component={Login} exact path="/" />
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

export default withRouter(connect(null, { allItems })(App));
