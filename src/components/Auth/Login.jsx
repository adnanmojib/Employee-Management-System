import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log("email is: ", email)
        // console.log("password is: ", password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600 rounded-lg'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center border-emerald-600 rounded-xl p-20'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                 className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-5' type="password" placeholder='Enter your password'/>
                <button className='text-white outline-none placeholder:text-white border-none bg-emerald-600 rounded-full py-3 px-5 text-xl mt-5'>Login</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login