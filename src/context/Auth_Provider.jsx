import React from 'react'
import { createContext } from 'react'



export const AuthContext = createContext()
const Auth_Provider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider value={'salman'} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Auth_Provider