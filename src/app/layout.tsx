import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Happy Girlfriend Day ❤️ | For My Angry Bird",
  description: "A digital love letter for my special one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <body className="bg-[var(--color-bgSoft)] text-[var(--color-darkText)] antialiased selection:bg-[var(--color-secondary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}