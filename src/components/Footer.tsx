"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
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
    </footer>
  );
}
