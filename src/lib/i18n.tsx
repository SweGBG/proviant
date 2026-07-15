"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "se" | "en";

const dict = {
  se: {
    nav: {
      sortiment: "Sortiment",
      disken: "Veckans disk",
      korgar: "Presentkorgar",
      historia: "Vår historia",
      besok: "Besök oss",
    },
    hero: {
      eyebrow: "Delikatessbutik · Est. 2026",
      lead:
        "Handplockade delikatesser från små producenter — lagrade ostar, lufttorkad chark, marmelader kokta i koppargryta och viner med själ.",
      cta1: "Se veckans disk",
      cta2: "Hitta hit",
    },
    ticker: ["Chark", "Ost", "Marmelad", "Nötter", "Vin", "God mat"],
    categories: {
      eyebrow: "Sortimentet",
      title: "Sex hyllor, noll genvägar",
      sub: "Allt i butiken är smakat, valt och älskat av oss. Inget hamnar på hyllan av en slump.",
      items: [
        {
          title: "Chark",
          text: "Lufttorkad skinka, fänkålssalami och coppa — skivas för hand i disken.",
        },
        {
          title: "Ost",
          text: "Lagrad comté, svensk gårdsost och blåmögel med rätt sting. Alltid smakprov.",
        },
        {
          title: "Marmelad",
          text: "Kokas i små satser: fikon till osten, bitter apelsin till frukosten.",
        },
        {
          title: "Nötter",
          text: "Rostade i butiken varje vecka — marconamandlar, valnötter, hasselnötter.",
        },
        {
          title: "Vin",
          text: "Små producenter, ärliga druvor. Vi hjälper dig para vinet med brickan.",
        },
        {
          title: "God mat",
          text: "Oliver, tapenader, tryffelhonung och annat som gör vardagen till fest.",
        },
      ],
    },
    featured: {
      eyebrow: "Veckans disk",
      title: "Det vi skivar, smakar och rekommenderar just nu",
      sub: "Disken byts varje vecka. Kom in och smaka — eller reservera på telefon.",
      unit: "kr",
      items: [
        {
          name: "Comté 24 mån",
          origin: "Jura, Frankrike",
          desc: "Nötig, djup och lätt kristallig. Diskens stolthet.",
          price: "129",
          per: "/hg",
        },
        {
          name: "Culatello di Zibello",
          origin: "Emilia-Romagna",
          desc: "Charkens kronjuvel — silkig, söt och sällsynt.",
          price: "189",
          per: "/hg",
        },
        {
          name: "Fikonmarmelad",
          origin: "Kokad i butiken",
          desc: "Mörk fikon, valnöt och en droppe portvin. Ostens bästa vän.",
          price: "95",
          per: "/burk",
        },
        {
          name: "Rostade marconamandlar",
          origin: "Valencia, Spanien",
          desc: "Rostas varje torsdag. Havssalt, olivolja, inget mer.",
          price: "79",
          per: "/påse",
        },
        {
          name: "Barbera d'Alba",
          origin: "Piemonte, Italien",
          desc: "Körsbär, örter och mjuka tanniner. Vän med hela disken.",
          price: "179",
          per: "/flaska",
        },
        {
          name: "Tryffelhonung",
          origin: "Toscana, Italien",
          desc: "Ringlas över lagrad ost. Farligt god.",
          price: "145",
          per: "/burk",
        },
      ],
    },
    story: {
      eyebrow: "Vår historia",
      title: "Le bon vivant — konsten att leva gott",
      p1: "Proviant föddes ur en enkel övertygelse: att god mat inte behöver vara komplicerad, men den måste vara ärlig. Vi reser till producenterna, smakar allt själva och tar bara hem det vi själva vill ställa på bordet.",
      p2: "I disken skivar vi för hand, i grytan kokar vi marmelad i små satser och över hyllorna hänger doften av nyrostade nötter. Kliv in, ta ett smakprov och stanna en stund — det är så här en delikatessbutik ska kännas.",
      sign: "— Familjen bakom Proviant",
    },
    baskets: {
      eyebrow: "Presentkorgar",
      title: "En korg säger mer än tusen ord",
      sub: "Vi plockar ihop korgar för alla tillfällen — bröllop, tack, jul eller bara för att. Berätta budget och smak, vi gör resten.",
      items: [
        {
          name: "Den lilla",
          price: "349 kr",
          desc: "En ost, en chark, en marmelad och ett paket kex. Perfekt tack-present.",
        },
        {
          name: "Le Bon Vivant",
          price: "749 kr",
          desc: "Två ostar, två charkuterier, marmelad, nötter och en flaska vin.",
          badge: "Mest älskad",
        },
        {
          name: "Hela kalaset",
          price: "1 295 kr",
          desc: "Diskens finaste till sällskapet — ostar, chark, tillbehör och två flaskor.",
        },
      ],
      cta: "Beställ en korg",
    },
    visit: {
      eyebrow: "Besök oss",
      title: "Kom in och smaka",
      address: "Storgatan 12, 114 51 Stockholm",
      hoursTitle: "Öppettider",
      hours: [
        ["Måndag–fredag", "10–19"],
        ["Lördag", "10–17"],
        ["Söndag", "11–16"],
      ],
      contactTitle: "Kontakt",
      phone: "08-12 34 56",
      mail: "hej@proviant.se",
      note: "Vi skivar, vakuumpackar och slår in — säg bara till.",
    },
    newsletter: {
      title: "Nyheter från disken",
      sub: "Veckans disk, nya viner och smakkvällar — direkt i din inkorg. Aldrig oftare än det förtjänas.",
      placeholder: "Din e-postadress",
      button: "Prenumerera",
      done: "Tack! Du står nu på listan.",
    },
    footer: {
      tagline: "En butik för delikatesser",
      rights: "Alla rättigheter förbehållna.",
    },
  },
  en: {
    nav: {
      sortiment: "Our range",
      disken: "This week",
      korgar: "Gift baskets",
      historia: "Our story",
      besok: "Visit us",
    },
    hero: {
      eyebrow: "Delicatessen · Est. 2026",
      lead:
        "Hand-picked delicacies from small producers — aged cheeses, air-dried charcuterie, jams simmered in copper pots and wines with soul.",
      cta1: "See this week's counter",
      cta2: "Find us",
    },
    ticker: ["Charcuterie", "Cheese", "Preserves", "Nuts", "Wine", "Good food"],
    categories: {
      eyebrow: "The range",
      title: "Six shelves, zero shortcuts",
      sub: "Everything in the shop is tasted, chosen and loved by us. Nothing ends up on a shelf by chance.",
      items: [
        {
          title: "Charcuterie",
          text: "Air-dried ham, fennel salami and coppa — sliced by hand at the counter.",
        },
        {
          title: "Cheese",
          text: "Aged comté, Swedish farm cheese and blues with proper bite. Samples, always.",
        },
        {
          title: "Preserves",
          text: "Cooked in small batches: fig for the cheese, bitter orange for breakfast.",
        },
        {
          title: "Nuts",
          text: "Roasted in-store every week — marcona almonds, walnuts, hazelnuts.",
        },
        {
          title: "Wine",
          text: "Small producers, honest grapes. We'll pair the bottle with your board.",
        },
        {
          title: "Good food",
          text: "Olives, tapenades, truffle honey and other everyday luxuries.",
        },
      ],
    },
    featured: {
      eyebrow: "This week's counter",
      title: "What we're slicing, tasting and recommending right now",
      sub: "The counter changes every week. Come in and taste — or reserve by phone.",
      unit: "kr",
      items: [
        {
          name: "Comté 24 months",
          origin: "Jura, France",
          desc: "Nutty, deep and lightly crystalline. The pride of the counter.",
          price: "129",
          per: "/100g",
        },
        {
          name: "Culatello di Zibello",
          origin: "Emilia-Romagna",
          desc: "The crown jewel of charcuterie — silky, sweet and rare.",
          price: "189",
          per: "/100g",
        },
        {
          name: "Fig preserve",
          origin: "Made in-store",
          desc: "Dark fig, walnut and a drop of port. Cheese's best friend.",
          price: "95",
          per: "/jar",
        },
        {
          name: "Roasted marcona almonds",
          origin: "Valencia, Spain",
          desc: "Roasted every Thursday. Sea salt, olive oil, nothing else.",
          price: "79",
          per: "/bag",
        },
        {
          name: "Barbera d'Alba",
          origin: "Piedmont, Italy",
          desc: "Cherry, herbs and soft tannins. Friends with the whole counter.",
          price: "179",
          per: "/bottle",
        },
        {
          name: "Truffle honey",
          origin: "Tuscany, Italy",
          desc: "Drizzled over aged cheese. Dangerously good.",
          price: "145",
          per: "/jar",
        },
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "Le bon vivant — the art of living well",
      p1: "Proviant was born from a simple conviction: good food doesn't need to be complicated, but it must be honest. We travel to the producers, taste everything ourselves and only bring home what we'd put on our own table.",
      p2: "At the counter we slice by hand, in the pot we simmer preserves in small batches, and above the shelves hangs the scent of freshly roasted nuts. Step in, have a taste and stay a while — this is how a delicatessen should feel.",
      sign: "— The family behind Proviant",
    },
    baskets: {
      eyebrow: "Gift baskets",
      title: "A basket says more than a thousand words",
      sub: "We compose baskets for every occasion — weddings, thank-yous, Christmas or just because. Tell us budget and taste, we do the rest.",
      items: [
        {
          name: "The small one",
          price: "349 kr",
          desc: "One cheese, one charcuterie, a preserve and crackers. The perfect thank-you.",
        },
        {
          name: "Le Bon Vivant",
          price: "749 kr",
          desc: "Two cheeses, two charcuteries, preserve, nuts and a bottle of wine.",
          badge: "Most loved",
        },
        {
          name: "The whole feast",
          price: "1,295 kr",
          desc: "The counter's finest for a crowd — cheeses, charcuterie, sides and two bottles.",
        },
      ],
      cta: "Order a basket",
    },
    visit: {
      eyebrow: "Visit us",
      title: "Come in and taste",
      address: "Storgatan 12, 114 51 Stockholm",
      hoursTitle: "Opening hours",
      hours: [
        ["Monday–Friday", "10–19"],
        ["Saturday", "10–17"],
        ["Sunday", "11–16"],
      ],
      contactTitle: "Contact",
      phone: "+46 8 12 34 56",
      mail: "hej@proviant.se",
      note: "We slice, vacuum-pack and gift-wrap — just say the word.",
    },
    newsletter: {
      title: "News from the counter",
      sub: "This week's counter, new wines and tasting nights — straight to your inbox. Never more often than it deserves.",
      placeholder: "Your email address",
      button: "Subscribe",
      done: "Thank you! You're on the list.",
    },
    footer: {
      tagline: "A shop for delicacies",
      rights: "All rights reserved.",
    },
  },
};

export type Dict = (typeof dict)["se"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "se", setLang: () => {}, t: dict.se });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("se");
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
