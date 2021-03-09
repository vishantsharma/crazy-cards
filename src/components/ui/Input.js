import React from 'react';

const Input = ({name, labelName, type, value, onChange, placeholder}) => {
    return (
        <>
            <label htmlFor={name}>{labelName}</label>
            <input type={type}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                /> 
        </>
        )
}

export default Input;