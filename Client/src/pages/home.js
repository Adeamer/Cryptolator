import React, { useState, useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
                <Switch>
                    <Route exact path='/signup'>
                        <SignupForm />
                    </Route>
                    <Route exact path='/login'>
                        <LoginForm />
                    </Route>
                </Switch>
                {/* Image of calculator and graph */}
        </div>
    )
};

export default Home;