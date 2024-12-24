import React from 'react'

const NewTask = ({data}) => {
  return (
<div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div className='mt-2 '>
        <button className='w-full bg-blue-600 rounded-md py-1 px-2 text-sm'>Completed</button>
    </div>
</div>
  )
}

export default NewTask