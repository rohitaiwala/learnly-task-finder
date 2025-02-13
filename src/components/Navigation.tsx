import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Bot, Menu, X, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
export const Navigation = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="border-b bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-[5px] px-0 bg-green-950 hover:bg-green-800">
          <Link to="/" className="flex items-center gap-2 rounded-full bg-white/90 p-2 shadow-sm transition-all duration-300 hover:shadow-md">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">
              StudentConnect
            </span>
          </Link>

          <button className="md:hidden p-2 rounded-full bg-white/90 text-primary hover:bg-primary/10 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center gap-2">
            <div className="p-1 flex items-center gap-1 bg-orange-950 hover:bg-orange-800 rounded-3xl py-[4px] px-[15px]">
              <Link to="/" className="px-4 py-2 rounded-full flex items-center gap-2 text-primary hover:bg-white/90 transition-all duration-300">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link to="/find-tutors" className="px-4 py-2 rounded-full text-primary hover:bg-white/90 transition-all duration-300">
                Find Tutors
              </Link>
              <Link to="/tasks" className="px-4 py-2 rounded-full text-primary hover:bg-white/90 transition-all duration-300">
                Tasks
              </Link>
              <Link to="/community" className="px-4 py-2 rounded-full text-primary hover:bg-white/90 transition-all duration-300">
                Community
              </Link>
              <Link to="/resources" className="px-4 py-2 rounded-full text-primary hover:bg-white/90 transition-all duration-300">
                Resources
              </Link>
            </div>
            
            {user?.isLoggedIn ? <div className="flex items-center gap-2 ml-2">
                <Link to="/profile" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                  Profile
                </Link>
                <button onClick={handleLogout} className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-white/90 transition-all duration-300">
                  Logout
                </button>
              </div> : <div className="flex items-center gap-2 ml-2">
                <Link to="/login" className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-white/90 transition-all duration-300">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                  Register
                </Link>
              </div>}
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden py-4 space-y-2 bg-teal-950 hover:bg-teal-800 rounded-2xl px-[15px]">
            <Link to="/" className="block px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
              <Home className="h-5 w-5 inline-block mr-2" />
              Home
            </Link>
            <Link to="/find-tutors" className="block px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
              Find Tutors
            </Link>
            <Link to="/tasks" className="block px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
              Tasks
            </Link>
            <Link to="/community" className="block px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
              Community
            </Link>
            <Link to="/resources" className="block px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
              Resources
            </Link>
            {user?.isLoggedIn ? <div className="space-y-2">
                <Link to="/profile" className="block px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                  My Profile
                </Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">
                  Logout
                </button>
              </div> : <div className="space-y-2">
                <Link to="/login" className="block px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-white/90 transition-colors duration-300">
                  Login
                </Link>
                <Link to="/register" className="block px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                  Register
                </Link>
              </div>}
          </div>}
      </div>
    </nav>;
};