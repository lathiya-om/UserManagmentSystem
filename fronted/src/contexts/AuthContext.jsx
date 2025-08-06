import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    if (authToken) {
      setUser({ email: 'user@example.com', roles: ['USER'] });
    } else {
      setUser(null);
    }
    setLoadingAuth(false);
  }, [authToken]);

  const login = (token, refresh) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', refresh);
    setAuthToken(token);
    setRefreshToken(refresh);
  };

  const logout = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    setAuthToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  const value = {
    authToken,
    refreshToken,
    user,
    loadingAuth,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };