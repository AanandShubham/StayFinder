import React, { useContext, useState } from "react"

const ListingContext = React.createContext()

export const ListingContextProvider = ({ children }) => {
    const [listings, setListings] = useState([])
    const [listingType, setListingType] = useState(null)
    return (
        <ListingContext.Provider value={{listings,setListings,listingType,setListingType}}>
            {children}
        </ListingContext.Provider>
    )
}
const useListingContext = () => {
    return useContext(ListingContext)
}
export default useListingContext
