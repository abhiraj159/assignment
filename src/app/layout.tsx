"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import "./font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../componenet/Generic/Header/Header";
import Footer from "../componenet/Generic/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
