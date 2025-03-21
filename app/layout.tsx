import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/custom/navbar";
import MouseMoveEffect from "@/components/custom/mouse-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} dark:bg-[#1a1a1d] dark:text-zinc-50 bg-zinc-200`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}