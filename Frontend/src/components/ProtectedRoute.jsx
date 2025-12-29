import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const ADMIN_PASSWORD = "Blessed@1"; 

const ProtectedRoute = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [error, setError] = useState('');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  // Define a dummy/placeholder element to match your brand style if needed
  const blueColor = '#22ABDF';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      // Authenticates for the current component lifecycle only
      setIsAuthenticated(true); 
      setError('');
    } else {
      setError('Incorrect password. Access denied.');
      setPassword('');
    }
  };

  // If the user is authenticated, render the nested route (AdminTestimonials)
  // This will only be true immediately after a successful password submission
  if (isAuthenticated) {
    return <Outlet />;
  }

  // If not authenticated, always show the password dialogue
  return (
    // Admin login UI styled with your primary brand color
    <div className="flex items-center justify-center min-h-screen bg-orange-50"> 
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-sm">
        <h2 
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: blueColor }}
        >
          Admin Login
        </h2>
        
        {error && (
          <p className="mb-4 text-sm font-medium text-red-600 bg-red-50 p-3 rounded">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-lg transition duration-300 hover:opacity-90"
            style={{ backgroundColor: blueColor }}
          >
            Access Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProtectedRoute;