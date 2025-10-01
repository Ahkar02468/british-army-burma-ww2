"use client";

import {
  Box,
  ChakraProvider,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import DrawerBox from "./components/DrawerBox";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Flex as="nav" align="center">
                  <Button
                    onClick={onOpen}
                    colorScheme="yellow"
                    _hover={{ bg: "yellow.400", color: "gray.800" }}
                  >
                    Why the "Forgotten Army"?
                  </Button>
                  <Image
                    src="/images/chevron-arrowhead.svg"
                    alt="Arrow pointing to button"
                    width={40}
                    height={25}
                    className="hand-drawn-arrow"
                  />
                </Flex>
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
              <DrawerBox isOpen={isOpen} onClose={onClose} />
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
