
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    github: "https://github.com/alexj",
    linkedin: "https://linkedin.com/in/alexj",
    email: "alex@studentconnect.com"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    github: "https://github.com/sarach",
    linkedin: "https://linkedin.com/in/sarach",
    email: "sarah@studentconnect.com"
  },
  {
    name: "Michael Park",
    role: "Full Stack Engineer",
    github: "https://github.com/michaelp",
    linkedin: "https://linkedin.com/in/michaelp",
    email: "michael@studentconnect.com"
  }
];

export const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-md border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StudentConnect
            </h3>
            <p className="text-muted-foreground">
              Empowering students through collaborative learning and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/find-tutors" className="block text-muted-foreground hover:text-primary transition-colors">
                Find Tutors
              </Link>
              <Link to="/tasks" className="block text-muted-foreground hover:text-primary transition-colors">
                Tasks
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
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="text-muted-foreground">
              Have questions? Reach out to us at:
              <br />
              support@studentconnect.com
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="feature-card-3d p-6 space-y-4">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t text-muted-foreground">
          <p>© 2024 StudentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
