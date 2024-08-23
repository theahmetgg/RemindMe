import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider} from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import ThemeProvider from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RemindMe Full Stack App",
  description:
    "This project is a modern and responsive web application that allows users to create and manage reminders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(inter.className, "dark")}
        style={{
          colorScheme: "dark",
        }}
      >
        <body>
          <ThemeProvider>
            <div className="flex min-h-screen w-full flex-col items-center dark:bg-black">
              <NavBar />

              <Separator />
              <main className="flex flex-grow w-full justify-center dark:bg-neutral-950 items-center">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
