import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { BsWindowSidebar } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const hanldeNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 9) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300  rounded-2xl'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href="/"></Link>
                <h1 style={{color: `${textColor}`}} className='font-bold text-3xl'>KaizenKids</h1>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4 font-semibold hover:text-gray-500 ease-in duration-300'><Link href="/">Home</Link></li>
                    <li className='p-4 font-semibold hover:text-gray-500 ease-in duration-300'><Link href="/#about">About</Link></li>
                    <li className='p-4 font-semibold hover:text-gray-500 ease-in duration-300'><Link href="/#contact">Contact</Link></li>
                    <li className='p-4 font-bold hover:text-gray-500 ease-in duration-300'><Link href="/apply">Apply Now</Link></li>
                </ul>

                {/* Mobile Button */}
                <div onClick={hanldeNav} className='block sm:hidden z-20'>
                    {
                        nav 
                        ? <AiOutlineClose className='white' size={16} /> 
                        : <AiOutlineMenu style={{color: `${textColor}`}} size={16} />
                    }
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/80 text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-black/10 text-center ease-in duration-300'
                    }>
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500 ease-in duration-300'><Link href="/">Home</Link></li>
                        <li className='p-4 text-4xl hover:text-gray-500 ease-in duration-300'><Link href="/#about">About</Link></li>
                        <li className='p-4 text-4xl hover:text-gray-500 ease-in duration-300'><Link href="/#contact">Contact</Link></li>
                        <li className='p-4 text-4xl hover:text-gray-500 ease-in duration-300'><Link href="/apply">Apply Now</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar