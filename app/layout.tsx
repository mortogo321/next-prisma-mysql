import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-50 dark:bg-gray-900 ${inter.className}`}>
        <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
      </body>
    </html>
  );
}
