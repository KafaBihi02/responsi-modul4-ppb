import { useState } from "react";
import SchedulePage from "./components/pages/SchedulePage";
import TasksPage from "./components/pages/TasksPage";
import ProfilePage from "./components/pages/ProfilePage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import PWABadge from "./PWABadge";

export default function App() {
  const [currentPage, setCurrentPage] = useState('schedule');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'schedule':
        return <SchedulePage />;
      case 'tasks':
        return <TasksPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <SchedulePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <DesktopNavbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="min-h-[calc(100vh-64px)] md:min-h-screen pt-0 md:pt-0">
        {renderCurrentPage()}
      </main>
      
      <MobileNavbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <PWABadge />
    </div>
  );
}