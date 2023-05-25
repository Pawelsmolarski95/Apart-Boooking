
import getListingbyId from '@/app/actions/getlistingById';
import React from 'react'

interface IParams {
    listingId?: string 
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingbyId(params);
  return (
    <div>
      My listing page
    </div>
  )
}

export default ListingPage
