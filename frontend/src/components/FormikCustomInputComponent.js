import React from "react";

// Provide custom input component for having more control over the markup
// see https://jaredpalmer.com/formik/docs/api/field
export const FormikCustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <input className="form-control" type={props.type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};
