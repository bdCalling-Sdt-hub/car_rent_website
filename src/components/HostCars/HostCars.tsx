import React from 'react'
import img from '../../assets/hostcar.png'
import Image from 'next/image'
import { CiEdit, CiLocationOn, CiStar } from 'react-icons/ci'
import Link from 'next/link'
const HostCars = () => {
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 border p-4 rounded-md font-lora'>
        <div className='md:col-span-4  col-span-1 '>
          <Image alt='car' className='w-full' src={img} height={300} width={300} />
        </div>
        <div className='md:col-span-8 col-span-1 space-y-2'>
          <div className='md:flex justify-between'>
            <div>
              <p className='text-[24px]'>Mercedes-Benz E-Class 2017</p>
              <div className='flex items-center gap-2'>
               
                <p className='flex items-center gap-1'><CiStar /> 4.5</p>
                <p className='flex items-center gap-1'> <CiLocationOn />London</p>
              </div>

            </div>
            <div>
              <Link href={'/host-history/:id'} className='bg-[#0CFEE8] px-4 py-2 rounded-md text-black flex justify-center my-5 items-center gap-1'>Edit <CiEdit size={20} /></Link>
            </div>
          </div>
          <p>3 days Discount -30£</p>
          <p>£40/Per day</p>
          <p className='font-semibold'>Description :</p>
          <p className='leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 border p-4 rounded-md font-lora'>
        <div className='md:col-span-4  col-span-1 '>
          <Image alt='car' className='w-full' src={img} height={300} width={300} />
        </div>
        <div className='md:col-span-8 col-span-1 space-y-2'>
          <div className='md:flex justify-between'>
            <div>
              <p className='text-[24px]'>Mercedes-Benz E-Class 2017</p>
              <div className='flex items-center gap-2'>
                
                <p className='flex items-center gap-1'><CiStar /> 4.5</p>
                <p className='flex items-center gap-1'> <CiLocationOn />London</p>
              </div>

            </div>
            <div>
              <Link href={'/host-history/:id'} className='bg-[#0CFEE8] px-4 py-2 rounded-md text-black flex justify-center my-5 items-center gap-1'>Edit <CiEdit size={20} /></Link>
            </div>
          </div>
          <p>3 days Discount -30£</p>
          <p>£40/Per day</p>
          <p className='font-semibold'>Description :</p>
          <p className='leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
        </div>
      </div>
      
    </div>
  )
}

export default HostCars