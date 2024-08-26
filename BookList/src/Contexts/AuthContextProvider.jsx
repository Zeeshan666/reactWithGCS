import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => setIsAuthenticated(prev => !prev);

    const value = { isAuthenticated, toggleAuth };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
