import React, { Component, Fragment } from 'react';

function ExpenseList(props) {

    console.log(props);
    console.log(props.expenses);

    return (
      <Fragment>
        <h4>Current Expenses</h4>
        {props.expenses.map(exp => (
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{exp.title}</span>
                  <p>
                   {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
}

export default ExpenseList;