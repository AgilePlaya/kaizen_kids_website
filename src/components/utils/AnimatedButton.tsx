import { animate, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import React from "react";

const AnimatedButton = ({ text, link }: { [key: string]: any }) => {
    const [scope, animate] = useAnimate();
    const onButtonClick = () => {
        animate([
            [".btn-letter", { y: -27 }, { duration: 0.2, delay: stagger(0.05) }],
            ["button", { scale: 0.8 }, { duration: 0.15, at: "<" }],
            ["button", { scale: 1 }, { duration: 0.15 }],
            [".btn-letter", { y: 0 }, { duration: 0.00001 }],
        ]);
    };

    return (
        <>
            <div ref={scope} className="relative">
                <Link href={link} onClick={onButtonClick} className="btn btn-text" scroll={false}>
                    <span className="sr-only">{text}</span>
                    <span className="flex items-center justify-center h-8 overflow-hidden" aria-hidden>
                        {text.split("").map((letter: string, index: any) => (
                            <span
                                data-letter={letter}
                                className="btn-letter inline-block items-center justify-center leading-7 relative h-7 after:absolute after:left-0 after:h-7 after:top-full after:content-[attr(data-letter)]"
                                key={`${letter}-${index}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </Link>
            </div>
        </>
    );
};

export default AnimatedButton;
