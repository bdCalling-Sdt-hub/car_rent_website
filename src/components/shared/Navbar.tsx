import img from '../../assets/logo.png';
import Image from 'next/image';
import { MdArrowOutward, MdMenu } from 'react-icons/md';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CiUser } from 'react-icons/ci';
import { GoGitMerge } from 'react-icons/go';
import { GrHistory } from 'react-icons/gr';
import { RiHomeLine } from 'react-icons/ri';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import { PiSignInLight } from 'react-icons/pi';
import { LuUser } from 'react-icons/lu';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='bg-[#F9F9F9]'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center ml-10'>
                    <p className='font-bold text-[40px]'>NARDO</p>
                    <Image src={img} height={100} width={100} className='h-10 w-10' alt='logo' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                        <button className='bg-[#272121] px-5 py-2 rounded-full text-white'>Become a partner</button>
                        <p className='bg-[#272121] text-white p-3 rounded-full hover:rotate-45 duration-300 cursor-pointer'><MdArrowOutward /></p>
                    </div>
                    <Popover>
                        <PopoverTrigger>
                            <p className='border flex px-5 py-2 items-center gap-2 rounded-full '> <MdMenu /> <CiUser /></p>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className='font-lora  '>
                                <Link href='/my-trip' className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><GoGitMerge /> Tips</Link>
                                <Link href={'/host-history'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><GrHistory /> History</Link>
                                <Link href={'/'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><RiHomeLine /> Home</Link>
                                <Link href={'/about-us'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><IoIosInformationCircleOutline /> About Us</Link>
                                <Link href={'/Contact-us'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><FiPhone /> Contact Us</Link>
                                <Link href={'/my-profile'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><LuUser /> Profile</Link>
                                <Link href={'/login'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><PiSignInLight />Sign in</Link>
                                <Link href={'/register'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><PiSignInLight /> Sign Up</Link>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
