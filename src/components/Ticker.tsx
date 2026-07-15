"use client";

import { useLang } from "@/lib/i18n";

export default function Ticker() {
  const { t } = useLang();
  const items = [...t.ticker, ...t.ticker, ...t.ticker, ...t.ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div key={half} style={{ display: "flex" }}>
            {items.map((item, i) => (
              <span key={`${half}-${i}`} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
