import React from "react";
import { Calendar, ClipboardCheck, User } from "lucide-react";

const MobileNavbar = ({ currentPage, onNavigate }) => {
  const navLinks = [
    { page: "schedule", label: "Jadwal", icon: Calendar },
    { page: "tasks", label: "Tugas", icon: ClipboardCheck },
    { page: "profile", label: "Profil", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-30">
      <div className="flex justify-around py-2">
        {navLinks.map(({ page, label, icon: Icon }) => (
          <button
            key={page}
            className={`flex flex-col items-center text-xs transition-colors ${
              currentPage === page
                ? "text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => onNavigate(page)}
          >
            <Icon className={`h-6 w-6 mb-1 ${
              currentPage === page ? "scale-110" : "opacity-70"
            }`} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
