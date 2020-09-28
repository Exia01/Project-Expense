import React, { Component, createContext } from 'react';

export const ReportContext = createContext();

// export const ReportProvider = ReportContext.Provider
// export const ReportConsumer = ReportContext.Consumer

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Testing Report Submit");

    // axios.post()
  }

  render() {
    return (
      <ReportContext.Provider value={{ ...this.state, handleChange: this.handleChange, handleSubmit: this.handleSubmit }}>
        {this.props.children}
      </ReportContext.Provider>
    );
  }
}
