import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionPage from "@/components/transition/PageAnimation";
import Image from "next/image";
import Head from "next/head";
import Educators from "@/components/Educators";
import imgPrincipal from "../../public/staff/KK_Principal.jpg";

export default function Contact() {
    return (
        <>
            <Head>
                <title>KaizenKids: Contact Us</title>
                <meta name="description" content="KaizenKids website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransitionPage>
                <Navbar />
                    <section className="pt-8 md:py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#e8a03b,#fef5ea_66%)]">
                        <div className="container p-10 max-w-[1240px] m-auto pb-20 ">
                            <div>
                                <div className="md:flex items-center">
                                    <div className=" sm:px-6 sm:max-w-full md:max-w-[420px] md:pr-4 lg:min-w-[540px] lg:pr-10">
                                        <div className="flex">
                                            <div className="tag pointer-events-none">From the Principal's Office</div>
                                        </div>
                                        <h1 className="text-4xl md:text-[54px] lg:text-[60px] md:leading-[80px] font-black bg-gradient-to-b from-black to-[#5f2803] text-transparent bg-clip-text pointer-events-none mt-5">
                                            Note from the Principal
                                        </h1>
                                        <p className="text-base md:text-lg text-[#1d1004] mt-6 pointer-events-none">
                                            At KaizenKids, we foster a safe, inclusive, and stimulating environment where every child's unique potential can
                                            flourish through play-based learning and hands-on activities. Our dedicated educators are passionate about creating
                                            a foundation for lifelong learning, and we value open communication and collaboration with our families.
                                        </p>
                                    </div>
                                    <div className="flex mt-16 md:mt-0 md:max-h-[648px] md:flex-1 justify-center md:justify-end m-auto relative pointer-events-none">
                                        <div>
                                            <Image
                                                src={imgPrincipal}
                                                alt="Students of Kaizen Kids playing with some rings"
                                                width="450"
                                                height="600"
                                                loading="eager"
                                                // style={imageStyle1}
                                                className="rounded-2xl bg-orange-300 object-cover md:h-full md:max-h-[480px] md:w-auto lg:left"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Educators />
                <Footer />
            </TransitionPage>
        </>
    );
}
