import React from "react";
import tasksData from "../../data/tasks";
import { ClipboardCheck } from "lucide-react";

const TasksPage = () => {
  const incomplete = tasksData.filter(t => t.status === 'Belum Selesai');
  const complete = tasksData.filter(t => t.status === 'Selesai');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Tinggi': return 'bg-red-100 text-red-700 border-red-400';
      case 'Sedang': return 'bg-yellow-100 text-yellow-700 border-yellow-400';
      case 'Rendah': return 'bg-green-100 text-green-700 border-green-400';
      default: return 'bg-gray-100 text-gray-700 border-gray-400';
    }
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2">
          <ClipboardCheck className="w-7 h-7 mr-3 text-green-600" />
          Daftar Tugas
        </h1>

        {/* Belum selesai */}
        <h2 className="text-xl font-semibold mb-3">Belum Selesai ({incomplete.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {incomplete.map(task => (
            <div key={task.id} className="bg-white p-5 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="font-bold text-lg">{task.name}</h3>
              <p className="text-sm text-gray-600">MK: {task.course}</p>
              <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
              <span className={`text-xs px-3 py-1 mt-3 inline-block rounded-full ${getPriorityColor(task.priority)}`}>{task.priority}</span>
            </div>
          ))}
        </div>

        {/* Selesai */}
        <h2 className="text-xl font-semibold mb-3">Selesai ({complete.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {complete.map(task => (
            <div key={task.id} className="bg-white p-5 rounded-xl shadow-md border-t-4 border-green-500 opacity-60">
              <h3 className="font-bold text-lg line-through">{task.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;