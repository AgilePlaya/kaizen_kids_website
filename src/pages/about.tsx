import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar2";
import Hero from "@/components/Hero";
import TransitionPage from "@/components/transition/PageAnimation";
import FeatureTicker from "@/components/FeatureTicker";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import Image from "next/image";
import Head from "next/head";
import ImImg1 from "@/../public/media/TP_LR_DSC2473_web_resized.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>KaizenKids : About Us</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <SiteNavbar />
                <Hero
                    heading="Mission Statement"
                    message="Our students will be confident speakers, respectful listeners, creative problem solvers and experiential learners. They will also show team work as part of their holistic development."
                    image={ImImg1}
                />
                <FeatureTicker />
                <Features />
                <CallAction />
                {/* <div>

                </div> */}
                <Footer />
            </TransitionPage>
        </>
    );
}
