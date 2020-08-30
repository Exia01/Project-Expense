import React, { Component, createContext } from "react";
import axios from 'axios';

export const ExpenseContext = createContext();

class ExpenseContextProvider extends Component {
  state = {
    // step: 2,
    title: "",
    amount: "",
    amount_float: "",
    expense_type: "",
    description: "",
    date_of_expense: "",
    report_id: "",
    // submitted_by: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting expense ...");
    this.addExpense(this.state)
    console.log("Expense Submitted!!");

    console.log("Clearing Inputs");
    this.setState({
      title: "",
      amount: "",
      amount_float: "",
      expense_type: "",
      description: "",
      date_of_expense: "",
      report_id: "",
    });
  };

  addExpense = async (exp) => {
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
    };

  render() {
    return (
      <ExpenseContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </ExpenseContext.Provider>
    );
  }
}

export default ExpenseContextProvider;
