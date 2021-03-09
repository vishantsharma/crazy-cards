import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import DateOfBirth from '../components/ui/DOB';
import Select from '../components/ui/SelectField';

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
    postCode: "",
    houseNumber: "",
    annualIncome: "",
  };

  const optionsForTitle = [
    { id: "mr", name: "Mr" },
    { id: "mrs", name: "Mrs" },
    { id: "ms", name: "Ms" },
    { id: "miss", name: "Miss" },
    { id: "dr", name: "Dr" },
    { id: "Rev", name: "Rev" },
    { id: "Other", name: "Other" }
  ];

  const optionsForEmployment = [
    { id: "fulltime", name: "Full Time" },
    { id: "parttime", name: "Part Time" },
    { id: "selfemployed", name: "Self Employed" },
    { id: "student", name: "Student" },
    { id: "unemployed", name: "Unemployed" },
    { id: "retired", name: "Retired" },
    { id: "homemaker", name: "Homemaker" }
  ];

  const [enteredData, setEnteredData] = useState(initialState);
  // const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    // props.onAddIngredient({title:  enteredTitle, amount: enteredAmount})
  };

  const dobHandler = ({ currentTarget: input }) => {
    const dobData = { ...enteredData };
    dobData.dob[input.name] = input.value;
    setEnteredData(dobData);
  };

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...enteredData };
    newData[input.name] = input.value;
    setEnteredData(newData);
  };

  return (
    <>
    <header className="toolbar"><h1>Crazy Cards</h1></header>
    <section className="capture-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <Select
              name="title"
              label="Title"
              placeholder="Select Title..."
              value={enteredData.title}
              options={optionsForTitle}
              onChange={handleChange}
              className="select-form"
            />
          </div>
          <div className="form-control">
            <Input
              labelName="First name"
              type="text"
              name="firstName"
              value={enteredData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <Input
              labelName="Last name"
              type="text"
              name="lastName"
              value={enteredData.lastName}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="dob">Date of Birth</label>
          <div className="dob-form">
            <DateOfBirth
              data={enteredData}
              handleChange={dobHandler}
              type="number"
            />
          </div>
          <div className="form-control">
            <Input
              labelName="House Number"
              type="number"
              name="houseNumber"
              value={enteredData.houseNumber}
              onChange={handleChange} />
          </div>
          <div className="form-control">
            <Input
              labelName="Postcode"
              type="text"
              name="postCode"
              value={enteredData.postCode}
              onChange={handleChange} />
          </div>
          <div className="form-control">
            <Select
              name="employment"
              label="Employment Status"
              placeholder="Select Status..."
              value={enteredData.employment}
              options={optionsForEmployment}
              onChange={handleChange}
              className="select-form"
            />
          </div>
          <div className="form-control">
            <Input
              labelName="Annual Income"
              type="number"
              name="annualIncome"
              value={enteredData.annualIncome}
              onChange={handleChange} />
          </div>
          <div className="capture-form__actions">
            <button type="submit">Continue ></button>
          </div>
        </form>
      </Card>
    </section>
    </>
  );
});

export default CaptureForm;
