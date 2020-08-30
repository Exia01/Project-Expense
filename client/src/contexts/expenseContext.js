import React, { Component, createContext } from "react";

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
    console.log("Submitting expense");
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
