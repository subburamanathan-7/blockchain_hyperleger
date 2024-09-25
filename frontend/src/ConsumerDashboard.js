import React from 'react';
//import { Link } from 'react-router-dom';
//import RequestEnergy from './RequestEnergy';
//import TransactionTable from './TransactionTable';
//import BillingPayment from './BillingPayment';
import { useNavigate } from 'react-router-dom';
const consumerData = {
  id: 'CNS1234567890',
  name: 'John Doe',
  credit: 150.75, // available credit in wallet
};


const ConsumerDashboard = () => {
  const navigate = useNavigate();
const redirectTot = () => {
  navigate('/transactions');
};
  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Consumer Information Section */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Welcome, {consumerData.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Consumer ID */}
          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700">Consumer ID</h2>
            <p className="text-gray-600">{consumerData.id}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-lg font-semibold text-green-700">Available Credit</h2>
            <p className="text-gray-600">${consumerData.credit.toFixed(2)}</p>
          </div>

          {/* Add more details as needed */}
          <div className="p-4 bg-yellow-100 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-700">Account Status</h2>
            <p className="text-gray-600">Active</p>
          </div>
        </div>
      </div>
          
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Consumer Dashboard</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-100 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-blue-700">Request Energy</h2>
            <p className="text-gray-600">Request energy from available producers</p>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick= {() => navigate('/request-energy')}>
              Request Energy
            </button>
          </div>

          <div className="p-6 bg-green-100 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-700">View Transactions</h2>
            <p className="text-gray-600">View your current and previous energy transactions</p>
            

            <button
              className="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick= {() => navigate('/transactions')}>
              View Transactions
            </button>
          </div>

          <div className="p-6 bg-yellow-100 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-yellow-700">Billing & Payments</h2>
            <p className="text-gray-600">View your bills and make payments for energy</p>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            
              onClick= {() => navigate('/billing-payment')}            >
              Manage Billing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;

/*const ConsumerDashboard = () => {
  return (
    <div>
      <h2>Consumer Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/consumer-dashboard/request-energy">Request Energy</Link></li>
          <li><Link to="/consumer-dashboard/transactions">View Transactions</Link></li>
          <li><Link to="/consumer-dashboard/billing">Billing & Payment</Link></li>
        </ul>
      </nav>

      
      <RequestEnergy />
      <TransactionTable />
      <BillingPayment />
    </div>
  );
};

export default ConsumerDashboard;
*/