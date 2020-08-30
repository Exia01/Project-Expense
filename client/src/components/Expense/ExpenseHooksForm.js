import React, { Component, Fragment, useState, useContext } from "react";
import { useForm } from '../hooks/useForm';

import ExpenseList from './ExpenseHooksList';
import axios from 'axios';

const ExpenseForm = (props) => { 
    
    //-- useForm custom hook, set initial state
    const [values, handleChange, reset] = useForm({
      title: "",
      amount: "",
      amount_float: "",
      expense_type: "",
      description: "",
      date_of_expense: "",
      report_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting");

        console.log(values);
        addExpense(values);
        reset();
    }

    const addExpense = async (exp) => {
      //-- TESTING --//
      console.log("*** ADDING EXPENSE TO STATE ***");
      // console.log(exp);

      //-- Post to Server route (add to DB)
      await axios
        .post("/expenses", exp)
        .then((results) => {
          //-- TESTING --//
          console.log("**/ ADDED TO DB /**");
          // console.log(results);
        })
        .catch((err) => {
          console.log(err);
        });

      //-- Update Component State
    //   setExpenses({ ...expenses, exp });
    };

    return (
      <Fragment>
        <h2>Add Expense</h2>
        <form className="add_expense" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Expense Title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter Expense Type"
              id="expense_type"
              name="expense_type"
              value={values.expense_type}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Amount of Expense"
              name="amount"
              value={values.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Floaty of Expense"
              name="amount_float"
              value={values.amount_float}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Date of Expense"
              name="date_of_expense"
              value={values.date_of_expense}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Add Expense
          </button>
        </form>

        <h2>Current Expenses</h2>
        <ExpenseList />
      </Fragment>
    );
}

export default ExpenseForm;

