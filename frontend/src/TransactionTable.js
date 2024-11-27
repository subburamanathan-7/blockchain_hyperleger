import React, { useState } from 'react';

import {useQuery} from '@tanstack/react-query';
import {getTransactions} from './features/TransactionServices'

const transactions = [
  { id: 1, date: '2023-09-01', amount: '50 kWh', status: 'Completed' },
  { id: 2, date: '2023-09-10', amount: '20 kWh', status: 'Pending' },
  { id: 3, date: '2023-09-15', amount: '80 kWh', status: 'Completed' },
];

const TransactionTable = () => {
  const[transactionData, setTransactionData] = useState(null);

  const getTransactionQuery = useQuery({
        queryKey:['transaction'],
        queryFn:()=>{
            return getTransactions()
        },
        enabled:!!true,
        refetchOnMount:true,
        refetchOnReconnect:true,
        refetchOnWindowFocus:false,
    })
    if(getTransactionQuery.isLoading || getTransactionQuery.isFetching){}    
    
    else if(getTransactionQuery.isFetched){
      console.log(getTransactionQuery.data)
      let {assetsList} = getTransactionQuery.data
      // console.log(assetsList[0])
      if(transactionData===null){
            setTransactionData(assetsList)
            console.log(transactionData)
        }
    }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction History</h2>
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Date-Created</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Date-Purchased</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">producer-ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Quantity</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Units</th>

          </tr>
        </thead>
        <tbody>
          {transactionData? transactionData.map((transaction) => (
            <tr key={transaction.ID} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.Date_created_at}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.Date_purchased_at}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.ID}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.ProducerID}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.Quantity}</td>
              <td className={`px-6 py-4 text-sm ${transaction.Status === 'ACTIVE' ? 'text-green-600' : 'text-yellow-600'}`}>
                {transaction.Status}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.Type}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.Unit}</td>
            </tr>
          )):null}
        </tbody>
      </table>
    </div>
   );
};

export default TransactionTable;

/*import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction History</h2>
        
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Amount (kWh)</th>
              <th className="px-4 py-2 text-left text-gray-700">Price</th>
              <th className="px-4 py-2 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-gray-600">{transaction.date}</td>
                <td className="px-4 py-2 text-gray-600">{transaction.amount}</td>
                <td className="px-4 py-2 text-gray-600">{transaction.price}</td>
                <td className="px-4 py-2 text-gray-600">
                  <span
                    className={`px-2 py-1 rounded ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;

*/