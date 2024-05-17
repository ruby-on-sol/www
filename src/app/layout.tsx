import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RUBY",
  description:
    "Discover $RUBY – the latest cryptocurrency on the Solana blockchain inspired by CryptoFinally's beloved dog, Ruby. This innovative digital currency combines the charm of canine companionship with the efficiency and speed of Solana, aiming to support pet-related charities and create a community for animal lovers and investors alike. Join the $RUBY community today and be part of a movement that values connectivity, charity, and the joy pets bring to our lives. Invest in $RUBY, where blockchain meets compassion.",
  openGraph: {
    images: ["/images/android-chrome-512x512.png"],
  },
  icons: ["/images/favicon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark h-full scroll-smooth">
      <body
        className={`${inter.className} text-base antialiased body font-sans md:text-left md:text-lg relative text-center xl:text-xl`}
      >
        {children}
      </body>
    </html>
  );
}
