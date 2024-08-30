import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "components/Home/Nav";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
 
import React from "react";
import Skillset from "@/components/Home/Skillset";

export const metadata: Metadata = {
  title: "Ozioma Agaecheta",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="relative bg-[#1D1817]" color="white">
        <Providers>
          <Nav/>
          <Hero/>
          <About/>
          <Skillset/>
        </Providers>
      </body>
    </html>
  );
}


