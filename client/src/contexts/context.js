import React, { Component, createContext } from 'react';


const Context = createContext();

class Provider extends Component {
  state = {
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
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;