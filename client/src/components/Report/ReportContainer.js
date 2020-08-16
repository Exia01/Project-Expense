import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Report = () => {
  const [report, setReport] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    reason_for_travel: "",
    submitted_by: "",
    all_expenses: [],
    total_amount: "",
  });

  const {
    title,
    reason_for_travel,
    submitted_by,
    all_expenses,
    total_amount,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <form className="add_expense" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Report Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Reason for Travel?"
            name="reason_for_travel"
            value={reason_for_travel}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="submitted_by"
            value={submitted_by}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Add Expense"
            name="all_expenses"
            value={all_expenses}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Total Amount From Expenses?"
            name="total_amount"
            value={total_amount}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Report;
