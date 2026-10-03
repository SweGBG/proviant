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
    <section id="nyhetsbrev" className="newsletter" data-anim>
      <div className="wrap">
        <Reveal className="newsletter-inner">
          <div className="ornament" aria-hidden="true">
            <i />◆<i />
          </div>
          <h2 className="display mat">{t.newsletter.title}</h2>
          <p className="newsletter-sub">{t.newsletter.sub}</p>
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
                <span>{t.newsletter.button}</span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
