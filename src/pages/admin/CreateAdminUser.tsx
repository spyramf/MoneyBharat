import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2, Copy, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CreateAdminUser = () => {
  const [email, setEmail] = useState("admin@moneybharatfinance.com");
  const [password, setPassword] = useState("Admin@123456");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // Step 1: Sign up the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
          data: {
            role: "admin",
          },
        },
      });

      if (signUpError) {
        throw new Error(`Sign up failed: ${signUpError.message}`);
      }

      if (!signUpData.user) {
        throw new Error("User creation failed - no user data returned");
      }

      // Step 2: Insert admin role
      const { error: roleError } = await supabase.from("user_roles").insert({
        user_id: signUpData.user.id,
        role: "admin",
      });

      if (roleError) {
        console.error("Role insertion error:", roleError);
        // Continue even if role insertion fails initially
      }

      setResult({
        success: true,
        message: `Admin user created successfully! You can now login with these credentials.${signUpData.user.identities && signUpData.user.identities.length === 0 ? " Note: Please check your email to confirm your account before logging in." : ""}`,
      });

      toast.success("Admin user created successfully!");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setResult({
        success: false,
        message: errorMessage,
      });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create Admin User</CardTitle>
            <CardDescription>Create an administrator account to access the CMS dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <AlertDescription>
                <strong>Important:</strong> This creates a new admin user with full access to the CMS. Make sure to use
                a strong password and keep the credentials secure.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleCreateAdmin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => copyToClipboard(email, "Email")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter a strong password"
                      required
                      minLength={8}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button type="button" variant="outline" onClick={generatePassword}>
                    Generate
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(password, "Password")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum 8 characters. Use a mix of letters, numbers, and symbols.
                </p>
              </div>

              {result && (
                <Alert variant={result.success ? "default" : "destructive"}>
                  {result.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertDescription>{result.message}</AlertDescription>
                </Alert>
              )}

              <div className="flex gap-3">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Creating Admin..." : "Create Admin User"}
                </Button>

                {result?.success && (
                  <Button type="button" variant="outline" onClick={() => (window.location.href = "/admin/login")}>
                    Go to Login
                  </Button>
                )}
              </div>
            </form>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-3">Quick Start Guide:</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Enter email and password (or use the defaults)</li>
                <li>Click "Create Admin User"</li>
                <li>Check your email for confirmation (if required)</li>
                <li>
                  Go to{" "}
                  <a href="/admin/login" className="text-primary hover:underline">
                    /admin/login
                  </a>
                </li>
                <li>Login with your credentials</li>
                <li>
                  Access the CMS at{" "}
                  <a href="/admin" className="text-primary hover:underline">
                    /admin
                  </a>
                </li>
              </ol>
            </div>

            <Alert>
              <AlertDescription className="text-xs">
                <strong>Note:</strong> Supabase might require email confirmation. Check your Authentication settings in
                Supabase Dashboard → Authentication → Providers → Email to disable "Confirm email" for faster testing.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAdminUser;
