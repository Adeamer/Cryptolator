import react from 'react';
import { InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddCurrency from './pages/AddCurrency';
import CurrencyForm from './components/CurrencyForm';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';


const client = new ApolloClient({

  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Home></Home>
      </Router>
    </ApolloProvider>
  );
}

export default App;
