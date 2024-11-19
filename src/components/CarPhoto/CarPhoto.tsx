import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import hostCar1 from "../../assets/hostcar.png";
import hostCar3 from "../../assets/hostimg2.png";
import Image from "next/image";

const CarPhoto = () => {
    return (
        <div className='md:max-w-[60%] w-full'>
            <HeadingTitle title='Car Photos' />
            <p className='mt-5'>High quality photos increase your earning potentially by attracting more mores guests. Upload
                at lest 6 photos, including multiple exterior angles with the whole car in frame, as well as interior shots. Learn more here.</p>
            <p>How much advance notice you need before a trip stars?</p>
            <div className='mt-10'>
                <p className='mb-2'>Seats</p>
                <Input placeholder='type here' />
            </div>
            <div className='mt-10'>
                <p className='mb-2'>Bags</p>
                <Input placeholder='type here' />
            </div>
            <div className='mt-10'>
                <p className='mb-2'>Door</p>
                <Input placeholder='type here' />
            </div>
            
            <div className='mt-10'>
                <p className='mb-2'>Fuel type</p>
                <Input placeholder='type here' />
            </div>
            <div className='mt-10 flex items-center gap-5'>
                <div className='w-full'>
                    <p className='mb-2'>Discount</p>
                    <Input placeholder='type here' />
                </div>
                <div className='w-full'>
                    <p className='mb-2'>Discount Amount</p>
                    <Input placeholder='type here' />
                </div>
            </div>
            <div className='mt-10 md:flex justify-between space-y-2 md:space-y-0  gap-10 '>
                <Image alt="img" className='h-52 w-full object-cover' height={800} width={800} src={hostCar1} />
                <Image alt="img" className='h-52 w-full object-cover' height={800} width={800} src={hostCar3} />
                <Image alt="img" className='h-52 w-full object-cover' height={800} width={800} src={hostCar1} />
                {/* <Image alt="img" className='h-52 w-full object-cover' height={800} width={800} src={hostCar1} />
                <Image alt="img" className='h-52 w-full object-cover' height={800} width={800} src={hostCar1} /> */}
            </div>

            <div className="mt-8">
                <Button className="bg-[#6A6A6A] px-10"  >
                    Add Photos
                </Button>
            </div>
        </div>
    )
}

export default CarPhoto