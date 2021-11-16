import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate, Link, Route } from 'react-router-dom';
import '../Styles/Addcurrency.css';

import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';


const AddCurrency = (props) => {
    const navigate = useNavigate();

    const currencyName = props.currencyName;
    const setCurrencyName = props.setCurrencyName;

    const purchasedAmount = props.purchasedAmount;
    const setPurchasedAmount = props.setPurchasedAmount

    const soldAmount = props.soldAmount;
    const setSoldAmount = props.setSoldAmount;

    const yearlyIncome = props.yearlyIncome;
    const setYearlyIncome = props.setYearlyIncome;

    const costOwning = props.costOwning;
    const setCostOwning = props.setCostOwning;



    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
  
        if (inputType === 'currency') {
            setCurrencyName(inputValue);
        } else if (inputType === 'purchasedAmount') {
            setPurchasedAmount(inputValue);
        } else if (inputType === 'soldAmount') {
            setSoldAmount(inputValue);
        } else if (inputType === 'yearlyIncome') {
            setYearlyIncome(inputValue);
        } else if (inputType === 'costOwning') {
            setCostOwning(inputValue);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        navigate('/dashboard', { replace: true });

    }

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(setCurrencyName(), values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="addCurrencyForm-container">
            <Link to="/">
                <Button type="default" className="logout-btn">Logout</Button>
            </Link>
            <h1 className='addCurrency-title'>Add Currency</h1>
            <Form onSubmit={handleFormSubmit} className="addCurrency-form" name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
                onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                <Form.Item label="Currency Name" rules={[
                    {
                        required: true,
                        message: 'Please input the currency',
                    },
                ]} onChange={handleInputChange} value={currencyName}>
                    <Input name="currency" />
                </Form.Item>

                <Form.Item label="Purchased Amount" rules={[
                    {
                        required: true,
                        message: 'Please enter how much you bought it for',
                    },
                ]} onChange={handleInputChange} value={purchasedAmount}>
                    <Input name="purchasedAmount" />
                </Form.Item>

                <Form.Item label="Sold Amount" rules={[
                    {
                        required: true,
                        message: 'Please enter how much you sold it for',
                    },
                ]} onChange={handleInputChange} value={soldAmount}>
                    <Input name="soldAmount" />
                </Form.Item>

                <Form.Item label="Yearly Income" rules={[
                    {
                        required: true,
                        message: 'Please enter you yearly income',
                    },
                ]} onChange={handleInputChange} value={yearlyIncome}>
                    <Input name="yearlyIncome" />
                </Form.Item>

                <Form.Item label="Cost of Owning" rules={[
                    {
                        required: true,
                        message: 'Please enter how much it cost to own this',
                    },
                ]} onChange={handleInputChange} value={costOwning}>
                    <Input name="costOwning" />
                </Form.Item>

                <Form.Item name="Ownership" valuePropName="checked" wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
                    <Checkbox>Owned longer then 12 months?</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Link to="/dashboard">
                        <Button onClick={handleFormSubmit} type="primary" htmlType="submit">Submit</Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCurrency;