import { useEffect, useState } from 'react'
import useListingContext from '../context/ListingContext'
import useAuthContext from '../context/AuthContext'
import toast from 'react-hot-toast'

const useGetListings = () => {
    const [loading, setLoading] = useState(false)
    const { listings, setListings } = useListingContext()
    const { authUser } = useAuthContext()

    useEffect(() => {
        const getListings = async () => {
            setLoading(true)
            try {
                const response = await fetch('/api/listing/all')
                const data = await response.json()
                if (data.error) throw new Error(data.error)
                // console.log("Auth data in GetListing Hook : ",authUser)

                setListings(data)

            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        if (authUser)
            getListings()
    }, [authUser])

    return { loading, listings }
}

export default useGetListings