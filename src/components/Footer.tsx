"use client";

import { useLang } from "@/lib/i18n";
import SweGBGCredit from "./SweGBGCredit";

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="brand">
          <span className="brand-name">Proviant</span>
          <small>Le Bon Vivant</small>
        </div>
        <p className="footer-tagline">{t.footer.tagline}</p>
        <p className="footer-small">
          © {new Date().getFullYear()} Proviant · {t.footer.rights}
        </p>
      </div>
      <SweGBGCredit lang={lang} accent="#c9a45c" text="rgba(246,239,221,.55)" line="rgba(201,164,92,.22)" />
    </footer>
  );
}
