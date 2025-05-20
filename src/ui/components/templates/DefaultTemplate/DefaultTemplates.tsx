"use client";

import { round_black, rubik } from "@fonts";
import { ChildrenType } from "@types";

import "@styles/global.scss";
import "@styles/tailwind.scss";

export const DefaultTemplate = ({ children }: ChildrenType) => {
    return (
        <html lang="en">
            <body className={`${round_black.variable} ${rubik.variable} antialiased w-full h-full`}>
                <main className="w-full h-full">
                    {children}
                </main>
            </body>
        </html>
    );
};
