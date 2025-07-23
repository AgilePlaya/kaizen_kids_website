import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SiteNavbar from "@/components/Navbar2";
import Head from "next/head";
import React, { useState, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import TransitionPage from "@/components/transition/PageAnimation";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import FeatureTicker from "@/components/FeatureTicker";
import ImImg1 from "@/../public/media/deer_web_resized.jpg";

import { Accordion, AccordionItem, Button} from "@heroui/react";
import Image from "next/image";
import ImImg2 from "@/../public/activity_centre/cartoon_owl.png";
import ImImg3 from "@/../public/activity_centre/owl_abacus.png";
import ImImg4 from "@/../public/activity_centre/owl_taekwondo.png";
import ImImg5 from "@/../public/activity_centre/owl_guitar.png";
import ImImg6 from "@/../public/activity_centre/owl_piano.png";
import ImImg7 from "@/../public/activity_centre/owl_dance.png";
import ImImg8 from "@/../public/activity_centre/owl_arts_crafts.png";
import ImImg9 from "@/../public/activity_centre/owl_yoga.png";
import ImImg10 from "@/../public/activity_centre/owl_zumba.png";

import { TbAbacus, TbKarate, TbPiano } from "react-icons/tb";
import { FaGuitar, FaPaintBrush } from "react-icons/fa";
import { PiDiscoBallFill } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
import { IoFitness } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const activity_centre = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [25, -125]);

    const images = [ImImg2, ImImg3, ImImg4, ImImg5, ImImg6, ImImg7, ImImg8, ImImg9, ImImg10];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleAccordionChange = (index: any) => {
        // console.log("Selected index: ", index);
        // console.log("Selected index: ", JSON.stringify(index));
        // console.log("Selected index: ", index["anchorKey"]);
        setSelectedIndex(index["anchorKey"]);
    };

    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-large text-secondary",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-large",
        content: "text-medium px-2",
        startContent: "text-3xl text-danger",
        subtitle: "text-xs text-black/35",
    };
    const defaultContent = "Press to open";

    return (
        <>
            <Head>
                <title>KaizenKids: Activity Center</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <SiteNavbar />
                {/* <Hero
                    heading="KaizenKids: Activity Centre"
                    message="After hours at KaizenKids Activity Centre, explore a variety of engaging activities designed to keep children entertained and learning even after school hours."
                    image={ImImg1}
                /> */}

                <section className="pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#ffa69e,#fef5ea_66%)]">
                    <div className="container p-10 max-w-[1240px] m-auto pb-20 ">
                        <div>
                            <div className="md:flex items-center">
                                <div className="md:max-w-[420px] md:min-w-[540px] md:pr-10">
                                    <h1 className="text-4xl md:text-[60px] md:leading-[80px] font-extrabold bg-linear-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none mt-5">
                                        KaizenKids: Activity Centre
                                    </h1>
                                    <p className="text-base md:text-lg text-[#1d1004] mt-6 pointer-events-none">
                                        After hours at KaizenKids, the Activity Centre opens up the doors for people of all ages to learn and participate in a variety of engaging activities and skills.
                                    </p>
                                    <div className="flex gap-2 items-center mt-[30px]">
                                        Call us at <FiPhoneCall className="text-xl text-secondary" />{" "}
                                        <Link href="tel:+918877668696" className="text-xl text-secondary underline underline-offset-4">
                                            {" "}
                                            +91 8877668696
                                        </Link>{" "}
                                    </div>
                                </div>
                                <div className="flex mt-16 md:mt-0 md:max-h-[648px] md:flex-1 justify-center md:justify-end m-auto relative">
                                    <div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FeatureTicker />
                {/* <ActivityTicker /> */}
                {/* <Features /> */}

                {/* List of all available Activities */}
                <section className="bg-white p-8 transition-all">
                    <div className="container px-10 mt-10 max-w-[1080px] m-auto">
                        <div className="section-heading">
                            <h2 className="section-title">Join KaizenKids: Activity Centre</h2>
                        </div>
                        <div className="flex flex-col gap-2 mt-10 md:flex-row max-w-[1080px] m-auto transition-all">
                            <div className="flex-1 p-4 m-2 md:p-4 md:max-w-[40%] transition-all">
                                <div className="flex items-center justify-center">
                                    <Accordion
                                        className="p-2 flex flex-col gap-1 m-auto min-w-[300px] max-w-[400px] bg-gray-50/50 rounded-lg shadow-lg"
                                        itemClasses={itemClasses}
                                        variant="bordered"
                                        onSelectionChange={handleAccordionChange}
                                        motionProps={{
                                            variants: {
                                                enter: {
                                                    y: 0,
                                                    opacity: 1,
                                                    height: "auto",
                                                    overflowY: "unset",
                                                    transition: {
                                                        height: {
                                                            type: "spring",
                                                            stiffness: 500,
                                                            damping: 30,
                                                            duration: 1,
                                                        },
                                                        opacity: {
                                                            easings: "ease",
                                                            duration: 1,
                                                        },
                                                    },
                                                },
                                                exit: {
                                                    y: -10,
                                                    opacity: 0,
                                                    height: 0,
                                                    overflowY: "hidden",
                                                    transition: {
                                                        height: {
                                                            easings: "ease",
                                                            duration: 0.25,
                                                        },
                                                        opacity: {
                                                            easings: "ease",
                                                            duration: 0.3,
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <AccordionItem key="1" aria-label="Abacus" title="Abacus" startContent={<TbAbacus />} subtitle={defaultContent}>
                                            Our Abacus classes help children develop their mental arithmetic skills, enhancing their concentration and memory.
                                            Join us to make learning math fun and engaging.
                                        </AccordionItem>
                                        <AccordionItem key="2" title="Taekwondo" aria-label="Taekwondo" startContent={<TbKarate />} subtitle={defaultContent}>
                                            Our Taekwondo classes are designed to teach discipline, respect, and self-defense skills. Join us to improve your
                                            physical fitness and mental strength.
                                        </AccordionItem>
                                        <AccordionItem key="3" aria-label="Guitar" title="Guitar" startContent={<FaGuitar />} subtitle={defaultContent}>
                                            Our Guitar classes cater to all skill levels, from beginners to advanced players. Learn to play your favorite songs
                                            and develop your musical talents with our experienced instructor.
                                        </AccordionItem>
                                        <AccordionItem
                                            key="4"
                                            aria-label="Synthesizer"
                                            title="Synthesizer"
                                            startContent={<TbPiano />}
                                            subtitle={defaultContent}
                                        >
                                            Our Synthesizer classes offer personalized instruction for all ages and skill levels. Develop your musical abilities
                                            and enjoy the art of playing the synthesizer with our expert guidance.
                                        </AccordionItem>
                                        <AccordionItem key="5" aria-label="Dance" title="Dance" startContent={<PiDiscoBallFill />} subtitle={defaultContent}>
                                            Our Dance classes are designed to inspire creativity and self-expression through movement. Join us to learn various
                                            dance styles and improve your coordination and rhythm.
                                        </AccordionItem>
                                        <AccordionItem
                                            key="6"
                                            aria-label="Arts and Crafts"
                                            title="Arts and Crafts"
                                            startContent={<FaPaintBrush />}
                                            subtitle={defaultContent}
                                        >
                                            Our Arts and Crafts classes encourage creativity and imagination through hands-on projects. Join us to explore
                                            various artistic techniques and create unique masterpieces.
                                        </AccordionItem>
                                        <AccordionItem key="7" aria-label="Yoga" title="Yoga" startContent={<GrYoga />} subtitle={defaultContent}>
                                            Our Yoga classes promote physical and mental well-being through gentle exercises and mindfulness practices. Join us
                                            to enhance your flexibility, balance, and relaxation.
                                        </AccordionItem>
                                        <AccordionItem key="8" aria-label="Zumba" title="Zumba" startContent={<IoFitness />} subtitle={defaultContent}>
                                            Our Zumba classes combine fun and fitness through high-energy dance routines. Join us to improve your cardiovascular
                                            health and enjoy a lively workout.
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="hidden md:flex p-4 m-2 max-w-[60%] transition-all">
                                <Image
                                    src={images[selectedIndex]}
                                    alt={`Image ${selectedIndex + 1}`}
                                    className=" object-cover w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to action section */}
                <section className="bg-linear-to-b from-white to-[#ffa69e] py-24">
                    <div className="container px-10 max-w-[1080px] m-auto">
                        <div className="section-heading">
                            <h2 className="section-title">Apply to KaizenKids today</h2>
                            <p className="section-description mt-5">
                                We nurture your child's curiosity and creativity. Our dedicated educators and innovative curriculum provide a strong foundation
                                for lifelong learning. Join our vibrant community and give your child the best start. Apply today and see them thrive!
                            </p>
                        </div>
                        <div className="flex gap-2 mt-10 justify-center text-xl">
                            Call us at <FiPhoneCall className="text-xl text-secondary" />{" "}
                            <Link href="tel:+918877668696" className="text-xl text-secondary underline underline-offset-4">
                                {" "}
                                +91 8877668696
                            </Link>{" "}
                        </div>
                    </div>
                </section>
                <Footer />
            </TransitionPage>
        </>
    );
};

export default activity_centre;
