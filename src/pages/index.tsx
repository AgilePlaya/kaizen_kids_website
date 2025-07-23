import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar2";
import Hero from "@/components/Hero";
import TransitionPage from "@/components/transition/PageAnimation";
import FeatureTicker from "@/components/FeatureTicker";
import CallAction from "@/components/CallAction";
import Features from "@/components/Features";
import Image from "next/image";
import Head from "next/head";
import ImImg1 from "@/../public/media/hero_media_resized.jpg";

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
    console.log("Page component is rendering");
    return (
        <>
            <Head>
                <title>KaizenKids</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <SiteNavbar />
                <Hero
                    tag="Join Us Now"
                    heading="Welcome to KaizenKids!!"
                    message="At KaizenKids, we believe in nurturing young minds in a safe, joyful, and stimulating environment. Our goal is to create a foundation for lifelong learning and curiosity."
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
