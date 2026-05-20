import React from 'react'
import Header from '../others/Header'
import Task_List_Numbers from '../others/Task_List_Numbers'
import Task_List from '../TaskList/Task_List'

const Employee_Dashboard = () => {
  return (
    <div className='p-10 h-screen '> 
        < Header />
        < Task_List_Numbers />
        < Task_List />
    </div>
  )
}

export default Employee_Dashboard