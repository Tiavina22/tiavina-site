import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const MontserratFont = Montserrat({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Tiavina Ramilison - Software Engineer Student",
  description: "My website portfolio created with react, tailwind, NextJs, typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, GeistMono.variable, MontserratFont.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
