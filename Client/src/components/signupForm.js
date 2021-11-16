import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';
import "../Styles/SignupForm.css";

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from '../pages/dashboard';

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
  },
};



const SignupForm = (props) => {

  // set initial form state
  

  // set state for form validation
  // const [validated] = useState(false);


  const [addUser] = useMutation(ADD_USER);

  const email = props.email;
  const setEmail = props.setEmail;
  const password = props.password;
  const setPassword = props.setPassword;
  const name = props.name;
  const setName = props.setName;

  const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      console.log(e);
      if (inputType === 'email') {
          setEmail(inputValue);
      } else if (inputType === 'password') {
          setPassword(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    // try {
    //   // execute addUser mutation and pass in variable data from form
    //   const { data } = await addUser({
    //     variables: { ...userFormData }
    //   });

    //   Auth.login(data.addUser.token)

    // } catch (e) {
    //   console.error(e);

    // }

    // setUserFormData({
    //   name: '',
    //   email: '',
    //   password: '',
    // });

    

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className="signup-container">
      <h1 className='signup-title'>Sign Up</h1>
      <Form className="signup-form" name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
        onSubmit={handleFormSubmit} onFinishFailed={onFinishFailed} autoComplete="off"
      >
        <Form.Item label="Name" rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]} onChange={handleInputChange} value={name}
        >
          <Input name="name" />
        </Form.Item>

        <Form.Item label="Email" rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]} onChange={handleInputChange} value={email}
        >
          <Input name="email" />
        </Form.Item>

        <Form.Item label="Password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]} onChange={handleInputChange} value={password}
        >
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
          <Link to="/dashboard">  
            <Button type="primary" htmlType="submit">Submit</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;