import React, { useState } from 'react'
import image from '/bed_logo.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSwitcher = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const leftClick = () => {
    setImageIndex((prev) => {
      if (prev === 0)
        return images.length - 1
      else
        return prev - 1;
    })
  }
  const ringtClick = () => {
    setImageIndex((prev) => {
      if (prev === images.length - 1)
        return 0
      else
      return prev+1 
    })
  }
  return (
    <div className='w-full h-[50%]  text-white  relative'>

      <img
        className='w-full h-full p-1.5'
        src={images[imageIndex]}
        alt="Image loading problem"
      />

      {/* <label className='absolute top-[50%] left-[2%]'>previous</label>
      <label className='absolute top-[50%] right-[2%]'>next</label> */}
      <button
        onClick={leftClick}
        className='absolute top-[50%] left-[2%]'>
        <BsChevronCompactLeft />
      </button>
      <button 
        onClick={ringtClick}
      className='absolute top-[50%] right-[2%]'>
        <BsChevronCompactRight />
      </button>

    </div>
  )
}

export default ImageSwitcher