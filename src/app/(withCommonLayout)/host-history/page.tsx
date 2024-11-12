import React from 'react'
import img from '../../../assets/car2.png'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'
import Link from 'next/link'
import { IoAdd } from 'react-icons/io5'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import HostCars from '@/components/HostCars/HostCars'
import HostOrder from '@/components/HostOrder/HostOrder'
const HostHistoryPage = () => {
    return (
        <div className='my-10 container mx-auto'>
            <div className='flex items-center  justify-between '>
                <div className='flex items-center gap-5'>
                    <Image className='rounded-full h-20 w-20 object-cover' src={img} height={200} width={200} alt='img' />
                    <div className='font-lora space-y-1'>
                        <p className='font-medium text-[24px]'>MD. Hasan</p>
                        <p className='flex items-center gap-1'><CiStar /> 4.5 Total Trip : 204</p>
                        <p>Total Car : 10</p>
                    </div>
                </div>
                <div>
                    <Link className='flex items-center bg-black text-white px-4 py-2 rounded-sm gap-1 ' href={'/'} >Add a new car <IoAdd /> </Link>
                </div>
            </div>

            <div className='mt-10'>
                <Tabs defaultValue="car" className="w-full">
                    <TabsList className="grid grid-cols-4 w-[70%] gap-5 mb-10">
                        <TabsTrigger value="car" className='bg-white data-[state=active]:bg-[#528AAE]'>Car</TabsTrigger>
                        <TabsTrigger value="order" className='bg-white data-[state=active]:bg-[#528AAE]'>Order</TabsTrigger>
                        <TabsTrigger value="history" className='bg-white data-[state=active]:bg-[#528AAE]'>History</TabsTrigger>
                        <TabsTrigger value="earning" className='bg-white data-[state=active]:bg-[#528AAE]'>Earning</TabsTrigger>
                    </TabsList>
                    <TabsContent value="car">

                        <HostCars/>

                    </TabsContent>
                    <TabsContent value="order">
                        <HostOrder/>
                    </TabsContent>
                    <TabsContent value="history">
                        <div>
                            <h1>history</h1>
                        </div>
                    </TabsContent>
                    <TabsContent value="earning">
                        <div>
                            <h1>earning</h1>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>


        </div>
    )
}

export default HostHistoryPage