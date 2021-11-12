import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



const SignupForm = () => {

    // set initial form state
  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
  
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token)

    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      name: '',
      email: '',
      password: '',
    });

    console.log(userFormData);

    <Redirect to='/dashboard'><Dashboard /></Redirect>
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmit={handleFormSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]} onChange={handleInputChange}
        value={userFormData.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]} onChange={handleInputChange}
        value={userFormData.email}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}onChange={handleInputChange}
        value={userFormData.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onSubmit={handleFormSubmit} type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default SignupForm;