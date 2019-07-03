import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="login">
        <h1 className="pb-3">Login</h1>
        <form className="login-form" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              id="login-form-username"
              type="email"
              placeholder="Enter your email"
              value={this.state.username}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              className="form-control"
              id="login-form-passwd"
              type="password"
              placeholder="Type your password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
