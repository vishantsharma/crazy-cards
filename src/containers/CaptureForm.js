import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import DateOfBirth from '../components/ui/DOB';
import './CaptureForm.css';

const CaptureForm = React.memo(props => {

  const initialState = {
    title: "",
    firstName: "",
    lastName: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    employment: "",
    postcode: "",
    houseNumber: "",
    income: "",
  };

  const [enteredData, setEnteredData] = useState(initialState);
  // const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    // props.onAddIngredient({title:  enteredTitle, amount: enteredAmount})
  };

  const dobHandler = ({ currentTarget: input }) => {
    const dobData = { ...enteredData };
    dobData[input.name] = input.value;
    setEnteredData(dobData);
  };

  return (
    <section className="capture-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <Input
              labelName="First name"
              type="text"
              name="firstName"
              value={enteredData.firstName}
              onChange={event => { setEnteredData(event.target.value) }}
            />
          </div>
          <div className="form-control">
            <Input
              labelName="Last name"
              type="text"
              name="lastName"
              value={enteredData.lastName}
              onChange={event => { setEnteredData(event.target.value) }}
            />
          </div>
          <label htmlFor="dob">Date of Birth</label>
          <div className="dob-form">
            <DateOfBirth 
              data={enteredData}
              handleChange={dobHandler} 
              type="text" />
          </div>
          <div className="capture-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default CaptureForm;
