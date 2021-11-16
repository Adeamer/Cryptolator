import React, { useState, useEffect } from 'react';
import Graph from '../components/Graph';
import "../Styles/Dashboard.css";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link, useNavigate, Route, Routes } from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";
import AddCurrency from './addCurrency';
import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers';



const Dashboard = (props) => {
    const navigate = useNavigate();

    const currencyName = props.currencyName;
    const soldAmount = props.soldAmount;
    const purchasedAmount = props.purchasedAmount;
    const yearlyIncome = props.yearlyIncome;
    const name = props.name;
    const taxAmount = props.taxAmount;
    const setTaxAmount = props.setTaxAmount;
    const tax = props.tax;
    const setTax = props.setTax;
    const setName = props.setName;
    const ownership = props.ownership;

    useEffect(() => {
        
        if(yearlyIncome < 120000) {
            setTax(0.325);
        } else if (yearlyIncome > 120000 && yearlyIncome < 180000) {
            setTax(0.37);
        } else if (yearlyIncome > 180000) {
            setTax(0.45);
        }

        const profit = Math.floor(soldAmount - purchasedAmount);

        if(ownership === true){
            Math.floor(soldAmount / 0.5);
            console.log(soldAmount);
        } else if (ownership === false) {
            return soldAmount;
        }

        const equation = Math.floor(profit * tax);
        setTaxAmount(equation);
    }, []);


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
                <p className="amount-text">sold Amount</p>
                <p className="sold-amount">${soldAmount}</p>

                <Button onClick={handleSubmit} type="primary" className="addCurrency-btn">Add Currency</Button>
            </div>
            <div className='total-tax'>
                <p className="tax-title">Total amount of tax</p>
                <p className="tax-amount">${taxAmount}.00</p>
            </div>
        </div>
    )
}

export default Dashboard;