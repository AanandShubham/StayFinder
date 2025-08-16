import { useState } from "react"
import toast from "react-hot-toast"
import useListingContext from '../context/ListingContext'

const useAddListing = () => {
    const [loading, setLoading] = useState(false)
    const { listings, setListings } = useListingContext()

    const addListing = async ({ title, description, city, landmark, pincode, category, rent, image1, image2, image3 }) => {

        const success = handleInputError({ title, description, city, landmark, pincode, category, rent, image1, image2, image3 })

        if (!success) return

        setLoading(true)

        try {

            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('city', city)
            formData.append('landmark', landmark)
            formData.append('pincode', pincode)
            formData.append('category', category)
            formData.append('rent', rent)
            formData.append('image1', image1)
            formData.append('image2', image2)
            formData.append('image3', image3)

            const response = await fetch('/api/listing/add', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            console.log("add Listing Response : ", data)

            // set listing data to listing context 
            setListings([...listings, data])

        } catch (error) {
            toast.error(error.message)
            console.log("Add Listing Error : ", error)

        } finally {
            setLoading(false)
        }
    }

    return { loading, addListing }
}

export default useAddListing;

function handleInputError({
    title,
    description,
    city,
    landmark,
    pincode,
    category,
    rent,
    image1,
    image2,
    image3
}) {

    if (!title || !description || !city || !landmark || !pincode || !category || !rent || !image1 || !image2 || !image3) {

        toast.error("Fields can't be empty !!")
        return false
    }

    return true
}