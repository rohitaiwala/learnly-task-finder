
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Book, Users, Video, Image, FileText, Target, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connect, Learn &{" "}
              <span className="text-primary">Grow Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our community of students and tutors. Get help with your studies,
              share knowledge, and achieve your academic goals.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="button-3d">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="button-3d">
                <Link to="/find-tutors">Find a Tutor</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center animate-pulse card-3d">
              <Bot className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Book className="h-8 w-8" />}
              title="Offline Tutoring"
              description="Connect with qualified tutors in your area for personalized learning experiences."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Student Community"
              description="Join the largest student community for support, guidance, and networking."
            />
            <FeatureCard
              icon={<Target className="h-8 w-8" />}
              title="Task Marketplace"
              description="Find opportunities to earn while learning through our task marketplace."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Career Guidance"
              description="Get personalized career recommendations and guidance for your future."
            />
          </div>
        </div>
      </section>

      {/* Task Types Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Available Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TaskCard
            icon={<Video className="h-6 w-6" />}
            title="Video Editing"
            description="Edit educational content and lectures"
          />
          <TaskCard
            icon={<Image className="h-6 w-6" />}
            title="Photo Editing"
            description="Create and edit educational materials"
          />
          <TaskCard
            icon={<FileText className="h-6 w-6" />}
            title="Report Writing"
            description="Academic writing and research assistance"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow card-3d">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const TaskCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer card-3d">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
