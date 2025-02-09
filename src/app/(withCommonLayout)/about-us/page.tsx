import Image from 'next/image'
import React from 'react'
import img from '../../../assets/aboutHeading.png'
import img1 from '../../../assets/explore.jpg'
import team from '../../../assets/team.png'
import HeadingTitle from '@/components/shared/HeadingTitle'
const AboutUsPage = () => {
    return (
        <div className='container mx-auto px-2 md:px-0'>
            <div className='md:py-10 py-5 relative md:mb-20  flex justify-center'>
                <div className='md:flex items-center gap-24 '>
                    <Image alt='about' className='z-20 ' height={600} width={600} src={img} />
                    <div className='mt-5 md:mt-0'>
                        <HeadingTitle title='About Nardo' />
                        <p className='max-w-xs'>Take a look under the hood of the
                            world&apos;s largest car sharing
                            marketplace</p>
                    </div>
                </div>
                <div className='bg-[#BCBABA26] h-72 hidden md:block w-[50%] z-0 absolute top-1/3 left-1/4 '></div>
            </div>
            <div className='md:py-10 py-5 bg-[]'>
                <div className='text-center pb-10'>
                    <HeadingTitle title='Your perfect vehicle awaits' />
                </div>
                <div className='max-w-4xl space-y-10 mx-auto'>
                    <p>Nardo is the newest and fastest growing peer to peer car-sharing marketplace in the UK. Whether you are flying in, need a car nearby or for a special occasion, Nardo lets you skip the traditional rental process and choose from a unique selection of vehicles, from daily cars to luxurious rides, all shared by local hosts and at a great price!</p>
                    <p>For aspiring entrepreneurs, Nardo provides an opportunity to build and grow their own car-sharing businesses, using the platform to reach their goals. With a mission to make better use of the  1.5 billion cars, Nardo turns underutilized vehicles into valuable assets, empowering everyone to take control of their journey.</p>
                </div>
            </div>

            <div className='py-10'>
                <div className='text-center mt-5'>
                    <HeadingTitle title='Explore us further' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                    <div>
                        <p className='font-semibold text-[32px]'>Meet the founders</p>
                        <p className='max-w-sm mt-5 leading-7'>Meet the minds behind the movement, from executive leadership to the board of directors, working to unlock the potential of the UKs 34 million cars</p>
                        <button className='mt-5 bg-[#0CFEE8] px-4 py-2 rounded-md shadow-md'>Meet the team</button>

                    </div>
                    <Image height={800} width={800} className='h-[50%] rounded-md' src={img1} alt='img' />
                </div>
            </div>

            <div className='py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                <Image height={1500} width={1500} className='' src={team} alt='img' />

                    <div className=' mx-auto'>
                        <p className='font-semibold text-[32px]'>Join the Nardo family</p>
                        <p className='max-w-sm mt-5 leading-7'>Nardo, recognized as a Great Place to Work, is dedicated to building a supportive, approachable, innovative, and efficient workplace.Explore our open positions and become part of our team!</p>
                        <button className='mt-5 bg-[#0CFEE8] px-4 py-2 rounded-md shadow-md'>Join Nardo</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage