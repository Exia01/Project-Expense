import React, { Component, Fragment } from 'react';

function ExpenseForm(props) {
    //-- TESTING ---//
    // console.log(props);

    return (
      <Fragment>
        <h2>Add Expense</h2>
        <form className="add_expense" onSubmit={props.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Expense Title"
              name="title"
              value={props.title}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter Expense Type"
              id="expense_type"
              name="expense_type"
              value={props.expense_type}
              onChange={(e) => props.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Description"
              name="description"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Amount of Expense"
              name="amount"
              value={props.amount}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Floaty of Expense"
              name="amount_float"
              value={props.amount_float}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Date of Expense"
              name="date_of_expense"
              value={props.date_of_expense}
              onChange={(e) => props.handleChange(e)}
            />
          </div>

          <button type="submit" className="btn">
            Add Expense
          </button>
 
        </form>
      </Fragment>
    );
}

export default ExpenseForm;