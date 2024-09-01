import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "components/Home/Nav";
import Footer from "@/components/Footer";
import { ColorModeScript, extendTheme } from "@chakra-ui/react";

const theme = extendTheme(); 

export const metadata: Metadata = {
  title: "ALX PH HOME",
  description: "An Archive dedicated to the Heroes of the ALX PH Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="relative bg-[#fff]">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}