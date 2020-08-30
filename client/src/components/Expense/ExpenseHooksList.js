import React, { Component, Fragment, useState, useEffect } from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';


const ExpenseList = (props) => {
  const [expenses, setExpenses] = useState([]);

  useEffect( () => {
    console.log("useEffect ran");
    async function getExpenses() {
        await axios.get('/expenses')
            .then(data => {
                console.log(data);
                setExpenses(data.data.all_exp);
            })
            .catch(err => {
                console.log(err);
            });
    }
    getExpenses();
    //-- cleanup function
    return () => {
        console.log("cleanup ...");
    }
  }, []);

  //-- TESTING --//
//   console.log(props);
  // console.log(props.expenses);

  return (
    <Fragment>
      <h4>Current Expenses</h4>
      {expenses.map((exp) => (
        <div className="row" key={exp._id}>
          <div className="col s6 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{exp.title}</span>
                <p>Description: {exp.description}</p>
                <p>Expense Amount: ${exp.amount}</p>
                <p>Expense Float: ${exp.amount_float}</p>
                <p>Date of Expense: {exp.date_of_expense}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default ExpenseList;