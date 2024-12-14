import { animate, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import React from "react";

let randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

const AnimatedBorderButton = ({ text, link }: { [key: string]: any }) => {
    const [scope, animate] = useAnimate();

    const onButtonClick = () => {
        const sparkles = Array.from({ length: 20 });
        const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: randomNumberBetween(-100, 100),
                y: randomNumberBetween(-100, 100),
                scale: randomNumberBetween(1.5, 2.5),
                opacity: 1,
            },
            {
                duration: 0.5,
                at: "<",
            },
        ]);

        const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                duration: 0.25,
                at: "<",
            },
        ]);

        const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            {
                duration: 0.000001,
            },
        ]);

        console.log(sparklesReset, "Check")
        animate([
            ...(sparklesReset as []),
            [".btn-letter", { y: -28 }, { duration: 0.2, delay: stagger(0.05) }],
            ["button", { scale: 0.8 }, { duration: 0.15, at: "<" }],
            ["button", { scale: 1 }, { duration: 0.15 }],
            ...(sparklesAnimation as []),
            [".btn-letter", { y: 0 }, { duration: 0.00001 }],
            ...(sparklesFadeOut as []),
        ]);
    };

    return (
        <>
            <div ref={scope} className="relative">
                <Link href={link} onClick={onButtonClick} className="btn btn-primary btn-anim-border ">
                    <span className="sr-only">{text}</span>
                    <span className="flex items-center justify-center h-8 overflow-hidden" aria-hidden>
                        {text.split("").map((letter: string, index: any) => (
                            <span
                                data-letter={letter}
                                className="btn-letter inline-block items-center justify-center leading-6 relative h-7 after:absolute after:left-0 after:h-7 after:top-full after:content-[attr(data-letter)]"
                                key={`${letter}-${index}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </Link>
                <span aria-hidden className="absolute inset-0 block pointer-events-none overflow-visible">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <svg
                            className={`absolute left-1/2 top-1/2 z-0 sparkle-${index}`}
                            key={index}
                            height="15px"
                            width="15px"
                            viewBox="-4.79 -4.79 57.52 57.52"
                            xmlSpace="preserve"
                            stroke="#000000"
                            stroke-width="1.8"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fill="#ED8A19"
                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                                ></path>{" "}
                            </g>
                        </svg>
                    ))}
                </span>
            </div>
        </>
    );
};

export default AnimatedBorderButton;
function getValue(): {} | {}[] {
    throw new Error("Function not implemented.");
}
