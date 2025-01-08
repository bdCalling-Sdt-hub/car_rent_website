"use client"
import { useGetPrivacyPolicyQuery } from '@/redux/Api/infoApi'
import React from 'react'

const PrivacyPolicyPage = () => {
  const {data : getPrivacyPloicy} =  useGetPrivacyPolicyQuery(undefined)
  return (
    <div className='container mx-auto my-10 px-2 md:px-0 '>
        {
          getPrivacyPloicy?.data?.description ? <div className="text-md leading-7" dangerouslySetInnerHTML={{
            __html : getPrivacyPloicy?.data?.description
          }} /> : "No Privacy Policy Available"
        }
    </div>
  )
}

export default PrivacyPolicyPage