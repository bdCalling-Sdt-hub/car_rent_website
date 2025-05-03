import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import img from '../../assets/london.jpg'
import Image from 'next/image'
const HitRoad = () => {
    return (
        <div className='my-14 grid grid-cols-1  md:grid-cols-2 gap-10'>
            <div className='col-span-1'>
                <HeadingTitle title='Hit the road' />
                <p className='text-2xl mt-4'>Rent cars in London</p>
                <p className='leading-7 mt-10'>Explore London and beyond with ease by renting a car tailored to your needs. Whether you&rsquo;re visiting for business, a weekend getaway, or a family holiday, our wide selection of vehicles—from compact city cars to luxury sedans and spacious SUVs—ensures there&rsquo;s something for everyone. Enjoy competitive rates, flexible rental periods, and convenient pickup locations across the city, including airports, train stations, and central London.</p>
                {/* <p className='bg-[#6A6A6A] px-4 py-2 rounded-md text-white inline-block mt-5'>Rent the perfect car</p> */}
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