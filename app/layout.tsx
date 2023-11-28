import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

// import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Loading from "@/app/Loading";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Series Sphere",
  description:
    "Welcome to SeriesSphere, your go-to destination for exploring and enjoying the rich tapestry of Indian web series.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#acacac]">
          <Loading></Loading>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
