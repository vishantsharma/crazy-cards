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
    <>
      <label htmlFor={name}>{label}</label>
      {error ? (
      <div role="alert" className="caution">
        <span>{error}</span>
      </div>
    ) : null}
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
      </>
  );
};

export default SelectField;
