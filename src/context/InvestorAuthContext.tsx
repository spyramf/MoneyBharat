import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

interface InvestorAuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, userData?: any) => Promise<{ error: any; user?: User; session?: Session }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  checkExistingClient: (email: string) => Promise<{ exists: boolean; client?: any; error?: any }>;
}

const InvestorAuthContext = createContext<InvestorAuthContextType | undefined>(undefined);

export const useInvestorAuth = () => {
  const context = useContext(InvestorAuthContext);
  if (context === undefined) {
    throw new Error('useInvestorAuth must be used within an InvestorAuthProvider');
  }
  return context;
};

interface InvestorAuthProviderProps {
  children: ReactNode;
}

export const InvestorAuthProvider = ({ children }: InvestorAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkExistingClient = async (email: string) => {
    try {
      console.log('Checking for existing client with email:', email);
      
      const { data: existingClient, error } = await supabase
        .from('clients')
        .select('*')
        .eq('email', email)
        .maybeSingle();
      
      if (error) {
        console.error('Error checking existing client:', error);
        return { exists: false, error };
      }
      
      if (existingClient) {
        console.log('Found existing client:', existingClient.name);
        return { exists: true, client: existingClient };
      }
      
      console.log('No existing client found');
      return { exists: false };
      
    } catch (error) {
      console.error('Error in checkExistingClient:', error);
      return { exists: false, error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      
      return { error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error };
    }
  };

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      console.log('Starting signup with Supabase...');
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined,
          data: userData
        }
      });
      
      if (error) {
        console.error('Supabase signup error:', error);
        return { error };
      }

      console.log('Supabase signup successful:', data.user?.email);
      
      if (data.user && data.session) {
        console.log('User created and automatically signed in');
        return { error: null, user: data.user, session: data.session };
      } else if (data.user && !data.session) {
        console.log('User created, attempting immediate sign in...');
        const signInResult = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (signInResult.error) {
          console.error('Auto sign-in failed:', signInResult.error);
          return { error: signInResult.error };
        }
        
        return { error: null, user: signInResult.data.user, session: signInResult.data.session };
      }
      
      return { error: null, user: data.user, session: data.session };
      
    } catch (error) {
      console.error('Sign up error:', error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      // Clear onboarding completion flag
      localStorage.removeItem('onboardingCompleted');
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/investor/reset-password`,
      });
      
      if (error) {
        toast({
          title: "Reset Failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Reset Email Sent",
        description: "Please check your email for password reset instructions.",
      });
      
      return { error: null };
    } catch (error) {
      console.error('Reset password error:', error);
      return { error };
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    checkExistingClient,
  };

  return (
    <InvestorAuthContext.Provider value={value}>
      {children}
    </InvestorAuthContext.Provider>
  );
};
