import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export const Footer = () => {
  return <footer className="bg-card/80 backdrop-blur-md border-t mt-20">
      <div className="container mx-auto px-4 py-12 rounded-sm bg-cyan-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StudentConnect
            </h3>
            <p className="text-muted-foreground max-w-md">
              Empowering students through collaborative learning and mentorship. Join our community of learners and educators today.
            </p>
            <div className="flex gap-4">
              <Button size="sm" className="rounded-full" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Join Now <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/find-tutors" className="block text-muted-foreground hover:text-primary transition-colors">
                Find Tutors
              </Link>
              <Link to="/tasks" className="block text-muted-foreground hover:text-primary transition-colors">
                Available Tasks
              </Link>
              <Link to="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </Link>
              <Link to="/resources" className="block text-muted-foreground hover:text-primary transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 rounded-none px-0 py-0 mx-0 my-0">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="text-muted-foreground">
              Have questions? Reach out to us:
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:support@studentconnect.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-0 py-0 my-0 mx-0">
                <Mail className="h-4 w-4" />
                support@studentconnect.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com/studentconnect" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/studentconnect" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t text-muted-foreground">
          <p className="text-stone-950 font-semibold">© 2025 StudentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};