import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Community = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const {
    toast
  } = useToast();
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
    if (!selectedClass) {
      toast({
        title: "Please select your class",
        description: "You need to select your class before proceeding",
        variant: "destructive"
      });
      return;
    }

    // Scroll down to the next section
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-teal-950">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Join Your Student Community</h1>
        
        
        
        <div className="w-full max-w-4xl bg-teal-900/50 rounded-lg p-4 mb-8">
          <img alt="Student Community" className="w-full h-auto rounded-lg object-cover" src="/lovable-uploads/f79c338e-29fc-423f-9926-88a87d1588ee.jpg" />
        </div>
        
        <div className="w-full max-w-4xl space-y-4 mb-8">
          <div className="p-4 rounded-lg border border-teal-700 bg-pink-950">
            <p className="text-teal-100 text-center italic">
              "Empowering students with the knowledge and resources to unlock their true potential, no matter their 
              financial or background."
            </p>
          </div>
          
          <div className="p-4 rounded-lg border border-teal-700 bg-rose-950">
            <p className="text-teal-100 text-center italic">
              "Uniting passionate students by providing a platform where knowledge, opportunities, and guidance are 
              easily accessible."
            </p>
          </div>
          
          <div className="bg-teal-900/40 p-4 rounded-lg border border-teal-700">
            <p className="text-teal-100 text-center italic">
              "Building a community where passion and skills are the primary drivers of success, not the board they 
              belong to."
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-md">
          <p className="text-white mb-2 text-center font-medium text-2xl">Select your class</p>
          <Select onValueChange={setSelectedClass} value={selectedClass}>
            <SelectTrigger className="w-full bg-teal-900 text-white border-teal-700">
              <SelectValue placeholder="Select your class" />
            </SelectTrigger>
            <SelectContent className="bg-teal-900 text-white border-teal-700">
              <SelectItem value="class-9">Class 9</SelectItem>
              <SelectItem value="class-10">Class 10</SelectItem>
              <SelectItem value="class-11">Class 11</SelectItem>
              <SelectItem value="class-12">Class 12</SelectItem>
              <SelectItem value="ug-1">Undergraduate Year 1</SelectItem>
              <SelectItem value="ug-2">Undergraduate Year 2</SelectItem>
              <SelectItem value="ug-3">Undergraduate Year 3</SelectItem>
              <SelectItem value="ug-4">Undergraduate Year 4</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="mt-8 flex justify-center">
            <Button onClick={handleNext} className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-2 rounded-full transition-all">
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Next section (content shown after clicking Next) */}
      <div ref={nextSectionRef} className="min-h-screen bg-teal-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Welcome to Your Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedClass && <div className="bg-teal-800 p-6 rounded-lg border border-teal-600">
                <h3 className="text-xl font-semibold text-white mb-4">Your Class: {selectedClass}</h3>
                <p className="text-teal-100">
                  You're now connected with other students in {selectedClass}. 
                  Explore resources, connect with peers, and unlock your potential together.
                </p>
              </div>}
            
            <div className="bg-teal-800 p-6 rounded-lg border border-teal-600">
              <h3 className="text-xl font-semibold text-white mb-4">Study Groups</h3>
              <p className="text-teal-100">
                Join study groups specific to your subjects and interests. 
                Collaborate with peers to tackle challenging topics together.
              </p>
            </div>
            
            <div className="bg-teal-800 p-6 rounded-lg border border-teal-600">
              <h3 className="text-xl font-semibold text-white mb-4">Upcoming Events</h3>
              <p className="text-teal-100">
                Stay updated with workshops, webinars, and community events 
                designed to enhance your learning experience.
              </p>
            </div>
            
            <div className="bg-teal-800 p-6 rounded-lg border border-teal-600">
              <h3 className="text-xl font-semibold text-white mb-4">Community Forum</h3>
              <p className="text-teal-100">
                Ask questions, share insights, and participate in discussions 
                with students and mentors across different classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Community;