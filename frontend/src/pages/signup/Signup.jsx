import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [signupData, setSignupData] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
    })
    
    const {loading,signup} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        
        console.log("State Data before signup Function : ",signupData)
        await signup(signupData)

    }
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col gap-5 bg-neutral-400 justify-center items-center'>

            <form onSubmit={handleSubmit} className='w-fit min-w-[40vw] h-fit p-2 pt-8 pb-4 flex flex-col  gap-4 rounded-2xl bg-slate-200'>
                <h2 className='bg-slate-700 text-white text-xl p-2 rounded-xl text-center'>Signup Page</h2>

                <div className='w-full h-full flex flex-col gap-1  rounded-xl'>
                    <label className='pl-2' htmlFor="fullname">Fullname</label>
                    <input
                        className=' bg-slate-300 outline-none p-2 rounded-2xl'
                        id='fullname'
                        type="text"
                        placeholder='fullname'
                        value={signupData.fullname}
                        onChange={(e) => setSignupData({ ...signupData, fullname: e.target.value })}
                    />
                </div>
                <div className='flex flex-col gap-1  rounded-xl'>
                    <label className='pl-2 ' htmlFor="username">Username</label>
                    <input
                        className=' bg-slate-300 outline-none p-2 rounded-2xl'
                        id='username'
                        type="text"
                        placeholder='username'
                        value={signupData.username}
                        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                    />
                </div>
                <div className='flex flex-col gap-1 relative  rounded-xl'>
                    <label className='pl-2 ' htmlFor="password">Password</label>
                    <input
                        className=' bg-slate-300 outline-none p-2 rounded-2xl'
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    />

                    {showPassword ? <FaEye className='absolute right-6 cursor-pointer bottom-3' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute right-6 cursor-pointer bottom-3' onClick={() => setShowPassword(!showPassword)} />}
                </div>
                <div className='flex flex-col gap-1 relative  rounded-xl'>
                    <label className='pl-2 ' htmlFor="confirmPassword">ConfirmPassword</label>
                    <input
                        className=' bg-slate-300 outline-none p-2 rounded-2xl'
                        id='confirmPassword'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='confirmPassword'
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    />
                    {showPassword ? <FaEye className='absolute right-6 bottom-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute right-5 cursor-pointer bottom-3' onClick={() => setShowPassword(!showPassword)} />}
                </div>

                <div className='w-full flex flex-col gap-2 items-center justify-center'>
                    <Link to='/login' className='text-blue-500 hover:text-blue-700 hover:underline'>Already have an account? Login</Link>
                    <input type='submit' value={"SignUp"} className='bg-emerald-300 pl-4 pr-4 p-2 rounded-xl'/>
                </div>
            </form>
        </div>
    )
}

export default Signup