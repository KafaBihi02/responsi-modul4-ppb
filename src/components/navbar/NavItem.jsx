import React from "react";


const NavItem = ({ page, currentPage, onNavigate, icon: Icon, label }) => (
<button
className={`flex flex-col items-center p-2 text-sm md:text-base md:flex-row md:px-4 md:py-2 md:rounded-full transition-colors ${
currentPage === page
? 'text-blue-700 bg-white shadow-md'
: 'text-gray-600 hover:text-blue-600 md:hover:bg-gray-100'
}`}
onClick={() => onNavigate(page)}
>
<Icon className="w-6 h-6 md:w-5 md:h-5 md:mr-2" />
<span className="mt-1 md:mt-0">{label}</span>
</button>
);


export default NavItem;