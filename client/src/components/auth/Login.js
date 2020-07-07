import React, { Fragment, useState } from 'react';
import { Switch, Redirect } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    //-- Setup State 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm: ''
    });

    const { email, password, confirm } = formData;

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
            email,
            password
        }

        //-- Send to Server Route
        try {
              //-- Create 'config' for sending headers
              const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
              //-- Stringify User Input
              const body = JSON.stringify(user);
              console.log("********");
              console.log(body);

              const res = await axios.post("/api/auth/login", body, config);
              //-- TESTING --//
              console.log(res.data);

              //-- Clear inputs
              setFormData({ email: "", password: "", confirm: "" });


              //-- Redirect to Landing
              return <Redirect to="/dashboard" />;
            } catch(err) {
            console.error(err.response.data);
            // res.status(500).json(err);
        }
    }

    return (
      <Fragment>
        <h1 className="welcome">Welcome back, Please log In!</h1>
        <form className="login" onSubmit={(e) => onSubmit(e)}>
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
            Login
          </button>
        </form>
      </Fragment>
    );
}

export default Login;
