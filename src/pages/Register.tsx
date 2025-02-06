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
    <div className="min-h-screen bg-[#F1F0FB]">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#1EAEDB]">Create Account</h1>
            <p className="text-gray-500 mt-2">Join our learning community today</p>
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

              <Button type="submit" className="w-full bg-[#1EAEDB] hover:bg-[#33C3F0] text-white rounded-full py-3">
                Register
              </Button>
            </form>
          </Form>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or Sign up with</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6168 0 3.1013.5558 4.27 1.4847l3.285-3.285C17.3917 1.4343 14.8353 0 12 0 7.3923 0 3.3997 2.6687 1.386 6.6147L5.43 9.8993C6.4428 7.1247 8.9818 5 12 5z"/>
                  <path fill="#4285F4" d="M23.99 12.2667c0-.8287-.069-1.6307-.2067-2.4027H12v4.5493h6.6947c-.2873 1.5513-1.16 2.8707-2.4733 3.7587l3.8593 3.8593C22.4587 19.7587 23.99 16.3413 23.99 12.2667z"/>
                  <path fill="#FBBC05" d="M5.43 14.1007l-4.044 3.2847C3.3997 21.3313 7.3923 24 12 24c3.0353 0 5.5917-1.4343 7.555-3.6853l-3.8593-3.8593C14.4583 17.5093 13.0353 18 11.5 18c-3.0182 0-5.5572-2.1247-6.57-4.8993z"/>
                  <path fill="#34A853" d="M12 24c4.6077 0 8.6003-2.6687 10.614-6.6147l-4.044-3.2847C17.5572 15.8753 15.0182 18 12 18c-3.0182 0-5.5572-2.1247-6.57-4.8993L1.386 17.3853C3.3997 21.3313 7.3923 24 12 24z"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#1DA1F2" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1EAEDB] hover:underline font-medium">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;