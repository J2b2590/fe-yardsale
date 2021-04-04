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
        {/* <div>
          <h1 style={{ margin: "auto", marginTop: "10%", textAlign: "center" }}>
            WELCOME TO FLATNOTE
          </h1>
          <h4
            style={{
              margin: "auto",
              marginTop: "2%",
              textAlign: "center",
              color: "silver",
            }}
          >
            the flatest of notes
          </h4>
          <Grid
            centered
            style={{ margin: "auto", width: "25%", marginTop: "10%" }}
          >
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="SIGN IN"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.name}
                  />
                </Form.Field>

                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </div> */}

        <div class="login">
          <h1>THIS IS LOGIN</h1>
          <h4>Put your name in</h4>
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
      </div>
    );
  }
}

export default connect(null, { login })(Login);
