import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import { useAuthContext } from './context/AuthContext'
import Test from "./Test"
import AddListing from "./pages/listing/AddListing"

function App() {

  const { authUser } = useAuthContext()
  console.log("authUser from App.jsx : ", authUser)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />

        <Route
          path="/signup"
          element={
            authUser ? <Navigate to='/' /> : <Signup />
          }
        />
        <Route
          path="/login"
          element={
            authUser ? <Navigate to='/' /> : <Login />
          }
        />
        <Route
          path="/addListing"
          element={<AddListing />}
        />
        <Route
          path="/test"
          element={<Test />}
        />
      </Routes>
    </>
  )
}

export default App
