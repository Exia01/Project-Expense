import React, { Component } from 'react'
import FormStart from './FormStart';
import Expense from './Expense';
import ExpenseList from './ExpenseList';
import Report from './Report';
import Confirm from './Confirm';
import Success from './Success';

export default class ReportForm extends Component {

    state = {
        step: 1,
        title: '',
        reason_for_travel: '',
        submitted_by: '',
        date_submitted: '',
        date_approved: '',
        all_expenses: [],
        total_amount: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state;

        const { title, reason_for_travel, submitted_by, date_submitted, date_approved, all_expenses, total_amount } = this.state;

        const values = {
          title,
          reason_for_travel,
          submitted_by,
          date_submitted,
          date_approved,
          all_expenses,
          total_amount,
        };

        switch(step) {
            case 1: 
                return (
                    <FormStart 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}    
                        values={values}
                    />
                )
            case 2:
                return (
                    <h3>Expense Form View</h3>
                )
            case 3:
                return (
                    <>
                        <Expense
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                         />
                        <ExpenseList
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </>
                );
            case 4:
                return (
                  <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                );
            case 5:
                return (
                  <Success
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                );
        }
    }
}
