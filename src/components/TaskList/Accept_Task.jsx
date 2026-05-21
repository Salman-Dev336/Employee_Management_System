import React from 'react'

const Accept_Task = () => {
  return (
    <div className="shrink-0  h-full w-[25%] p-5 bg-pink-500 rounded-xl ">
        <div className="flex justify-between items-center  ">
          <h3 className="bg-red-500 py-1 px-3 rounded font-semibold">High</h3>
          <h4>20 May 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold"> Make a youtube video</h2>
        <p className="text-sm   mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita perspiciatis enim eos veritatis reiciendis quos totam nam
          vel. Quisquam!
        </p>
        <div className='flex justify-end gap-2 mt-4 '>
            <button className='bg-green-700 cursor-pointer w-1/2 border-2 border-gray-300 active:scale-95 py-1 px-2 text-sm p-2 rounded-xl'>
                Complete
            </button>
             <button className='bg-red-700 cursor-pointer w-1/2 border-2 border-gray-200 active:scale-95 py-1 px-2 text-sm p-2 rounded-xl '>
                Failed
            </button>
        </div>
      </div>
  )
}

export default Accept_Task