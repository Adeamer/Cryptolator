import React, { useState, useEffect } from 'react';
import Graph from '../components/Graph';
import "../Styles/Dashboard.css";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link, useNavigate, Route, Routes } from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";
import AddCurrency from './addCurrency';



const Dashboard = (props) => {
    const navigate = useNavigate();

    const currencyName = props.currencyName;
    const soldAmount = props.soldAmount;
    console.log(currencyName);
    console.log(soldAmount);

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/addCurrency', { replace: true });
    };

    return (
        <div>
            <h1 className="dashboard-title">Hello Anthony Deamer</h1>
            <Link to="/">
                    <Button type="default" className="logout-btn">Logout</Button>
            </Link>

            <div className='walletContainer'>
                <h2 className="wallet-text">Wallet</h2>
                <p className="currency-text">Currency</p>
                <p className="currencyName">{currencyName}</p>
                <p className="amount-text">Amount</p>
                <p className="sold-amount">{soldAmount}</p>
                <Button onClick={handleSubmit} type="primary" className="addCurrency-btn">Add Currency</Button>
            </div>
            <div className='total-tax'>
               
                <p className="tax-title">Total amount of tax</p>
                
            </div>
        </div>
    )
}

export default Dashboard;