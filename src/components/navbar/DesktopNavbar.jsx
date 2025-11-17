import React from "react";
import NavItem from "./NavItem";
import { Calendar, ClipboardCheck, User, BookOpen } from "lucide-react";


const DesktopNavbar = ({ currentPage, onNavigate }) => {
const navLinks = [
{ page: 'schedule', label: 'Jadwal Hari Ini', icon: Calendar },
{ page: 'tasks', label: 'Daftar Tugas', icon: ClipboardCheck },
{ page: 'profile', label: 'Profil Mahasiswa', icon: User },
];


return (
<header className="hidden md:block bg-white shadow-md sticky top-0 z-20">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
<h1 className="text-2xl font-bold text-blue-600 flex items-center">
<BookOpen className="w-6 h-6 mr-2" />
bukan siap
</h1>
<div className="flex space-x-4">
{navLinks.map(link => (
<NavItem key={link.page} {...link} currentPage={currentPage} onNavigate={onNavigate} />
))}
</div>
</nav>
</header>
);
};


export default DesktopNavbar;