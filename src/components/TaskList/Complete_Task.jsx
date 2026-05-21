import React from 'react'

const Complete_Task = ({data}) => {
  return (
    <div className="shrink-0  h-full w-[25%] p-5 bg-gradient-to-br from-emerald-400 to-green-700 shadow-xl rounded-xl ">
        <div className="flex justify-between items-center  ">
          <h3 className="bg-red-500 py-1 px-3 rounded font-semibold">{data.taskCategory}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm   mt-5">
            {data.taskDescription}
        </p>
        <div className='mt-10 flex  justify-end'>
            <button className="bg-green-700 cursor-pointer border-2 border-gray-300 active:scale-95 py-1 px-2 w-full text-sm p-2 rounded-xl">
                Completed
            </button>
        </div>
      </div>
  )
}

export default Complete_Task