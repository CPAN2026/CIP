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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T5RCPQR');` }} />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-cip-bg text-slate-800 overflow-x-hidden">
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5RCPQR" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
