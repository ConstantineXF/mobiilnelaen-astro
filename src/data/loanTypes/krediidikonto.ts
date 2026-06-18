import type { LoanTypeContent } from './types';

const krediidikonto: LoanTypeContent = {
  slug: 'krediidikonto',
  loanType: 'krediidikonto',
  navLabel: 'Krediidikonto',

  seoText:
    'Soovid paindlikku krediidikontot, mille saaks avada otse nutitelefonist? Siit leiad Eesti krediidikonto pakkumised ühes kohas — võrdle limiite, intresse ja KKM-i mugavalt mobiilist ning vali endale paindlikem krediidikonto.',

  metaTitle: 'Krediidikonto 2026 — paindlik krediidilimiit | MobiilneLaen.ee',
  metaDescription:
    'Krediidikonto on uuendatav krediidilimiit, kus maksad intressi ainult kasutatud summa pealt. Võrdle pakkujaid, limiite ja KKM-i ning vali paindlikem lahendus.',

  h1: 'Krediidikonto — paindlik krediidilimiit vajadusel',
  lead:
    'Krediidikonto on uuendatav krediidiliin, kust võtad raha täpselt nii palju kui vaja ja maksad intressi ainult kasutatud osa pealt. Tagasimaksmisel limiit vabaneb taas kasutamiseks.',
  highlights: [
    { value: '500–10 000 €', label: 'Krediidilimiit' },
    { value: 'Ainult kasutatult', label: 'Intress' },
    { value: 'Uuendatav', label: 'Limiit' },
  ],

  intro: [
    '<strong>Krediidikonto</strong> on uuendatav (revolving) krediidilimiit, mis toimib sarnaselt krediitkaardile, kuid ilma füüsilise kaardita. Pangaga sõlmitakse leping kindla limiidi peale ning sa võid sealt raha kasutada osade kaupa just siis, kui seda vaja on. Intressi arvestatakse <strong>ainult tegelikult kasutatud summa pealt</strong>, mitte kogu kinnitatud limiidilt.',
    'Peamine eelis on paindlikkus: kui maksad kasutatud osa tagasi, vabaneb limiit uuesti kasutamiseks ja sa ei pea iga kord uut laenu taotlema. See teeb krediidikonto mugavaks lahenduseks ebaregulaarsete või ootamatute väljaminekute katmiseks. Enne lepingu sõlmimist tasub alati võrrelda <strong>krediidi kulukuse määra (KKM)</strong>, mis näitab limiidi tegelikku aastast hinda.',
  ],

  pros: [
    'Intressi maksad ainult tegelikult kasutatud summa pealt, mitte kogu limiidilt',
    'Uuendatav limiit — tagasimaksmisel vabaneb raha taas kasutamiseks',
    'Üks leping katab korduvaid vajadusi, uut taotlust pole vaja',
    'Suur paindlikkus ebaregulaarsete ja ootamatute kulude katmiseks',
    'Taotlemine ja haldamine täielikult internetis',
    'Kasutamata limiidilt tavaliselt intressi ei arvestata',
  ],
  cons: [
    'KKM ja intress on kõrgemad kui tavalisel pangalaenul',
    'Pidev ligipääs krediidile võib soodustada ülekulutamist',
    'Limiidi haldus- või kuutasud võivad kogukulu suurendada',
    'Nõutav on püsiv sissetulek ja korrektne maksekäitumine',
  ],

  requirements: [
    'Vähemalt 18-aastane (mõnel pakkujal 21) Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto ja ID-kaart või Smart-ID / Mobiil-ID tuvastamiseks',
    'Piisav maksevõime vastutustundliku laenamise hindamisel',
  ],

  conditions: [
    { label: 'Krediidilimiit', value: '500 – 10 000 €' },
    { label: 'Intress', value: 'ainult kasutatud summalt' },
    { label: 'Limiit', value: 'uuendatav (revolving)' },
    { label: 'Otsus', value: 'mõne minutiga' },
    { label: 'Tagasimakse', value: 'paindlik, igakuine' },
  ],

  sections: [
    {
      id: 'kuidas-krediidikonto-tootab',
      title: 'Kuidas krediidikonto töötab?',
      body: [
        'Krediidikonto avamisel kinnitab pakkuja sulle <strong>krediidilimiidi</strong> — maksimaalse summa, mida võid kasutada. Sa ei pea seda summat korraga välja võtma: raha kantakse kontole täpselt nii palju kui parasjagu vajad. Intressi hakatakse arvestama alles kasutatud osa pealt, nii et kui limiit jääb puutumata, intressikulu ei teki.',
        'Iga kuu tasud minimaalse tagasimakse koos intressiga ning kasutatud summa väheneb. Niipea kui osa või kogu kasutatud krediit on tagasi makstud, <strong>vabaneb limiit uuesti</strong> ja saad seda korduvalt kasutada ilma uut lepingut sõlmimata. Just see uuendatav (revolving) loogika eristab krediidikontot ühekordsest laenust.',
      ],
    },
    {
      id: 'krediidikonto-vs-kiirlaen-krediitkaart',
      title: 'Krediidikonto vs kiirlaen ja krediitkaart',
      body: [
        '<strong>Kiirlaen</strong> on ühekordne väljamakse kindla summa ja tähtajaga: saad raha korraga ning maksad intressi kogu laenusumma pealt kuni lõpliku tagastamiseni. <strong>Krediidikonto</strong> seevastu annab pideva limiidi, kust võtad raha vajaduse järgi ja maksad intressi ainult kasutatud osalt — see sobib paremini korduvateks või ettearvamatuteks kuludeks.',
        'Võrreldes <strong>krediitkaardiga</strong> on krediidikonto põhiloogika sarnane (uuendatav limiit, intress kasutatult), kuid ilma füüsilise kaardita ja sageli internetipõhise haldusega. Krediitkaardil on lisaks ostude tegemise ja maksete mugavus, samas kui krediidikonto keskendub raha kontole kandmisele. Õige valik sõltub sellest, kas vajad pigem maksevahendit või paindlikku rahareservi.',
      ],
    },
  ],

  faq: [
    {
      q: 'Kuidas krediidikonto intressi arvestatakse?',
      a: [
        'Intressi arvestatakse ainult selle summa pealt, mille oled limiidist tegelikult kasutusele võtnud, ja ainult kasutusperioodi eest. Kui limiit jääb puutumata, intressikulu ei teki.',
        'See teeb krediidikonto soodsaks neile, kes vajavad raha ebaregulaarselt: maksad vaid tegeliku kasutuse, mitte kogu kinnitatud limiidi eest.',
      ],
    },
    {
      q: 'Mis juhtub limiidiga, kui kasutatud summa tagasi maksan?',
      a: [
        'Krediidikonto limiit on uuendatav: kui maksad kasutatud osa tagasi, vabaneb see summa taas kasutamiseks. Sa ei pea uut laenu taotlema ega lepingut uuendama — limiit on kogu lepingu kehtivuse jooksul korduvalt kasutatav.',
      ],
    },
    {
      q: 'Mille poolest erineb krediidikonto krediidiliinist ja krediitkaardist?',
      a: [
        'Krediidikonto ja krediidiliin tähistavad sisuliselt sama asja — uuendatavat krediidilimiiti, kust raha kasutada vajadusel. Krediitkaart toimib samal põhimõttel, kuid lisab füüsilise või virtuaalse kaardi ostude tegemiseks.',
        'Krediidikonto keskendub raha pangakontole kandmisele ja internetipõhisele haldusele ning sageli ei kaasne sellega kaarti.',
      ],
    },
    {
      q: 'Kas krediidikontot saab ennetähtaegselt tagasi maksta?',
      a: [
        'Jah. Seadus annab õiguse kasutatud krediit igal ajal osaliselt või täielikult ennetähtaegselt tagastada ning sel juhul väheneb ka intressikulu. Eraldi trahvi ennetähtaegse tagastamise eest reeglina ei ole.',
      ],
    },
    {
      q: 'Mis on KKM ja miks see krediidikonto puhul oluline on?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab krediidi tegelikku aastast hinda protsendina — see sisaldab intressi ja kõiki tasusid. KKM-i alusel saad erinevaid krediidikonto pakkumisi ausalt võrrelda. Eestis on tarbijakrediidi KKM seadusega piiratud.',
      ],
    },
    {
      q: 'Kas maksehäirega saab krediidikonto avada?',
      a: [
        'Kehtiva maksehäire korral on krediidikonto avamine üldjuhul võimatu, sest pakkujad kontrollivad maksehäireregistrit ja hindavad maksevõimet vastutustundliku laenamise nõuete kohaselt. Soovitame esmalt häire lahendada ja alles seejärel krediiti taotleda.',
      ],
    },
  ],
};

export default krediidikonto;
