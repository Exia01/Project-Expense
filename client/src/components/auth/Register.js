import React, { Fragment, useState } from "react";


const Register = () => {
    //-- Setup State 
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

    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== confirm) {
            console.error("Passwords do not Match")
        }

        //-- TESTING --//
        console.log("Submitting");
        console.log(formData);
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