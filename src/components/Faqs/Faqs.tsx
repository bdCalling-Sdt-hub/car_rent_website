import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import Accordion from '../Accordion'

const Faqs = () => {
    return (
        <div className='container mx-auto py-0 pb-5 md:py-10 px-2 md:px-0'>
            <div className='text-center'>
                <HeadingTitle title={'Explore Our FAQs'} />
                <p className='mt-5'>FAQ</p>
            </div>
            <Accordion/>
        </div>
    )
}

export default Faqs