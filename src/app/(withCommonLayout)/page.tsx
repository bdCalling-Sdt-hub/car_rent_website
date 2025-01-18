import BrowseBrand from '@/components/BrowseBrand/BrowseBrand'
import BrowseDestination from '@/components/BrowseDestination/BrowseDestination'
import ClientReview from '@/components/ClientReview/ClientReview'
import Faqs from '@/components/Faqs/Faqs'
import Hero from '@/components/Hero/Hero'
import Overview from '@/components/Overview/Overview'
import TakenDateTimeWrapper from '@/components/TakenDateTime/TakeDateTimeWrapper'
// import TakenDateTime from '@/components/TakenDateTime/TakenDateTime'
import React from 'react'

const page = () => {
    return (
        <>
            {/* <TakenDateTime /> */}
            <TakenDateTimeWrapper/>
            <Hero />
            <BrowseBrand />
            <BrowseDestination />
            <ClientReview />
            <Overview />
            <Faqs />
        </>
    )
}

export default page 