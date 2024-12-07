import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsWindowSidebar } from "react-icons/bs";
import ImImg1 from "../../public/favicon-192x192.png";
import ImImg2 from "../../public/web-logo-text-nav-720x240.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [boxShadow, setBoxShadow] = useState("none");

    const hanldeNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 9) {
                setColor("#ffffffa0");
                setBoxShadow("rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset");
            } else {
                setColor("transparent");
                setBoxShadow("none");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        // <div className="">
        <div className="sticky left-0 top-0 w-full py-4 px-10 z-10">
            <div
                style={{ backgroundColor: `${color}`, boxShadow: `${boxShadow}` }}
                className="max-w-[1240px] m-auto flex justify-between items-center px-4 text-white rounded-lg ease-in duration-300 navbar-extra-style"
            >
                <Link href="/">
                    <Image src={ImImg2} width="240" height="80" alt="/" className="mt-[-10]" loading="eager" unoptimized />
                    {/* <h1 style={{color: `${textColor}`}} className='font-bold text-3xl'>KaizenKids</h1> */}
                </Link>

                <ul className="hidden text-black sm:flex">
                    <li className="m-1 p-2 btn btn-text">
                        <Link className="noselect" href="/">Home</Link>
                    </li>
                    <li className="m-1 p-2 btn btn-text">
                        <Link className="noselect" href="/about">About</Link>
                    </li>
                    <li className="m-1 p-2 btn btn-text">
                        <Link className="noselect" href="/contact">Contact</Link>
                    </li>
                    <li className="m-1 p-2 btn btn-primary">
                        <Link className="noselect" href="/apply">Apply Now</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={hanldeNav} className="block sm:hidden z-20">
                    {nav ? <AiOutlineClose className="white" size={24} /> : <AiOutlineMenu className="text-black" size={24} />}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-black/10 text-center ease-in duration-300"
                    }
                >
                    <ul>
                        <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                            <Link href="/apply">Apply Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Navbar;
