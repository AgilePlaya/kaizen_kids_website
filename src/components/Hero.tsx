import React from "react";

const Hero = ({ heading , message }:{[key:string]:any}) => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="p-10 pr-20 max-w-[1240px] text-white z-[2] mt-[-5rem]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-10 text-xl">{message}</p>
                <button className="px-8 py-2 border">Book</button>
            </div>
        </div>
    )
}

export default Hero
