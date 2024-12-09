import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionPage from "@/components/transition";
import React from "react";

const apply = () => {
    return (
        <>
            <TransitionPage>
                <Navbar />
                <div id="apply" className="min-h-full bg-gray-700">
                    <div className="flex items-center justify-center h-[80vh] bg-fixed bg-center bg-cover custom-img">
                        {/* Overlay */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] h-[80vh] " />
                        <div className="p-10 pr-20 max-w-[1240px] text-white z-[2] mt-[-5rem]">
                            <h2 className="text-5xl font-bold">Apply Now !!</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-col items-center justify-center m-auto py-8 max-w-[1240px]">
                    <h1 className="flex w-full font-bold p-4 text-4xl">
                        Application
                    </h1>
                    <p className="flex p-4 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est magni vel recusandae. Sit at rerum commodi dicta
                        repellat esse ipsam quis nihil amet, a corrupti dolor
                        fuga iure qui consequatur.
                    </p>
                    <p className="flex p-4 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio commodi deserunt quidem rerum nemo impedit ab
                        dolorum dolor, at hic mollitia error corporis laudantium
                        expedita qui voluptatibus. Placeat, consequatur atque.
                    </p>
                </div>
                <Footer />
            </TransitionPage>
        </>
    );
};

export default apply;
