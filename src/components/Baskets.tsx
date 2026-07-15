"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Baskets() {
  const { t } = useLang();
  return (
    <section className="baskets" id="korgar">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t.baskets.eyebrow}</span>
          <h2 className="display">{t.baskets.title}</h2>
          <p>{t.baskets.sub}</p>
        </Reveal>
        <div className="basket-grid">
          {t.baskets.items.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.12}
              as="article"
              className={`basket-card ${item.badge ? "hero-basket" : ""}`}
            >
              {item.badge && <span className="basket-badge">{item.badge}</span>}
              <h3>{item.name}</h3>
              <div className="basket-price">{item.price}</div>
              <p>{item.desc}</p>
              <a href="#besok" className="btn btn-ghost">
                {t.baskets.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
