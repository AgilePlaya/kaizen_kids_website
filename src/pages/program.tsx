import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SiteNavbar from "@/components/Navbar2";
import Head from "next/head";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import TransitionPage from "@/components/transition/PageAnimation";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import FeatureTicker from "@/components/FeatureTicker";
import ImImg1 from "@/../public/media/painted_heart.jpg";

const program = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [25, -125]);

    return (
        <>
            <Head>
                <title>KaizenKids: Features</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <SiteNavbar />
                <Hero
                    heading="KaizenKids Programs"
                    message="Our programs offer the most effective learning for children by focusing on individual needs. Each program is carefully crafted to nurture and develop every child's unique abilities. Join us to experience a personalized approach to early education."
                    image={ImImg1} />
                <FeatureTicker />
                <Features />
                <CallAction />
                <Footer />
            </TransitionPage>
        </>
    );
};

export default program;
