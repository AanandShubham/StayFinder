import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useLogin from "../../hooks/useLogin";


const Login = () => {
  const [showPassoword, setShowPassword] = useState(false)
  const {loading,login} = useLogin

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("State data before login : \n",loginData)
    await login(loginData)
  }


  return (
    <div className='w-[100vw] h-[100vh] flex flex-col gap-5 bg-neutral-400 justify-center items-center'>

      <form onSubmit={handleSubmit} className='w-fit min-w-[40vw] h-fit p-2 pt-8 pb-4 flex flex-col  gap-4 rounded-2xl bg-slate-200'>
        <h2 className='bg-slate-700 text-white p-2 rounded-xl text-xl text-center'>Login Page</h2>


        <div className='flex flex-col gap-1  rounded-xl'>
          <label className='pl-2 ' htmlFor="username">Username</label>
          <input
            className=' bg-slate-300 outline-none p-2 rounded-2xl'
            id='username'
            type="text"
            placeholder='username'
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-1 relative  rounded-xl'>
          <label className='pl-2 ' htmlFor="password">Password</label>
          <input
            className=' bg-slate-300 outline-none p-2 rounded-2xl'
            id='password'
            type={showPassoword ? 'text' : 'password'}
            placeholder="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          {showPassoword ? <FaEye className="absolute right-6 bottom-3 cursor-pointer" onClick={() => setShowPassword(!showPassoword)} /> : <FaEyeSlash className="absolute right-6 bottom-3 cursor-pointer" onClick={() => setShowPassword(!showPassoword)} />}
        </div>

        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <Link to='/signup' className='text-blue-500 hover:text-blue-700 hover:underline'>Don't have an account? Signup</Link>
          <input type="submit" className='bg-emerald-300 pl-4 pr-4 p-2 rounded-xl' value={"Login"} />
        </div>
      </form>
    </div>
  )
}

export default Login