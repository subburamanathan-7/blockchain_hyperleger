import React, { useState } from 'react';
//import AddEnergy from '../components/producer/AddEnergy';
import TransactionTable from './TransactionTable'; // Assuming you have this component

const ProducerDashboard = () => {
  // Sample producer details
  const [producer] = useState({
    name: 'Green Energy Co.',
    energyTypes: [
      { id: 1, type: 'Solar', availableAmount: 500, pricePerKwh: 0.10 },
      { id: 2, type: 'Wind', availableAmount: 300, pricePerKwh: 0.08 },
      { id: 3, type: 'Hydro', availableAmount: 400, pricePerKwh: 0.12 },
    ],
  });

  const [transactions, setTransactions] = useState([]);

  const handleSellEnergy = (energy) => {
    setTransactions((prev) => [...prev, energy]); // Add the sold energy to transactions
    producer.energyTypes = producer.energyTypes.filter((e) => e.id !== energy.id); // Remove sold energy from producer
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Producer Dashboard</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Producer Details</h3>
        <p className="text-gray-700">Name: <span className="font-medium">{producer.name}</span></p>

        <h4 className="text-md font-semibold text-gray-800 mt-4">Available Energy Types</h4>
        <table className="min-w-full mt-2 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Available Amount (kWh)</th>
              <th className="border px-4 py-2">Price per kWh ($)</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {producer.energyTypes.map((energy) => (
              <tr key={energy.id}>
                <td className="border px-4 py-2">{energy.type}</td>
                <td className="border px-4 py-2">{energy.availableAmount}</td>
                <td className="border px-4 py-2">{energy.pricePerKwh.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleSellEnergy(energy)}
                    className="text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-700"
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default ProducerDashboard;



/*import React from 'react';
import AddEnergy from './AddEnergy';

const ProducerDashboard = () => {
  return (
    <div>
      <h2>Producer Dashboard</h2>
      <AddEnergy />
    </div>
  );
};

export default ProducerDashboard;*/
