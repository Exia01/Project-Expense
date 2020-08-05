import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  UserDispatchContext,
  UserContext,
} from '../../../contexts/user.context';

//Ant Design Css and component styles
import 'antd/dist/antd.css';
import { Row, Col, Space } from 'antd';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import useStyles from '../../../styles/Auth/RegisterStyles';
import authAxiosInstance, { setAuthToken } from '../../../utils/axios/user.instance';

function Register() {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [submittingForm, setSubmittingForm] = useState(false);

  const classes = useStyles();
  const { isAuthenticated, user } = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const { first, last, username, email, password, confirm } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmittingForm(true);

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
          'Accept': 'application/json',
          'Authorization': `Bearer ${user.token}`,
          'x-auth-token': user.token,
        }

      }
      //-- Stringify User Input
      const body = JSON.stringify(user);
      console.log('********');
      console.log(body);


      // const res = await axios.post('/api/users/create', body, config);
      const res = await authAxiosInstance.post("create", body, config)
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

      const { token, userInfo, expiresAt } = res.data;
      console.log(userInfo);

      dispatch({
        type: 'AUTH_USER',
        user: { token, isAuthenticated: true, userInfo, expiresAt },
      });
      setSubmittingForm(false);
    } catch (err) {
      console.log(err);
      setSubmittingForm(false);
      // console.error(err.response.data);
      // res.status(500).json(err);
    }
  };
  if (isAuthenticated()) {
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
              <Space direction='vertical' size='small'>
                <div className={classes.formGroup}>
                  <label htmlFor='firstName' className={classes.formLabel}>
                    First Name
                  </label>
                  <Input
                    name='first'
                    defaultValue={first}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor='lastName' className={classes.formLabel}>
                    Last Name
                  </label>
                  <Input
                    name='last'
                    defaultValue={last}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor='userName' className={classes.formLabel}>
                    Username
                  </label>
                  <Input
                    name='username'
                    defaultValue={username}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor='email' className={classes.formLabel}>
                    Email
                  </label>
                  <Input
                    name='email'
                    defaultValue={email}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor='password' className={classes.formLabel}>
                    Password
                  </label>
                  <Input.Password
                    placeholder=''
                    name='password'
                    onChange={handleChange}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                <div className={classes.formGroup}>
                  <label
                    htmlFor='confirmPassword'
                    className={classes.formLabel}
                  >
                    Confirm Password
                  </label>
                  <Input.Password
                    placeholder=''
                    name='confirm'
                    onChange={handleChange}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                <Button
                  type='primary'
                  htmlType='submit '
                  className={classes.submitBtn}
                  loading={submittingForm && 'true'}
                >
                  {submittingForm ? 'Submitting' : 'Submit'}
                </Button>
              </Space>
            </form>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
}

export default Register;
