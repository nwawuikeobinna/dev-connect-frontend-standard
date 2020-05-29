import React from "react";

export const CustomInputComponentPlan = ({
  field,
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <input
        {...field} 
        {...props}
        aria-labelledby={field.name}
        className={touched[field.name] && errors[field.name] ? "border-red" : null}
        disabled="" />
  );
};