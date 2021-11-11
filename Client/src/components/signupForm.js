import React, { useState, useEffect } from 'react';
import { userMutation } from '@apollo/client';
import 'antd/dist/antd.css';

import { Form, Input, InputNumber, Button } from 'antd';

import { ADD_USER } from '../utils/mutations';

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

const SignUpForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };


  return (
    <div>
      <h1>Sign Up</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;




  // // set initial form state
  // const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  // const [addUser] = useMutation(ADD_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // use try/catch instead of promises to handle errors
  //   try {
  //     // execute addUser mutation and pass in variable data from form
  //     const { data } = await addUser({
  //       variables: { ...userFormData }
  //     });

  //     Auth.login(data.addUser.token)

  //   } catch (e) {
  //     console.error(e);
  //     setShowAlert(true);
  //   }

  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };
