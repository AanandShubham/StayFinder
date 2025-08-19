import React from 'react'
import NavBar from '../../components/NavBar'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdAddHomeWork } from "react-icons/md";
import ListingCard from '../../components/ListingCard'
import useGetListings from '../../hooks/useGetListings';

const Home = () => {
  const navigate = useNavigate();
  const { loading, listings } = useGetListings()

  console.log("Lisgings : ", listings)
  return (
    <div className='w-full min-h-screen h-screen bg-gray-200 relative'>
      <NavBar />-

      <div>
        {
          loading ? (
            <h2>Loding data</h2>
          ) : (
            <div className='p-1 h-full flex flex-wrap justify-around overflow-auto gap-1 '>
              {
                listings?.map((listing) => (<ListingCard key={listing._id} listing={listing} />))
              }
            </div>
          )
        }
      </div>

      <div className='w-[90px] h-fit p-2  absolute top-180 cursor-pointer right-3'>
        <button
          onClick={() => navigate("/addListing")}
        ><MdAddHomeWork className='w-[90px] h-[50px] cursor-pointer hover:scale-105 text-sky-600 ' /></button>
      </div>
    </div>
  )
}

export default Home