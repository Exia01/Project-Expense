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

    return (
        <Fragment>
            <h1 className="welcome">Welcome, Register!</h1>
            <form className="register" action="/api/users">
                <div className="form-group">
                    <input type="text" placeholder="First Name" name="first"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" name="last"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Username" name="username"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name="confirm"/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>

        </Fragment>
    )
}

export default Register;