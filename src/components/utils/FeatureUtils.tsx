"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "./store";

type Props = {
    children: React.ReactNode;
    id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)

    useEffect(() => {
        if (isInView) setInViewFeature(id);
    }, [isInView]);

    return (
        <p ref={ref} className={`py-16 font-black text-3xl transition-colors ${isInView ? "text-black" : "text-gray-300"}`}>
            {children}
        </p>
    );
};

export const FeatureCard = ({ featureList }: { [key: string]: any }) => {
    const inViewFeature = useFeatureStore(state => state.setInViewFeature);
    const selectedFeature = featureList[inViewFeature as unknown as string]

    return (
        <>
            <div className={`absolute inset-0 bg-red-300 h-full w-full rounded-2xl bg-gradient-to-br from-white to-[${selectedFeature.color}]`}>I am a card</div>
        </>
    );
};
