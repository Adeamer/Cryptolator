import react from 'react';
import { InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import "./Styles/App.css";

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
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div className="body">
      <ApolloProvider className="body" client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "login" element={<LoginForm />} />
            <Route path= "signup" element={<SignupForm />} />
            <Route path= "dashboard" element={<Dashboard />} />
          </Routes>
          </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
