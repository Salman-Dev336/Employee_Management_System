import React from "react";
import Accept_Task from "./Accept_Task";
import New_Task from "./New_Task";
import Complete_Task from "./Complete_Task";
import Failed_Task from "./Failed_Task";

const Task_List = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="TaskList"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
    >
      {data.tasks.map((e , index)=>{
        if(e.active){
          return < Accept_Task key={index} data={e} />
        }
        if(e.newTask){
          return < New_Task key={index} data={e}  />

        }
        if(e.completed){
          return < Complete_Task key={index} data={e} />
        }
        if(e.failed){
          return < Failed_Task key={index} data={e}/>
        }

      })}
     
    </div>
  );
};

export default Task_List;
