"use client";

import { useLang } from "@/lib/i18n";
import Helix from "./Helix";

/* Seeded random so the gold dust is identical on server and client */
function rng(seed: number) {
  return () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
}
const r = rng(42);
const DUST = Array.from({ length: 34 }, () => {
  const a = r() * Math.PI * 2;
  const dist = 38 + r() * 30; // vmin, where the grain starts
  return {
    x: `${(Math.cos(a) * dist).toFixed(1)}vmin`,
    y: `${(Math.sin(a) * dist * 0.7).toFixed(1)}vmin`,
    d: `${(0.1 + r() * 1.4).toFixed(2)}s`,
    s: (2 + r() * 3).toFixed(1),
  };
});
const SPARKS = Array.from({ length: 16 }, () => ({
  left: `${(8 + r() * 84).toFixed(1)}%`,
  top: `${(10 + r() * 80).toFixed(1)}%`,
  d: `${(2.6 + r() * 4).toFixed(1)}s`,
  t: `${(3 + r() * 4).toFixed(1)}s`,
}));

export default function Hero() {
  const { t } = useLang();
  const words = t.hero.lead.split(" ");
  return (
    <section className="hero" id="top" data-anim>
      <div className="hero-bg" aria-hidden="true">
        <span className="glow g1" />
        <span className="glow g2" />
        <span className="glow g3" />
      </div>

      <Helix className="hero-helix left" count={16} speed={7} />
      <Helix className="hero-helix right" count={16} speed={7} />

      <div className="wrap hero-core">
        <span className="eyebrow hero-eyebrow">{t.hero.eyebrow}</span>

        <div className="emblem">
          {/* rotating gilded rings behind the label */}
          <svg className="emblem-rings" viewBox="0 0 400 400" aria-hidden="true">
            <circle cx="200" cy="200" r="196" className="ring r1" />
            <circle cx="200" cy="200" r="182" className="ring r2" />
            <circle cx="200" cy="200" r="168" className="ring r3" />
          </svg>
          {/* gold dust that gathers into the logo, then sparkles */}
          <div className="dust" aria-hidden="true">
            {DUST.map((g, i) => (
              <i key={i} style={{ ["--x" as string]: g.x, ["--y" as string]: g.y, ["--d" as string]: g.d, ["--s" as string]: `${g.s}px` }} />
            ))}
          </div>
          <div className="emblem-label">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Proviant — en butik för delikatesser" width={1408} height={768} className="hero-logo" />
            <span className="gloss" aria-hidden="true" />
          </div>
          <div className="sparks" aria-hidden="true">
            {SPARKS.map((s, i) => (
              <i key={i} style={{ left: s.left, top: s.top, ["--d" as string]: s.d, ["--t" as string]: s.t }} />
            ))}
          </div>
        </div>

        <p className="hero-lead" key={t.hero.lead}>
          {words.map((w, i) => (
            <span key={i} className="mw" style={{ ["--w" as string]: i }}>
              {w}{" "}
            </span>
          ))}
        </p>

        <div className="hero-ctas">
          <a href="#disken" className="btn btn-primary">
            <span>{t.hero.cta1}</span>
          </a>
          <a href="#besok" className="btn btn-ghost">
            <span>{t.hero.cta2}</span>
          </a>
        </div>
      </div>

      <a href="#sortiment" className="scroll-hint" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <i />
      </a>
    </section>
  );
}
