import React, { Component, Fragment } from 'react';
import { ReportContext, Consumer } from "../../contexts/context";
// import { Consumer } from 

class ReportForm extends Component {
  static contextType = ReportContext;

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

  render() {
    // Pull out the Provider Context
    console.log(this.context);
    const { title, reason_for_travel, handleChange, handleSubmit } = this.context;
    console.log(`Props:`);
    console.log(this.props);

    return (
        <ReportContext.Consumer> 
            { (props) => {
                return (
                    <Fragment>
                        <div className="report-start col s12">
                            <div className="row">
                                <form className="col s8 offset-s2" onSubmit={this.context.handleSubmit}>
                                <h3>Start Of Report Form</h3>
                                <div className="row">
                                    <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter Title"
                                        onChange={this.context.handleChange}
                                        defaultValue={this.context.title}
                                    />
                                    <label htmlFor="title">Report Title</label>
                                    </div>
                                    <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="reason_for_travel"
                                        placeholder="Enter reason for travel"
                                        onChange={this.context.handleChange}
                                        defaultValue={this.context.reason_for_travel}
                                    />
                                    <label htmlFor="reason_for_travel">Report Reason</label>
                                    </div>

                                    <div className="input-field col s8">
                                    <button
                                        className="waves-effect waves-light btn"
                                        type="submit"
                                    >
                                        Start
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </Fragment>
                )
            }}
        </ReportContext.Consumer>
    );
  }
}


export default ReportForm;