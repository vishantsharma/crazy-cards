import React from 'react';
import Input from './Input';

const DateOfBirth = ({data, type, handleChange, errors, className}) => {
    return (
        <>
        <Input 
          name="day"
          type={type}
          placeholder="DD"
          value={data.dob.day}
          onChange={handleChange}
          className={className}
          error={errors["dob.day"]} />
        
          <Input 
          name="month"
          type={type}
          placeholder="MM"
          value={data.dob.month}
          onChange={handleChange}
          className={className}
          error={errors["dob.month"]} />

          <Input 
          name="year"
          type={type}
          placeholder="YYYY"
          value={data.dob.year}
          onChange={handleChange}
          className={className}
          error={errors["dob.year"]} />
        </>
    )
}

export default DateOfBirth;