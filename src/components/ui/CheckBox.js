import React from "react";

const Checkbox = ({ name, label, checked, onClick, ...rest }) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onClick}
        {...rest}
      />
      <label htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
