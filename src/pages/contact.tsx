import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionPage from "@/components/transition";
import Image from "next/image";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>KaizenKids</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <Navbar />
                <div className="template-bg-light" />
                <Footer />
            </TransitionPage>
        </>
    );
}
