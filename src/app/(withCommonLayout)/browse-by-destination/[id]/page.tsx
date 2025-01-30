import React, { FC } from 'react'
import Image from 'next/image'
import RatingReview from '@/components/RatingReview/RatingReview'
import TakenDateTime from '@/components/TakenDateTime/TakenDateTime'
import ClientCarDetails from '@/components/ClientCarDetails/ClientCarDetails'
import { imageUrl } from '@/redux/baseApi'

type TProductId = {
    params: Promise<{ id: string }>;
  };
  

const CarDetailsPage : FC<TProductId> = async( {params})=> {
    

    const { id } = await params;

    const res = await fetch(`http://10.0.60.26:8056/car/get-single-car-details?carId=${id}`)
    const cars = await res.json()


    const response = await fetch(`http://10.0.60.26:8056/review/get-all-review?carId=${id}`)
    const rating =  await response.json()
  
    return (
        <div className='container mx-auto my-10 font-lora px-2 md:px-0'>
            <TakenDateTime />
            <p className='pb-2'><span className='text-sm text-[#B0B0B0] '>Home </span>/ Service details</p>
            <p className='text-2xl font-medium mb-5'>Details</p>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='md:col-span-7 '>
                    <Image alt='img' className='w-full h-[330px] md:h-[675px]   rounded-sm' src={`${imageUrl}/${cars?.data?.car_image[0]}`} height={1200} width={1200} />
                </div>
                <div className='md:col-span-5 space-y-4'>
                    <Image alt='img' className='w-full  max-h-[330px] rounded-sm'  src={`${imageUrl}/${cars?.data?.car_image[1]}`} height={300} width={300} />
                    <Image alt='img' className='w-full   max-h-[330px] rounded-sm'  src={`${imageUrl}/${cars?.data?.car_image[2]}`} height={300} width={300} />

                </div>
            </div>

            <ClientCarDetails cars={cars?.data} />

            
            <RatingReview rating={rating?.data?.result} />

        </div>
    )
}

export default CarDetailsPage