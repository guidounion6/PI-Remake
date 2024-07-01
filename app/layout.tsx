import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PI-Remake",
  description: "Rebuilding Integration Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-black`} >
        <Toaster/ >
        {children}
        </body>
    </html>
  );
}
