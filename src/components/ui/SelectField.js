import React from "react";

const SelectField = ({
  name,
  label,
  placeholder,
  value,
  options = [],
  optionKey = "id",
  optionText = "name",
  onChange,
  error,
  className
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option[optionKey]} value={option[optionKey]}>
            {option[optionText]}
          </option>
        ))}
      </select>
      {error ? (
        <div role="alert" className="text-danger">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default SelectField;
