import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Expense = () => {
  const [report, setReport] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    type_of_expense: "",
    description: "",
    amount: "",
    date_of_expense: "",
  });

  const {
    title,
    type_of_expense,
    description,
    amount,
    date_of_expense,
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
      type_of_expense: "",
      description: "",
      amount: "",
      date_of_expense: "",
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
      <h2>Add Expense</h2>
      <form className="add_expense" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Expense Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Type of Expense"
            name="type_of_expense"
            value={type_of_expense}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Amount of Expense"
            name="amount"
            value={amount}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Date of Expense"
            name="date_of_expense"
            value={date_of_expense}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit" className="btn">
          Add Expense
        </button>
      </form>
    </Fragment>
  );
};

export default Expense;
