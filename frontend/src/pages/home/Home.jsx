import React from 'react'
import NavBar from '../../components/NavBar'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdAddHomeWork } from "react-icons/md";
import ListingCard from '../../components/ListingCard'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full min-h-screen h-fit bg-sky-950 relative'>
      <NavBar />

      {/* create listing card and render all those with a  */}
      <div className='p-1 h-full flex flex-wrap justify-around overflow-auto gap-1 items-center'>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>

      <div className='w-[90px] h-fit p-2  absolute bottom-3 cursor-pointer right-3'>
        <button
          onClick={() => navigate("/addListing")}
        ><MdAddHomeWork className='w-[90px] h-[50px] cursor-pointer hover:scale-105 text-sky-600 ' /></button>
      </div>
    </div>
  )
}

export default Home