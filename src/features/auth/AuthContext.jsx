import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, recordLogin } from '../../supabaseClient';
import { signIn, signOut } from './authService';

/** @typedef {Object} AuthContextType
 * @property {Object|null} user - The currently authenticated user.
 * @property {Function} signIn - Function to trigger sign in.
 * @property {Function} signOut - Function to sign out the user.
 */

/** @type {React.Context<AuthContextType>} */
const AuthContext = createContext();

/**
 * AuthProvider component that provides authentication state for the app.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loginRecorded, setLoginRecorded] = useState(false);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user?.email && !loginRecorded) {
        try {
          await recordLogin(user.email, import.meta.env.VITE_PUBLIC_APP_ENV);
          setLoginRecorded(true);
          console.log('User login recorded:', user.email);
        } catch (error) {
          console.error('Failed to record login:', error);
        }
      }
    }
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user || null;
      setUser(currentUser);
      if (event === 'SIGNED_IN' && currentUser && !loginRecorded) {
        recordLogin(currentUser.email, import.meta.env.VITE_PUBLIC_APP_ENV)
          .then(() => {
            setLoginRecorded(true);
            console.log('User login recorded on auth change:', currentUser.email);
          })
          .catch((error) => {
            console.error('Failed to record login on auth change:', error);
          });
      }
      if (event === 'SIGNED_OUT') {
        setLoginRecorded(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [loginRecorded]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to access authentication context.
 * @returns {AuthContextType}
 */
export function useAuth() {
  return useContext(AuthContext);
}