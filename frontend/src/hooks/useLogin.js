import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async ({ username, password }) => {
        const succcess = handleInputError({ username, password })

        if (!succcess) return

        setLoading(true)

        try {

            const response = await fetch('/api/aut/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            // save user to localstorage 
            localStorage.setItem('auth-user-data', JSON.stringify(data))

            // set user to context
            setAuthUser(data)

        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return {loading,login}
}

export default useLogin 

function handleInputError({ username, password }) {
    if (!username || !password) {
        toast.error("Fields can't be empty !!")
        return false
    }

    return true
}
