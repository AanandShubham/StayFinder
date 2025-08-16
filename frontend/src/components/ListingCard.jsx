import React from 'react'
import ImageSwitcher from './ImageSwitcher'

const ListingCard = () => {
  return (
    <div className='w-[20%] h-[30%] border-2 border-black'> 
      <ImageSwitcher />
      <div className='w-full h-[30%] overflow-auto p-2'>
          <h2>Title : Lorem ipsum dolor sit amet consectetur.</h2>
          <p className='overflow-ellipsis'> Discription: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque non officiis quae iste modi deserunt iusto, error, fugit veniam reprehenderit accusantium aspernatur commodi repellat inventore beatae nisi. Impedit, cum error.</p> 
      </div>

    </div>
  )
}

export default ListingCard

// correct overflow 