import { useState } from "react"
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({ fullname, username, password, confirmPassword }) => {

        const succcess = handleInputError({ fullname, username, password, confirmPassword })

        if (!succcess) return

        setLoading(true)

        try {

            const response = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullname, username, password, confirmPassword })
            })

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            console.log("User response : ", data)

           //save user to local storage
           localStorage.setItem('auth-user-data', JSON.stringify(data))

           //set user to context
           setAuthUser(data)

        } catch (error) {
            console.log("Error : ", error)
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { loading, signup }

}

export default useSignup

const handleInputError = ({ fullname, username, password, confirmPassword }) => {
    if (!fullname || !username || !password || !confirmPassword) {
        toast.error("Fields can't be empty !!")
        return false
    }
    else if (password !== confirmPassword) {
        toast.error("Password and Confirm Password doesn't match !!")
        return false
    }
    else if (password.length < 6) {
        toast.error("Password lenght must be at least 6 !!")
        return false
    }

    return true
}