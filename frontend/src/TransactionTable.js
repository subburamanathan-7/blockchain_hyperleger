import React from 'react';

const transactions = [
  { id: 1, date: '2023-09-01', amount: '50 kWh', status: 'Completed' },
  { id: 2, date: '2023-09-10', amount: '20 kWh', status: 'Pending' },
  { id: 3, date: '2023-09-15', amount: '80 kWh', status: 'Completed' },
];

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction History</h2>
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Amount</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.date}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.amount}</td>
              <td className={`px-6 py-4 text-sm ${transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
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