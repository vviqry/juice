import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juice Stop | Segar Setiap Hari",
  description: "Kedai Jus Buah Premium yang menyegarkan harimu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body suppressHydrationWarning className={`${inter.className} bg-orange-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
