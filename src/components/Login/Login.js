import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.scss";
import { login } from "../../actions/login";
import { Card, Form, Button, Grid } from "semantic-ui-react";

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
        this.props.history.push("/yardsales");
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
      <div class="loginForm">
        <div class="yardSaleHeader">
          <h1>Welcome To Yardsale</h1>
        </div>
        <Grid className="login" centered>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="SIGN IN"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.name}
                />
              </Form.Field>

              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
