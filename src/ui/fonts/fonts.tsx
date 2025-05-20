"use client";

import { Rubik } from "next/font/google";
import localFont from "next/font/local";

export const rubik = Rubik({
    weight: ["400"],
    variable: "--font-rubik",
    style: ["normal"],
    subsets: ["cyrillic"],
    display: "swap"
});

export const round_black = localFont({
    src: [
        {
            path: "./round_black/round_black.otf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-round_black",
});