import React, { Fragment, useState, useContext } from 'react';
import {Redirect } from 'react-router-dom';
import axios from 'axios';
import { UserDispatchContext } from '../../../contexts/user.context';

//Ant Design Css and component styles
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import useStyles from '../../../styles/Auth/RegisterStyles';

const Register = () => {
  //-- Setup State
  const [toDash, setToDash] = useState(false);
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const classes = useStyles();
  const dispatch = useContext(UserDispatchContext);

  const { first, last, username, email, password, confirm } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      console.error('Passwords do not Match');
    }

    //-- TESTING --//
    console.log('Submitting');
    console.log(formData);

    //-- create temp user
    const user = {
      first,
      last,
      username,
      email,
      password,
    };

    //-- Send to Server Route
    try {
      //-- Create 'config' for sending headers
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //-- Stringify User Input
      const body = JSON.stringify(user);
      console.log('********');
      console.log(body);

      const res = await axios.post('/api/users/create', body, config);
      //-- TESTING --//
      console.log(res.data);

      //-- Clear inputs
      setFormData({
        first: '',
        last: '',
        username: '',
        email: '',
        password: '',
        confirm: '',
      });

      const { token, user_obj } = res.data;
      console.log(user_obj);

      dispatch({
        type: 'AUTH_USER',
        user: { token, isAuthenticated:true, user_obj },
      });
      // setToDash(true);
    } catch (err) {
      console.log(err);
      // console.error(err.response.data);
      // res.status(500).json(err);
    }
  };

  if (toDash === true) {
    //-- Redirect to Landing
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className={classes.root}>
        <Row justify='center' align='middle'>
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className='welcome'>Welcome, Register!</h1>
            <form className='register' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='First Name'
                  name='first'
                  value={first}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Last Name'
                  name='last'
                  value={last}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='confirm'
                  value={confirm}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};

export default Register;
