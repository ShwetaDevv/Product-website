
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
      const response = await axios.post('https://intern-task-api.bravo68web.workers.dev/auth/login', data);

      // Log the response for debugging purposes
      console.log('API Response:', response);

      // Store the user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));

      // Redirect to the products page or any other page
      window.location.href = '/';
    } catch (error) {
      // Log the error for debugging purposes
      console.error('API Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-white text-center mb-6">Login</h2>
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
          <div className="mb-6">
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
          {/* Add "Don't have an account?" link */}
          <div className="mb-4 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-400 hover:underline">
                Register here
              </a>
            </p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

