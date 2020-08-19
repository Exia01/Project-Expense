import React, { Component, Fragment } from 'react';

function ExpenseList(props) {

    console.log(props);
    console.log(props.expenses);
    
    return(
        <Fragment>
            <h4>Expense List Component</h4>
        </Fragment>
    )
}

export default ExpenseList;