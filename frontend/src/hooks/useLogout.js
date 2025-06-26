import { useContext } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {
    const [loading, setLoading] = useContext(false)
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = response.json()

            if (data.error) {
                throw new Error(data.error)
            }
            
            // remove user data from localstorage
            localStorage.removeItem('auth-user-data')

            // remove user data from auth context
            setAuthUser(null)

        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return {loading,logout}
}

export default useLogout 