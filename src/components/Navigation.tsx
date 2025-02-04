import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">StudentConnect</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/find-tutors">Find Tutors</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/community">Community</Link>
            <Link to="/resources">Resources</Link>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};