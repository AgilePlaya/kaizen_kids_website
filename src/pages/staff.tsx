import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureTicker from "@/components/FeatureTicker";
import TransitionPage from "@/components/transition/PageAnimation";
import Features from "@/components/Features";
import CallAction from "@/components/CallAction";
import Image from "next/image";
import Head from "next/head";
import ImImg1 from "@/../public/media/hero_media_resized.jpg";
import AnimatedBorderButton from "@/components/utils/AnimatedBorderButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";

const imageStyle1 = {
    borderRadius: "50%",
    border: "1px solid #fff",
};

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [25, -125]);

    return (
        <>
            <Head>
                <title>KaizenKids</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <Navbar />
                {/* <Hero
                    tag="Join Us Now"
                    heading="Landing Area"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum libero, quae omnis assumenda deleniti. Accusamus natus temporibus ratione perspiciatis quam harum beatae. Similique dolores delectus, quidem saepe magni dolor?"
                /> */}
                <section className="pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#e8a03b,#fef5ea_66%)]">
                    <div className="container p-10 max-w-[1240px] m-auto pb-20 ">
                        <div>
                            <div className="md:flex items-center">
                                <div className="md:max-w-[420px] md:min-w-[540px] md:pr-10">
                                    <div className="flex">
                                        <div className="tag pointer-events-none">Meet Our Dedicated Staff</div>
                                    </div>
                                    {/* <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div> */}
                                    <h1 className="text-4xl md:text-[60px] md:leading-[80px] font-extrabold bg-gradient-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none mt-5">
                                    Our Educators
                                    </h1>
                                    <p className="text-base md:text-lg text-[#1d1004] mt-6 pointer-events-none">
                                        At KaizenKids, our staff is the heart and soul of our community. Each member of our team brings a wealth of experience,
                                        a nurturing spirit, and a commitment to fostering a love of learning in every child.
                                    </p>
                                    <div className="flex gap-2 items-center mt-[30px]">
                                        <AnimatedBorderButton text="Apply" link="/apply" />
                                        <Link className="btn btn-text" href="/" scroll={false}>
                                            <FaArrowLeft className="mr-2 h-4 w-4" />
                                            <span>Back home</span>
                                        </Link>
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
                <FeatureTicker />
                <Features />
                <CallAction />
                {/* <svg preserveAspectRatio="xMidYMid slice" className="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="20 20 60 60">
                        <path
                            className="in-top"
                            fill="#9b5de5"
                            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
                        />
                        <path
                            className="out-top"
                            fill="#f15bb5"
                            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
                        />
                        <path
                            className="in-bottom"
                            fill="#00bbf9"
                            d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
                        />
                        <path
                            className="out-bottom"
                            fill="#00f5d4"
                            d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
                        />
                    </svg> */}

                {/* <div className="flex items-center justify-center h-screen max-w-[1240px] m-auto ">
                        <div className="hidden lg:flex rounded-xl bg-[#fff5f1]">
                            <div className="row-primary w-full">
                                <div className="w-full flex flex-col px-2 pb-6 min-h-80 ">
                                    <h1 className="w-full text-left text-black text-3xl font-bold py-8">
                                        Preparing your kids for a successful future
                                    </h1>
                                </div>
                                <div className="w-full flex flex-col px-2 min-h-80">
                                    <Image
                                        src={ImImg1}
                                        alt="/"
                                        width="450"
                                        height="600"
                                        loading="lazy"
                                        placeholder="blur"
                                        // style={imageStyle1}
                                        className="p-4 w-full"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA8ADwAAD/4QCCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAABJADAAIAAAAUAAAAUJAEAAIAAAAUAAAAZJKRAAIAAAADMDYAAJKSAAIAAAADMDYAAAAAAAAyMDI0OjEyOjAyIDEyOjAyOjA4ADIwMjQ6MTI6MDIgMTI6MDI6MDgAAAD/4QGwaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj48ZXhpZjpEYXRlVGltZU9yaWdpbmFsPjIwMjQtMTItMDJUMTI6MDI6MDguMDYwPC9leGlmOkRhdGVUaW1lT3JpZ2luYWw+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAoACgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AO98Df8ABXzRvh9omm+XpHjWGDx94l0zVfij8ZPC1npd5pmh33hHUbaDxlJN/ZeleIPCJsb/AMK+Hru407Q9Q0S1uo73xFNr1nrAt9VtHuvZJv8Ag4p+FlhLLYr8ObjVVspHtF1S/wDEXiSyvtSFsxhF/e2dj8KNRsrS7vAn2i5trPUL+1gmkeK3vLqJEnfyXUoIJNNu4XhieKRWSSJ40aN0KYKuhBVlIJBUgggnI5NeCzeFPC3my/8AFNaB/rH/AOYPp394/wDTtX8fYLxcx+ZRnKtTz2nKnDD0YyocTcknRw6nRwtFylk9RqlhsL7LD0oRsuWkm7rljDwMF4mLD0fYUuGModOFfE4lqu5VW8RjqlPEYuqpxpUqrdfEQlVcatStyynJwcalSvUrf//Z"
                                        unoptimized
                                    ></Image>
                                    <svg viewBox="0 0 100 100" height="0" width="0">
                                        <defs>
                                            <clipPath id="blob1">
                                                <path
                                                    d="M46.7,-80.2C60.4,-72.9,71.5,-60.3,77.9,-46C84.3,-31.8,86.1,-15.9,86,0C86,15.9,84.2,31.7,77.6,45.7C71.1,59.6,59.7,71.7,46,79.9C32.2,88,16.1,92.3,-0.2,92.6C-16.5,92.9,-32.9,89.2,-46.3,80.8C-59.6,72.4,-69.8,59.3,-77.6,45.1C-85.3,30.8,-90.6,15.4,-91.5,-0.5C-92.3,-16.4,-88.8,-32.8,-80.5,-46.2C-72.3,-59.5,-59.2,-69.7,-45,-76.8C-30.8,-83.8,-15.4,-87.6,0.5,-88.5C16.4,-89.5,32.9,-87.5,46.7,-80.2Z"
                                                    transform="translate(100 100)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> */}
                <Footer />
            </TransitionPage>
        </>
    );
}
