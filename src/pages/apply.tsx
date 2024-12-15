import Footer, { MinimalFooter } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionPage from "@/components/transition/PageAnimation";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const apply = () => {
    return (
        <>
            <Head>
                <title>KaizenKids: Apply Today</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <Navbar />
                <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fcbe68,#fef5ea_66%)] min-h-full">
                    <div className="py-12 max-w-[1240px] m-auto">
                        <div className="hidden lg:flex transition-all">
                            <div className="row-primary w-full">
                                {/* Google Form */}
                                <div className="w-full flex flex-col justify-end items-end px-2 pb-6 min-h-80">
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSdTTCZI112kkt8kSf4AaXeaiBEZXhiKwnCD7egDisFVJyHGtg/viewform?embedded=true"
                                        width="600"
                                        height="1150"
                                        loading="lazy"
                                        className="rounded-2xl object-contain max-w-full loading-placeholder"
                                    />
                                </div>

                                {/* Contact Info */}
                                <div className="w-full flex flex-col px-2 min-h-80 justify-start items-start">
                                    <h1 className="w-full text-left text-3xl font-bold text-nowrap py-8">Locate Us:</h1>
                                    {/* <Link href="https://maps.app.goo.gl/WJkQ99qicUGG8v5J8"><Image src={ImImg1} width="400" height="300" loading="lazy" className="rounded-2xl object-cover" alt="/"/></Link> */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7329.308544689302!2d85.3115416403367!3d23.292008804556396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51f005fb484ef%3A0xe2b80069d370f41!2sKaizen%20Kids%20Pre-school%20and%20Activity%20Centre!5e0!3m2!1sen!2sin!4v1732917086010!5m2!1sen!2sin"
                                        width="320"
                                        height="360"
                                        loading="lazy"
                                        className="rounded-2xl object-contain loading-placeholder p-1 card-shadow"
                                    />
                                    <h1 className="w-full text-left text-3xl font-bold text-nowrap py-8">Reach out to us:</h1>
                                    <div className="text-left">
                                        <p className="w-full text-2xl text-nowrap py-2">
                                            KaizenKids School <br /> Road Number 5 <br /> Patel Nagar, Opposite NIFFT <br />
                                            Hatia-834003
                                        </p>
                                        <p className="w-full text-2xl text-nowrap pb-4">+91 8877668696</p>
                                        <p className="w-full text-2xl text-nowrap pb-4">
                                            <Link href="mailto:info@kaizenkids.in" scroll={false}>
                                                info@kaizenkids.in
                                            </Link>
                                        </p>
                                        <p className="w-full text-nowrap py-8">
                                            <Link href="https://www.facebook.com/61557749560567/">
                                                <FaFacebook size="50" className=" hover:text-blue-600 ease-in duration-300 inline-flex mx-4" />
                                            </Link>
                                            <Link href="https://www.instagram.com/kaizenkidspreschool/" scroll={false}>
                                                <FaInstagram size="50" className=" hover:text-amber-600 ease-in duration-300 inline-flex mx-4" />
                                            </Link>
                                            <Link href="https://maps.app.goo.gl/KfxKrZpF1ayAdsrP6" scroll={false}>
                                                <FaMapMarkerAlt size="50" className=" hover:text-green-600 ease-in duration-300 inline-flex mx-4" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:hidden transition-all">
                            <div className="flex-row w-full">
                                {/* Google Form */}
                                <div className="w-full flex flex-col justify-center items-center px-2 pb-6 min-h-80">
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSdTTCZI112kkt8kSf4AaXeaiBEZXhiKwnCD7egDisFVJyHGtg/viewform?embedded=true"
                                        width="600"
                                        height="1350"
                                        loading="lazy"
                                        className="rounded-2xl object-contain max-w-full loading-placeholder"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="block lg:hidden">
                    <Footer />
                </section>
                <section className="hidden lg:block">
                    <MinimalFooter />
                </section>
            </TransitionPage>
        </>
    );
};

export default apply;
