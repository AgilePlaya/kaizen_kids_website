import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallAction = () => {
    return (
        <>
            <section className="bg-gradient-to-b from-white to-[#f7bb68] py-24">
                <div className="container px-10 max-w-[1080px] m-auto">
                    <div className="section-heading">
                        <h2 className="section-title">Apply to KaizenKids today</h2>
                        <p className="section-description mt-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium quia voluptatum quos veritatis labore at earum
                            facilis? Ipsum, esse aliquid quia nostrum officia iusto! Autem in illo repudiandae earum.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-10 justify-center">
                        <button className="btn btn-primary">Apply Now</button>
                        <button className="btn btn-text">
                            <span>Learn More</span>
                            <FaArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallAction;
