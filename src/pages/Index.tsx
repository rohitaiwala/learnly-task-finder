import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book, Users, Video, Image, FileText, Target, Code, PenTool, Library, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingBot } from "@/components/FloatingBot";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-red-200 hover:bg-red-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight transform transition-all duration-300 hover:scale-105">
              Connect, Learn &{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Grow Together
              </span>
            </h1>
            <p className="text-lg text-muted-foreground transform hover:translate-x-2 transition-transform duration-300">
              Join our community of students and tutors. Get help with your studies,
              share knowledge, and achieve your academic goals.
            </p>
            <div className="flex gap-4 px-[25px] bg-inherit rounded-none">
              <Button asChild size="lg" className="button-3d">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="button-3d">
                <Link to="/find-tutors">Find a Tutor</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 transform-gpu bg-red-200 hover:bg-red-100">
        <div className="container mx-auto px-[18px] py-[5px] bg-red-200 hover:bg-red-100">
          <h2 className="text-3xl font-bold text-center mb-12 transform transition-all duration-300 hover:scale-105">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Book className="h-8 w-8" />} title="Offline Tutoring" description="Connect with qualified tutors in your area for personalized learning experiences." />
            <FeatureCard icon={<Users className="h-8 w-8" />} title="Student Community" description="Join the largest student community for support, guidance, and networking." />
            <FeatureCard icon={<Target className="h-8 w-8" />} title="Task Marketplace" description="Find opportunities to earn while learning through our task marketplace." />
            <FeatureCard icon={<FileText className="h-8 w-8" />} title="Career Guidance" description="Get personalized career recommendations and guidance for your future." />
          </div>
        </div>
      </section>

      {/* Task Types Section */}
      <section className="container mx-auto px-4 py-16 bg-red-200 hover:bg-red-100">
        <h2 className="text-3xl font-bold text-center mb-12 transform transition-all duration-300 hover:scale-105">
          Available Tasks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TaskCard icon={<Video className="h-6 w-6" />} title="Video Editing" description="Edit educational content and lectures" image="/photo-1605810230434-7631ac76ec81" />
          <TaskCard icon={<Code className="h-6 w-6" />} title="Programming Tasks" description="Help with coding assignments and projects" image="/photo-1488590528505-98d2b5aba04b" />
          <TaskCard icon={<PenTool className="h-6 w-6" />} title="Content Writing" description="Create engaging educational materials" image="/photo-1519389950473-47ba0277781c" />
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/tasks" className="flex items-center gap-2">
              View All Tasks <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 transform transition-all duration-300 hover:scale-105">
            Meet Our Expert Tutors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard image="/photo-1518770660439-4636190af475" name="Dr. Sarah Chen" role="Computer Science Expert" description="Ph.D. in Computer Science with 8+ years of teaching experience" />
            <TeamMemberCard image="/photo-1519389950473-47ba0277781c" name="Prof. Michael Park" role="Mathematics Specialist" description="Mathematics professor with expertise in advanced calculus" />
            <TeamMemberCard image="/photo-1605810230434-7631ac76ec81" name="Dr. Emily Rodriguez" role="Physics Educator" description="Specialized in quantum mechanics and theoretical physics" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBot />
    </div>;
};
const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 feature-card-3d">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="icon-3d bg-primary/10 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold transform transition-all duration-300 hover:scale-105">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>;
const TaskCard = ({
  icon,
  title,
  description,
  image
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) => <div className="group feature-card-3d cursor-pointer overflow-hidden">
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button variant="secondary" className="rounded-full">
          Learn More
        </Button>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="icon-3d bg-primary/10 p-2 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold transform transition-all duration-300 hover:translate-x-2">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>;
const TeamMemberCard = ({
  image,
  name,
  role,
  description
}: {
  image: string;
  name: string;
  role: string;
  description: string;
}) => <div className="feature-card-3d overflow-hidden group">
    <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-white/80">{role}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-muted-foreground">{description}</p>
      <Button variant="ghost" className="mt-4 rounded-full w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        View Profile
      </Button>
    </div>
  </div>;
export default Index;