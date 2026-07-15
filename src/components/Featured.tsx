"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Featured() {
  const { t } = useLang();
  return (
    <section className="featured" id="disken">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t.featured.eyebrow}</span>
          <h2 className="display">{t.featured.title}</h2>
          <p>{t.featured.sub}</p>
        </Reveal>
        <div className="prod-grid">
          {t.featured.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.12} as="article" className="prod-card">
              <div className="seal" aria-label={`${item.price} ${t.featured.unit}${item.per}`}>
                <strong>{item.price}:-</strong>
                <span>{item.per}</span>
              </div>
              <span className="prod-origin">{item.origin}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
