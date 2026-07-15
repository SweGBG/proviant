"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Newsletter() {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // TODO: koppla mot Resend/Supabase
    setDone(true);
  };

  return (
    <section id="nyhetsbrev">
      <div className="wrap">
        <Reveal className="newsletter-inner">
          <div className="ornament" aria-hidden="true">
            ◆
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.5rem)", margin: "1.2rem 0 0.8rem" }}
          >
            {t.newsletter.title}
          </h2>
          <p style={{ color: "rgba(53,32,31,0.75)", lineHeight: 1.7 }}>
            {t.newsletter.sub}
          </p>
          {done ? (
            <p className="newsletter-done">{t.newsletter.done}</p>
          ) : (
            <form className="newsletter-form" onSubmit={submit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                aria-label={t.newsletter.placeholder}
              />
              <button type="submit" className="btn btn-primary">
                {t.newsletter.button}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
