import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth_Provider";

const All_Task = () => {
  const authData = useContext(AuthContext);

  return (
    <div className=" bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] backdrop-blur-lg border border-white/10 shadow-2xl  mt-2 rounded-3xl h-72 ">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-4 px-6 flex justify-between items-center rounded-2xl ">
        <h2 className="bg-amber-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Employee Name
        </h2>
        <h3 className=" bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
          New Task
        </h3>
        <h3 className="bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Active Task
        </h3>
        <h3 className="bg-green-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
          Completed Task
        </h3>

        <h5 className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
          failed
        </h5>
      </div>

     <div className="h-[80%] overflow-auto">
       {authData.employees.map(function (e , index) {
        return (
          <div key={index} className="bg-gradient-to-r from-purple-900 to-indigo-900  py-4 px-6 mt-2 flex justify-between items-center rounded-2xl  ">
            <h3 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">
              {e.firstName}
            </h3>
            <h3 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">{e.taskNumbers.newTask}</h3>
            <h3 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">{e.taskNumbers.active}</h3>
            <h3 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">{e.taskNumbers.completed}</h3>
            <h3 className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white">{e.taskNumbers.failed}</h3>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default All_Task;
