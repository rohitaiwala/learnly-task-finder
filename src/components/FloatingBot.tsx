
import { useState } from "react";
import { Bot } from "lucide-react";
import { ChatDialog } from "./ChatDialog";

export const FloatingBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="fixed bottom-8 right-8 z-50"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center floating card-3d cursor-pointer hover:bg-primary/20 transition-colors">
          <Bot className="w-8 h-8 text-primary transform transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
      <ChatDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};
