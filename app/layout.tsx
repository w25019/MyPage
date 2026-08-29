import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"] });

// information shown in the browser tab and when sharing the website
export const metadata: Metadata = {
  title: "Yoon Ei Phyo | Backend / Full-Stack Developer",
  description:
    "Portfolio of Yoon Ei Phyo, a web programming student in Okinawa building thoughtful applications with Java, React, Next.js, and Spring Boot.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Yoon Ei Phyo | Developer Portfolio",
    description: "Aspiring Backend / Full-Stack Developer in Okinawa, Japan.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yoon Ei Phyo developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoon Ei Phyo | Developer Portfolio",
    description: "Aspiring Backend / Full-Stack Developer in Okinawa, Japan.",
    images: ["/og.png"],
  },
};

// main layout used by every page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
