import React, { createContext, useContext, useState } from 'react';

// Créez un contexte
const AuthContext = createContext();

// Créez un composant fournisseur qui enveloppe votre application
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    email: '',
    password: '',
    role: false,
  });

  const updateCurrentUser = (id, email, password, role) => {
    setCurrentUser({ id, email, password, role });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, updateCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Créez un hook pour accéder au contexte
export const useAuth = () => {
  return useContext(AuthContext);
};
