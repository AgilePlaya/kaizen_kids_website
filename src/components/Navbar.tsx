import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ImImg1 from "../../public/favicon-192x192.png";
import ImImg2 from "../../public/web-logo-text-nav-720x240.png";
import { motion } from "framer-motion";
import AnimatedBorderButton from "./utils/AnimatedBorderButton";
import AnimatedButton from "./utils/AnimatedButton";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [boxShadow, setBoxShadow] = useState("none");

    const hanldeNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 15) {
                setColor("#efefefa0");
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
        <>
            <div className="left-0 top-0 w-full py-0 px-0 bg-orange-200 overflow-hidden ">
                <div className="relative w-[100vw] max-w-full text-sm overflow-hidden text-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="text-center"
                        // animate={{
                        //     translateX: [0, "-50%"],
                        // }}
                        // transition={{
                        //     duration: 5,
                        //     repeat: Infinity,
                        //     repeatType: "loop",
                        //     ease: "linear",
                        // }}
                    >
                        Admissions Open {" \u2022 "} Admissions open till Class 2 {" \u2022 "} Contact Us for more info on class timings and batches
                    </motion.div>
                </div>
            </div>
            <div className="sticky left-0 top-0 w-full py-4 px-10 z-10">
                <div
                    style={{ backgroundColor: `${color}`, boxShadow: `${boxShadow}` }}
                    className="max-w-[1240px] m-auto flex justify-between items-center px-4 text-white rounded-lg ease-in duration-300 navbar-extra-style"
                >
                    <Link href="/" scroll={false}>
                        <Image src={ImImg2} width="240" height="80" alt="/" className="mt-[-10px]" loading="eager" unoptimized />
                        {/* <h1 style={{color: `${textColor}`}} className='font-bold text-3xl'>KaizenKids</h1> */}
                    </Link>

                    <ul className="hidden text-black sm:flex">
                        <li className="m-[2px]">
                            <AnimatedButton text="Home" link="/" />
                        </li>
                        <li className="m-[2px]">
                            <AnimatedButton text="Program" link="/program#top" />
                        </li>
                        <li className="m-[2px]">
                            <AnimatedButton text="Contact" link="/contact" />
                        </li>
                        <li className="m-[2px]">
                            <AnimatedBorderButton text="Apply" link="/apply" />
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
                                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#110801] text-center ease-in duration-300 scale-125 overflow-hidden"
                                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-black/0 text-center ease-in duration-300 scale-125"
                        }
                    >
                        <ul>
                            <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                                <Link href="/" scroll={false}>Home</Link>
                            </li>
                            <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                                <Link href="/program" scroll={false}>Program</Link>
                            </li>
                            <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                                <Link href="/contact" scroll={false}>Contact</Link>
                            </li>
                            <li className="p-4 text-4xl hover:text-gray-500 ease-in duration-300">
                                <Link href="/apply" scroll={false}>Apply Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        // </div>
    );
};

export default Navbar;
