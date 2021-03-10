import React from 'react';

const Input = ({ name, labelName, type, value, onChange, placeholder, error, ...props }) => {
    return (
        <>
            <label htmlFor={name}>{labelName}</label>
            {error ? (
                <div role="alert" className="caution">
                    <span>{error}</span>
                </div>
            ) : null}
            <input type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </>
    )
}

export default Input;