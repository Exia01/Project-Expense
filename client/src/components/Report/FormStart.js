import React, { Component } from 'react'

export default class FormStart extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
          <div className="report-start col s12">
            <div className="row">
              <form className="col s8 offset-s2" onSubmit={this.continue}>
                <h3>Start Of Report Form</h3>
                <div className="row">
                  <div className="input-field col s8">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Title"
                      onChange={handleChange("title")}
                      defaultValue={values.title}
                    />
                    <label htmlFor="title">Report Title</label>
                  </div>
                  <div className="input-field col s8">
                    <input
                      type="text"
                      name="reason_for_travel"
                      placeholder="Enter reason for travel"
                      onChange={handleChange("reason_for_travel")}
                      defaultValue={values.reason_for_travel}
                    />
                    <label htmlFor="reason_for_travel">Report Reason</label>
                  </div>

                  <div className="input-field col s8">
                    <button className="waves-effect waves-light btn" type="submit">Continue</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        );
    }
}
