import img from '../../assets/logo.png';
import Image from 'next/image';
import { MdArrowOutward, MdCarRental, MdMenu } from 'react-icons/md';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CiUser } from 'react-icons/ci';
import { GoGitMerge } from 'react-icons/go';
import { GrHistory } from 'react-icons/gr';
import { RiHomeLine } from 'react-icons/ri';
import { IoIosInformationCircleOutline, IoMdNotificationsOutline } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import { PiSignInLight } from 'react-icons/pi';
import { LuUser } from 'react-icons/lu';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='bg-[#F9F9F9] py-4 md:py-0'>
            <div className='container flex items-center justify-between'>
                <Link href={'/'}>
                    <div className='flex items-center gap-1 ml-10'>
                        <p className='font-bold text-[20px] md:text-[40px]'>NARDO</p>
                        <Image src={img} height={100} width={100} className=' h-5 md:h-10 w-5 md:w-10' alt='logo' />
                    </div>
                </Link>
                <div className='flex items-center gap-2'>
                    <div className='hidden md:flex items-center'>
                        <Link href={'/host-home'} className='bg-[#272121] px-5 py-2 rounded-full text-white'>Become a partner</Link>
                        <Link href={'/host-home'} className='bg-[#272121] text-white p-3 rounded-full hover:rotate-45 duration-300 cursor-pointer'><MdArrowOutward /></Link>
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
                                <Link href={'/host-home'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><MdCarRental /> Become Host</Link>
                                <Link href={'/my-profile'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><LuUser /> Profile</Link>
                                <Link href={'/login'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><PiSignInLight />Sign in</Link>
                                <Link href={'/register'} className='hover:bg-[#BCBABA] py-2 px-3 flex items-center gap-1 cursor-pointer'><PiSignInLight /> Sign Up</Link>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Link href={'/notification'} className='bg-[#BCBABA26] p-2 rounded-full'>
                        <IoMdNotificationsOutline size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
