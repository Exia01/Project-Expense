import React, { Component, Fragment } from 'react';

// function ExpenseForm(props) {
    //-- TESTING ---//
    // console.log('*** PROPS ARE ***');
    // console.log(props);
class ExpenseForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        amount: '',
        amount_float: '',
        expense_type: '',
        description: '',
        date_of_expense: '',
        report_id: '',
        submitted_by: '',
      }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      // console.log("Submitting Expense Data ...");
      this.props.addExpense(this.state);

      this.setState({
        title: "",
        amount: "",
        amount_float: "",
        expense_type: "",
        description: "",
        date_of_expense: "",
        report_id: "",
        submitted_by: "",
      });
    }

    render () {
      return (
        <Fragment>
          <h2>Add Expense</h2>
          <form className="add_expense" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Expense Title"
                name="title"
                value={this.state.title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Expense Type"
                id="expense_type"
                name="expense_type"
                value={this.state.expense_type}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
  
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Description"
                name="description"
                value={this.state.description}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Amount of Expense"
                name="amount"
                value={this.state.amount}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Floaty of Expense"
                name="amount_float"
                value={this.state.amount_float}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Date of Expense"
                name="date_of_expense"
                value={this.state.date_of_expense}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
  
            <button type="submit" className="btn">
              Add Expense
            </button>
   
          </form>
        </Fragment>
      );
    }
}

export default ExpenseForm;