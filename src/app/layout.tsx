import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import "tailwindcss/tailwind.css"; // 引入 Tailwind CSS

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "尚蜀书屋-欲买桂花同载酒，终不似，少年游",
  description: "RoyDust的博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
    </html>
  );
}
