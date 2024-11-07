import BrowseBrand from '@/components/BrowseBrand/BrowseBrand'
import Faqs from '@/components/Faqs/Faqs'
import Hero from '@/components/Hero/Hero'
import Overview from '@/components/Overview/Overview'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <BrowseBrand/>
            <Overview/>
            <Faqs/>
        </>
    )
}

export default page