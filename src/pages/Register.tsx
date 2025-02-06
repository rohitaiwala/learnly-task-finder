import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { PersonalInfoFields } from "@/components/registration/PersonalInfoFields";
import { AcademicInfoFields } from "@/components/registration/AcademicInfoFields";
import { PasswordFields } from "@/components/registration/PasswordFields";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  qualification: z.string().min(2, "Please enter your qualification"),
  role: z.enum(["student", "tutor"], {
    required_error: "Please select a role",
  }),
  institutionName: z.string().min(2, "Please enter your school/college name"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  preferredSubject: z.string().min(2, "Please enter your preferred subject"),
  location: z.string().min(2, "Please enter your location"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      qualification: "",
      role: "student",
      institutionName: "",
      email: "",
      phone: "",
      preferredSubject: "",
      location: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  useEffect(() => {
    if (password && confirmPassword) {
      setPasswordsMatch(password === confirmPassword);
    } else {
      setPasswordsMatch(false);
    }
  }, [password, confirmPassword]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Form values:", values);
      toast({
        title: "Registration successful!",
        description: "You can now login to your account.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-muted-foreground mt-2">Join our learning community today</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <PersonalInfoFields form={form} />
              <AcademicInfoFields form={form} />
              <PasswordFields
                form={form}
                showPassword={showPassword}
                showConfirmPassword={showConfirmPassword}
                passwordsMatch={passwordsMatch}
                setShowPassword={setShowPassword}
                setShowConfirmPassword={setShowConfirmPassword}
              />

              <Button type="submit" className="w-full">Register</Button>
            </form>
          </Form>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;