import React from "react";

const NavItem = ({ page, currentPage, onNavigate, icon: Icon, label }) => (
  <button
    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${currentPage === page
        ? "text-blue-700 bg-blue-100 shadow-sm"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
      }`}
    onClick={() => onNavigate(page)}
  >
    <Icon className="w-4 h-4 mr-2" />
    {label}
  </button>
);

export default NavItem;
