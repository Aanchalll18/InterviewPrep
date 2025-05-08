import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      // TODO: Replace with actual login logic
      console.log('Logging in with:', { email, password });
      setError(null);
      // navigate("/dashboard"); // Example after successful login
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-center mb-2">Welcome Back</h3>
      <p className="text-center text-gray-600 mb-6">Please enter your details to log in</p>

      <form onSubmit={handleLogin} className="space-y-5">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={() => setCurrentPage('signup')}
          className="text-yellow-600 hover:underline font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
