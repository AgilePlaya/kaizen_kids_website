import React from "react";
import activityLogo from "../../public/icons/activity-learning.png";
import appLogo from "../../public/icons/app-to-track-learning.png";
import cctvLogo from "../../public/icons/cctv.png";
import digitalLogo from "../../public/icons/digital-class.png";
import libraryLogo from "../../public/icons/library-activity.png";
import skillsLogo from "../../public/icons/motor-skills.png";
import musicLogo from "../../public/icons/music-dance.png";
import craftLogo from "../../public/icons/paper-crafts.png";
import vanLogo from "../../public/icons/school-van.png";
import { FeatureCard, FeatureTitle } from "./utils/FeatureUtils";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

const staffList = [
    {
        key: 0,
        name: "Activity Based Learning",
        title: "Engaging Learning Activities",
        imageSrc: activityLogo.src,
        color: "#FFCC00",
    },
    {
        key: 1,
        name: "App to Track Child's Activity",
        title: "Child Activity Tracking App",
        imageSrc: appLogo.src,
        color: "#0099FF",
    },
    {
        key: 2,
        name: "School Van",
        title: "Safe School Transportation",
        imageSrc: vanLogo.src,
        color: "#FF6600",
    },
    {
        key: 3,
        name: "Digital Classroom",
        title: "Tech-Enhanced Learning Space",
        imageSrc: digitalLogo.src,
        color: "#33CC33",
    },
    {
        key: 4,
        name: "Library",
        title: "Resourceful School Library",
        imageSrc: libraryLogo.src,
        color: "#800080",
    },
    {
        key: 5,
        name: "Motor Skills Development",
        title: "Building Motor Skills",
        imageSrc: skillsLogo.src,
        color: "#FF3366",
    },
    {
        key: 6,
        name: "Music and Dance",
        title: "Creative Arts Programs",
        imageSrc: musicLogo.src,
        color: "#FF0066",
    },
    {
        key: 7,
        name: "CCTV Coverage",
        title: "Enhanced School Security",
        imageSrc: cctvLogo.src,
        color: "#333333",
    },
    {
        key: 8,
        name: "Arts and Crafts",
        title: "Creative Craft Activities",
        imageSrc: craftLogo.src,
        color: "#FF9900",
    },
];

const firstColumn = staffList.slice(0, 3);
const secondColumn = staffList.slice(3, 6);

const mobileColumn = staffList.slice(0, 9);

const FeaturesColumn: React.FC<{ className?: string; featureEntries: typeof staffList }> = ({ className, featureEntries }) => {
    return (
        <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]", className)}>
            {/* Mobile View */}
            {featureEntries.map(({ key, title, imageSrc, name }) => (
                <div className="card" key={key}>
                    <div className="font-bold px-10 text-xl text-center">{name}</div>
                    <div className="flex items-center gap-2 mt-5">
                        <Image src={imageSrc} width={80} height={80} alt={name} className="p-2 bg-gray-300 rounded-xl h-20 w-20" />
                        <div className="font-medium pl-5">{title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Features = () => {
    return (
        <>
            <section className="py-24 bg-white">
                <div className="container px-10 max-w-[1080px] m-auto">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">Features</div>
                        </div>
                        <h2 className="section-title mt-5">What Sets Us Apart</h2>
                        <p className="section-description mt-5">
                            At Kaizen Kids, we believe in offering a holistic environment that nurtures every aspect of your child's growth. Our facilities and
                            innovative programs ensure that learning is not just educational, but also fun and engaging.
                        </p>
                    </div>

                    <div className="flex md:hidden justify-center gap-4">
                        <FeaturesColumn featureEntries={mobileColumn} />
                    </div>

                    <div className="hidden md:flex justify-center gap-4">
                        <FeaturesColumn featureEntries={firstColumn} />
                        <FeaturesColumn featureEntries={secondColumn} />
                    </div>
                </div>
                {/* <div className="container px-10 max-w-[1080px] m-auto">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">Features</div>
                        </div>
                        <h2 className="section-title mt-5">What Sets Us Apart</h2>
                        <p className="section-description mt-5">
                            At Kaizen Kids, our facilities and innovative programs ensure that learning is not just educational, but also fun and engaging.
                        </p>
                    </div>
                </div>
                <div className="flex w-full gap-20 px-10 max-w-[1080px] m-auto">
                    <div className="w-full py-[50vh] text-right">
                        <ul>
                            {staffList.map((feature) => (
                                <li key={feature.key}>
                                    <FeatureTitle id={`${feature.key}`}>{feature.name}</FeatureTitle>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sticky top-0 flex h-screen w-full items-center">
                        <div className=" w-full relative aspect-square rounded-2xl bg-gray-100">
                            <FeatureCard features={staffList} />
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
};

export default Features;
