

import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '../firebase/config';

const AuthContext =  createContext();

export const AuthProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    
  // ✅ Define login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Logout function
  const logout = () => {
    return signOut(auth);
  };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)