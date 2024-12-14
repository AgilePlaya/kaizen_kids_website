import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            {/* <Navbar /> */}
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0 });
                    }
                }}
            >
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
            {/* <Footer /> */}
            <Analytics
                beforeSend={(event) => {
                    if (localStorage.getItem("va-disable")) {
                        return null;
                    }
                    return event;
                }}
            />
            <SpeedInsights />
        </>
    );
}
