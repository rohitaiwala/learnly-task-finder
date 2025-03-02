import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
const Community = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  return <div className="min-h-screen bg-teal-950">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Join Your Student Community</h1>
        
        <p className="text-white text-center mb-8">Select Your Class</p>
        
        <div className="w-full max-w-4xl bg-teal-900/50 rounded-lg p-4 mb-8">
          <img src="/lovable-uploads/4363c4f5-d1e9-4cc9-9036-b50613203edc.png" alt="Student Community" className="w-full h-auto rounded-lg" />
        </div>
        
        <div className="w-full max-w-4xl space-y-4 mb-8">
          <div className="bg-teal-900/40 p-4 rounded-lg border border-teal-700">
            <p className="text-teal-100 text-center italic">
              "Empowering students with the knowledge and resources to unlock their true potential, no matter their 
              financial or background."
            </p>
          </div>
          
          <div className="bg-teal-900/40 p-4 rounded-lg border border-teal-700">
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
          <p className="text-white mb-2">Select your class</p>
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
        </div>
      </div>
    </div>;
};
export default Community;