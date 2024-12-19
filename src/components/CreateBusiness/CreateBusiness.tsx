import React from 'react'

const CreateBusiness = () => {
  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 font-lora'>
        <div>
            <h1 className='text-[32px] font-medium'>Expandable</h1>
            <p className='max-w-[400px] leading-8'>You decide how many cars to share, adjusting your business size up or down as you see fit, and choosing whether to reinvest your earnings or withdraw them.</p>
        </div>
        <div>
            <h1 className='text-[32px] font-medium'>Available</h1>
            <p className='max-w-[400px] leading-8'>Begin with a car you already have or purchase one to share — any car owner can tap into their entrepreneurial potential.</p>
        </div>
        <div>
            <h1 className='text-[32px] font-medium'>Adaptable</h1>
            <p className='max-w-[400px] leading-8'>Whether you prefer to dedicate a lot of time or just a little, you can earn from home or while on the move, on your terms, with the freedom to step away whenever you choose.</p>
        </div>
    </div>
  )
}

export default CreateBusiness