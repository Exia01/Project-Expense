import React, { Component, Fragment } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import axios from 'axios';

class ExpenseContainer extends Component {
    state = {
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

    addExpense = async (exp) => {
        //-- TESTING --//
        // console.log("*** ADDING EXPENSE TO STATE ***")
        // console.log(exp);

        //-- Post to Server route (add to DB)
        await axios.post('/expenses', exp)
            .then(results => {
                //-- TESTING --//
                // console.log("**/ ADDED TO DB /**");
                // console.log(results);
            })
            .catch(err => {
                console.log(err);
            })
        
        //-- Update Component State 
        this.setState(state => ({
            all_expenses: [...state.all_expenses, exp]
        }));

    }

    render () {
        return (
          <Fragment>
            <div className="expense-container">
              <ExpenseForm
                props={this.state}
                addExpense={this.addExpense}
              />
              <ExpenseList expenses={this.state.all_expenses} />
            </div>
          </Fragment>
        );
    }
}

export default ExpenseContainer;