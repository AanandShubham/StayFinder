import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import { useAuthContext } from './context/AuthContext'
import toast from "react-hot-toast"

function App() {

  const { authUser } = useAuthContext()
  console.log("authUser from App.jsx : ", authUser)

 

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : (toast.error("You are not logged in"), <Navigate to='/login' />)}
        />

        <Route
          path="/signup"
          element={
            authUser ? (toast.error("You are already signed in"), <Navigate to='/' />) : <Signup />
          }
        />
        <Route
          path="/login"
          element={
            authUser ? (toast.error("You are already logged in"), <Navigate to='/' />) : <Login />
          }
        />
      </Routes>
    </>
  )
}

export default App
