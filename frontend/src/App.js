import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ConsumerDashboard from './ConsumerDashboard';
import ProducerDashboard from './ProducerDashboard';
import TransactionTable from './TransactionTable';
import BillingPayment from './BillingPayment';
import RequestEnergy from './RequestEnergy';
import DataFetchingComponent from './RenderTransactions';

export const App = () =>{
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/consumer-dashboard" element={<ConsumerDashboard/>} />
          <Route path="/producer-dashboard" element={<ProducerDashboard/>} />
          <Route path="/transactions" element={<TransactionTable />} />
          <Route path="/billing-payment" element={<BillingPayment />} />
          <Route path="/request-energy" element={<RequestEnergy />} />
          <Route path="/render" element={<DataFetchingComponent />} />

          
        </Routes>

    </Router>
  );
};
