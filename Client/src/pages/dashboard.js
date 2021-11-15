import React, { useState, useEffect } from 'react';
import Graph from '../components/Graph';
import "../Styles/Dashboard.css";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div>
            <h1>Hello username</h1>
            <Link to="/login">
                    <Button type="default" className="logout-btn">Logout</Button>
            </Link>

            <div className='walletContainer'>
                <h2 className="wallet-text">Wallet</h2>
                <p className="currency-text">Currencies</p>
                <p className="amount-text">Amount</p>
                <h3 className="total-text">Total</h3>
            </div>
            <div className='graphContainer'>
               
                <p>Total amount of tax</p>
            </div>
        </div>
    )
}

export default Dashboard;