import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5"; // back button

const Test = () => {
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [imageData,setImageData] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const formData = new FormData()
        // formData.append('image1', image1)
        // formData.append('image2', image2)
        // formData.append('image3', image3)

        // const response = await fetch('/api/test', {
        //     method: 'POST',
        //     body: formData
        // })
        // const data = await response.json()
        // console.log(data)

        console.log("Image 1 Data : ",image1)
        const ulr = URL.createObjectURL(image1)
        console.log("url : ",ulr)
        setImageData(ulr)
    }

    return (
        <div>
            <h2>Test of file upload</h2>
            <form className='flex flex-col gap-4 items-center justify-center mt-10 w-full' onSubmit={handleSubmit}>
                <h2>Select 3 images to send on backend</h2>
                <label htmlFor="image1">Image1 : </label>
                <input className='hidden' type="file" id='image1' onChange={(e) => setImage1(e.target.files[0])} />
                <label htmlFor="image2">Image2</label>
                <input type="file" id='image2' onChange={(e) => setImage2(e.target.files[0])} />
                <label htmlFor="image3">Image3</label>
                <input type="file" id='image3' onChange={(e) => setImage3(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>

            <img src={imageData} alt="imageLoading" />


        </div>
    )
}

export default Test