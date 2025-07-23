import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AnimatedBorderButton from "./utils/AnimatedBorderButton";
import { Button } from "@heroui/react";

const CallAction = () => {
    return (
        <>
            <section className="bg-linear-to-b from-white to-[#f7bb68] py-24">
                <div className="container px-10 max-w-[1080px] m-auto">
                    <div className="section-heading">
                        <h2 className="section-title">Apply to KaizenKids today</h2>
                        <p className="section-description mt-5">
                            We nurture your child's curiosity and creativity. Our dedicated educators and innovative curriculum provide a strong
                            foundation for lifelong learning. Join our vibrant community and give your child the best start. Apply today and see them thrive!
                        </p>
                    </div>
                    <div className="flex gap-2 mt-10 justify-center">
                        {/* <AnimatedBorderButton text="Apply" link="/apply" /> */}
                        {/* <Link className="btn btn-text" href="/program" scroll={false}>
                            <span>Learn More</span>
                            <FaArrowRight className="ml-2 h-4 w-4" />
                        </Link> */}
                        <Button as={Link} color="primary" variant="shadow" href="/apply">Apply</Button>
                        <Button as={Link} color="primary" variant="light" href="/program" endContent={<FaArrowRight />}>Learn More</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallAction;
