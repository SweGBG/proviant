"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

const icons = [
  // Chark — salamiskivor
  <svg key="chark" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <ellipse cx="20" cy="26" rx="14" ry="10" />
    <ellipse cx="20" cy="26" rx="9" ry="6.2" strokeDasharray="2 3" />
    <circle cx="17" cy="24" r="1" fill="currentColor" stroke="none" />
    <circle cx="23" cy="27" r="1" fill="currentColor" stroke="none" />
    <circle cx="20" cy="29" r="1" fill="currentColor" stroke="none" />
    <path d="M28 14c6-4 14-2 14 4 0 5-6 8-11 6" />
  </svg>,
  // Ost — bit med hål
  <svg key="ost" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 34V20l30-10 6 6v18H6z" />
    <path d="M6 20l36-4" />
    <circle cx="16" cy="27" r="2.6" />
    <circle cx="28" cy="30" r="2" />
    <circle cx="34" cy="24" r="1.6" />
  </svg>,
  // Marmelad — burk
  <svg key="marmelad" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M14 14h20v4c3 3 4 6 4 10 0 8-5 14-14 14S10 36 10 28c0-4 1-7 4-10v-4z" />
    <path d="M12 10h24v4H12z" />
    <path d="M16 28c2-2 4 2 6 0s4 2 6 0 4 2 6 0" strokeDasharray="1 0" />
  </svg>,
  // Nötter — valnöt
  <svg key="notter" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <ellipse cx="24" cy="26" rx="13" ry="15" />
    <path d="M24 12v28M24 26c-5-3-5-9 0-12M24 26c5-3 5-9 0-12M24 26c-5 3-5 9 0 12M24 26c5 3 5 9 0 12" />
  </svg>,
  // Vin — flaska + glas
  <svg key="vin" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M16 6h4v8c3 1 4 3 4 6v22h-12V20c0-3 1-5 4-6V6z" />
    <path d="M30 16h10c0 6-2 9-5 10v10h4v2h-10v-2h4V26c-3-1-5-4-5-10z" />
    <path d="M31 20h8" />
  </svg>,
  // God mat — oliv­kvist
  <svg key="godmat" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 40C16 28 28 16 40 8" />
    <ellipse cx="18" cy="26" rx="3.4" ry="4.6" transform="rotate(-30 18 26)" />
    <ellipse cx="30" cy="16" rx="3.4" ry="4.6" transform="rotate(-30 30 16)" />
    <path d="M22 34c4 0 7 2 8 5M32 24c4 0 7 2 8 5" />
  </svg>,
];

export default function Categories() {
  const { t } = useLang();
  return (
    <section id="sortiment">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t.categories.eyebrow}</span>
          <h2 className="display">{t.categories.title}</h2>
          <p>{t.categories.sub}</p>
        </Reveal>
        <div className="cat-grid">
          {t.categories.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.12} as="article" className="cat-card">
              <div className="cat-icon">{icons[i]}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
