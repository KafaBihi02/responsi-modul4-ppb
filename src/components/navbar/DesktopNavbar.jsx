import React from "react";
import NavItem from "./NavItem";
import { Calendar, ClipboardCheck, User, BookOpen } from "lucide-react";

const DesktopNavbar = ({ currentPage, onNavigate }) => {
  const navLinks = [
    { page: "schedule", label: "Jadwal", icon: Calendar },
    { page: "tasks", label: "Tugas", icon: ClipboardCheck },
    { page: "profile", label: "Profil", icon: User },
  ];

  return (
    <header className="hidden md:block bg-white border-b shadow-sm sticky top-0 z-20">
      <nav className="w-full px-8 py-3 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600 flex items-center tracking-tight">
          <BookOpen className="w-6 h-6 mr-2" />
          bukan siap
        </h1>

        {/* NAV ITEM */}
        <div className="flex space-x-2">
          {navLinks.map((link) => (
            <NavItem
              key={link.page}
              {...link}
              currentPage={currentPage}
              onNavigate={onNavigate}
            />
          ))}
        </div>

      </nav>
    </header>
  );
};

export default DesktopNavbar;
