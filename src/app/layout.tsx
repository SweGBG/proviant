import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/lib/i18n";
// Fonts, self-hosted: Cormorant Garamond (display) + Jost (body)
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proviant — En butik för delikatesser",
  description:
    "Delikatessbutik med handplockad chark, ost, marmelad, nötter och vin. Le bon vivant — konsten att leva gott.",
  openGraph: {
    title: "Proviant — En butik för delikatesser",
    description: "Handplockad chark, ost, marmelad, nötter och vin från små producenter.",
    images: [{ url: "/logo.webp", width: 1408, height: 768 }],
  },
};

export const viewport: Viewport = { themeColor: "#170a0d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
