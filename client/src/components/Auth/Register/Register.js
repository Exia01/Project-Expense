import React, { Fragment, useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Form, Input, Button } from 'antd';

//Ant Design Css
import 'antd/dist/antd.css';
import useStyles from '../../../styles/Auth/RegisterStyles';
const Register = (props) => {
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

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      // offset: 8,
      span: 24,
    },
  };

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
      //-- Update toDashboard State
      setToDash(true);
    } catch (err) {
      console.error(err.response.data);
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
        <h1 className={classes.formTitle}>Welcome, Register!</h1>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label='First Name'
            name='firstName'
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input name='first' onChange={(e) => onChange(e)} value={first} />
          </Form.Item>

          <Form.Item
            label='Last Name'
            name='lastName'
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input name='last' value={last} d onChange={(e) => onChange(e)} />
          </Form.Item>

          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
            />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input name='email' value={email} onChange={(e) => onChange(e)} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </Form.Item>

          <Form.Item
            style={{ wordWrap: 'wrap' }}
            label='Confirm Password'
            name='Confirm Password'
            rules={[
              {
                required: true,
                message: 'Please input your config password!',
              },
            ]}
          >
            <Input.Password
               name='confirm'
               value={confirm}
               onChange={(e) => onChange(e)}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>

      <form className='register' onSubmit={(e) => onSubmit(e)}>
    
      </form>
    </Fragment>
  );
};

export default Register;
