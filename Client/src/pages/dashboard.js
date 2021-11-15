import React, { useState, useEffect } from 'react';
// import Graph from '../components/Graph';

const Dashboard = () => {

    return (
        <div>
            <h1>Hello username</h1>
            <button>Logout</button>
            <div className='walletContainer'>
                <h2>Wallet</h2>
                <p>Currencies</p>
                <p>Amount</p>
                <h3>Total</h3>
            </div>
            <div className='graphContainer'>
               
                <p>Total amount of tax</p>
            </div>
        </div>
    )
}

export default Dashboard;