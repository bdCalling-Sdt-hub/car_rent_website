import React from 'react'
import img from '../../assets/car.jpg'
import img1 from '../../assets/chat2.png'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'

const HostHistoryInfo = () => {
  return (
    <div className='font-lora'>
    <div className='grid grid-cols-6 gap-10 border-b pb-8'>
        <div className='col-span-1'>
            <Image alt='img' className='w-full' height={300} width={300} src={img} />
        </div>
        <div className='col-span-4'>
            <div className='flex  gap-10'>
                <div className='space-y-2'>
                    <p className='text-xl font-medium'>Mercedes-Benz E-Class 2017</p>
                    <p>Start Date : 05-12-2024 Time : 07 : 30 AM</p>
                    <p>End Date : 05-12-2024 Time : 07 : 30 AM</p>
                    <p>Duration : 1 days <span className='text-[#528AAE] ml-2'>Price : £125.00 Pending</span></p>
                </div>
                <div>
                    <p>Renter:</p>
                    <div className='flex mt-2 gap-2'>
                        <Image alt='img' className='h-12 w-12 rounded-full' height={300} width={300} src={img1} />
                        <div>
                            <p>MD: Jahid Hasan</p>
                            <p className='flex items-center gap-2'><CiLocationOn /> London</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <p>Pick Up Location : <span>Statue of Liberty, Times Square, Central Park, Empire State Building</span></p>
                <p>Delivery Location : <span>Statue of Liberty, Times Square, Central Park, Empire State Building</span></p>
            </div>
        </div>
        <div className=' col-span-1 '>
            <p className='bg-[#34C759] inline-block text-white px-4 py-2 rounded-sm'>Accept</p>
        </div>

    </div>
    <div className='grid grid-cols-6 gap-10 mt-10 border-b pb-8'>
        <div className='col-span-1'>
            <Image alt='img' className='w-full' height={300} width={300} src={img} />
        </div>
        <div className='col-span-4'>
            <div className='flex  gap-10'>
                <div className='space-y-2'>
                    <p className='text-xl font-medium'>Mercedes-Benz E-Class 2017</p>
                    <p>Start Date : 05-12-2024 Time : 07 : 30 AM</p>
                    <p>End Date : 05-12-2024 Time : 07 : 30 AM</p>
                    <p>Duration : 1 days <span className='text-[#528AAE] ml-2'>Price : £125.00 Pending</span></p>
                </div>
                <div>
                    <p>Renter:</p>
                    <div className='flex mt-2 gap-2'>
                        <Image alt='img' className='h-12 w-12 rounded-full' height={300} width={300} src={img1} />
                        <div>
                            <p>MD: Jahid Hasan</p>
                            <p className='flex items-center gap-2'><CiLocationOn /> London</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <p>Pick Up Location : <span>Statue of Liberty, Times Square, Central Park, Empire State Building</span></p>
                <p>Delivery Location : <span>Statue of Liberty, Times Square, Central Park, Empire State Building</span></p>
            </div>
        </div>
        <div className=' col-span-1 '>
            <p className='bg-[#34C759] text-white inline-block px-4 py-2 rounded-sm'>In Progress</p>
        </div>

    </div>

</div>
  )
}

export default HostHistoryInfo