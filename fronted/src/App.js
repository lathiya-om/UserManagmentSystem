import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import LoadingSpinner from './components/common/LoadingSpinner';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const { authToken, loadingAuth } = useContext(AuthContext);

  const navigate = (newPath) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  let ComponentToRender;

  if (loadingAuth) {
    ComponentToRender = <LoadingSpinner />;
  } else if (authToken) {
    switch (path) {
      case '/dashboard':
        ComponentToRender = <DashboardPage navigate={navigate} />;
        break;
      case '/login':
      case '/register':
        ComponentToRender = <DashboardPage navigate={navigate} />;
        navigate('/dashboard');
        break;
      default:
        ComponentToRender = <DashboardPage navigate={navigate} />;
    }
  } else {
    switch (path) {
      case '/register':
        ComponentToRender = <RegisterPage navigate={navigate} />;
        break;
      case '/login':
      default:
        ComponentToRender = <LoginPage navigate={navigate} />;
        break;
    }
  }

  return (
    <div>
      {ComponentToRender}
    </div>
  );
}

export default App;