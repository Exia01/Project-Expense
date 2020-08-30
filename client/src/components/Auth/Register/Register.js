import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import useErrorState from '../../../hooks/useErrorState';
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
import authAxiosInstance, {
  setAuthToken,
} from '../../../utils/axios/user.instance';

function Register() {
  const { isAuthenticated, user: authUserObj } = useContext(UserContext); //namedImport
  const classes = useStyles();
  const dispatch = useContext(UserDispatchContext);

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [formErrors, setFormErrors] = useState({
    first: '',
    last: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [resErrs, setResError] = useState({
    serverError: '',
    msgError: '',
  });
  const [submittingForm, setSubmittingForm] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);
  const { first, last, username, email, password, confirm } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(authUserObj);
  const onSubmit = async (e) => {
    setFormErrors({
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
      confirm: '',
    });
    e.preventDefault();
    setSubmittingForm(true);

    //-- create temp user
    const user = {
      first,
      last,
      username,
      email,
      password,
    };

    validateForm(user);

    if (formIsValid) {
      try {
        //-- Create 'config' for sending headers
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${authUserObj.token}`,
            'x-auth-token': authUserObj.token,
          },
        };
        //-- Stringify User Input
        const body = JSON.stringify(user);

        const res = await authAxiosInstance.post('create', body, config);

        setFormData({
          first: '',
          last: '',
          username: '',
          email: '',
          password: '',
          confirm: '',
        });

        const { token, userInfo, expiresAt } = res.data;

        dispatch({
          type: 'AUTH_USER',
          user: { token, isAuthenticated: true, userInfo, expiresAt },
        });
        setSubmittingForm(false);
      } catch (err) {
        if (err.response) {
          console.log(formErrors);
          setResError({ ...resErrs, serverError: err.response.data.message });
          // setFormErrors({
          //   ...formErrors,
          //   response: err.response.data.message,
          // });
        }
        if (err.message) {
          setResError({ ...resErrs, msgError: err.message });
        }
        // console.error(err.response.data);
        setSubmittingForm(false);
      }
    }
  };
  function validateEmail(val) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (val == '') {
      return 'Email is required';
    }
    if (!pattern.test(val)) {
      // isValid = false;
      return 'Please enter valid email address';

      // return isValid
    }
    return '';
  }

  function validateForm({ ...user }) {
    let tempErrorsFormObj = {
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
      confirm: '',
    };
    let tempIsValid = true;

    if (typeof first !== 'undefined') {
      let pattern = new RegExp(/^[a-zA-Z]+$/);
      if (first == '') {
        let firstError = 'Name is required';
        tempErrorsFormObj.first = firstError;
      } else {
        if (!pattern.test(first)) {
          tempIsValid = false;
          let firstError = 'Only Letters';
          tempErrorsFormObj.first = firstError;
        }
      }
    }

    tempErrorsFormObj.email = validateEmail(email);
    if (typeof tempErrorsFormObj.email !== '') {
      tempIsValid = false;
    }

    if (username == '') {
      tempErrorsFormObj.username = 'Username is required';
    }

    if (password == '') {
      let error = 'Please fill out password';
      tempErrorsFormObj.password = error;
      tempIsValid = false;
    }
    if (confirm == '') {
      let error = 'Cannot be empty';
      tempErrorsFormObj.confirm = error;
      tempIsValid = false;
    }
    if (password !== confirm) {
      let error = 'Passwords do not match';
      tempErrorsFormObj.password = error;
      tempErrorsFormObj.confirm = error;
      tempIsValid = false;
    }

    if (!tempIsValid) {
      setFormErrors(tempErrorsFormObj);
      setFormIsValid(false);
    }
  }

  if (isAuthenticated()) {
    //-- Redirect to Landing
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <main className={classes.root}>
        <Row justify='center' align='middle'>
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 className='welcome'>Welcome, Register!</h1>

            <form className='register' onSubmit={(e) => onSubmit(e)}>
              <Space direction='vertical' size='middle' className='w-100'>
                <div
                  className={
                    (`${classes.formGroup}`,
                    formErrors.first && 'ant-form-item-has-error')
                  }
                >
                  <label htmlFor='firstName' className={classes.formLabel}>
                    First Name
                  </label>
                  <Input
                    name='first'
                    defaultValue={first}
                    onChange={handleChange}
                  />
                  {formErrors.first && (
                    <span className={classes.formError}>
                      {formErrors.first}
                    </span>
                  )}
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

                <div
                  className={
                    (`${classes.formGroup}`,
                    formErrors.username && 'ant-form-item-has-error')
                  }
                >
                  <label htmlFor='userName' className={classes.formLabel}>
                    Username
                  </label>
                  <Input
                    name='username'
                    defaultValue={username}
                    onChange={handleChange}
                  />
                  {formErrors.username && (
                    <span className={classes.formError}>
                      {formErrors.username}
                    </span>
                  )}
                </div>

                <div
                  className={
                    (`${classes.formGroup}`,
                    formErrors.email && 'ant-form-item-has-error')
                  }
                >
                  <label htmlFor='email' className={classes.formLabel}>
                    Email
                  </label>
                  <Input
                    name='email'
                    defaultValue={email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className={classes.formError}>
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div
                  className={
                    (`${classes.formGroup}`,
                    formErrors.password && 'ant-form-item-has-error')
                  }
                >
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
                  {formErrors.password && (
                    <span className={classes.formError}>
                      {formErrors.password}
                    </span>
                  )}
                </div>

                <div
                  className={
                    (`${classes.formGroup}`,
                    formErrors.confirm && 'ant-form-item-has-error')
                  }
                >
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
                  {formErrors.confirm && (
                    <span className={classes.formError}>
                      {formErrors.confirm}
                    </span>
                  )}
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
      </main>
    </Fragment>
  );
}

export default Register;
