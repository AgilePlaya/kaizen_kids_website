"use client";

import React, { useRef } from "react";
import Image from "next/image";
import ImImg1 from "@/../public/media/hero_media_resized.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ heading, message }: { [key: string]: any }) => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [25, -125]);

    return (
        // <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        //     {/* Overlay */}
        //     <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        //     <div className="p-10 pr-20 max-w-[1240px] text-white z-[2] mt-[-5rem]">
        //         <h2 className="text-5xl font-bold">{heading}</h2>
        //         <p className="py-10 text-xl">{message}</p>
        //         <button className="px-8 py-2 border">Book</button>
        //     </div>
        // </div>
        <>
            <section className="pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#e8a03b,#fef5ea_66%)]">
                <div className="container p-10 max-w-[1240px] m-auto pb-20 ">
                    <div>
                        <div className="md:flex items-center">
                            <div className="md:max-w-[420px] md:min-w-[540px] md:pr-10">
                                <div className="flex">
                                    <div className="tag pointer-events-none">Join Us Now</div>
                                </div>
                                {/* <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div> */}
                                <h1 className="text-4xl md:text-[60px] md:leading-[80px] font-extrabold bg-gradient-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none mt-5">
                                    {heading}
                                </h1>
                                <p className="text-base md:text-lg text-[#1d1004] mt-6 pointer-events-none">{message}</p>
                                <div className="flex gap-2 items-center mt-[30px]">
                                    <button className="btn btn-primary">Apply Now</button>
                                    <button className="btn btn-text">
                                        <span>Learn More</span>
                                        <FaArrowRight className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex mt-16 md:mt-0 md:max-h-[648px] md:flex-1 justify-center md:justify-end m-auto relative">
                                <motion.div
                                    style={{
                                        translateY: translateY,
                                    }}
                                    // animate={{
                                    //     translateY: [-10, 10],
                                    //     translateX: [-5, 5],
                                    // }}
                                    // transition={{
                                    //     repeat: Infinity,
                                    //     repeatType: "mirror",
                                    //     ease: "easeInOut",
                                    //     duration: 10,
                                    // }}
                                >
                                    <Image
                                        src={ImImg1}
                                        alt="Students of Kaizen Kids playing with some rings"
                                        width="450"
                                        height="600"
                                        loading="lazy"
                                        placeholder="blur"
                                        // style={imageStyle1}
                                        className="rounded-2xl object-cover md:h-full md:max-h-[600px] md:w-auto lg:left"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA8ADwAAD/4QCCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAABJADAAIAAAAUAAAAUJAEAAIAAAAUAAAAZJKRAAIAAAADMDYAAJKSAAIAAAADMDYAAAAAAAAyMDI0OjEyOjAyIDEyOjAyOjA4ADIwMjQ6MTI6MDIgMTI6MDI6MDgAAAD/4QGwaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj48ZXhpZjpEYXRlVGltZU9yaWdpbmFsPjIwMjQtMTItMDJUMTI6MDI6MDguMDYwPC9leGlmOkRhdGVUaW1lT3JpZ2luYWw+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAoACgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AO98Df8ABXzRvh9omm+XpHjWGDx94l0zVfij8ZPC1npd5pmh33hHUbaDxlJN/ZeleIPCJsb/AMK+Hru407Q9Q0S1uo73xFNr1nrAt9VtHuvZJv8Ag4p+FlhLLYr8ObjVVspHtF1S/wDEXiSyvtSFsxhF/e2dj8KNRsrS7vAn2i5trPUL+1gmkeK3vLqJEnfyXUoIJNNu4XhieKRWSSJ40aN0KYKuhBVlIJBUgggnI5NeCzeFPC3my/8AFNaB/rH/AOYPp394/wDTtX8fYLxcx+ZRnKtTz2nKnDD0YyocTcknRw6nRwtFylk9RqlhsL7LD0oRsuWkm7rljDwMF4mLD0fYUuGModOFfE4lqu5VW8RjqlPEYuqpxpUqrdfEQlVcatStyynJwcalSvUrf//Z"
                                        unoptimized
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
