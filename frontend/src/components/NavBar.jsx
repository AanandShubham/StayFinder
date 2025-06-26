import React from 'react';
import space_galaxy from '/space_galaxy.jpg';
import bed_logo from '/bed_logo.jpg'
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import {Link }from 'react-router-dom'

const NavBar = () => {
  return (
    < div className=' flex flex-col items-center  justify-center gap-2'>
      <div className='w-[100vw] h-[10vh] flex justify-between md:items-center p-2 bg-slate-500'>

        <div className='w-[15%] text-black flex  cursor-pointer items-center'>
          <img
            className='w-[50px] mix-blend-color-burn h-[80%]'
            src={bed_logo}
            alt="logo loading problem"
          />
          <Link to='/' className='text-xl font-semibold'>StayFinder</Link>
        </div>

        <div className='w-[30%] hidden md:block relative rounded-2xl bg-neutral-600'>
          <input
            className='w-full p-2 pr-8 rounded-2xl  relative outline-1 outline-neutral-800'
            type="search"
            name=""
            id=""
            placeholder='Enter anything to search'
          />
          <IoSearch className='w-6 h-6 absolute top-2 right-2 cursor-pointer' />
        </div>

        <div className='flex items-center justify-center gap-3'>
          <h2 className='hidden md:block'> Some text here</h2>
           <RxHamburgerMenu  className='text-3xl cursor-pointer'  />
        </div>
      </div>

      
      <div className='w-[95%] md:hidden block relative rounded-2xl bg-neutral-600'>
          <input
            className='w-full p-2 pr-8 rounded-2xl  relative outline-1 outline-neutral-800'
            type="search"
            name=""
            id=""
            placeholder='Enter anything to search'
          />
          <IoSearch className='w-6 h-6 absolute top-2 right-2 cursor-pointer' />
        </div>
    </div>
  )
}

export default NavBar