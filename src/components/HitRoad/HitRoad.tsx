import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import img from '../../assets/london.jpg'
import Image from 'next/image'
const HitRoad = () => {
    return (
        <div className='my-14 grid grid-cols-2 gap-10'>
            <div className='col-span-1'>
                <HeadingTitle title='Hit the road' />
                <p className='text-2xl mt-4'>Rent cars in London</p>
                <p className='leading-7 mt-10'>Close to the mountains, the beach, and the desert, LA is perfectly situated for a mind-blowing day trip or road trip that ll make you feel like youre worlds away from the city. When you no longer want to shuttle through the LA traffic on busy avenues like Hollywood Blvd and Rodeo Drive, hit the freeways and explore the wonderful surrounding areas.</p>
                <p className='bg-[#6A6A6A] px-4 py-2 rounded-md text-white inline-block mt-5'>Rent the perfect car</p>
            </div>
            <div>
                <div className='col-span-1'>
                    <Image alt='img' src={img} height={1200} width={1200} />
                </div>
            </div>
        </div>
    )
}

export default HitRoad