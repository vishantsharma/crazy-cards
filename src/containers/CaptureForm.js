import React, { useState } from 'react';
import * as yup from "yup";
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
    income: "",
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

  const schema = yup.object().shape({
    title: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    dob: yup.object().shape({
      day: yup.number().integer().min(1).max(31).required(),
      month: yup.number().integer().min(1).max(12).required(),
      year: yup.number().integer().min(1900).max(2020).required(),
    }),
    employment: yup.string().required(),
    postCode: yup.string().required(),
    houseNumber: yup.number().required(),
    income: yup.number().min(0).required(),
  });

  const [enteredData, setEnteredData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    schema
      .validate(enteredData, { abortEarly: false })
      .then(() => props.history.push('/show-cards'))
      .catch((error) => {
        const errors = {};
        error.errors.map((err) => {
          const label = err.split(" ")[0];
          if (label.includes('dob.')) {
            if(label.includes('day')) {
              return (errors[label] = `INVALID DD`)
            } else if (label.includes('month')) {
              return (errors[label] = `INVALID MM`)
            }
            else {
              return (errors[label] = `INVALID YYYY`)
            } 
          }
          return (errors[label] = `INVALID ${label.toUpperCase()}`);
        });
        setErrors(errors);
      });
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
          <form onSubmit={submitHandler} method="post" action="/formData">
            <div className="form-control">
              <Select
                name="title"
                label="Title"
                placeholder="Please select..."
                value={enteredData.title}
                options={optionsForTitle}
                onChange={handleChange}
                className="select-form"
                error={errors.title}
              />
            </div>
            <div className="form-control">
              <Input
                labelName="First name"
                type="text"
                name="firstName"
                value={enteredData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
            </div>
            <div className="form-control">
              <Input
                labelName="Last name"
                type="text"
                name="lastName"
                value={enteredData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <label htmlFor="dob">Date of Birth</label>
            <div className="dob-form">
              <DateOfBirth
                data={enteredData}
                handleChange={dobHandler}
                type="number"
                className={errors ? "dob-error" : ""}
                errors={errors}
              />
            </div>
            <div className="form-control">
              <Input
                labelName="House Number"
                type="number"
                name="houseNumber"
                value={enteredData.houseNumber}
                onChange={handleChange}
                error={errors.houseNumber} />
            </div>
            <div className="form-control">
              <Input
                labelName="Postcode"
                type="text"
                name="postCode"
                value={enteredData.postCode}
                onChange={handleChange}
                error={errors.postCode}
              />
            </div>
            <div className="form-control">
              <Select
                name="employment"
                label="Employment Status"
                placeholder="Please select..."
                value={enteredData.employment}
                options={optionsForEmployment}
                onChange={handleChange}
                className="select-form"
                error={errors.employment}
              />
            </div>
            <div className="form-control">
              <Input
                labelName="Annual Income"
                type="number"
                name="income"
                value={enteredData.income}
                onChange={handleChange}
                error={errors.income} />
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
