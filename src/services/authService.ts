
import { supabase } from '@/integrations/supabase/client';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export const authService = {
  async signIn({ email, password }: SignInData) {
    return await supabase.auth.signInWithPassword({ email, password });
  },

  async signUp({ email, password, firstName, lastName }: SignUpData) {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    });
  },

  async signOut() {
    return await supabase.auth.signOut();
  },

  async resetPassword(email: string) {
    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
  },

  async getCurrentSession() {
    return await supabase.auth.getSession();
  },

  async getCurrentUser() {
    return await supabase.auth.getUser();
  }
};
