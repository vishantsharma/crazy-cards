import React from 'react';
import Input from './Input';

const DateOfBirth = ({data, type, handleChange}) => {
    return (
        <>
        <Input 
          name="day"
          type={type}
          placeholder="DD"
          value={data.dob.day}
          onChange={handleChange} />
        
          <Input 
          name="month"
          type={type}
          placeholder="MM"
          value={data.dob.month}
          onChange={handleChange} />

          <Input 
          name="year"
          type={type}
          placeholder="YYYY"
          value={data.dob.year}
          onChange={handleChange} />
        </>
    )
}

export default DateOfBirth;