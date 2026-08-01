// Типизированный контент-слой для страниц типов кредитов.
// Один объект = одна SEO-страница (lender-офферы подтягиваются из Sanity по loanType).

export interface FaqEntry {
  q: string;
  /** Абзацы ответа (обычный текст; для schema склеиваются). */
  a: string[];
}

export interface ContentSection {
  /** Якорь для TOC, ASCII-kebab. */
  id: string;
  title: string;
  /** HTML-абзацы (можно <ul>, <strong> и т.п. — рендерится через set:html в .prose). */
  body: string[];
}

export interface ConditionRow {
  label: string;
  value: string;
}

/**
 * Tüüpnäide reklaamiseaduse § 29 mõttes: kus näidatakse krediidipakkumist,
 * peab olema esitatud KKM ja representatiivne näide koos kogusummaga.
 */
export interface RepresentativeExample {
  /** Laenusumma näites, nt '2000 €'. */
  amount: string;
  /** Periood, nt '24 kuud'. */
  period: string;
  /** Fikseeritud intress aastas, nt '19,9%'. */
  interest: string;
  /** Krediidi kulukuse määr aastas, nt '24,6%'. */
  apr: string;
  /** Igakuine makse, nt '101,50 €'. */
  monthly: string;
  /** Tagasimakstav kogusumma, nt '2436 €'. */
  total: string;
  /** Lisamärkus (lepingutasu, kindlustus jms) — vaba tekst. */
  note?: string;
}

export interface LoanTypeContent {
  /** ASCII-слаг маршрута (совпадает с именем .astro-страницы). */
  slug: string;
  /** Значение loanType в Sanity (фильтр офферов). Может содержать ä/õ/ö/ü. */
  loanType: string;
  /** Подпись в хлебных крошках / TOC. */
  navLabel: string;

  // — SEO head —
  metaTitle: string;
  metaDescription: string;
  /** Вводный абзац сразу после H1: прямые ВЧ-вхождения + мобильный угол, НЕ определение термина. HTML допустим. */
  seoText: string;

  // — Hero —
  h1: string;
  lead: string;
  /** Короткие траст-факты под hero (3 шт). */
  highlights: { value: string; label: string }[];

  // — Тело —
  /** Вводные абзацы (HTML допустим). */
  intro: string[];
  pros: string[];
  cons: string[];
  /** Требования к заёмщику (nõuded). */
  requirements: string[];
  /** Краткая таблица условий (summa, periood, intress, vastus…). */
  conditions: ConditionRow[];
  /** Дополнительные H2-секции (идут в TOC). */
  sections: ContentSection[];
  faq: FaqEntry[];
  /** Тип-пример по §29 (показывается рядом с офферами). */
  example?: RepresentativeExample;
}
