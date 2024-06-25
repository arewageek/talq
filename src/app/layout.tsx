import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import '@stream-io/video-react-sdk/dist/css/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TALQQ - Conferencing Video Web App",
  description: "Video Conferencing application",
  icons: "/icons/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        variables: {
          colorText: "#fff",
          colorPrimary: "#0e78f9",
          colorBackground: "#1c1f2e",
          colorInputBackground: "#252a41",
          colorInputText: "#fff"
        },
        layout: {
          // logoImageUrl: "/icons/logo.svg",
          socialButtonsVariant: "iconButton"
        }
      }}>
        <body className={`bg-dark-2 ${inter.className}`}>
          {children}
          {/* 
          <div className="h-screen w-screen flex justify-center items-center">
            <h2 className="font-semibold text-2xl text-white">
              Project has been migrated to <a className="font-extrabold no-underline text-sky-200" href="https://talqq.vercel.app">"talqq.vercel.app"</a>
            </h2>

          </div> */}

          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
