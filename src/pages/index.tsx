import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import TransitionPage from "@/components/transition";
import Image from "next/image";
import Head from "next/head";
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from "next";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
    return (
        <>
            <Head>
                <title>KaizenKids</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <Navbar />
                <Hero
                    heading="Landing Area"
                    message="Our students will be confident speakers, respectful listeners, creative problem solvers and experiential learners. They will also show team work as part of their holistic development."
                />
                <Slider slides={SliderData} />
                {/* <div>

                </div> */}
                <Footer />
            </TransitionPage>
        </>
    );
}
