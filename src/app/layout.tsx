import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/providers";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Gridora",
  description: "Modern Electricity Billing & Utility Management Platform",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
     <Providers>
       <body className="min-h-full flex flex-col">
        {children}
      </body>
     </Providers>
    </html>
  );
}