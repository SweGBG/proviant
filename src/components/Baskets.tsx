"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

function Basket() {
  return (
    <svg className="basket-ico" viewBox="0 0 64 48" aria-hidden="true">
      <path d="M14 20c0-10 8-16 18-16s18 6 18 16" />
      <path d="M6 20h52l-5 24H11z" />
      <path d="M10 28h44M12 36h40M22 20l2 24M32 20v24M42 20l-2 24" />
    </svg>
  );
}

export default function Baskets() {
  const { t } = useLang();
  return (
    <section className="baskets" id="korgar" data-anim>
      <div className="wrap">
        <Reveal className="section-head light">
          <span className="eyebrow">{t.baskets.eyebrow}</span>
          <h2 className="display mat">{t.baskets.title}</h2>
          <p>{t.baskets.sub}</p>
        </Reveal>
        <div className="basket-grid">
          {t.baskets.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.12} as="article" className={`basket-card ${item.badge ? "star" : ""}`}>
              {item.badge && <span className="basket-badge">{item.badge}</span>}
              <Basket />
              <h3>{item.name}</h3>
              <div className="basket-price">{item.price}</div>
              <p>{item.desc}</p>
              <a href="#besok" className={`btn ${item.badge ? "btn-primary" : "btn-ghost"}`}>
                <span>{t.baskets.cta}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
