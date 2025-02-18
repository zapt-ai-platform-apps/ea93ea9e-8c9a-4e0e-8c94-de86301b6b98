import React from 'react';
import { useAuth } from '../features/auth/AuthContext';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

/**
 * Component displaying authentication UI.
 * Renders "Sign in with ZAPT" text above the auth form with a link to ZAPT.
 */
const AuthUI = () => {
  const { signIn } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Sign in with ZAPT</h2>
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline"
        >
          Visit ZAPT
        </a>
      </div>
      <Auth
        supabaseClient={require('../supabaseClient').supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        redirectTo=""
      />
      <button
        onClick={signIn}
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded cursor-pointer"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default AuthUI;