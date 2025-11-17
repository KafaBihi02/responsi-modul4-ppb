import { useState } from "react";
import SchedulePage from "./components/pages/SchedulePage";
import TasksPage from "./components/pages/TasksPage";
import ProfilePage from "./components/pages/ProfilePage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import PWABadge from "./PWABadge";

export default function App() {
  const [currentPage, setCurrentPage] = useState("schedule");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "schedule":
        return <SchedulePage />;
      case "tasks":
        return <TasksPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <SchedulePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 antialiased flex flex-col">
      {/* NAVBAR TOP */}
      <DesktopNavbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6">
        <div className="max-w-5xl mx-auto">
          {renderCurrentPage()}
        </div>
      </main>

      {/* MOBILE NAV */}
      <MobileNavbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <PWABadge />
    </div>
  );
}
