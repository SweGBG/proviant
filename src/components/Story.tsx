"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Story() {
  const { t } = useLang();
  return (
    <section id="historia" className="story" data-anim>
      <div className="wrap story-grid">
        <Reveal className="story-frame">
          <div className="gilt">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Proviants emblem" width={704} height={384} loading="lazy" />
            <span className="gloss" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal className="story-text" delay={0.15}>
          <span className="eyebrow">{t.story.eyebrow}</span>
          <h2 className="display mat">{t.story.title}</h2>
          <p className="line">{t.story.p1}</p>
          <p className="line l2">{t.story.p2}</p>
          <p className="story-sign">{t.story.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}
