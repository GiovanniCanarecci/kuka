import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage, FormikConsumer } from "formik";

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
      name: "name",
      type: "text",
      initial: "",
      placeholder: "Type your name",
      required: false,
      error: "Invalid name"
    },
    {
      name: "email",
      type: "email",
      initial: "",
      required: false,
      error: "Invalid email address"
    },
    {
      name: "password",
      type: "password",
      initial: "",
      required: false
    }
  ];
  const callback = values => {
    console.log("Form submitted");
    console.log(values);
  };

  const initialValues = fields.reduce(function(accumulator, currentValue) {
    const fieldname = currentValue.name;
    accumulator[fieldname] = currentValue.initial;
    return accumulator;
  }, {});

  const requiredFields = fields.filter(field => field.required === true);

  const fieldsJsx = fields.map((field, index) => (
    <div className="form-group" key={index}>
      <Field
        type={field.type}
        name={field.name}
        component={CustomInputComponent}
        placeholder={field.placeholder}
      />
    </div>
  ));
  console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        let errors = {};
        for (let field of requiredFields) {
          if (!values[field.name]) {
            errors[field.name] = "Required";
          } else if (
            field.type === "email" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[field.name])
          ) {
            errors.email = "Invalid email address";
          }
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          callback(values);
          //alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          {fieldsJsx}
          <div className="form-group" key="submit">
            <Field
              className="btn btn-primary"
              type="submit"
              name="submit"
              value="Login"
              disabled={isSubmitting}
              autoComplete="off"
              component={CustomInputComponent}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input className="form-control" type={field.type} {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);
