import React, { useState } from 'react';

const AddEnergy = () => {
  const [energyAmount, setEnergyAmount] = useState(0);

  const handleAddEnergy = () => {
    // Logic for adding energy
    console.log('Energy added:', energyAmount);
  };

  return (
    <div>
      <h3>Add Energy</h3>
      <input 
        type="number" 
        value={energyAmount} 
        onChange={(e) => setEnergyAmount(e.target.value)} 
        placeholder="Enter energy amount" 
      />
      <button onClick={handleAddEnergy}>Add Energy</button>
    </div>
  );
};

export default AddEnergy;
