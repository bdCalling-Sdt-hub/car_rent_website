"use client"
import MultiStepForm from '@/components/MultiStepForm/MultiStepForm'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const LicensePlatePage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("_token");
    if (!token) {
      router.replace("/login");
      toast.success("You don't have account please login first!!")
    }
  }, []);
  return (
    <div className='container mx-auto'>
      <MultiStepForm/>
    </div>
  )
}

export default LicensePlatePage