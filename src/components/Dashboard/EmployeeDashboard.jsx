import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen '>
        <Header changeUser={props.changeUser} data ={props.data}/>
        <TaskListNumbers data ={props.data}/>
        <TaskList data ={props.data}/>    
    </div>
  )
}

export default EmployeeDashboard