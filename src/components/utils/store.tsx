import { create } from "zustand";

type FeatureStore = {
    inViewFeature: string;
    setInViewFeature: (feature: string) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
    inViewFeature: "0",
    setInViewFeature: (feature: string) => set({ inViewFeature: feature}),
}));
