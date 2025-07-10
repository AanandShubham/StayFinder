import React, { useContext, useState } from "react"

export const ListingContext = React.createContext()

export const useListingContext = () => {
    return useContext(ListingContext)
}

export const ListingContextPovider = ({ children }) => {
    const [listings, setListings] = useState([])
    const [listingType, setListingType] = useState(null)
    return (
        <ListingContext.Provider value={
            {
                listings,
                setListings,
                listingType,
                setListingType
            }
        }>
            {children}
        </ListingContext.Provider>
    )
}
