import React, { useState } from 'react';

const BillingPayment = () => {
  const [amount, setAmount] = useState('');
  const [energyType, setEnergyType] = useState('');
  const [producerName, setProducerName] = useState('');

  // Sample data for energy types and producers
  const energyTypes = [
    { id: 1, name: 'Solar' },
    { id: 2, name: 'Wind' },
    { id: 3, name: 'Hydro' },
    { id: 4, name: 'Biomass' },
    { id: 5, name: 'Geothermal' },
  ];

  const producers = [
    { id: 1, name: 'Green Energy Co.' },
    { id: 2, name: 'Solar Power Inc.' },
    { id: 3, name: 'Wind Farms LLC' },
    { id: 4, name: 'Hydro Solutions' },
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    // Payment logic here
    console.log('Payment of $', amount, 'for', energyType, 'from', producerName, 'submitted.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Billing & Payment</h2>

        <form className="space-y-4" onSubmit={handlePayment}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Type of Energy</label>
            <select
              value={energyType}
              onChange={(e) => setEnergyType(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">--Select--</option>
              {energyTypes.map((energy) => (
                <option key={energy.id} value={energy.name}>{energy.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Producer</label>
            <select
              value={producerName}
              onChange={(e) => setProducerName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">--Select--</option>
              {producers.map((producer) => (
                <option key={producer.id} value={producer.name}>{producer.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Amount to Pay</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="$0.00"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingPayment;







/*import React, { useState } from 'react';

const BillingPayment = () => {
  const [amount, setAmount] = useState('');
  const [energyType, setEnergyType] = useState('Solar'); // Default energy type
  const [producerName, setProducerName] = useState('Solar Co.'); // Default producer name

  const handlePayment = (e) => {
    e.preventDefault();
    // Payment logic here
    console.log('Payment of $', amount, 'submitted for', energyType, 'from', producerName);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Billing & Payment</h2>

    
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Purchasing Energy</h3>
          <p className="text-gray-700">Type of Energy: <span className="font-medium">{energyType}</span></p>
          <p className="text-gray-700">Producer: <span className="font-medium">{producerName}</span></p>
        </div>

        <form className="space-y-4" onSubmit={handlePayment}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Amount to Pay</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="$0.00"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingPayment;*/

/*import React, { useState } from 'react';

const BillingPayment = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Payment logic here
    console.log('Payment of $', amount, 'submitted.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Billing & Payment</h2>

        <form className="space-y-4" onSubmit={handlePayment}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Amount to Pay</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="$0.00"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};




export default BillingPayment;
*/