import React, { useState } from 'react';
import bed_logo from '/bed_logo.jpg'
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout';
import { BsArrowRight, BsChatRight } from 'react-icons/bs';

const NavBar = () => {
  const { loading, logout } = useLogout()
  const [showPanel, setShowPanel] = useState(false)
  const navigate = useNavigate()

  return (
    < div className=' flex flex-col items-center  justify-center gap-2'>
      <div className='w-[99vw] h-[10vh] mt-2 rounded-t-2xl flex justify-between md:items-center p-2  bg-sky-700'>

        <div className='w-[15%] text-black flex cursor-pointer items-center'>
          <img
            className='w-[50px] hover:scale-105 mix-blend-color-burn h-[80%]'
            src={bed_logo}
            alt="logo loading problem"
          />
          <Link to='/' className='text-xl hover:scale-105 font-semibold'>StayFinder</Link>
        </div>

        <div className='w-[30%] hidden md:block relative rounded-2xl bg-neutral-600'>
          <input
            className='w-full p-2 pr-8 rounded-2xl text-neutral-300  relative outline-1 outline-neutral-800'
            type="search"
            placeholder='Enter anything to search'
          />
          <IoSearch className='w-6 h-6 absolute top-2 right-2 hover:scale-110 cursor-pointer' />
        </div>

        <div className='flex items-center justify-center gap-3'>
          <h2 className='hidden md:block'> Profile </h2>
          <BsArrowRight className='text-stone-200' />
          <RxHamburgerMenu onClick={() => setShowPanel(prev => !prev)} className='text-3xl hover:scale-110 cursor-pointer' />
        </div>
      </div>

      <div className='w-[95%] md:hidden block relative rounded-2xl bg-neutral-600'>
        <input
          className='w-full p-2 pr-8 rounded-2xl text-neutral-300 relative outline-1 outline-neutral-800'
          type="search"
          placeholder='Enter anything to search'
        />
        <IoSearch className='w-6 h-6 absolute top-2 right-2 hover:scale-110 cursor-pointer' />
      </div>

      <div className={`w-[220px] h-[300px] p-3 flex flex-col gap-2 items-start bg-[#ccca3c] rounded-b-4xl rounded-t-xl absolute  z-10 right-2 top-18 ${showPanel || 'hidden'}`} >
        <button
          className='cursor-pointer'
          onClick={() => (navigate("/login"), setShowPanel(prev => !prev))}
        >Login</button>

        <div className='w-full h-[1px] bg-amber-700'></div>

        <button
          className='cursor-pointer'
          onClick={() => {logout(), setShowPanel(prev => !prev)}}
        >Logout</button>
      </div>
    </div>
  )
}

export default NavBar