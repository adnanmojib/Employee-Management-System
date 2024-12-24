import React, {useContext} from 'react'
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {


    const [userData, setUserData] = useContext(AuthContext)
    


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-md font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-md font-medium w-1/5'>New Task</h3>
            <h5 className='text-md font-medium w-1/5'>Active</h5>
            <h5 className='text-md font-medium w-1/5'>Completed</h5>
            <h5 className='text-md font-medium w-1/5'>Failed</h5>
        </div>

        <div className='overflow-auto'>
            {userData.map(function(elem, idx){
                return <div key={idx} className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>

                    <h2 className='text-md font-medium w-1/5'>{elem.firstName}</h2>
                    <h5 className='text-md font-medium w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
                    <h3 className='text-md font-medium w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h3>
                    <h5 className='text-md font-medium w-1/5 text-green-600'>{elem.taskNumber.completed}</h5>
                    <h5 className='text-md font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
                    
                </div>
        })}
        </div>

    </div>
  )
}

export default AllTask