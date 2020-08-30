import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../contexts/user.context';

//Ant Design Css and component styles
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import useStyles from '../../../styles/Auth/LoginStyles';
import { formLayout } from '../../../utils/form/layout';
import useErrorState from '../../../hooks/useErrorState';

const Login = (props) => {
  const { isAuthenticated, user: authUserObj } = useContext(UserContext); //namedImport

  const [toDash, setToDash] = useState(false);
  const classes = useStyles(props);
  const [formError, setFormError, resetFormError] = useErrorState('');
  const [submittingForm, setSubmittingForm] = useState(false);

  const handleChange = (changedValues, allValues) => {
    console.log(changedValues, ' Changed Values');
    const [entry] = Object.entries(changedValues);
    // console.log(entry);
    // setFormData({ ...formData, [entry[0]]: entry[1] });
  };

  const onSubmit = async (values) => {
    //-- TESTING --//
    // console.log('Submitting');

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
      resetFormError('');
    } catch (err) {
      // console.error(err.response.data.errors);
      // res.status(500).json(err);
      setFormError(err.response.data.errors.msg);
    }
  };

  if (isAuthenticated()) {
    //-- Redirect to Landing
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <section className={classes.root}>
        <Row justify='center' align='middle'>
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className={classes.formTitle}>Welcome back, Please log In!</h1>
            {formError && (
              <div className={classes.formError}>
                <p>{formError}</p>
              </div>
            )}
            <Form
              {...formLayout}
              name='normal_login'
              className=''
              onValuesChange={handleChange}
              onFinish={onSubmit}
              validateTrigger='onSubmit'
              hideRequiredMark='true'
              onFinishFailed={() => setFormError('')}
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
                  className={`login-form-button  ${classes.submitBtn}`}
                  loading={submittingForm && 'true'}
                >
                  Log in
                </Button>
                Or
                <Link to='/register' style={{ marginLeft: '.5rem' }}>
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

// Form API? // // https://formik.org/docs/overview

// Email Validation: https://www.itsolutionstuff.com/post/react-email-validation-exampleexample.html
