import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import '@stream-io/video-react-sdk/dist/css/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TALQ - Conferencing Video Web App",
  description: "Video Conferencing application",
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
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
