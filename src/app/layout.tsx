import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIP – Cuidadores de Idosos Profissionais",
  description:
    "Cuidado humanizado e profissional para idosos em casa. A CIP conecta famílias a cuidadores certificados em todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-cip-bg text-slate-800">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
