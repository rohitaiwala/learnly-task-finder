import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FindTutors from "./pages/FindTutors";
import Tasks from "./pages/Tasks";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/find-tutors" element={<FindTutors />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;