import React from 'react'
import { useState, useEffect } from 'react';

const Header = (props) => {


  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Logged In User:", loggedInUser); // Debugging

    if (loggedInUser && loggedInUser.data && loggedInUser.data.firstName) {
      setUserName(loggedInUser.data.firstName); // Access firstName correctly
    } else {
      console.log("No first name found in loggedInUser");
    }
  }, []);

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    // window.location.reload()
  }


  return (
    <div className='flex items-end justify-between'> 
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {userName || "Admin"}</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
      
    </div>
  )
}

export default Header