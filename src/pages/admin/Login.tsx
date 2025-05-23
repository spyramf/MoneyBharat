
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/context/AuthContext';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Lock, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Form validation schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    const success = login(data.username, data.password);
    
    if (success) {
      navigate('/admin');
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Money Bharat CMS</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12">
                <img 
                  src="/lovable-uploads/91d78f6e-991f-4f65-883d-f9962eb33219.png" 
                  alt="Money Bharat Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              <span className="text-[#F97316]">MONEY</span>
              <span className="text-[#2EB883]">BHARAT</span> CMS
            </CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                {error}
              </div>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            className="pl-9" 
                            placeholder="Enter your username" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            className="pl-9" 
                            type="password" 
                            placeholder="Enter your password" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-fintech-purple hover:bg-fintech-deep-purple">
                  Sign in
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            Secure admin access for Money Bharat
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
