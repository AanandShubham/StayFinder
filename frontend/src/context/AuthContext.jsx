
import React, {useContext, useState } from "react";

export const AuthContext = React.createContext()

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem('auth-user-data')) || null)
    return (
        <AuthContext.Provider value={{authUser,setAuthUser}} >
            {children}
        </AuthContext.Provider>
    )
}
