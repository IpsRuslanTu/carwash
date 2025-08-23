import type {Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Navbar} from "@/widgets/Navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Автомойка",
  description: "Запись на автомойку"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100 flex flex-col`}
      >
        <main className="bg-gray-100 flex-1 mx-auto max-w-4xl w-full">
          {children}
        </main>
        <div className="bg-gray-100 sticky bottom-0 w-full">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
