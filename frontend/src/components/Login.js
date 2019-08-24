import React, { Component } from "react";
import { FormApi } from "./FormAPI";

export class Login extends Component {

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
