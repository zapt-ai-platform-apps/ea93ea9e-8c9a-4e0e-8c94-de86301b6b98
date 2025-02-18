import { supabase } from '../../supabaseClient';

export async function signIn() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    if (error) throw error;
  } catch (error) {
    console.error('Sign in failed:', error);
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Sign out failed:', error);
  }
}