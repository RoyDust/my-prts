import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import "tailwindcss/tailwind.css"; // 引入 Tailwind CSS
import localFont from "@next/font/local";
import { Providers } from "./Provider";

const myFont = localFont({
  src: "../../public/font/AlibabaPuHuiTi-3-65-Medium.woff2",
  display: "swap",
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
      <body className={`antialiased ${myFont.className}`}>
        <CounterStoreProvider>
          <Providers>{children}</Providers>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
