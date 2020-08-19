import React, { Component, Fragment } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import axios from 'axios';

class ExpenseContainer extends Component {
    state = {
        title: '',
        amount: '',
        amount_float: '',
        expense_type: '',
        description: '',
        date_of_expense: '',
        report_id: '',
        submitted_by: '',
        all_expenses: []
    }

    componentDidMount = async () => {
        console.log("COMPONENT DID MOUNT");
        await axios.get('/expenses')
            .then(data => {
                console.log("/#\/#\/#\/#\/#\/#");
                // console.log(data.data);
                // console.log(data.data.all_exp);
                this.setState({ all_expenses: data.data.all_exp })
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Expense Data ...");

        const { title, amount, amount_float, expense_type, description, date_of_expense } = this.state;

        let exp = {
            title: title,
            amount: amount, 
            amount_float: amount_float,
            expense_type: expense_type,
            description: description,
            date_of_expense: date_of_expense
        }

        await axios.post('/expenses', exp)
            .then(results => {
                // console.log(results);

            })
            .catch(err => {
                console.log(err);
            });

        //-- Reset form inputs --//
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

        console.log("Form Inputs Cleared");
    }

    render () {
        return (
          <Fragment>
            <div className="expense-container">
              <ExpenseForm
                props={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <ExpenseList expenses={this.state.all_expenses} />
            </div>
          </Fragment>
        );
    }
}

export default ExpenseContainer;