import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Bot, Menu, X, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-card/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link 
            to="/" 
            className="flex items-center gap-2 card-3d p-2 rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StudentConnect
            </span>
          </Link>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors button-3d rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className="button-3d px-4 py-2 rounded-lg flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link 
              to="/find-tutors"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Find Tutors
            </Link>
            <Link 
              to="/tasks"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Tasks
            </Link>
            <Link 
              to="/community"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Community
            </Link>
            <Link 
              to="/resources"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Resources
            </Link>
            
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/profile"
                  className="button-3d px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  to="/login"
                  className="button-3d px-4 py-2 rounded-lg border border-primary text-primary-foreground hover:bg-primary/10 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="button-3d px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              to="/"
              className="button-3d px-4 py-2 rounded-lg flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link 
              to="/find-tutors"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Find Tutors
            </Link>
            <Link 
              to="/tasks"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Tasks
            </Link>
            <Link 
              to="/community"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Community
            </Link>
            <Link 
              to="/resources"
              className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Resources
            </Link>
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/profile"
                  className="button-3d px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="button-3d px-4 py-2 rounded-lg text-primary-foreground hover:text-primary transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  to="/login"
                  className="button-3d px-4 py-2 rounded-lg border border-primary text-primary-foreground hover:bg-primary/10 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="button-3d px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
