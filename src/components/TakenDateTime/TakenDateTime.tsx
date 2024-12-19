"use client"
import { CiLocationOn } from 'react-icons/ci'
import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { IoIosArrowDown } from 'react-icons/io'
import { Input } from '../ui/input'
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import { RiSearch2Line } from 'react-icons/ri'
import Link from 'next/link'
const TakenDateTime = () => {
    const [date, setDate] = React.useState<Date>()
    const onChange: TimePickerProps['onChange'] = (time, timeString) => {
        console.log(time, timeString);
    };

    return (
        <div className='py-10 hidden md:block container mx-auto font-lora'>
            <div className='flex items-center justify-between bg-[#EBEBEB]  rounded-full px-8 py-2 max-w-4xl mx-auto'>
                <div>
                    <p className='flex items-center gap-1'><CiLocationOn /> Location</p>
                    <Input className='bg-[#EBEBEB] border-none' placeholder='City , address' />
                </div>
                <div className='flex flex-col'>
                    Pick up date
                    <div className='flex gap-0'>
                        <Popover >
                            <PopoverTrigger asChild className='px-0 hover:bg-[#EBEBEB]'>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[100px] justify-start text-left font-normal text-muted-foreground bg-[#EBEBEB] border-none"
                                    )}
                                >
                                    {/* <CalendarIcon /> */}
                                    {date ? format(date, "P") : <span className='flex items-center gap-2'>Pick a date</span>}
                                    {<IoIosArrowDown />}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">

                                <div className="rounded-md border">
                                    <Calendar mode="single" selected={date} onSelect={setDate} />
                                </div>
                            </PopoverContent>
                        </Popover>
                        <TimePicker className='bg-[#EBEBEB] hover:bg-[#EBEBEB] border-none ' use12Hours format="h:mm a" onChange={onChange} />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <p>Return date</p>
                        <div className='flex gap-0'>
                            <Popover >
                                <PopoverTrigger asChild className='px-0 hover:bg-[#EBEBEB]'>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[100px] justify-start text-left font-normal text-muted-foreground bg-[#EBEBEB] border-none"
                                        )}
                                    >
                                        {/* <CalendarIcon /> */}
                                        {date ? format(date, "P") : <span className='flex items-center gap-2'>Pick a date</span>}
                                        {<IoIosArrowDown />}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">

                                    <div className="rounded-md border">
                                        <Calendar mode="single" selected={date} onSelect={setDate} />
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <TimePicker className='bg-[#EBEBEB] hover:bg-[#EBEBEB] border-none ' use12Hours format="h:mm a" onChange={onChange} />
                        </div>
                    </div>
                </div>
                <Link href={'/all-cars'} className='bg-[#0CFEE8] p-2 rounded-full cursor-pointer'>
                    <RiSearch2Line size={22} />
                </Link>
            </div>


        </div>
    )
}

export default TakenDateTime