import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TransitionPage from "@/components/transition/PageAnimation";
import FeatureTicker from "@/components/FeatureTicker";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import Image from "next/image";
import Head from "next/head";

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
                    tag="Join Us Now"
                    heading="Welcome to KaizenKids!!"
                    message="At KaizenKids, we believe in nurturing young minds in a safe, joyful, and stimulating environment. Our goal is to create a foundation for lifelong learning and curiosity."
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
