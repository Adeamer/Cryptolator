import React, { useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Link, Switch, Outlet } from "react-router-dom";
import '../Styles/Home.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import logo from '../assets/images/logo.jpg';
import logo2 from '../assets/images/logo2.jpg';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Home = () => {


    return (
        <div className="body">
            <header>
                <h1 className="title">Crypulator</h1>
                <p className="explination">Tired of being stung at tax time? Plan ahead with Crypulator and get the most out of you crypto investments!</p>
            </header>
            <div className="btn-container">
                <p className="signup-text">First time? Sign up here</p>
                <Link to="/signup">
                <Button type="default" className="signup-btn">Sign up</Button>
                </Link>
                <p className="login-text">Login here</p>
                <Link to="/login">
                    <Button type="default" className="login-btn">login</Button>
                </Link>
                <Outlet />
            </div>
            <img className="logo" src={logo} alt="crypto-calculator"/>
            <img className="logo2" src={logo2} alt="crypto"/>
        </div>
    )
};

export default Home;