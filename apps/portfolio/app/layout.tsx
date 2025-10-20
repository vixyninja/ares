import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Huynh Hong Vy",
  description: "Portfolio of Huynh Hong Vy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className={`${dmSans.variable} bg-black`} suppressHydrationWarning>
        <div id="content">{children}</div>
      </body>
    </html>
  );
}
