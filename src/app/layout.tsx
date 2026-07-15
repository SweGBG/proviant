import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Proviant — En butik för delikatesser",
  description:
    "Delikatessbutik med handplockad chark, ost, marmelad, nötter och vin. Le bon vivant — konsten att leva gott.",
  openGraph: {
    title: "Proviant — En butik för delikatesser",
    description:
      "Handplockad chark, ost, marmelad, nötter och vin från små producenter.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
