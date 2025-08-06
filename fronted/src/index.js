import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

const RootApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootApp />);