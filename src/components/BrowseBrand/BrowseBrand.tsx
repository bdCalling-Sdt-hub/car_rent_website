import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import BrandCaurosel from '../BrandCaurosel'

const BrowseBrand = () => {
    return (
        <div className='container mx-auto py-20'>
            <HeadingTitle title={'Browse by Brand'} />

            <div className='mt-5 '>
                <p className='bg-[#BCBABA26] inline-block rounded-full px-4 py-2'>Select your favorite category car </p>
            </div>
            <BrandCaurosel/>
        </div>
    )
}

export default BrowseBrand 