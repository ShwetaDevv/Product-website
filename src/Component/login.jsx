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

      // Redirect to the products page
      window.location.href = '/';
    } catch (error) {
      // Log the error for debugging purposes
      console.error('API Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4">Login</h1>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
