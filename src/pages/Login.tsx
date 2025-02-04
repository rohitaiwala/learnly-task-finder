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

const formSchema = z.object({
  username: z.string().min(2, "Please enter your username/email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Login to your account</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username/Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username or email" {...field} />
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
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Login</Button>
            </form>
          </Form>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;