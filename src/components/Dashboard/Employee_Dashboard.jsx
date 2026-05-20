import React from 'react'
import Header from '../others/Header'
import Task_List_Numbers from '../others/Task_List_Numbers'
import Task_List from '../TaskList/Task_List'

const Employee_Dashboard = ({data}) => {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-10"> 
        < Header data={data} />
        < Task_List_Numbers data={data} />
        < Task_List data={data}  />
    </div>
  )
}

export default Employee_Dashboard