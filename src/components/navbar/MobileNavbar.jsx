import React from "react";
import NavItem from "./NavItem";
import { Calendar, ClipboardCheck, User } from "lucide-react";


const MobileNavbar = ({ currentPage, onNavigate }) => {
const navLinks = [
{ page: 'schedule', label: 'Jadwal', icon: Calendar },
{ page: 'tasks', label: 'Tugas', icon: ClipboardCheck },
{ page: 'profile', label: 'Profil', icon: User },
];


return (
<div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 shadow-lg md:hidden z-30">
<div className="flex justify-around items-center h-16">
{navLinks.map(link => (
<NavItem key={link.page} {...link} currentPage={currentPage} onNavigate={onNavigate} />
))}
</div>
</div>
);
};


export default MobileNavbar;