import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import BrandCaurosel from '../BrandCaurosel'

const BrowseBrand = () => {
    return (
        <div className='container mx-auto py-20 px-2 md:px-0'>
            <HeadingTitle title={'Browse by Brand'} />

            <div className='md:mt-5 mt-2 '>
                <p className='bg-[#BCBABA26] inline-block rounded-full md:px-4 text-[10px] md:text-[18px] px-2 md:py-2 py-1'>Select your favorite category car </p>
            </div>
            <BrandCaurosel/>
        </div>
    )
}

export default BrowseBrand 