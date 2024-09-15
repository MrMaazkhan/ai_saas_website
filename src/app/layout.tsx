import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Maaz khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
      <script src="https://kit.fontawesome.com/a076d05399.js" defer></script>
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
