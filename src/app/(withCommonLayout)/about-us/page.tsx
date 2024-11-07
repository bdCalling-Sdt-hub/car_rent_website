import Image from 'next/image'
import React from 'react'
import img from '../../../assets/heroImg.jpg'
import img1 from '../../../assets/car5.png'
import team from '../../../assets/team.png'
import HeadingTitle from '@/components/shared/HeadingTitle'
const AboutUsPage = () => {
    return (
        <div className='container mx-auto'>
            <div className=' py-10 relative mb-20'>
                <div className='flex items-center gap-24'>
                    <Image alt='about' className='z-20 ' height={600} width={600} src={img} />
                    <div>
                        <HeadingTitle title='About Nardo' />
                        <p className='max-w-xs'>Take a look under the hood of the
                            world's largest car sharing
                            marketplace</p>
                    </div>
                </div>
                <div className='bg-[#BCBABA26] h-72  w-[50%] z-0 absolute top-1/3 left-24 '></div>
            </div>
            <div className='py-10 '>
                <div className='text-center pb-10'>
                    <HeadingTitle title='Your perfect vehicle awaits' />
                </div>
                <div className='max-w-4xl space-y-10 mx-auto'>
                    <p>Nardo is the newest and fastest growing peer to peer car-sharing marketplace in the UK. Whether you're flying in, need a car nearby or for a special occasion, Nardo lets you skip the traditional rental process and choose from a unique selection of vehicles, from daily cars to luxurious rides, all shared by local hosts and at a great price!</p>
                    <p>For aspiring entrepreneurs, Nardo provides an opportunity to build and grow their own car-sharing businesses, using the platform to reach their goals. With a mission to make better use of the world’s 1.5 billion cars, Nardo turns underutilized vehicles into valuable assets, empowering everyone to take control of their journey.</p>
                </div>
            </div>

            <div className='py-10'>
                <div className='text-center'>
                    <HeadingTitle title='Want to dive deeper?' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                    <div>
                        <p className='font-semibold text-[32px]'>Meet the team</p>
                        <p className='max-w-sm mt-5'>From the executive leadership team to the board
                            of directors, get to know the leadership team
                            pioneering the way to put the world’s 1.5 billion
                            cars to better user</p>
                    </div>
                    <Image height={800} width={800} className='' src={img1} alt='img' />
                </div>
            </div>

            <div className='py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                <Image height={800} width={800} className='' src={team} alt='img' />

                    <div className=' mx-auto'>
                        <p className='font-semibold text-[32px]'>Meet the team</p>
                        <p className='max-w-sm mt-5'>From the executive leadership team to the board
                            of directors, get to know the leadership team
                            pioneering the way to put the world’s 1.5 billion
                            cars to better user</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage