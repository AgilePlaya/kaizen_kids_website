import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TransitionPage from "@/components/transition";
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
                    heading="Landing Area"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum libero, quae omnis assumenda deleniti. Accusamus natus temporibus ratione perspiciatis quam harum beatae. Similique dolores delectus, quidem saepe magni dolor?"
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
