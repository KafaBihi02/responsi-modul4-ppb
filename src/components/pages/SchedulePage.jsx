import React, { useState } from "react";
import scheduleData from "../../data/schedule";
import { Calendar, Clock, Home, Users } from "lucide-react";

const SchedulePage = () => {
  const today = 'Senin';
  const [selectedDay, setSelectedDay] = useState(today);
  const days = Object.keys(scheduleData);
  const currentSchedule = scheduleData[selectedDay] || [];

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2">
          <Calendar className="w-7 h-7 mr-3 text-blue-600" />
          Jadwal Kuliah Mingguan
        </h1>

        {/* Selector Hari */}
        <div className="flex flex-wrap gap-2 mb-6 p-3 bg-white rounded-xl shadow-inner">
          {days.map(day => (
            <button
              key={day}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                selectedDay === day ? 'text-blue-700 bg-white shadow-md' : 'text-gray-600 hover:text-blue-600 md:hover:bg-gray-100'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{selectedDay}'s Schedule</h2>

        {/* List Jadwal */}
        {currentSchedule.length > 0 ? (
          <div className="space-y-4">
            {currentSchedule.map(item => (
              <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500 flex space-x-4">
                <Clock className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-gray-500">{item.time}</p>
                  <h3 className="text-lg font-bold text-gray-800">{item.course}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center"><Home className="w-4 h-4 mr-1" /> {item.room}</span>
                    <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {item.lecturer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center text-gray-500">
            <Calendar className="w-10 h-10 mx-auto mb-3" />
            <p className="font-semibold">Tidak ada jadwal hari {selectedDay}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;