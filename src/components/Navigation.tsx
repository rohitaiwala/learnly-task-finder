
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
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-[#1EAEDB]" />
            <span className="text-xl font-bold text-[#1EAEDB]">StudentConnect</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#1EAEDB] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              asChild 
              className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/find-tutors">Find Tutors</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/tasks">Tasks</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/community">Community</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/resources">Resources</Link>
            </Button>
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  asChild 
                  className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  <Link to="/profile">My Profile</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  asChild 
                  className="hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white transition-colors"
                >
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/">
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/find-tutors">Find Tutors</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/tasks">Tasks</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/community">Community</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
            >
              <Link to="/resources">Resources</Link>
            </Button>
            {user?.isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  <Link to="/profile">My Profile</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout} 
                  className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start hover:border-[#1EAEDB] hover:text-[#1EAEDB] transition-colors"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full justify-start bg-[#1EAEDB] hover:bg-[#33C3F0] text-white transition-colors"
                >
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
