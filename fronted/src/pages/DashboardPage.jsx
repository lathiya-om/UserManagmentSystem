import React, { useContext } from 'react';
import { LogOut, Home } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

const DashboardPage = ({ navigate }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-700">Please log in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl text-center border border-gray-200">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Welcome, {user.email || 'User'}!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          This is your secure dashboard. You are logged in with a JWT token.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="flex items-center py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Home size={20} className="mr-2" />
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;