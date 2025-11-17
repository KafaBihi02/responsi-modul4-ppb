import React from "react";
import profileData from "../../data/profile";
import { User } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-blue-700 mb-8 flex items-center border-b pb-2">
          <User className="w-7 h-7 mr-3" /> Profil Mahasiswa
        </h1>
        <div className="space-y-4">
          <p className="text-lg"><strong>Nama:</strong> {profileData.nama}</p>
          <p className="text-lg"><strong>NIM:</strong> {profileData.nim}</p>
          <p className="text-lg"><strong>Kelompok:</strong> {profileData.kelompok}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
