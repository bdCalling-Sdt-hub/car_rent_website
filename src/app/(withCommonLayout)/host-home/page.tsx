import HeadingTitle from '@/components/shared/HeadingTitle'
import Link from 'next/link'
import React from 'react'
import img from '../../../assets/hostHome.png'
import img2 from '../../../assets/hostimg2.png'
import Image from 'next/image'

const HostHomePage = () => {
    return (
        <div className='container mx-auto py-10'>
            <p className='mb-5'>FIND YOUR DRIVE</p>
            <HeadingTitle title='Start a car sharing' />
            <p className='pt-5 text-4xl font-medium pb-8'>business on Nardo</p>
            <Link href='/' className='bg-[#6A6A6A] text-white px-5 py-4 rounded-sm'>Get Start</Link>
            <div className='mt-10'>
                <Image src={img} alt='img' height={1600} width={1600} className='w-full h-[50vh]' />
            </div>
            <div className='max-w-3xl mx-auto space-y-10 mt-10'>
                <p className=''>Seize control of your financial future and fuel your entrepreneurial drive with NARDO, the world s largest car-sharing marketplace.
                </p>
                <p>NARDO equips aspiring entrepreneurs with the resources to build a successful car-sharing portfolio and the potential to significantly boost their annual income.
                </p>
                <p>Start by listing your first car today, then design your business plan and scale your portfolio quickly!</p>
            </div>
            <div className='mt-20 text-center'>
                <HeadingTitle title='Entrepreneurs of all experience levels ' />
                <p className='pt-5 text-5xl font-bold pb-8'>welcome</p>
                <p className='mt-10 max-w-3xl mx-auto leading-8'>Whether you want to host a few cars to earn extra income to pay for life s expenses, or build a small shop with a portfolio of cars, start with one car and scale how you want.</p>
            </div>
            <div className='grid grid-cols-12 mt-10 '>
                <div className='col-span-6 flex items-center justify-center'>
                    <div className='text-center space-y-4'>
                        <p className='font-bold text-4xl font-lora'>NARDO</p>
                        <p className='text-4xl'>You cold earn</p>
                        <p className='font-lora text-2xl pb-10'>Static rate of average £40 per day</p>
                        <Link href='/host-home/License-plate' className='bg-[#6A6A6A] text-white px-5 py-4 rounded-sm '>Get Start</Link>
                    </div>
                </div>
                <div className='col-span-6'>
                    <Image src={img2} alt='img' height={1200} width={1200} />
                </div>
            </div>
            <div className='text-center mt-20 max-w-xl mx-auto space-y-4'>
                <p className='text-4xl font-bold'>Start building your business plan</p>
                <p className='pb-10'>List your first car to get started today and build your plan to take control of your financial future tomorrow.</p>
                <Link href='/' className='bg-[#6A6A6A] text-white px-5 py-4 rounded-sm '>Get Start</Link>

            </div>
        </div>
    )
}

export default HostHomePage