import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.scss";
import { login } from "../../actions/login";

// const API = "http://localhost:3000/users";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch("http://localhost:3000/users", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.props.login(data);
        this.props.history.push("/items");
      });
    this.setState({
      name: " ",
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>THIS IS LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name sign in"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
