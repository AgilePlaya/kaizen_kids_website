import imgSuchi from "../../public/staff/KK_Suchi.jpg";
import imgKavita from "../../public/staff/KK_Kavita.jpg";
import imgMaya from "../../public/staff/KK_Maya.jpg";
import imgKajal from "../../public/staff/KK_Kajal.jpg";
import imgSarita from "../../public/staff/KK_Sarita.jpg";
import imgPinky from "../../public/staff/KK_Pinky.jpg";
import imgVikash from "../../public/staff/KK_Vikash.jpg";

import imgMale from "../../public/staff/placeholder_male.png";
import imgFemale from "../../public/staff/placeholder_female.png";
import imgPlaceM from "../../public/profile_male.png";
import imgPlaceF from "../../public/profile_female.png";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const staffList = [
    {
        key: 0,
        name: "Suchismita Mukherjee",
        title: "Principal",
        imageSrc: imgSuchi.src,
        placeholder: imgPlaceF.src,
        color: "#FFCC00",
    },
    {
        key: 1,
        name: "Kavita Kumari",
        title: "",
        imageSrc: imgKavita.src,
        placeholder: imgPlaceF.src,
        color: "#0099FF",
    },
    {
        key: 2,
        name: "Maya Kumari",
        title: "",
        imageSrc: imgMaya.src,
        placeholder: imgPlaceF.src,
        color: "#FF6600",
    },
    {
        key: 3,
        name: "Kajal Kumari",
        title: "",
        imageSrc: imgKajal.src,
        placeholder: imgPlaceF.src,
        color: "#33CC33",
    },
    {
        key: 4,
        name: "Sarita Kumari",
        title: "",
        imageSrc: imgSarita.src,
        placeholder: imgPlaceF.src,
        color: "#800080",
    },
    {
        key: 5,
        name: "Pinky Devi",
        title: "",
        imageSrc: imgPinky.src,
        placeholder: imgPlaceF.src,
        color: "#FF3366",
    },
    {
        key: 6,
        name: "Vikash Mahato",
        title: "",
        imageSrc: imgVikash.src,
        placeholder: imgPlaceM.src,
        color: "#FF0066",
    },
];

function partition(array: typeof staffList, filter: any) {
    let pass: any[] = [],
        fail: any[] = [];
    array.forEach((key, idx, arr) => (filter(key, idx, arr) ? pass : fail).push(key));
    return [pass, fail];
}

const [firstColumn, secondColumn] = partition(staffList.slice(1, 7), (e: any) => e.key % 2 == 1);

//Output
// console.log(firstColumn);
// console.log(secondColumn);

// const firstColumn = staffList.slice(1, 4);
// const secondColumn = staffList.slice(4, 7);

const mobileColumn = staffList.slice(1, 7);

const EducatorsColumn: React.FC<{ className?: string; staffEntries: typeof staffList }> = ({ className, staffEntries }) => {
    return (
        <div className="flex flex-col gap-6 mt-10">
            {staffEntries.map(({ key, imageSrc, placeholder, name }) => (
                <>
                    {/* <StaffCard key={`staff-card-${key}`} image={imageSrc} name={name} placeholder={placeholder} /> */}
                    <div
                        className={twMerge("p-6 flex sm:flex-col backdrop-blur-xl rounded-3xl bg-white/20 w-full max-w-md transition-all", className)}
                        key={`staff-${key}`}
                    >
                        <div key={`staff-card-${key}`} className="flex items-center gap-2">
                            <Image
                                key={`staff-card-img-${key}`}
                                src={imageSrc}
                                width={80}
                                height={80}
                                alt={name}
                                className="p-1 bg-[#d47426] rounded-full h-40 w-40 pointer-events-none"
                            />
                            <div
                                key={`staffcard-name-${key}`}
                                className="text-2xl md:text-3xl md:px-2 lg:text-4xl lg:px-4 transition-all font-black bg-gradient-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none"
                            >
                                {name}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

const Educators = () => {
    return (
        <>
            <section className="py-16 md:py-24 lg:py-32 transition-all bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fcbe68,#fef5ea_66%)]">
                <div className="px-10 container max-w-[1080px] m-auto ">
                    <div className="section-heading">
                        <div className="flex justify-center">
                            <div className="tag">Our Educators</div>
                        </div>
                        <h2 className="section-title mt-5 pointer-events-none">Meet Our Dedicated Team!</h2>
                        <p className="section-description mt-5 pointer-events-none">
                            Our educators are more than just teachers; they are mentors, caregivers, and role models who inspire and guide our students every
                            day. With a strong educational background and a passion for early childhood development, they create a supportive and enriching
                            environment for all children.
                        </p>
                    </div>

                    {/* Mobile View */}
                    <div className="flex md:hidden justify-center gap-4">
                        <EducatorsColumn className="card-shadow" staffEntries={mobileColumn} />
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:flex justify-center gap-4">
                        <EducatorsColumn className="card-shadow" staffEntries={firstColumn} />
                        <EducatorsColumn className="card-shadow" staffEntries={secondColumn} />
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

export default Educators;
