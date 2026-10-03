"use client";

import { useLang } from "@/lib/i18n";

export default function Ticker() {
  const { t } = useLang();
  const items = [...t.ticker, ...t.ticker, ...t.ticker];
  return (
    <div className="ticker" aria-hidden="true" data-anim>
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div key={half} className="ticker-half">
            {items.map((item, i) => (
              <span key={`${half}-${i}`} className="ticker-item">
                {item}
                <i>◆</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
