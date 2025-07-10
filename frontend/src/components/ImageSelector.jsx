import React, { use, useEffect, useState } from 'react'
import { BiSolidImageAdd } from "react-icons/bi";

const ImageSelector = ({ setImage, imgId }) => {
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageChange = (e) => {
        const image = e.target.files[0]
        setImage(image)
        setImageUrl(URL.createObjectURL(image))
    }

    return (
        <div
            className='w-[20vmax] relative flex justify-center items-center bg-neutral-600 h-[20vh] rounded-4xl '
        >
            <label
                className='absolute bottom-0 right-[-2px]'
                htmlFor={imgId}
            >
                <BiSolidImageAdd className='w-[4vw] h-[5vh] text-sky-600' />
            </label>

            <input
                className='hidden'
                type="file"
                id={imgId}
                onChange={handleImageChange}
            />

            {
                imageUrl == null ? (<h2>Add {imgId}</h2>) : (
                    <img
                        className='w-full p-1 rounded-4xl h-full object-cover'
                        src={imageUrl}
                        alt="loading Problem"
                    />
                )
            }

        </div>
    )
}

export default ImageSelector