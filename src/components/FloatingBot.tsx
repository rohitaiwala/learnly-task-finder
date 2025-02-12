
import { Bot } from "lucide-react";

export const FloatingBot = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center floating card-3d cursor-pointer hover:bg-primary/20 transition-colors">
        <Bot className="w-8 h-8 text-primary transform transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
  );
};
