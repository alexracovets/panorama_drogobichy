import type { Metadata } from "next";
import { DefaultTemplate } from "@/ui/components/templates";
import { ChildrenType } from "@/types";

export const metadata: Metadata = {
  title: "Panorama",
  description: "Panorama",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <DefaultTemplate>
      {children}
    </DefaultTemplate>
  );
}
