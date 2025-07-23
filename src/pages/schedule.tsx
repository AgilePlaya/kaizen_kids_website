import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar2";
import Hero from "@/components/Hero";
import TransitionPage from "@/components/transition/PageAnimation";
import FeatureTicker from "@/components/FeatureTicker";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import Image from "next/image";
import Head from "next/head";
import ImImg1 from "@/../public/media/playin_blocks_web.jpg";
import ImImg2 from "@/../public/android-chrome-512x512.png";
import { Tab, Tabs, Card, CardBody, Button, Image as Image2 } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    let tabs = [
        {
            id: "arrival",
            label: "Arrival",
            content:
                "A warm welcome and greeting of each other is the first step of the day. It is a time to settle in, get comfortable, and prepare for the day ahead.",
            img: ImImg2.src,
        },
        {
            id: "assembly",
            label: "Assembly",
            content: "School gathering to start off the day together. The time to share news, celebrate achievements, and set the tone for the day.",
            img: ImImg2.src,
        },
        {
            id: "circle",
            label: "Circle Time",
            content: "A time for children to come together to share thoughts, ideas, and experiences. It is a time for listening, speaking, and learning.",
            img: ImImg2.src,
        },
        {
            id: "world",
            label: "My World",
            content: "Learn about the world around us. Explore different colours, shapes, and sizes. Learn about the environment and the world we live in.",
            img: ImImg2.src,
        },
        {
            id: "lunch",
            label: "Lunch Break",
            content: "A healthy and nutritious meal is essential for a child's growth and development. It is a time to relax, eat, and recharge.",
            img: ImImg2.src,
        },
        {
            id: "literacy",
            label: "Literacy",
            content: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
            img: ImImg2.src,
        },
        {
            id: "numeracy",
            label: "Numeracy",
            content: "Introduction to numbers, shapes, and patterns. Starting steps towards building logical skills and pre-math concepts.",
            img: ImImg2.src,
        },
        {
            id: "creativity",
            label: "Creative & Lifeskills",
            content: "Independent creative thinking and self-learning. Developing life, creative and social skills through play and activities.",
            img: ImImg2.src,
        },
        {
            id: "play",
            label: "Play Time",
            content:
                "Playing, exploring, and learning. A time to engage in activities that are fun, educational, and stimulating which help build fine motor skills.",
            img: ImImg2.src,
        },
        {
            id: "windup",
            label: "Wind Up",
            content: "Time to pack up and prepare to go home after a fun day at school. A time to say goodbye and look forward to the next day.",
            img: ImImg2.src,
        },
    ];

    return (
        <>
            <Head>
                <title>KaizenKids : Schedule</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <SiteNavbar />

                <section className="pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#92e3ff,#fef5ea_66%)]">
                    <div className="container p-10 max-w-[1240px] m-auto pb-20 ">
                        <div>
                            <div className="md:flex items-center">
                                <div className="md:max-w-[420px] md:min-w-[540px] md:pr-10">
                                    <h1 className="text-4xl md:text-[60px] md:leading-[80px] font-extrabold bg-linear-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none mt-5">
                                        Daily Schedule
                                    </h1>
                                    <p className="text-base md:text-lg text-[#1d1004] mt-6 pointer-events-none">
                                        A good start to the day is crucial as it sets the tone for the rest of the day. At KaizenKids, we ensure that each day
                                        begins with a warm welcome and engaging activities that prepare children for the exciting learning experiences ahead.
                                        Our classes are designed to stimulate curiosity, foster creativity, and promote a love for learning in a fun and
                                        nurturing environment.
                                    </p>
                                    <div className="flex gap-2 items-center mt-[30px]">
                                        <Button as={Link} color="primary" variant="shadow" href="/apply">
                                            Apply
                                        </Button>
                                        <Button as={Link} color="primary" variant="light" href="/program" endContent={<FaArrowRight />}>
                                            Learn More
                                        </Button>
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
                <section className="bg-white py-10 px-6 md:py-8 md:px-8">
                    <div className="container max-w-[1240px] m-auto flex justify-center items-center">
                        <div className="hidden md:flex md:flex-row gap-6">
                            <Tabs
                                aria-label="Dynamic tabs"
                                color="primary"
                                variant="bordered"
                                items={tabs}
                                className="hidden md:flex m-auto transition-all max-w-[320px] sm:max-w-[480px] md:mr-0"
                                placement="start"
                            >
                                {(item) => (
                                    <Tab key={item.id} title={item.label}>
                                        <Card
                                            isBlurred
                                            className="m-auto border-none bg-background/60 max-w-[320px] sm:max-w-[600px] md:mr-0 transition-all "
                                            shadow="sm"
                                        >
                                            <CardBody>
                                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center transition-all">
                                                    <div className="relative col-span-4 sm:col-span-3 md:col-span-5 transition-all">
                                                        <Image2
                                                            alt="Schedule image"
                                                            className=" bg-gray-200 object-contain"
                                                            height={200}
                                                            shadow="md"
                                                            src={item.img}
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col col-span-4 sm:col-span-3 md:col-span-7 transition-all">
                                                        <div className="flex flex-row gap-1">
                                                            <h2></h2>
                                                            <p className="text-black">{item.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Tab>
                                )}
                            </Tabs>
                        </div>

                        <div className="flex flex-col md:hidden gap-6">
                            <Tabs
                                aria-label="Dynamic tabs"
                                items={tabs}
                                color="primary"
                                variant="bordered"
                                className="m-auto transition-all max-w-[320px] sm:max-w-[560px] sm:my-8 justify-center items-center"
                                placement="top"
                            >
                                {(item) => (
                                    <Tab key={item.id} title={item.label}>
                                        <Card
                                            isBlurred
                                            className="m-auto border-none bg-background/60 max-w-[320px] sm:max-w-[600px] md:mr-0 transition-all "
                                            shadow="sm"
                                        >
                                            <CardBody className="p-4 sm:6 md:4">
                                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-8 sm:gap-4 md:gap-4 items-center justify-center transition-all">
                                                    <div className="hidden sm:flex sm:col-span-6 items-center">
                                                        <h2 className="text-3xl md:text-3xl md:px-2 lg:text-4xl lg:px-4 transition-all font-black bg-linear-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none">
                                                            {item.label}
                                                        </h2>
                                                    </div>
                                                    <div className="relative col-span-4 sm:col-span-3 md:col-span-5 transition-all">
                                                        <Image2
                                                            alt="Schedule image"
                                                            className=" bg-gray-200 object-contain"
                                                            height={200}
                                                            shadow="md"
                                                            src={item.img}
                                                            width="100%"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col col-span-4 sm:col-span-3 md:col-span-7 sm:hidden transition-all">
                                                        <h2 className="text-2xl md:text-3xl md:px-2 lg:text-4xl lg:px-4 transition-all font-black bg-linear-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none">
                                                            {item.label}
                                                        </h2>
                                                    </div>
                                                    <div className="flex flex-col col-span-4 sm:col-span-3 md:col-span-7 transition-all">
                                                        <p className=" text-black pb-8">{item.content}</p>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Tab>
                                )}
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* Call to action section */}
                <section className="bg-linear-to-b from-white to-[#a8e9ff] py-24">
                    <div className="container px-10 max-w-[1080px] m-auto">
                        <div className="section-heading">
                            <h2 className="section-title">Apply to KaizenKids today</h2>
                            <p className="section-description mt-5">
                                We nurture your child's curiosity and creativity. Our dedicated educators and innovative curriculum provide a strong foundation
                                for lifelong learning. Join our vibrant community and give your child the best start. Apply today and see them thrive!
                            </p>
                        </div>
                        <div className="flex gap-2 mt-10 justify-center text-xl">
                            <Button as={Link} color="primary" variant="shadow" href="/apply">
                                Apply
                            </Button>
                            <Button as={Link} color="primary" variant="light" href="/program" endContent={<FaArrowRight />}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </section>
                <Footer />
            </TransitionPage>
        </>
    );
}
