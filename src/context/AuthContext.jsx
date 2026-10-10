import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const readStoredUser = () => {
  try {
    const savedLocal = localStorage.getItem('aldiwan-user');
    if (savedLocal) return JSON.parse(savedLocal);

    const savedSession = sessionStorage.getItem('aldiwan-session');
    if (savedSession) return JSON.parse(savedSession);
  } catch (error) {
    console.warn('Unable to read stored auth state', error);
  }

  return null;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser());

  const login = (userData, rememberMe = true) => {
    setUser(userData);

    if (rememberMe) {
      localStorage.setItem('aldiwan-user', JSON.stringify(userData));
      sessionStorage.removeItem('aldiwan-session');
      return;
    }

    sessionStorage.setItem('aldiwan-session', JSON.stringify(userData));
    localStorage.removeItem('aldiwan-user');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aldiwan-user');
    sessionStorage.removeItem('aldiwan-session');
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
