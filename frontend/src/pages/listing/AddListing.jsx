import React, { useState } from 'react'
import ImageSelector from '../../components/ImageSelector'
import { BiSolidImageAdd } from "react-icons/bi";
import useAddListing from '../../hooks/useAddListing';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const AddListing = () => {

  const navigate = useNavigate()
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [listingDetails, setListingDetails] = useState({
    title: '',
    description: '',
    city: '',
    landmark: '',
    pincode: '',
    category: '',
    rent: ''
  })

  const { loading, addListing } = useAddListing()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addListing({ ...listingDetails, image1, image2, image3 })
    toast.success("Listing Added Successfully !!")
    navigate(-1)

  }

  return (
    <div className='w-[100vw] min-h-[100vh] h-fit justify-center flex pt-2 md:items-center bg-black'>

      <form onSubmit={handleSubmit} className='w-fit h-fit mb-5 p-5 gap-3 rounded-xl justify-center items-center flex flex-col bg-slate-900 '>
        <h2 className='w-full h-full text-center bg-neutral-700 text-neutral-300 rounded-2xl p-2 text-xl font-bold'> Add Listing </h2>

        <div className='w-full h-full gap-3 justify-center items-center md:flex bg-slate-900 '>


          <div className='w-full h-full gap-2 text-white p-5 items-center flex flex-col '>

            <div className='flex flex-col gap-2'>

              <label
                className='ml-2'
                htmlFor="title"
              >
                Title
              </label>

              <input
                id='title'
                className='min-w-[30vw] p-2  rounded-xl bg-neutral-600 outline-0'
                type="text"
                placeholder='title'
                value={listingDetails.title}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, title: e.target.value }))}
              />

            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='ml-2'
                htmlFor="description"
              >
                Description
              </label>

              <input
                id='description'
                className='min-w-[30vw] p-2 rounded-xl bg-neutral-600 outline-0'
                type="text"
                placeholder='description'
                value={listingDetails.description}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='ml-2'
                htmlFor="city"
              >
                City
              </label>

              <input
                id='city'
                className='min-w-[30vw] p-2  rounded-xl bg-neutral-600 outline-0'
                type="text"
                placeholder='city'
                value={listingDetails.city}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, city: e.target.value }))}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='ml-2'
                htmlFor="landmark">
                Landmark
              </label>

              <input
                id='landmark'
                className='min-w-[30vw] p-2 rounded-xl bg-neutral-600 outline-0'
                type="text"
                placeholder='landmark'
                value={listingDetails.landmark}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, landmark: e.target.value }))}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='ml-2'
                htmlFor="pincode"
              >
                Pincode
              </label>

              <input
                id='pincode'
                className='min-w-[30vw] p-2 rounded-xl bg-neutral-600 outline-0'
                type="text"
                placeholder='pincode'
                value={listingDetails.pincode}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, pincode: e.target.value }))}
              />

            </div>

            <div className=' w-full flex flex-col gap-2'>

              <label
                className='ml-2'
                htmlFor="catogery"
              >Select Category</label>
              <select
                id="category"
                className='min-w-[30vw] p-3  rounded-xl bg-neutral-600 outline-0'
                value={listingDetails.catogery}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, category: e.target.value }))}
              >
                <option value="">OPTIONS</option>
                <option value="hotel">HOTEL</option>
                <option value="villa">VILLA</option>
                <option value="shop">SHOP</option>
                <option value="gym">GYM</option>
              </select>

            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='ml-2'
                htmlFor="rent"
              >
                Rent
              </label>

              <input
                id='rent'
                className='min-w-[30vw] p-2  rounded-xl bg-neutral-600 outline-0'
                type="number"
                placeholder='rent'
                value={listingDetails.rent}
                onChange={(e) => setListingDetails((prev) => ({ ...prev, rent: e.target.value }))}
              />
            </div>

          </div>

          <div className='w-full h-full flex flex-col justify-between gap-3 items-center p-5'>

            <ImageSelector
              setImage={setImage1}
              imgId={"image1"}
            />

            <ImageSelector
              setImage={setImage2}
              imgId={"image2"}
            />

            <ImageSelector
              setImage={setImage3}
              imgId={"image3"}
            />

          </div>

        </div>
        <div className='w-[200px] text-center font-bold text-2xl mt-3 h-fit p-2 rounded-xl bg-sky-600'>
          <input
            className={``}
            type="submit"
            disabled={loading}
            value={loading ? 'Loading...' : "Add Listing"}
          />
        </div>
      </form>

    </div>
  )
}

export default AddListing