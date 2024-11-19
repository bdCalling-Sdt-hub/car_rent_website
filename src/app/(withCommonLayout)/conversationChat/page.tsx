import HeadingTitle from '@/components/shared/HeadingTitle'
import React from 'react'
import img from '../../../assets/chat.png'
import img2 from '../../../assets/chat2.png'
import Image from 'next/image'
import { VscSend } from 'react-icons/vsc'
const ConversationPage = () => {
    return (
        <div className='container mx-auto py-10 px-2 md:px-0'>
            <div className=''>
                <HeadingTitle title='Conversation' />
            </div>
            <div className='bg-[#272121] mt-5 p-3  pl-4 rounded-md flex items-center gap-2'>
                <Image src={img} className='h-14 w-14' height={200} width={200} alt='chat' />
                <div className='text-white font-arial'>
                    <p>Shukumar Ghosh</p>
                    <p>+01 953 653 9885</p>
                </div>
            </div>

            <div className="h-screen flex flex-col items-center">

                <div className="w-full mt-5  bg-white  rounded-lg overflow-hidden flex flex-col justify-between p-4">
                    <div className="flex flex-col space-y-4 overflow-auto h-[600px] p-4">

                        <div className="flex items-start space-x-4">
                           
                             <Image src={img} height={100} className="w-10 h-10 rounded-full"  width={100} alt='logo'  />
                            <div>
                                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                                    I was just curious where could I find the pricing of H&M female cars.
                                </div>
                                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mt-2 max-w-xs">
                                    Anybody willing and able to cover my shift next Sunday.
                                </div>
                                <p className="text-xs text-gray-500 mt-1">9:19 PM</p>
                            </div>
                        </div>

                        <div className="flex  justify-end space-x-4">
                            <div>
                                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs ml-auto">
                                    Anybody willing and able to cover my shift next Sunday.
                                </div>
                                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 max-w-xs ml-auto">
                                    Cover my shift next Sunday.
                                </div>
                                <p className="text-xs text-gray-500 text-right mt-1">9:19 PM</p>
                            </div>
                            <Image src={img2} height={100} className="w-10 h-10 rounded-full"  width={100} alt='logo'  />
                        </div>

                        {/* <div className="flex items-start space-x-4">
                            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" />
                            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                                Anybody
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" />
                            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                                My shift next Sunday.
                            </div>
                        </div> */}

                    </div>

                    {/* Message Input */}
                    <div className="flex items-center justify-center p-4 px-2">
                        <input type="text" placeholder="Type a message here..." className="flex-grow border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring focus:ring-blue-500" />
                        <button className="ml-2 bg-blue-500 text-white px-4 py-3 rounded-md">
                        <VscSend size={21} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversationPage