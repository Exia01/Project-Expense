import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Expense = () => {
  const [report, setReport] = useState({});
  const [expenses, setExpenses] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    // type_of_expense: "",
    amount: "",
    amount_float: "",
    expense_type: "",
    description: "",
    date_of_expense: "",
  });

  useEffect( () => {
    axios
      .get('/expenses')
      .then(res => {
        console.log("I went there...")
        // console.log(res);
        console.log(res.data);
        console.log(res.data.all_exp);
      })
      .catch(err => console.log(err));
  })

  const {
    title,
    // type_of_expense,
    amount,
    amount_float,
    expense_type,
    expense_type_select,
    description,
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
    console.log("//**** End Form Submit *****//")

    axios.post('/expenses', formData)
      .then(result => console.log(result.data))
      .catch(err => {
        console.log(err);
      });

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
      // type_of_expense: "",
      amount: "",
      amount_float: "",
      expense_type: "",
      expense_type_select: "",
      description: "",
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
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Expense Type"
            id="expense_type"
            name="expense_type"
            value={expense_type}
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
            placeholder="Floaty of Expense"
            name="amount_float"
            value={amount_float}
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

      <hr/>

        <div className="input-field">
          <label htmlFor="expense_type_select">Select Type of Expense</label>
          <select
            className=""
            id="expense_type_select"
            name="expense_type_select"
            value={expense_type_select}
            onChange={(e) => onChange(e)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </Fragment>
  );
};

export default Expense;