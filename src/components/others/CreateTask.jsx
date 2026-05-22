import React, { useState } from "react";

const CreateTask = () => {


  const [taskTitle, settasktitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')


  const [task, setTask] = useState({})

 
  



  const submitHandler = (e)=>{
    e.preventDefault()
     setTask({taskTitle, taskDate, category, description, active:false, newTask:true, failed:true,completed: false})

    const data = localStorage.getItem('employees')
    console.log(JSON.stringify(data));
    



    settasktitle('')
    settaskDate('')
    setassignTo('')
    setcategory('')
    setdescription('')
    

  }
  return (
    <div className="p-8 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]backdrop-blur-lg border border-white/10 shadow-2xl mt-2 rounded-3xl ">
      {/* Heading */}
      <div className="mb-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          Create New Task
        </h1>

        <p className="text-gray-400 mt-1 tracking-wide">
          Assign and manage tasks easily ✨
        </p>

        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2"></div>
      </div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex w-full flex-wrap items-start justify-between">
        {/* Left Side */}
        <div className="w-1/2">
          <div>
            <h2 className="text-sm text-gray-300 mb-2 font-medium">
              Task Title
            </h2>

            <input
            value={taskTitle}
            onChange={(e)=>{
              settasktitle(e.target.value)
            }}
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-2"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Date</h3>

            <input
             value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-2"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">
              Assign To
            </h3>

            <input
             value={assignTo}
            onChange={(e)=>{
              setassignTo(e.target.value)
            }}
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-2"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Category</h3>

            <input
             value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
              className="text-sm py-3 px-4 w-4/5 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all mb-2"
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
           value={description}
            onChange={(e)=>{
              setdescription(e.target.value)
            }}
            cols={40}
            rows={10}
            className="w-full h-48 text-sm py-4 px-4 rounded-2xl bg-white/5 border border-gray-500 text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            placeholder="Write task details here..."
          ></textarea>

          <button className="bg-gradient-to-r from-emerald-600 to-green-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 py-4 px-5 rounded-2xl text-sm font-bold mt-5 w-full active:scale-95">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
