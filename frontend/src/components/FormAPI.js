import React from "react";
import { Formik, Form, Field } from "formik";
import { FormikCustomInputComponent } from "./FormikCustomInputComponent";

export function FormApi(props) {
  const { fields, callback } = props;

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
        label={field.label}
        component={FormikCustomInputComponent}
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
              component={FormikCustomInputComponent}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
