"use client"
import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import { Input } from '../ui/input'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DriverLicense = () => {
    const [date, setDate] = React.useState<Date>()
    return (
        <div className='max-w-[60%]'>
            <HeadingTitle title='Driver license' />
            <p className='mt-10'>Enter your info exactly as it appears on your license so Nardo can verify your eligibility
                to drive</p>


            <p className='mt-5'>Price per day</p>
            <Input placeholder='Type here...' />
            <div className='flex items-center gap-2 w-full'>
                <div className='w-full'>
                    <p className='mt-5 pb-2'>maximum travel distance for one day</p>
                    <Input placeholder='Type here...' />
                </div>
                <div className='w-full'>
                    <p className='mt-5 pb-2'>Per kilometer charge after crossing maximum distance </p>
                    <Input placeholder='Type here...' />
                </div>
            </div>
            <div className='flex items-center gap-2 w-full'>
                <div className='w-full'>
                    <p className='mt-5 pb-2'>First Name</p>
                    <Input placeholder='Type here...' />
                </div>
                <div className='w-full'>
                    <p className='mt-5 pb-2'>Last Name</p>
                    <Input placeholder='Type here...' />
                </div>
            </div>
            <div className='mt-5'>
                <p className='pb-2'>License expiration date</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[100%] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {date ? format(date, "P") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className='mt-5'>
                <p className='pb-2'>License date of birth</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[100%] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {date ? format(date, "P") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default DriverLicense