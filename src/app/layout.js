import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "British Army Burma Campaign WWII",
  description:
    "Ranks and terminology of the British Army during WWII Burma Campaign in Burmese language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <div className="app-container">
            <header>
              <div className="header-content">
                <div>
                  <h1>British Army in Burma Campaign (WWII)</h1>
                  <p>
                    Ranks and Terminology in Burmese Language
                  </p>
                </div>
                <nav>
                  <NextLink href="/">Why Forgotten Army</NextLink>
                </nav>
              </div>
            </header>
            <main>
              <Box
                mb={8}
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
                mx="auto"
                maxW="container.xl"
              >
                <Image
                  width={1280}
                  height={200}
                  src="/images/burma_campaign.svg"
                  alt="Burma Campaign Banner"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Box>
              {children}
            </main>
            <footer>
              <div className="footer-content">
                <p>British Army Burma Campaign WWII - Educational Resource</p>
              </div>
            </footer>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
