import React from "react";

const Task_List_Numbers = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 mt-10">
      <div className="rounded-3xl py-8 px-10 w-[40%] bg-linear-to-br from-cyan-500 to-blue-700 shadow-xl hover:scale-105 transition-all duration-300 border border-white/10">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
          {data.taskNumbers.newTask}
        </h2>
        <h3 className="text-2xl font-semibold text-cyan-100 mt-3 tracking-wide">
          New Tasks
        </h3>
      </div>

      <div className="rounded-3xl py-8 px-10 w-[40%] bg-linear-to-br from-emerald-400 to-green-700 shadow-xl hover:scale-105 transition-all duration-300 border border-white/10">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
          {data.taskNumbers.completed}
        </h2>
        <h3 className="text-2xl font-semibold text-green-100 mt-3 tracking-wide">
          Completed
        </h3>
      </div>

      <div className="rounded-3xl py-8 px-10 w-[40%] bg-linear-to-br from-violet-500 to-purple-800 shadow-xl hover:scale-105 transition-all duration-300 border border-white/10">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
          {data.taskNumbers.active}

        </h2>
        <h3 className="text-2xl font-semibold text-purple-100 mt-3 tracking-wide">
          Active
        </h3>
      </div>

      <div className="rounded-3xl py-8 px-10 w-[40%] bg-linear-to-br from-rose-500 to-red-700 shadow-xl hover:scale-105 transition-all duration-300 border border-white/10">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
           {data.taskNumbers.failed}
        </h2>
        <h3 className="text-2xl font-semibold text-red-100 mt-3 tracking-wide">
          Failed
        </h3>
      </div>
    </div>
  );
};

export default Task_List_Numbers;
