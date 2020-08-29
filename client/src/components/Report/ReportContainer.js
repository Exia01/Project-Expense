import React, { Fragment, Component } from 'react';
import ReportForm from './ReportForm';

class ReportContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            reason_for_travel: '',
            submitted_by: '',
            date_submitted: '',
            date_approved: '',
            all_expenses: [],
            total_amount: '',
        };
    }

    render() {
        return(
            <Fragment>
                <div className="report-container">
                    <h1>Create New Report</h1>
                    <ReportForm />
                </div>
            </Fragment>
        )
    }
}

export default ReportContainer;