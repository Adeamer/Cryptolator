import React, { useState } from 'react';
import { InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import "./Styles/App.css";

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import AddCurrency from './pages/addCurrency';
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

  const [currencyName, setCurrencyName] = useState('');
  const [purchasedAmount, setPurchasedAmount] = useState('');
  const [soldAmount, setSoldAmount] = useState('');
  const [yearlyIncome, setYearlyIncome] = useState('');
  const [costOwning, setCostOwning] = useState('');
  console.log(currencyName);

  return (
    <div className="body">
      <ApolloProvider className="body" client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="//*" element={<Home />} />
            <Route path="login/*" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard currencyName={currencyName} soldAmount={soldAmount} />} />
            <Route path="/addCurrency" element={<AddCurrency currencyName={currencyName} setCurrencyName={setCurrencyName} purchasedAmount={purchasedAmount} setPurchasedAmount={setPurchasedAmount}
            soldAmount={soldAmount} yearlyIncome={yearlyIncome} costOwning={costOwning}
            setSoldAmount={setSoldAmount} setYearlyIncome={setYearlyIncome} setCostOwning={setCostOwning} />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
