import React, { Component, createContext } from 'react';


export const ReportContext = createContext();

export class Provider extends Component {
  state = {
    step: 1,
    title: "",
    reason_for_travel: "",
    submitted_by: "",
    date_submitted: "",
    date_approved: "",
    all_expenses: [],
    total_amount: "",
  };

  render() {
    return (
      <ReportContext.Provider value={this.state}>
        {this.props.children}
      </ReportContext.Provider>
    );
  }
}
