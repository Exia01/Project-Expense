import React, { Component, Fragment } from 'react';

function ExpenseList(props) {

    //-- TESTING --//
    // console.log(props);
    // console.log(props.expenses);

    return (
      <Fragment>
        <h4>Current Expenses</h4>
        {props.expenses.map(exp => (
          <div className="row" key={exp._id}>
            <div className="col s6 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{exp.title}</span>
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