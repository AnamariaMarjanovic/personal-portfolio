import type { Metadata } from "next";
import  { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anamaria Marjanovic",
  description: "Hi, I'm Anamaria Marjanovic! A passionate frontend developer crafting seamless web experiences with Next.js and modern design principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans relative z-[-1]")}>{children}</body>
    </html>
  );
}
