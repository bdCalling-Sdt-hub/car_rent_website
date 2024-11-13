import BrowseBrand from '@/components/BrowseBrand/BrowseBrand'
import BrowseDestination from '@/components/BrowseDestination/BrowseDestination'
import Faqs from '@/components/Faqs/Faqs'
import Hero from '@/components/Hero/Hero'
import Overview from '@/components/Overview/Overview'
import TakenDateTime from '@/components/TakenDateTime/TakenDateTime'
import React from 'react'

const page = () => {
    return (
        <>
            <TakenDateTime/>
            <Hero />
            <BrowseBrand/>
            <BrowseDestination/>
            <Overview/>
            <Faqs/>
        </>
    )
}

export default page 