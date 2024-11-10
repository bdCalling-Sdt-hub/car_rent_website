import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import Accordion from '../Accordion'

const Faqs = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='text-center'>
                <HeadingTitle title={'Explore Our FAQs'} />
                <p className='mt-5'>FAQ</p>
            </div>
            <Accordion/>
        </div>
    )
}

export default Faqs