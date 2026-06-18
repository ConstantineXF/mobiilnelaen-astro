import type { LoanTypeContent } from './types';

const krediidiliin: LoanTypeContent = {
  slug: 'krediidiliin',
  loanType: 'krediidiliin',
  navLabel: 'Krediidiliin',

  seoText:
    'Otsid krediidiliini, mis on alati käepärast otse telefonis? MobiilneLaen.ee koondab Eesti krediidiliini pakkumised, et saaksid nutiseadmest võrrelda limiite, intresse ja KKM-i ning valida endale sobivaima paindliku krediidiliini.',

  metaTitle: 'Krediidiliin 2026 — paindlik krediidilimiit | MobiilneLaen.ee',
  metaDescription:
    'Krediidiliin annab püsiva krediidilimiidi, millest võtad raha vajaduse järgi ja maksad intressi vaid kasutatud osalt. Võrdle pakkujaid, intresse ja KKM-i.',

  h1: 'Krediidiliin — paindlik krediidilimiit alati käepärast',
  lead:
    'Krediidiliin on uuenev krediidilimiit, millest võtad raha siis, kui vaja, ja maksad intressi ainult kasutatud summalt. Võrdle pakkujaid ja vali endale sobivaim paindlik krediidiliin.',
  highlights: [
    { value: 'Püsiv limiit', label: 'Raha alati käepärast' },
    { value: 'Kasutatud osalt', label: 'Intress vaid sellelt' },
    { value: 'Paindlik', label: 'Tagasimakse sinu tempos' },
  ],

  intro: [
    '<strong>Krediidiliin</strong> on uuenev ehk korduvkasutatav krediidilimiit, mille pank või laenuandja sulle ühekordselt heaks kiidab. Erinevalt tavalisest laenust ei saa sa kogu summat korraga kätte — kasutad limiidist täpselt nii palju, kui parasjagu vajad, ja <strong>intressi arvestatakse ainult kasutusele võetud osalt</strong>. Kui oled kasutatud summa tagasi maksnud, vabaneb limiit uuesti ja saad seda korduvalt kasutada.',
    'Selline lahendus sobib neile, kes soovivad hoida rahalise puhvri pidevalt käepärast — ootamatud kulud, hooajalised väljaminekud või ajutine rahapuudus saavad kaetud ilma, et peaksid iga kord uut laenu taotlema. Enne valikut tasub alati võrrelda <strong>krediidi kulukuse määra (KKM)</strong>, sest just see näitab krediidiliini tegelikku hinda aastas, mitte ainult kuuintressi.',
  ],

  pros: [
    'Püsiv krediidilimiit, mida saad korduvalt kasutada',
    'Intressi maksad ainult kasutatud summalt, mitte kogu limiidilt',
    'Raha kohe kättesaadav ilma uut taotlust esitamata',
    'Paindlik tagasimakse — saad piires ise tempo valida',
    'Kasutamata limiit ei tekita reeglina kulu',
    'Sobib nii ootamatuteks kuludeks kui ka rahalise puhvrina',
  ],
  cons: [
    'Intress ja KKM on tavaliselt kõrgemad kui tavalisel pangalaenul',
    'Pidev kättesaadavus võib soodustada ülekulutamist',
    'Limiidi haldus- või kuutasud suurendavad tegelikku kulu',
    'Nõutav on püsiv sissetulek ja korrektne maksekäitumine',
  ],

  requirements: [
    'Vähemalt 18-aastane (mõnel pakkujal 21) Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto ning ID-kaart või Smart-ID / Mobiil-ID tuvastamiseks',
    'Piisav maksevõime laenuandja vastutustundliku laenamise hinnangu järgi',
  ],

  conditions: [
    { label: 'Krediidilimiit', value: 'alates ~500 €' },
    { label: 'Kasutusperiood', value: 'tähtajatu / uuenev' },
    { label: 'Intress', value: 'kasutatud osalt, alates ~18% aastas' },
    { label: 'Otsus', value: 'mõne minutiga' },
    { label: 'Väljamakse', value: 'limiidist kohe kontole' },
  ],

  sections: [
    {
      id: 'kuidas-krediidiliin-tootab',
      title: 'Kuidas krediidiliin töötab?',
      body: [
        'Krediidiliini puhul kinnitab laenuandja sulle <strong>krediidilimiidi</strong> — maksimaalse summa, mida võid kasutada. Sa ei pea kogu summat korraga võtma: kannad limiidist kontole täpselt nii palju, kui vajad, ja <strong>intressi hakatakse arvestama alles sellelt osalt, mida tegelikult kasutad</strong>. Kasutamata jäänud osa eest reeglina intressi ei maksta.',
        'Kui maksad kasutatud summa tagasi, taastub limiit ja saad seda uuesti kasutada — just see uuenev iseloom eristab krediidiliini ühekordsest laenust. Igakuine makse koosneb tavaliselt kasutatud summa osalisest tagasimaksest ja intressist; mida kiiremini põhiosa tagasi maksad, seda väiksemaks jääb intressikulu kokku. Sisuliselt on tegemist sama tootega nagu <strong>krediidikonto</strong> — mõlemad on uuenevad krediidilimiidid ja erinevad peamiselt pakkuja nimetuse poolest.',
      ],
    },
    {
      id: 'krediidiliin-vs-vaikelaen-krediidikonto',
      title: 'Krediidiliin vs väikelaen / krediidikonto',
      body: [
        '<strong>Väikelaen</strong> (ja kiirlaen) on ühekordne laen: saad kogu summa korraga kätte ja maksad intressi kogu laenujäägilt kindla graafiku alusel. <strong>Krediidiliin</strong> seevastu annab püsiva limiidi, millest võtad raha vajaduse järgi ja maksad intressi vaid kasutatud osalt — see on paindlikum lahendus korduvateks või ettearvamatuteks kuludeks.',
        'Praktikas on <strong>krediidiliin ja krediidikonto sisuliselt sama toode</strong> — mõlemad on uuenevad krediidilimiidid, mida pakkujad lihtsalt erineva nimetusega turundavad. Kui vajad ühekordset suuremat summat kindla ostu jaoks, on väikelaen sageli soodsam; kui soovid pidevat ligipääsu rahale ja paindlikku kasutust, sobib paindlik krediidiliin paremini.',
      ],
    },
  ],

  faq: [
    {
      q: 'Mis on krediidiliin ja kui suur saab limiit olla?',
      a: [
        'Krediidiliin on uuenev krediidilimiit, millest võtad raha vajaduse järgi. Limiidi suuruse määrab laenuandja sinu sissetuleku ja maksevõime põhjal — tavaliselt mõnesajast eurost kuni mitme tuhande euroni.',
        'Limiit kinnitatakse ühe korra ja seda saab korduvalt kasutada: pärast kasutatud summa tagasimaksmist vabaneb limiit taas täies mahus.',
      ],
    },
    {
      q: 'Kas intressi maksan kogu limiidilt või ainult kasutatud osalt?',
      a: [
        'Intressi arvestatakse ainult selle summa pealt, mille oled limiidist tegelikult kasutusele võtnud. Kasutamata osa eest intressi reeglina ei maksta.',
        'See teebki krediidiliini paindlikuks: kui limiiti parajasti ei kasuta, püsivad sinu kulud minimaalsed (võimalik kuu- või haldustasu välja arvatud).',
      ],
    },
    {
      q: 'Mille poolest erineb krediidiliin krediidikontost?',
      a: [
        'Sisuliselt suurt vahet ei ole — nii krediidiliin kui ka krediidikonto on uuenevad krediidilimiidid, kust võtad raha vajaduse järgi ja maksad intressi vaid kasutatud osalt. Tegemist on pigem sünonüümidega ja erinevus on enamasti vaid pakkuja kasutatavas nimetuses.',
        'Seetõttu tasub erinevaid pakkumisi võrrelda nimest sõltumata — vaata limiiti, intressi ja eelkõige KKM-i, mis näitab toote tegelikku aastast hinda.',
      ],
    },
    {
      q: 'Kuidas krediidiliini tagasi maksan?',
      a: [
        'Tagasimakse on paindlik: igakuine makse koosneb tavaliselt kasutatud summa osalisest tagasimaksest ja intressist. Soovi korral võid tasuda rohkem ja kasutatud osa kiiremini katta, mis vähendab intressikulu.',
        'Kasutatud summa tagasimaksmisel taastub limiit ja seda saab uuesti kasutada. Ennetähtaegne tagastamine on seadusega lubatud ilma trahvita.',
      ],
    },
    {
      q: 'Mis on KKM ja miks see krediidiliini puhul oluline on?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab krediidi tegelikku aastast hinda protsendina — see sisaldab intressi ja kõiki tasusid, sealhulgas võimalikke haldus- või kuutasusid. Just KKM-i alusel saad erinevaid krediidiliine ausalt võrrelda.',
        'Eestis on tarbijakrediidi KKM seadusega piiratud. Madal kuumakse ei tähenda alati soodsaimat lahendust, seega vaata alati ka kogukulu ja KKM-i.',
      ],
    },
    {
      q: 'Kas krediidiliini saab maksehäirega või ilma sissetulekuta?',
      a: [
        'Ei. Vastutustundliku laenamise nõuete kohaselt peab laenuandja hindama sinu maksevõimet, seega on regulaarne ja tõendatav sissetulek nõutav. Kehtiva maksehäire korral on krediidiliini saamine üldjuhul võimatu, sest pakkujad kontrollivad maksehäireregistrit.',
      ],
    },
  ],
};

export default krediidiliin;
