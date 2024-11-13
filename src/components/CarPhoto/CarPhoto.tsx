import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import { Input } from '../ui/input'

const CarPhoto = () => {
    return (
        <div className='max-w-[60%]'>
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
            
        </div>
    )
}

export default CarPhoto