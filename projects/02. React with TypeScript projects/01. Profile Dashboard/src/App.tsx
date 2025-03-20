import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {

  return (
    <div className={`flex min-h-screen transition-colors`}>
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Profile />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;