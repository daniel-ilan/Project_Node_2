import React, { useContext, useState, useEffect } from 'react';
import API from '../api';

const initialState = {
  token: null,
  id: null,
  username: null,
  success: false,
  loading: false,
};

const UserContext = React.createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

function useProvideAuth() {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authDetails, setAuthDetails] = useState(initialState);

  const login = async (username, password) => {
    const response = await API.post('/login', { username, password });
    const data = response.data;
    if (data.success) {
      setAuthDetails(data);
      setIsAuthenticated(true);
      return data;
    }
  };

  const logout = async (uid) => {
    const response = await API.post('/logout', { uid });
    if (response.data.user) {
      setAuthDetails(null);
      setIsAuthenticated(false);
    }
  };

  const signUp = async (username, password) => {
    const response = await API.post('/signup', { username, password });
    const data = response.data;
    if (data.success) {
      setAuthDetails(data);
      setIsAuthenticated(true);
      return data;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const username = localStorage.getItem('username');
    if (token && userId) {
      setAuthDetails({
        username,
        userId,
        token,
        success: true,
      });
      setIsAuthenticated(true);
    }
  }, []);

  return {
    signUp,
    login,
    logout,
    authDetails,
    setAuthDetails,
    loading,
    setLoading,
    isAuthenticated,
  };
}
