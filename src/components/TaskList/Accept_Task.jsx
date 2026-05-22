import React from 'react'

const Accept_Task = ({data}) => {
  return (
    <div className="shrink-0  h-full w-[25%] p-5 bg-linear-to-br from-violet-500 to-purple-800 shadow-xl rounded-xl ">
        <div className="flex justify-between items-center  ">
          <h3 className="bg-red-500 py-1 px-3 rounded font-semibold">{data.taskCategory}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm   mt-5">
         {data.taskDescription}
        </p>
        <div className='flex justify-end gap-2 mt-20 '>
            <button className='bg-green-700 cursor-pointer w-1/2 border-2 border-gray-300 active:scale-95 py-2 px-2 text-sm p-2 rounded-xl'>
                Complete
            </button>
             <button className='bg-red-700 cursor-pointer w-1/2 border-2 border-gray-200 active:scale-95 py-2 px-2 text-sm p-2 rounded-xl '>
                Failed
            </button>
        </div>
      </div>
  )
}

export default Accept_Task