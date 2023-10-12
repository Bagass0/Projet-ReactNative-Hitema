import React, { createContext, useContext, useState } from 'react';

// Créez un contexte
const AuthContext = createContext();

// Créez un composant fournisseur qui enveloppe votre application
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Créez un hook pour accéder au contexte
export const useAuth = () => {
  return useContext(AuthContext);
};
