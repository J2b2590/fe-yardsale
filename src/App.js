import React, { Component } from "react";
import "./App.css";

const API = "localhost:3000";
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
    return <div>New</div>;
  }
}

export default App;
