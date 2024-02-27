import React from "react";
import Providers from "@/providers/providers";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "LinkUp social media app",
  description: "LinkUp is a social media app capeble of doing everything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body>
        <Providers>
          <main className="min-w-screen min-h-screen xl:mr-[240px] mr-[88px] text-black dark:text-white bg-gray-200 dark:bg-gray-950">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
