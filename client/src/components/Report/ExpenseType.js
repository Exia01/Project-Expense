import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Expense = () => {
  const [expenseType, setExpenseType] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
  });

  const { name, rating } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    //-- TESTING --//
    console.log("Submitting");
    console.log(formData);

    axios
      .post("/expense/type", formData)
      .then((result) => console.log(result.data))
      .catch((err) => {
        console.log(err);
      });

    //-- create temp expense type
    const category = {
        name,
        rating,
    };

    //-- Send to Server Route
    // try {
    //     //-- Create 'config' for sending headers
    //     const config = {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     };
    //     //-- Stringify User Input
    //     const body = JSON.stringify(user);
    //     console.log("********");
    //     console.log(body);

    //     const res = await axios.post("/api/report/create", body, config);
    //     //-- TESTING --//
    //     console.log(res.data);
    //-- Clear inputs
    setFormData({
      name: "",
      rating: "",
    });

    //     //-- Update toDashboard State
    //     // setToDash(true);
    // } catch (err) {
    //     console.error(err.response.data);
    //     // res.status(500).json(err);
    // }
  };

  return (
    <Fragment>
      <h2>Add Expense</h2>
      <form className="add_expense" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Expense Type Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Rating"
            name="rating"
            value={rating}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit" className="btn">
          Add Expense Type
        </button>
      </form>
    </Fragment>
  );
};

export default Expense;
