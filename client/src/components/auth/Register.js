import React, { Fragment, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import axios from "axios";


const Register = () => {
  //-- Setup State 
  const [toDash, setToDash] = useState(false);
  const [formData, setFormData] = useState({
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
      confirm: ''
  });

  const { first, last, username, email, password, confirm } = formData;

  const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirm) {
      console.error("Passwords do not Match")
    }

    //-- TESTING --//
    console.log("Submitting");
    console.log(formData);

    //-- create temp user
    const user = {
      first, 
      last, 
      username,
      email,
      password
    }

    //-- Send to Server Route
    try {
      //-- Create 'config' for sending headers
      const config = {
          headers: {
              "Content-Type": "application/json"
          }
      }
      //-- Stringify User Input
      const body = JSON.stringify(user);
      console.log("********");
      console.log(body);;

      const res = await axios.post('/api/users/create', body, config);
      //-- TESTING --//
      console.log(res.data);

      //-- Clear inputs
      setFormData({
        first: "",
        last: "",
        username: "",
        email: "",
        password: "",
        confirm: "",
      });

    } catch(err) {
      console.error(err.response.data);
      // res.status(500).json(err);
    }

  }

  if (toDash === true) {
    //-- Redirect to Landing
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="welcome">Welcome, Register!</h1>
      <form className="register" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="first"
            value={first}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="last"
            value={last}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm"
            value={confirm}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default Register;