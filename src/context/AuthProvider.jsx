import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocatStorage } from '../utils/localStorage'
import { useEffect } from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // localStorage.clear()

    const [userData, setUserData] = useState(null)


    useEffect(() => {
        setLocatStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider