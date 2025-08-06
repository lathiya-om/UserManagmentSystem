import React from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

const Notification = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';
  const icon = type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />;

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg border-l-4 ${bgColor} flex items-center space-x-3 z-50 animate-fade-in-down`}>
      {icon}
      <p className="font-medium">{message}</p>
      <button onClick={onClose} className="ml-auto text-gray-500 hover:text-gray-700">
        <X size={20} />
      </button>
    </div>
  );
};

export default Notification;