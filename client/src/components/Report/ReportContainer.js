import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ReportForm from "./ReportForm";
import FormStart from "./FormStart";

const Report = () => {
  const [report, setReport] = useState({});

  const [formData, setFormData] = useState({
    step: 1,
    title: "",
    reason_for_travel: "",
    submitted_by: "",
    date_submitted: "",
    date_approved: "",
    all_expenses: [],
    total_amount: "",
  });

  const nextStep = () => {
    const { step } = this.state;
    setFormData({ step: step + 1 });
  };

  const prevStep = () => {
    const { step } = this.state;
    setFormData({ step: step - 1 });
  };

  const values = {
    title,
    reason_for_travel,
    submitted_by,
    date_submitted,
    date_approved,
    all_expenses,
    total_amount,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   handleChange = (input) => (e) => {
//     this.setState({ [input]: e.target.value });
//   };

  const onSubmit = async (e) => {
    e.preventDefault();

    //-- TESTING --//
    console.log("Submitting");
    console.log(formData);

    //-- create temp expense
    // const user = {
    //     email,
    //     password,
    // };

    //-- Send to Server Route
    // try {
    //     //-- Create 'config' for sending headers
    //     const config = {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     };
    //     //-- Stringify User Input
    //     const body = JSON.stringify(user);
    //     console.log("********");
    //     console.log(body);

    //     const res = await axios.post("/api/report/create", body, config);
    //     //-- TESTING --//
    //     console.log(res.data);
    //-- Clear inputs
    setFormData({
      title: "",
      reason_for_travel: "",
      submitted_by: "",
      all_expenses: [],
      total_amount: "",
    });

    //     //-- Update toDashboard State
    //     // setToDash(true);
    // } catch (err) {
    //     console.error(err.response.data);
    //     // res.status(500).json(err);
    // }
  };

  return (
    <Fragment>
      <h2>Create Report</h2>
      <FormStart
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
    </Fragment>
  );
};

export default Report;
