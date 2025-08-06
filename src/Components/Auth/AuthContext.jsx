import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for user on mount
    const storedUser = localStorage.getItem('craftbridge_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('craftbridge_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem('craftbridge_user', JSON.stringify(found));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const register = (name, email, password) => {
    let users = JSON.parse(localStorage.getItem('craftbridge_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('craftbridge_users', JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem('craftbridge_user', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('craftbridge_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};