import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import "../Styles/SignupForm.css";

import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link, Outlet } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import { useNavigate, Routes, Route } from 'react-router-dom';




const LoginForm = () => {
    // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);

    // const [loginUser, { error }] = useMutation(LOGIN_USER);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserFormData({ ...userFormData, [name]: value });
    // };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     const { data } = await loginUser({
        //         variables: { ...userFormData }
        //     });

        //     Auth.login(data.login.token)

        // } catch (err) {
        //     console.error(err);
        // }

        // setUserFormData({
        //     username: '',
        //     email: '',
        //     password: '',
        // });
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="signup-container">
            <h1 className='signup-title'>Login</h1>
            <Form className="signup-form" name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
             onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                <Form.Item label="Email" name="email" rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]} onSubmit={handleFormSubmit}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Link to="/dashboard">
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Link>
                </Form.Item>
            </Form>
            <Outlet />
        </div >
    );
};

export default LoginForm;