import React, { Fragment, useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Form, Input, Button } from 'antd';
//Ant Design Css and component styles
import 'antd/dist/antd.css';
import useStyles from '../../../styles/Auth/RegisterStyles';
import { formLayout, formTailLayout } from '../../../utils/form/layout';

const Register = (props) => {
  const [toDash, setToDash] = useState(false);

  const [formInstance] = Form.useForm();

  // jss Styling
  const classes = useStyles();

  const onSubmit = async ({ values, errorFields, outOfDate }) => {
    const { first, last, username, email, password, confirm } = values;
    console.log('Received values of form:', values);
    if (password !== confirm) {
      console.error('Passwords do not Match');
    }

    //-- TESTING --//
    console.log('Submitting');
    console.log(values);

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
      formInstance.resetFields();
      //-- Update toDashboard State
      setToDash(true);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleChange = (changedValues, allValues) => {
    console.log(changedValues, ' Changed Values');
    const [entry] = Object.entries(changedValues);
    console.log(entry);
    // setFormData({ ...formData, [entry[0]]: entry[1] });
    // setFormData(allValues);
  };
  if (toDash === true) {
    //-- Redirect to Landing
    return <Redirect to='/dashboard' />;
  }

  const resetForm = () => {
    formInstance.resetFields();
  };

  return (
    <Fragment>
      <section className={classes.root}>
        <h1 className={classes.formTitle}>Welcome, Register!</h1>
        <Form
          {...formLayout}
          form={formInstance}
          // labelAlign="left"
          name='register_form'
          className=''
          onValuesChange={handleChange}
          onFinish={onSubmit}
          validateTrigger='onSubmit'
        >
          <Form.Item
            label='First Name'
            name='first'
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Last Name'
            name='last'
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input />
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
            <Input name='username' />
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='Confirm Password'
            name='confirm'
            rules={[
              {
                required: true,
                message: 'Please input your confirm password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...formTailLayout}>
            <Button
              type='primary'
              htmlType='submit'
              className={classes.submitBtn}
            >
              Submit
            </Button>
            <Button htmlType='button' onClick={resetForm}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Fragment>
  );
};

export default Register;
