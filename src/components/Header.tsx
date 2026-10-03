"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

function FlagSE() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#0a5eb0" />
      <rect x="9" y="0" width="6" height="32" fill="#fecc02" />
      <rect x="0" y="13" width="32" height="6" fill="#fecc02" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#012169" />
      <path
        d="M3 6l26 20M29 6L3 26"
        stroke="#fff"
        strokeWidth="5"
      />
      <path d="M3 6l26 20M29 6L3 26" stroke="#c8102e" strokeWidth="2.4" />
      <path d="M16 0v32M0 16h32" stroke="#fff" strokeWidth="8" />
      <path d="M16 0v32M0 16h32" stroke="#c8102e" strokeWidth="4.5" />
    </svg>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    ["#sortiment", t.nav.sortiment],
    ["#disken", t.nav.disken],
    ["#korgar", t.nav.korgar],
    ["#historia", t.nav.historia],
    ["#besok", t.nav.besok],
  ] as const;

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label="Proviant — till toppen">
            <span className="brand-name">Proviant</span>
            <small>Le Bon Vivant</small>
          </a>

          <nav className="nav-desktop" aria-label="Huvudmeny">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          <div className="header-tools">
            <div className="lang-switch" role="group" aria-label="Språk / Language">
              <button
                className={`lang-btn ${lang === "se" ? "active" : ""}`}
                onClick={() => setLang("se")}
                aria-label="Svenska"
              >
                <FlagSE />
              </button>
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
                aria-label="English"
              >
                <FlagEN />
              </button>
            </div>

            <button
              className={`burger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Stäng meny" : "Öppna meny"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobileMenu ${open ? "open" : ""}`} aria-label="Mobilmeny">
        {links.map(([href, label], i) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
