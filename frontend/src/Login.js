import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Changed from useHistory to useNavigate for newer React Router versions

const Login = () => {
  const navigate = useNavigate(); // Initialize the hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('consumer');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (placeholder for now)
    console.log('Logging in:', { email, password, userType });

    if (userType === 'consumer') {
      navigate('/consumer-dashboard');
    } else {
      navigate('/producer-dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login to Your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="consumer">Consumer</option>
              <option value="producer">Producer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')} // Navigate to the registration page
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
