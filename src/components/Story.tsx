"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Story() {
  const { t } = useLang();
  return (
    <section id="historia">
      <div className="wrap story-grid">
        <Reveal className="story-frame">
          <Image
            src="/logo.png"
            alt="Proviants emblem"
            width={704}
            height={384}
          />
        </Reveal>
        <Reveal className="story-text" delay={0.15}>
          <span className="eyebrow">{t.story.eyebrow}</span>
          <h2 className="display">{t.story.title}</h2>
          <p>{t.story.p1}</p>
          <p>{t.story.p2}</p>
          <p className="story-sign">{t.story.sign}</p>
        </Reveal>
      </div>
    </section>
  );
}
