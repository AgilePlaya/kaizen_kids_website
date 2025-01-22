import { motion } from "framer-motion";
import { useEffect, useState, startTransition } from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const anim = (variants: { [key: string]: any }) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants,
    };
};

const routes = {
    "/": "Home",
    "/about": "About",
    "/apply": "Application",
    "/program": "Program & Features",
    "/schedule": "Daily Schedule",
    "/curriculum": "Curriculum",
    "/activity_centre": "Activities",
    "/contact": "Contact",
    "/staff": "Staff",
};

export default function TransitionPage({ children }: { [key: string]: any }) {
    const router = useRouter();

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function resize() {
            startTransition(() => {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const textanim = {
        initial: {
            opacity: 1,
            window: {
                scrollTo: 0,
            },
        },
        enter: {
            opacity: 0,
            top: -100,
            transition: {
                duration: 1.5,
                delay: 0.25,
                ease: [0.74, 0, 0.26, 1],
            },
            transitionEnd: {
                top: "45%",
                left: "-15%",
                opacity: 0,
            },
        },
        exit: {
            opacity: 1,
            left: "50%",
            transition: {
                duration: 0.65,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
            },
            window: {
                scrollTo: 0,
            },
        },
    };

    return (
        <div className="page curve">
            <div className="h-full w-full flex overflow-hidden">
                <motion.p
                    {...anim(textanim)}
                    className="fixed top-[45%] left-[50%] text-center justify-center font-bold -translate-x-1/2 text-5xl md:text-7xl lg:text-8xl text-white z-40"
                >
                    {routes[router.route as keyof typeof routes]}
                </motion.p>
            </div>
            <div
                style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
                className="w-full h-[calc(100vh+800px)] top-[-400px] left=0 fixed pointer-events-none bg-black z-[38]"
            />
            {dimensions.width > 0 && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

const SVG = ({ width, height }: { [key: string]: any }) => {
    const initialPath = `
        M0 200
        Q${width / 2} 0 ${width} 200
        L${width} ${height + 200}
        Q${width / 2} ${height + 600} 0 ${height + 200}
        L0 200
    `;

    const endPath = `
        M0 200
        Q${width / 2} 0 ${width} 200
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 200
    `;

    const slide = {
        initial: {
            top: "-200px",
        },
        enter: {
            top: "-100vh",
            transition: {
                duration: 1.5,
                delay: 0.25,
                ease: [0.74, 0, 0.26, 1],
            },
            transitionEnd: {
                top: "120vh",
            },
        },
        exit: {
            top: "-200px",
            transition: {
                duration: 0.5,
                ease: [0.74, 0, 0.26, 1],
            },
        },
    };

    const curve = {
        initial: {
            d: initialPath,
            transition: {
                duration: 1,
                delay: 1.5,
                ease: [0.74, 0, 0.26, 1],
            },
        },
        enter: {
            d: endPath,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: [0.74, 0, 0.26, 1],
            },
        },
        exit: {
            d: initialPath,
        },
    };

    return (
        <motion.svg {...anim(slide)} className="motion-svg">
            <motion.path {...anim(curve)}></motion.path>
        </motion.svg>
    );
};
