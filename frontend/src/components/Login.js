import React, { Component } from "react";
import { FormApi } from "./FormAPI";

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
    const fields = [
      {
        name: "email",
        type: "email",
        initial: "",
        placeholder: "Enter your email address",
        label: "Email address",
        required: true,
        error: "Invalid name"
      },
      {
        name: "password",
        type: "password",
        initial: "",
        placeholder: "Enter your password",
        label: "Password",
        required: true
      }
    ];
    const callback = values => {
      console.log("Form submitted");
      console.log(values);
    };

    return (
      <div className="login">
        <h1 className="pb-3">Login</h1>
        <FormApi fields={fields} callback={callback} />
      </div>
    );
  }
}
