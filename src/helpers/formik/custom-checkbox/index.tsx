import React from "react";

export const CustomCheckboxComponent = ({
  field,
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <div className="input_group">
      <div className="checkbox-container">
        <input
          {...field}
          {...props}
          className={
            touched[field.name] && errors[field.name] ? "border-red" : null
          }
          disabled=""
        />
        <label>{props.title}</label>
      </div>
      {touched[field.name] && errors[field.name] && (
        <div className="invalid-feedback">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7 7.9996H9V3.9996H7V7.9996ZM7 11.9996H9V9.9996H7V11.9996Z"
              fill="#E7040F"
            />
          </svg>
          <span>{errors[field.name]}</span>
        </div>
      )}
    </div>
  );
};
