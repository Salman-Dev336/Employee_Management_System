import React from "react";

const All_Task = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl p-6 mt-6 rounded-3xl h-72 overflow-auto">

      {/* Task Card */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-purple-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          New
        </h5>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-green-700 mt-4 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-green-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Completed
        </h5>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 mt-4 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-yellow-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Pending
        </h5>
      </div>

      <div className="bg-gradient-to-r from-rose-500 to-red-700 mt-4 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-red-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Failed
        </h5>
      </div>

      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 mt-4 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-cyan-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Review
        </h5>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-fuchsia-700 mt-4 py-4 px-6 flex justify-between items-center rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-white font-bold text-lg">Salman Khan</h2>
        <h3 className="text-pink-100 font-medium">
          Make a UI Design
        </h3>
        <h5 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Active
        </h5>
      </div>

    </div>
  );
};

export default All_Task;