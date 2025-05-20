"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface StorePanoramasTypes {
    currentPanorama: {
        image: string;
    };
}

export const storePanoramas = create<StorePanoramasTypes>()(
    immer((set) => ({
        currentPanorama: {
            image: "/panorams/0.jpg"
        },
    }))
);