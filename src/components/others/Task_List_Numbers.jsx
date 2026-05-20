import React from "react";

const Task_List_Numbers = () => {
  return (
    <div className="flex justify-between gap-5 mt-10">
      <div className="rounded-2xl py-6 px-10 w-[40%] bg-blue-600">
        <h2 className="text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-semibold">New Tasks</h3>
      </div>
      <div className="rounded-2xl py-6 px-10 w-[40%] bg-green-600">
        <h2 className="text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-semibold">Completed</h3>
      </div>
      <div className="rounded-2xl py-6 px-10 w-[40%] bg-purple-600">
        <h2 className="text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-semibold">Accepted</h3>
      </div>
      <div className="rounded-2xl py-6 px-10 w-[40%] bg-red-500">
        <h2 className="text-4xl font-bold ">0</h2>
        <h3 className="text-2xl font-semibold">Failed</h3>
      </div>
    </div>
  );
};

export default Task_List_Numbers;
