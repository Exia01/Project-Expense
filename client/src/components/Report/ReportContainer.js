import React, { Fragment, Component } from 'react';
import { ReportContext } from '../../contexts/context';
import ReportForm from './ReportForm';


class ReportContainer extends Component {
    static contextType = ReportContext;
    render() {
        console.log(this.context)
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