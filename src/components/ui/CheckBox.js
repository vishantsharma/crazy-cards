import React from "react";

const Checkbox = ({ name, label, checked, onClick, ...rest }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={name}
        name={name}
        checked={checked}
        onChange={onClick}
        {...rest}
      />
      <label className="custom-control-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
