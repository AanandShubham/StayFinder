
import React, {useContext, useState } from "react";

export const AuthContext = React.createContext()

const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export default useAuthContext 

export const AuthContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem('auth-user-data')) || null)
    return (
        <AuthContext.Provider value={{authUser,setAuthUser}} >
            {children}
        </AuthContext.Provider>
    )
}
