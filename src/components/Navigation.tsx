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
    <nav className="border-b bg-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 card-3d p-2 rounded-lg">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">StudentConnect</span>
          </Link>

          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors button-3d rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              asChild 
              className="button-3d"
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

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start button-3d"
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
