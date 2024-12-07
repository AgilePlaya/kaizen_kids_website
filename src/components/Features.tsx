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
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const featureList = [
    {
        text: "Engaging little minds through hands-on fun and exploration",
        imageSrc: activityLogo.src,
        name: "Activity Based Learning",
    },
    {
        text: "Stay connected to your child's daily adventures with our handy app.",
        imageSrc: appLogo.src,
        name: "App to Track Child's Activity",
    },
    {
        text: "Safe and reliable transport for your little ones’ daily journey.",
        imageSrc: vanLogo.src,
        name: "School Van",
    },
    {
        text: "Bridging the future with interactive and tech-savvy learning experiences.",
        imageSrc: digitalLogo.src,
        name: "Digital Classroom",
    },
    {
        text: "Sparking curiosity and imagination with a treasure trove of books.",
        imageSrc: libraryLogo.src,
        name: "Library",
    },
    {
        text: "Boosting coordination and confidence through playful movement.",
        imageSrc: skillsLogo.src,
        name: "Motor Skills Development",
    },
    {
        text: "Grooving to the rhythm and melodies for joyful expression.",
        imageSrc: musicLogo.src,
        name: "Music and Dance",
    },
    {
        text: "Ensuring safety and peace of mind with 24/7 CCTV monitoring.",
        imageSrc: cctvLogo.src,
        name: "CCTV Coverage",
    },
    {
        text: "Unleashing creativity with colors, shapes, and craft projects.",
        imageSrc: craftLogo.src,
        name: "Arts and Crafts",
    },
];

const firstColumn = featureList.slice(0, 3);
const secondColumn = featureList.slice(3, 6);
const thirdColumn = featureList.slice(6, 9);

const FeaturesColumn: React.FC<{ className?: string; featureEntries: typeof featureList }> = ({ className, featureEntries }) => {
    return (
        <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]", className)}>
            {/* Mobile View */}
            {featureEntries.map(({ text, imageSrc, name }) => (
                <div className="card">
                    <div className="font-bold px-10 text-xl text-center">{name}</div>
                    <div className="flex items-center gap-2 mt-5">
                        <Image src={imageSrc} width={80} height={80} alt={name} className="p-2 bg-gray-300 rounded-xl h-20 w-20" />
                        <div className="font-medium pl-5">{text}</div>
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
                    <div className="flex justify-center gap-4">
                        <FeaturesColumn featureEntries={firstColumn} />
                        <FeaturesColumn featureEntries={secondColumn} className="hidden md:flex" />
                        <FeaturesColumn featureEntries={thirdColumn} className="hidden lg:flex" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
