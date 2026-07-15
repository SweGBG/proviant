# Proviant — En butik för delikatesser

Landningssida för delikatessbutiken Proviant, byggd runt butikens vintage-logga.

## Kom igång

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

## Stack

- Next.js 15 (App Router, `src/`-katalog)
- TypeScript
- Tailwind CSS v4 (+ eget designsystem i `globals.css`)
- Fonter via `next/font`: Cormorant Garamond (display) + Jost (body)

## Struktur

- `src/app/` — layout, sida, globala stilar
- `src/components/` — Header, Hero, Ticker, Categories, Featured, Story, Baskets, Visit, Newsletter, Footer, Reveal
- `src/lib/i18n.tsx` — SE/EN-ordböcker och språkcontext
- `public/logo.png` — butikens logga

## Funktioner

- Språkväxlare SE/EN (SVG-flaggor)
- Scrollanimationer (IntersectionObserver), ticker-band, vaxsigill-priser
- Mobilmeny (slide-down), brytpunkter 1100/768/480px, touchytor ≥ 48px
- `prefers-reduced-motion` respekteras

## Nästa steg

- Koppla nyhetsbrevsformuläret mot Resend/Supabase (`src/components/Newsletter.tsx`)
- Byt platshållaradress/telefon i `src/lib/i18n.tsx`
