import React from 'react';

const Input = ({name, labelName, type, value, onChange, placeholder, ...props}) => {
    return (
        <>
            <label htmlFor={name}>{labelName}</label>
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