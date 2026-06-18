// Разовый скрипт правок офферов в Sanity для mobiilnelaen.ee
// Запуск: SANITY_WRITE_TOKEN=xxx node scripts/fix-offers.mjs
// Токен с правами Editor: https://sanity.io/manage → project nx0edyl5 → API → Tokens
import { createClient } from '@sanity/client';

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('❌ Нет SANITY_WRITE_TOKEN. Пример: SANITY_WRITE_TOKEN=skXXX node scripts/fix-offers.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'nx0edyl5',
  dataset: 'production',
  apiVersion: '2025-08-11',
  token,
  useCdn: false,
});

// Шаблон трекинга 123laen: /123laen/ — партнёрский аккаунт, d_data1 — сабтег источника
const aff = (domain, id) => `https://doafftracking.tech/${domain}/123laen/${id}?d_data1=mobiilnelaen`;
// Рабочая ссылка Primero через LeadGid (fin-lg), aff_id=41763, offer_id=6858, sub=mobiilnelaen
const PRIMERO_URL = 'https://fin-lg.com/aff_c?aff_id=41763&offer_id=6858&aff_sub=mobiilnelaen';

// Новые офферы (данные из каталога 123laen / bongabonga)
const newOffers = [
  {
    _id: 'offer-creditstar-kiirlaen',
    _type: 'loanOffer',
    providerName: 'Creditstar',
    slug: { _type: 'slug', current: 'creditstar' },
    loanType: 'kiirlaen',
    interestRate: 'al. 22,9%',
    maxAmount: 10000,
    maxTerm: 60,
    offerUrl: aff('creditstar.ee', 29293),
  },
  {
    _id: 'offer-creditstar-vaikelaen',
    _type: 'loanOffer',
    providerName: 'Creditstar',
    slug: { _type: 'slug', current: 'creditstar-vaikelaen' },
    loanType: 'väikelaen',
    interestRate: 'al. 22,9%',
    maxAmount: 10000,
    maxTerm: 60,
    offerUrl: aff('creditstar.ee', 29293),
  },
  {
    _id: 'offer-tfbank-vaikelaen',
    _type: 'loanOffer',
    providerName: 'TF Bank',
    slug: { _type: 'slug', current: 'tfbank-vaikelaen' },
    loanType: 'väikelaen',
    interestRate: '9,9% - 15,9%',
    maxAmount: 20000,
    maxTerm: 84,
    offerUrl: aff('tfbank.ee', 47166),
  },
  {
    _id: 'offer-tfbank-autolaen',
    _type: 'loanOffer',
    providerName: 'TF Bank',
    slug: { _type: 'slug', current: 'tfbank-autolaen' },
    loanType: 'autolaen',
    interestRate: '9,9% - 15,9%',
    maxAmount: 20000,
    maxTerm: 84,
    offerUrl: aff('tfbank.ee', 47166),
  },
];

async function run() {
  // 1. Удаляем мёртвый оффер Clementer (партнёрка не работает).
  // ВНИМАНИЕ: Esto — ДРУГОЙ кредитор и работает, его НЕ трогаем.
  console.log('🗑  Удаляю Clementer …');
  await client.delete('ecd93e1d-c2a3-4742-adda-db3d5ddd0189');

  // 2. Primero (autolaen): сеть doubleresults закрылась, но кредитор работает —
  //    переводим на рабочую ссылку LeadGid (fin-lg). Оффер НЕ удаляем.
  console.log('🔧 Меняю ссылку primero → LeadGid (fin-lg) …');
  await client.patch('3ee73c7a-895e-4960-9e35-efbbdb07353d')
    .set({ offerUrl: PRIMERO_URL })
    .commit();

  // 3. Чиним orphan ferratum: krediidilimiit → krediidikonto (такой страницы не было)
  console.log('🔧 Меняю ferratum loanType → krediidikonto …');
  await client.patch('7069fbc9-815b-4b2d-8f8d-a60c8b277499')
    .set({ loanType: 'krediidikonto' })
    .commit();

  // 4. Создаём новые офферы
  for (const o of newOffers) {
    console.log(`➕ ${o.providerName} (${o.loanType}) …`);
    await client.createOrReplace(o);
  }

  console.log('✅ Готово.');
}

run().catch((e) => { console.error(e); process.exit(1); });
