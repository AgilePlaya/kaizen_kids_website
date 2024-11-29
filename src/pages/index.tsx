import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/Hero";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

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
    <div>
      <Head>
        <title>KaizenKids</title>
        <meta name="description" content="KaizenKids website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Landing Area"
        message="Our students will be confident speakers, respectful listeners, creative problem solvers and experiential learners. They will also show team work as part of their holistic development."
      ></Hero>
      <Slider slides={ SliderData } />
    </div>
  );
}
