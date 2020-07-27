import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

//Ant Design Css and component styles
import 'antd/dist/antd.css';
import useStyles from '../../../styles/Auth/LoginStyles';
import { formLayout } from '../../../utils/form/layout';

const Login = (props) => {
  //-- Setup State
  const [toDash, setToDash] = useState(false);
  const classes = useStyles(props);


  const handleChange = (changedValues, allValues) => {
    console.log(changedValues, ' Changed Values');
    const [entry] = Object.entries(changedValues);
    console.log(entry);
    // setFormData({ ...formData, [entry[0]]: entry[1] });
  };

  const onSubmit = async (values) => {
    const { email, password } = values;

    //-- TESTING --//
    console.log('Submitting');

    //-- create temp user
    const user = values;

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

      const res = await axios.post('/api/auth/login', body, config);
      //-- TESTING --//
      console.log(res.data);
      //-- Clear inputs
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
    <>
      <section className={classes.root}>
        <Row justify='center' align='middle'>
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className={classes.formTitle}>Welcome back, Please log In!</h1>
            <Form
              {...formLayout}
              name='normal_login'
              className=''
              onValuesChange={handleChange}
              onFinish={onSubmit}
              validateTrigger='onSubmit'
            >
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder=''
                />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className='site-form-item-icon' />}
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={`login-form-button ${classes.submitBtn}`}
                >
                  Log in
                </Button>
                Or
                <Link to='/register' activeStyle={{ color: 'red' }}>
                  register now!
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
    </>
  );
};

Login.defaultProps = {
  form: 'login',
};

export default Login;
