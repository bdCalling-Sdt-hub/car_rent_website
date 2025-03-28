import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lora } from "next/font/google";
import "maplibre-gl/dist/maplibre-gl.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { Toaster } from "sonner";
import { SocketProvider } from "@/provider/SocketProvider";
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
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-lora", 
});

export const metadata: Metadata = {
  title: "NARDO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        <SocketProvider>
        <ReduxProvider>
          <Toaster position="top-right" richColors />
          {children}
        </ReduxProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
