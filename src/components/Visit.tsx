"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

// Opening hours: [open, close] per weekday, 0 = Sunday
const HOURS: [number, number][] = [[11, 16], [10, 19], [10, 19], [10, 19], [10, 19], [10, 19], [10, 17]];
const ROW_FOR_DAY = [2, 0, 0, 0, 0, 0, 1]; // which row in the list is "today"

function stockholmNow() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Stockholm", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.find((p) => p.type === "weekday")!.value);
  const h = Number(parts.find((p) => p.type === "hour")!.value) + Number(parts.find((p) => p.type === "minute")!.value) / 60;
  return { wd, h };
}

export default function Visit() {
  const { t } = useLang();
  const [now, setNow] = useState<{ wd: number; open: boolean } | null>(null);

  useEffect(() => {
    const tick = () => {
      const { wd, h } = stockholmNow();
      const [o, c] = HOURS[wd];
      setNow({ wd, open: h >= o && h < c });
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.visit.address)}`;

  return (
    <section className="visit" id="besok" data-anim>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{t.visit.eyebrow}</span>
          <h2 className="display mat">{t.visit.title}</h2>
          {now ? (
            <span className={`open-badge ${now.open ? "is-open" : ""}`}>
              <i />
              {now.open ? t.visit.openNow : t.visit.closedNow}
            </span>
          ) : null}
        </Reveal>
        <div className="visit-grid">
          <Reveal className="visit-col frame-lite">
            <h3>Proviant</h3>
            <p>{t.visit.address}</p>
            <p className="visit-note">{t.visit.note}</p>
            <a className="text-link" href={mapUrl} target="_blank" rel="noopener noreferrer">
              {t.visit.map} →
            </a>
          </Reveal>
          <Reveal className="visit-col frame-lite" delay={0.12}>
            <h3>{t.visit.hoursTitle}</h3>
            <ul>
              {t.visit.hours.map(([day, time], i) => (
                <li key={day} className={`hours-row ${now && ROW_FOR_DAY[now.wd] === i ? "today" : ""}`}>
                  <span>{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="visit-col frame-lite" delay={0.24}>
            <h3>{t.visit.contactTitle}</h3>
            <p>
              <a className="text-link" href={`tel:${t.visit.phone.replace(/[\s-]/g, "")}`}>{t.visit.phone}</a>
            </p>
            <p>
              <a className="text-link" href={`mailto:${t.visit.mail}`}>{t.visit.mail}</a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
