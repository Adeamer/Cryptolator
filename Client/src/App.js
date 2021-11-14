import react from 'react';
import { InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import "./Styles/App.css";

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import AddCurrency from './pages/addCurrency';
import CurrencyForm from './components/currencyForm';
import SignupForm from './components/signupForm';
import LoginForm from './components/loginForm';


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
