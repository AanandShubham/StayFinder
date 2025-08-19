import React from 'react'
import ImageSwitcher from './ImageSwitcher'

const ListingCard = ({ listing }) => {
  const images = Array.of(listing.image1,listing.image2,listing.image3)
  return (
    <div className='w-[30%] h-[60%]  text-white border-black shadow-2xl'>
      <ImageSwitcher images = {images}/>
      <div className='w-full h-[50%] overflow-auto p-2'>
        <h2 className='text-2xl text-white'>Title : {listing.title}</h2>
        <span className='text-amber-600 text-2xl font-bold'>Description:-</span>
        <span className='overflow-ellipsis text-xl text-black font-semibold'>{listing.description}</span>
      </div>
    </div>
  )
}

export default ListingCard

// correct overflow 