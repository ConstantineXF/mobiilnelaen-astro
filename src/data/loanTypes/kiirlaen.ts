import type { LoanTypeContent } from './types';

const kiirlaen: LoanTypeContent = {
  slug: 'kiirlaen',
  loanType: 'kiirlaen',
  navLabel: 'Kiirlaen',

  seoText:
    'Otsid kiirlaenu, mille saaks vormistada kohe ja otse telefonist? MobiilneLaen.ee koondab Eesti kiirlaenud ühele lehele, et saaksid mugavalt nutiseadmest võrrelda intresse, summasid ja KKM-i ning valida soodsaima kiirlaenu juba mõne minutiga.',

  metaTitle: 'Kiirlaen 2026 — võrdle kiirlaene ja taotle kohe | MobiilneLaen.ee',
  metaDescription:
    'Vajad raha kiiresti? Võrdle Eesti kiirlaene ühel lehel: summad 100–10 000 €, vastus minutitega, raha samal päeval. Vaata intresse, tingimusi ja KKM-i.',

  h1: 'Kiirlaen — võrdle ja taotle kohe',
  lead:
    'Kiirlaen on tagatiseta laen ootamatuteks väljaminekuteks. Võrdle pakkujaid, vali soodsaim KKM ja saa raha sageli juba samal päeval.',
  highlights: [
    { value: '100–10 000 €', label: 'Laenusumma' },
    { value: '~15 min', label: 'Vastus taotlusele' },
    { value: 'Samal päeval', label: 'Raha kontole' },
  ],

  intro: [
    '<strong>Kiirlaen</strong> on lühi- või keskpika tähtajaga tagatiseta tarbimislaen, mille saab taotleda täielikult internetis ilma käendaja või tagatiseta. Selle peamine eelis on kiirus: enamik pakkujaid annab laenuotsuse mõne minutiga ja kannab raha kontole sama tööpäeva jooksul.',
    'Kiirlaen sobib ootamatute kulude katmiseks — auto remont, kodumasina vahetus või arve, mis ei oota palgapäeva. Enne taotlemist tasub alati võrrelda <strong>krediidi kulukuse määra (KKM)</strong>, sest just see näitab laenu tegelikku hinda aastas, mitte ainult intressi.',
  ],

  pros: [
    'Taotlemine 100% internetis, vastus tavaliselt minutitega',
    'Raha kontole sageli samal tööpäeval',
    'Tagatist ega käendajat ei nõuta',
    'Paindlik summa ja tagasimakseperiood',
    'Ennetähtaegne tagastamine on seadusega lubatud ilma trahvita',
  ],
  cons: [
    'Kõrgem intress ja KKM kui pangalaenul',
    'Väiksemad summad kui tagatisega laenudel',
    'Nõutav püsiv sissetulek ja korrektne maksekäitumine',
    'Vastutustundetu kasutamine võib viia võlgade spiraali',
  ],

  requirements: [
    'Vähemalt 18-aastane (mõnel pakkujal 21) Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto ning ID-kaart või Smart-ID / Mobiil-ID tuvastamiseks',
  ],

  conditions: [
    { label: 'Laenusumma', value: '100 – 10 000 €' },
    { label: 'Periood', value: '1 – 60 kuud' },
    { label: 'Intress', value: 'alates ~18% aastas' },
    { label: 'Otsus', value: 'mõne minutiga' },
    { label: 'Väljamakse', value: 'samal tööpäeval' },
  ],

  sections: [
    {
      id: 'kuidas-valida',
      title: 'Kuidas valida soodsaim kiirlaen?',
      body: [
        'Võrdle pakkumisi alati <strong>KKM-i</strong> (krediidi kulukuse määr) alusel — see sisaldab nii intressi kui ka kõiki tasusid ja näitab laenu tegelikku aastast hinda. Madalaim kuumakse ei tähenda alati soodsaimat laenu, kui periood on pikk.',
        'Vaata ka lepingu- ja haldustasusid, tagasimakse paindlikkust ning seda, kas ennetähtaegne tagastamine on tasuta. Laenu kogukulu sõltub eelkõige perioodi pikkusest: mida pikem tähtaeg, seda rohkem intressi kokku maksad.',
      ],
    },
    {
      id: 'kiirlaen-vs-vaikelaen',
      title: 'Kiirlaen vs väikelaen — mis vahe on?',
      body: [
        '<strong>Kiirlaen</strong> on mõeldud väiksemateks summadeks ja kiireks väljamakseks, sageli kõrgema intressiga. <strong>Väikelaen</strong> on tavaliselt suurem ja pikema tähtajaga tarbimislaen madalama KKM-iga, mille menetlus võib võtta veidi kauem.',
        'Kui vajad raha kohe ja väikest summat lühikeseks ajaks, sobib kiirlaen. Suurema ostu või remondi rahastamiseks on väikelaen üldjuhul soodsam valik.',
      ],
    },
  ],

  faq: [
    {
      q: 'Kui kiiresti saan kiirlaenu raha kätte?',
      a: [
        'Enamik pakkujaid teeb laenuotsuse mõne minutiga ja kannab raha samal tööpäeval. Kui taotled ja allkirjastad lepingu pangapäeval, jõuab raha kontole tavaliselt mõne tunni jooksul.',
      ],
    },
    {
      q: 'Kas kiirlaenu saab ilma sissetulekuta?',
      a: [
        'Ei. Vastutustundliku laenamise nõuete kohaselt peab laenuandja hindama sinu maksevõimet, seega on regulaarne ja tõendatav sissetulek nõutav.',
      ],
    },
    {
      q: 'Mis on KKM ja miks see oluline on?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab laenu tegelikku aastast hinda protsendina — see sisaldab intressi ja kõiki tasusid. KKM-i alusel saad erinevaid pakkumisi ausalt võrrelda. Eestis on tarbijakrediidi KKM seadusega piiratud.',
      ],
    },
    {
      q: 'Kas kiirlaenu saab ennetähtaegselt tagasi maksta?',
      a: [
        'Jah. Seadus annab õiguse laen igal ajal osaliselt või täielikult ennetähtaegselt tagastada ning sel juhul väheneb ka intressikulu. Lisatasu ennetähtaegse tagastamise eest reeglina ei ole.',
      ],
    },
    {
      q: 'Kas maksehäirega saab kiirlaenu?',
      a: [
        'Kehtiva maksehäire korral on kiirlaenu saamine üldjuhul võimatu, sest pakkujad kontrollivad maksehäireregistrit. Soovitame esmalt häire lahendada ja alles seejärel uut laenu taotleda.',
      ],
    },
  ],
};

export default kiirlaen;
