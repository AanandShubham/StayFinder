import React, { useState } from 'react'
import image from '/bed_logo.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSwitcher = (images) => {
  const [imageIndex, setImageIndex] = useState(0)


  return (
    <div className='w-full h-[70%] border-2 border-amber-500 relative'>

      <img
        className='w-full h-full p-1.5 mix-blend-color-dodge'
        src={image}
        alt="Image loading problem"
      />

      {/* <label className='absolute top-[50%] left-[2%]'>previous</label>
      <label className='absolute top-[50%] right-[2%]'>next</label> */}
      <button className='absolute top-[50%] left-[2%]'>
        <BsChevronCompactLeft />
      </button>
      <button className='absolute top-[50%] right-[2%]'>
        <BsChevronCompactRight />
      </button>

    </div>
  )
}

export default ImageSwitcher