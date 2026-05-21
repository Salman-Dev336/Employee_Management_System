import React from "react";

const CreateTask = () => {
  return (
    <div className="p-8 bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl mt-7 rounded-3xl ">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          Create New Task
        </h1>

        <p className="text-gray-400 mt-2 tracking-wide">
          Assign and manage tasks easily ✨
        </p>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"></div>
      </div>

      <form className="flex w-full flex-wrap items-start justify-between">

        {/* Left Side */}
        <div className="w-1/2">

          <div>
            <h2 className="text-sm text-gray-300 mb-2 font-medium">
              Task Title
            </h2>

            <input
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-5"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">
              Date
            </h3>

            <input
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-5"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">
              Assign To
            </h3>

            <input
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-5"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">
              Category
            </h3>

            <input
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-5"
              type="text"
              placeholder="Design, Dev, Deploy..."
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/5 flex flex-col items-start">

          <h3 className="text-sm text-gray-300 mb-2 font-medium">
            Description
          </h3>

          <textarea
            cols={40}
            rows={10}
            className="w-full h-48 text-sm py-4 px-4 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            placeholder="Write task details here..."
          ></textarea>

          <button className="bg-gradient-to-r from-emerald-500 to-green-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 py-4 px-5 rounded-2xl text-sm font-bold mt-5 w-full active:scale-95">
            Create Task
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateTask;