import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
        <FormApi />
      </div>
    );
  }
}

function FormApi(props) {
  const fields = [
    {
      name: "email",
      type: "email",
      initial: "Type your email",
      required: "yes",
      error: "Invalid email address",
      callback: alert
    },
    {
      name: "password",
      type: "password",
      initial: "",
      required: "yes",
      callback: alert
    }
  ];

  const initialValues = fields.reduce(function(accumulator, currentValue) {
    const fieldname = currentValue.name;
    accumulator[fieldname] = currentValue.initial;
    return accumulator;
  }, {});


  console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
