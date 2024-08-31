import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the data for debugging purposes
      console.log('Submitting data:', data);

      // Make the API request
      const response = await axios.post('https://intern-task-api.bravo68web.workers.dev/auth/signup', data);

      // Log the response for debugging purposes
      console.log('API Response:', response);

      // Redirect to the login page
      window.location.href = '/login';
    } catch (error) {
      // Log the error for debugging purposes
      console.error('API Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
    <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl text-white text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={data.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2">Password</label>
          <input 
            type="password" 
            id="password" 
            value={data.password}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        {/* Add "Have an account?" link */}
        <div className="mb-4 text-center">
          <p className="text-gray-400">
            Have an account?{' '}
            <a href="/login" className="text-blue-400 hover:underline">
              Log in here
            </a>
          </p>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Register;
