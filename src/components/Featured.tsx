"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

/* This week's counter: product labels hanging on twine, swaying gently, with a wax-seal price that stamps in. */
export default function Featured() {
  const { t } = useLang();
  return (
    <section className="featured" id="disken" data-anim>
      <div className="wrap">
        <Reveal className="section-head light">
          <span className="eyebrow">{t.featured.eyebrow}</span>
          <h2 className="display mat">{t.featured.title}</h2>
          <p>{t.featured.sub}</p>
        </Reveal>
        <div className="prod-grid">
          {t.featured.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.12} as="article" className="prod-card">
              <span className="twine" aria-hidden="true" />
              <div className="tag" style={{ ["--sw" as string]: `${5 + (i % 3) * 1.3}s`, ["--sd" as string]: `${-i * 0.7}s` }}>
                <span className="tag-hole" aria-hidden="true" />
                <span className="prod-origin">{item.origin}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="seal" aria-label={`${item.price} ${t.featured.unit}${item.per}`}>
                  <strong>{item.price}:-</strong>
                  <span>{item.per}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
