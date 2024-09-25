import React, { useState } from 'react';

const energyData = {
  solar: [
    { id: 'SolarCredit1', description: 'Solar Energy Credit', amount: '100 kWh', expiration: '12/31/2024', producer: 'Solar Co.' },
    { id: 'SolarCredit2', description: 'Solar Energy Credit', amount: '200 kWh', expiration: '12/31/2024', producer: 'Green Solar LLC' },
  ],
  wind: [
    { id: 'WindCredit1', description: 'Wind Energy Credit', amount: '150 kWh', expiration: '11/30/2024', producer: 'Wind Power Inc.' },
  ],
  hydro: [
    { id: 'HydroCredit1', description: 'Hydro Energy Credit', amount: '250 kWh', expiration: '01/31/2025', producer: 'Hydro Green LLC' },
  ],
  // Add more energy types as needed
};

const RequestEnergy = () => {
  const [energyAmount, setEnergyAmount] = useState('');
  const [energyType, setEnergyType] = useState('');
  const [availableCredits, setAvailableCredits] = useState([]);

  const handleEnergyTypeChange = (e) => {
    const selectedType = e.target.value;
    setEnergyType(selectedType);
    setAvailableCredits(energyData[selectedType] || []);
  };

  const handleRequest = (e) => {
    e.preventDefault();
    // Request energy logic here
    console.log('Requested', energyAmount, 'kWh of', energyType, 'energy.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request Energy</h2>

        <form className="space-y-4" onSubmit={handleRequest}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Type of Energy</label>
            <select
              value={energyType}
              onChange={handleEnergyTypeChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">--Select--</option>
              <option value="solar">Solar</option>
              <option value="wind">Wind</option>
              <option value="hydro">Hydro</option>
              <option value="biomass">Biomass</option>
              <option value="geothermal">Geothermal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Energy Amount (kWh)</label>
            <input
              type="number"
              value={energyAmount}
              onChange={(e) => setEnergyAmount(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0.00 kWh"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Available Credits</h3>
            {availableCredits.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {availableCredits.map((credit) => (
                  <li key={credit.id} className="bg-gray-100 p-2 rounded-md">
                    {credit.id}: {credit.description} - {credit.amount} (expires on {credit.expiration})<br />
                    <span className="font-medium">Producer:</span> {credit.producer}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No credits available for this energy type.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Request Energy
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestEnergy;


/*import React, { useState } from 'react';


const RequestEnergy = () => {
  const [energyAmount, setEnergyAmount] = useState('');

  const handleRequest = (e) => {
    e.preventDefault();
    // Request energy logic here
    console.log('Requested', energyAmount, 'kWh.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request Energy</h2>

        <form className="space-y-4" onSubmit={handleRequest}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Energy Amount (kWh)</label>
            <input
              type="number"
              value={energyAmount}
              onChange={(e) => setEnergyAmount(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0.00 kWh"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Request Energy
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestEnergy;*/


/*const RequestEnergy = () => {
  const [amount, setAmount] = useState(0);

  const handleRequest = () => {
    // Logic for requesting energy
    console.log('Energy requested:', amount);
  };

  return (
    <div>
      <h3>Request Energy</h3>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount of energy" 
      />
      <button onClick={handleRequest}>Request</button>
    </div>
  );
};

export default RequestEnergy;
*/