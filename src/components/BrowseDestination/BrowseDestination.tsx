import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import DestinationCaurosel from '../DestinationCaurosel'

const BrowseDestination = () => {
  return (
    <div className='container mx-auto md:py-20 py-10 px-2 md:px-0'>
            <HeadingTitle title={'Browse by Destination'} />

            <div className='md:mt-5 mt-2 '>
                <p className='bg-[#BCBABA26] inline-block rounded-full md:px-4 text-[10px] md:text-[18px] px-2 md:py-2 py-1'>Select your destination </p>
            </div>
            <DestinationCaurosel/>
        </div>
  )
}

export default BrowseDestination