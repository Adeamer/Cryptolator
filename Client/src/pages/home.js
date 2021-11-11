import React, { useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route, Link } from 'react-router-dom';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Home = () => {


    return (
        <div>
            <header>Crypulator
                <p>Brief explination of app</p>
            </header>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button>login</button>
                </Link>
                <Routes>
                    <Route path='/signup' component={SignupForm}/>
                    <Route path='/login' component={LoginForm}/>
                </Routes>
                {/* Image of calculator and graph */}
        </div>
    )
};

export default Home;