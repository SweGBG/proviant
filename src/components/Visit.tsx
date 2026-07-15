"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Visit() {
  const { t } = useLang();
  return (
    <section className="visit" id="besok">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t.visit.eyebrow}</span>
          <h2 className="display">{t.visit.title}</h2>
        </Reveal>
        <div className="visit-grid">
          <Reveal className="visit-col">
            <h3>Proviant</h3>
            <p>{t.visit.address}</p>
            <p style={{ marginTop: "0.8rem", fontStyle: "italic", opacity: 0.8 }}>
              {t.visit.note}
            </p>
          </Reveal>
          <Reveal className="visit-col" delay={0.12}>
            <h3>{t.visit.hoursTitle}</h3>
            <ul>
              {t.visit.hours.map(([day, time]) => (
                <li key={day} className="hours-row">
                  <span>{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="visit-col" delay={0.24}>
            <h3>{t.visit.contactTitle}</h3>
            <p>
              <a href={`tel:${t.visit.phone.replace(/[\s-]/g, "")}`}>
                {t.visit.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${t.visit.mail}`}>{t.visit.mail}</a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
