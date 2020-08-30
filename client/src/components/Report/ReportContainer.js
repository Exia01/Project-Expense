import React, { Fragment, Component } from 'react';
import ReportForm from './ReportForm';
import ExpenseContainer from '../Expense/ExpenseContainer';

class ReportContainer extends Component {

    render() {
        return(
            <Fragment>
                <div className="report-container">
                    <h1>Create New Report</h1>
                    <ReportForm />
                    <ExpenseContainer />
                </div>
            </Fragment>
        )
    }
}

export default ReportContainer;