"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero wrap" id="top">
      <span className="eyebrow hero-eyebrow">{t.hero.eyebrow}</span>
      <Image
        src="/logo.png"
        alt="Proviant — en butik för delikatesser"
        width={1408}
        height={768}
        priority
        className="hero-logo"
      />
      <p className="hero-lead">{t.hero.lead}</p>
      <div className="hero-ctas">
        <a href="#disken" className="btn btn-primary">
          {t.hero.cta1}
        </a>
        <a href="#besok" className="btn btn-ghost">
          {t.hero.cta2}
        </a>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
          <rect
            x="1"
            y="1"
            width="20"
            height="28"
            rx="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
