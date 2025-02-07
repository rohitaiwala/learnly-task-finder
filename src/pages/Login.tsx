
import { Navigation } from "@/components/Navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Eye, EyeOff, Github, Twitter, Facebook } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, "Please enter your username/email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Login attempt:", values);
      // Hardcoded credentials for testing
      if (values.username === "AnupamBhai" && values.password === "Pubgstar@#$") {
        login(values.username);
        toast({
          title: "Welcome back!",
          description: `Successfully logged in as ${values.username}`,
        });
        navigate("/");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <Navigation />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500">Login to your account</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={() => toast({ title: "Social login", description: "Github login not implemented yet" })}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={() => toast({ title: "Social login", description: "Facebook login not implemented yet" })}
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={() => toast({ title: "Social login", description: "Twitter login not implemented yet" })}
            >
              <Twitter className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Username/Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your username or email" 
                        className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]" 
                        {...field} 
                      />
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
                    <FormLabel className="text-gray-700">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]"
                          {...field} 
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-[#1EAEDB] hover:bg-[#1a9bc4] text-white rounded-xl py-2.5"
              >
                Login
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <Link to="/register" className="text-[#1EAEDB] hover:underline font-medium">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
