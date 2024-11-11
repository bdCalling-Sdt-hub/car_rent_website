import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import BrandCaurosel from '../BrandCaurosel'
import DestinationCaurosel from '../DestinationCaurosel'

const BrowseDestination = () => {
  return (
    <div className='container mx-auto py-20'>
            <HeadingTitle title={'Browse by Destination'} />

            <div className='mt-5 '>
                <p className='bg-[#BCBABA26] inline-block rounded-full px-4 py-2'>Select your destination </p>
            </div>
            <DestinationCaurosel/>
        </div>
  )
}

export default BrowseDestination