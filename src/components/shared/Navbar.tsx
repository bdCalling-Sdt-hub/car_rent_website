import img from '../../assets/logo.png';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
const Navbar= () => {

    return (
        <div className='bg-[#F9F9F9]'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center ml-10'>
                    <p className='font-bold text-[40px]'>NARDO</p>
                    <Image src={img} height={100} width={100} className='h-10 w-10' alt='logo' />
                </div>
                <div className='flex items-center'>
                    <button className='bg-[#272121] px-5 py-2 rounded-full text-white'>Become a partner</button>
                    <p className='bg-[#272121] text-white p-3 rounded-full hover:rotate-45 duration-300 cursor-pointer'><MdArrowOutward /></p>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;
