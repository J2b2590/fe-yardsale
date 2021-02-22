import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        THIS IS LOGIN
        <form>
          <input
            type="text"
            name="username"
            placeholder="username sign in"
            value={this.props.username}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default Login;
