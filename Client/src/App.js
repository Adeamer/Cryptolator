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
  // const [ownership, setOwnership] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [tax, setTax] = useState('');
  
  
  return (
    <div className="body">
      <ApolloProvider className="body" client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="//*" element={<Home />} />
            <Route path="login/*" element={<LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
            <Route path="signup" element={<SignupForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName}/>} />
            <Route path="/dashboard" element={<Dashboard currencyName={currencyName} soldAmount={soldAmount} yearlyIncome={yearlyIncome} purchasedAmount={purchasedAmount} 
            name={name} taxAmount={taxAmount} setTaxAmount={setTaxAmount} tax={tax} setTax={setTax} 
            // ownership={ownership} 
            />} 
            />
            <Route path="/addCurrency" element={<AddCurrency currencyName={currencyName} setCurrencyName={setCurrencyName} purchasedAmount={purchasedAmount} 
            setPurchasedAmount={setPurchasedAmount} soldAmount={soldAmount} yearlyIncome={yearlyIncome}
            setSoldAmount={setSoldAmount} setYearlyIncome={setYearlyIncome} 
            // ownership={ownership} setOwnership={setOwnership} 
            />} 
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
