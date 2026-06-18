import type { LoanTypeContent } from './types';

const krediitkaart: LoanTypeContent = {
  slug: 'krediitkaart',
  loanType: 'krediitkaart',
  navLabel: 'Krediitkaart',

  seoText:
    'Otsid krediitkaarti intressivaba perioodiga, mille saaks vormistada otse telefonist? Võrdle Eesti krediitkaardi pakkumisi ühes kohas — vaata limiite, aastatasu ja KKM-i ning vali endale sobivaim krediitkaart mugavalt nutiseadmest.',

  metaTitle: 'Krediitkaart 2026 — intressivaba periood ja limiit | MobiilneLaen.ee',
  metaDescription:
    'Krediitkaart püsiva limiidi ja intressivaba perioodiga: tasu ostud õigeaegselt ja väldi intressi. Vaata tingimusi, aastatasu, KKM-i ja võrdle pakkumisi.',

  h1: 'Krediitkaart — intressivaba periood ja püsiv limiit',
  lead:
    'Krediitkaart annab püsiva krediidilimiidi ja intressivaba perioodi: kui tasud kasutatud summa tähtajaks, intressi ei lisandu. Mugav igapäevasteks ostudeks nii poes kui internetis.',
  highlights: [
    { value: 'kuni ~45–50 päeva', label: 'Intressivaba periood' },
    { value: 'Püsiv limiit', label: 'Korduvkasutus' },
    { value: 'Pood ja e-pood', label: 'Mugav maksevahend' },
  ],

  intro: [
    '<strong>Krediitkaart</strong> on füüsiline või virtuaalne maksevahend, millega on seotud panga antud püsiv krediidilimiit. Erinevalt deebetkaardist ei kasuta sa oma raha, vaid panga krediiti, mille maksad hiljem tagasi. Krediitkaardi peamine eelis on <strong>intressivaba periood</strong> (intressivaba periood) — kui tasud kuu jooksul kasutatud summa õigeaegselt täies mahus, siis intressi ei lisandu.',
    'Krediitkaart sobib igapäevasteks ostudeks, reisimiseks ja internetiostudeks, kus on vaja kindlat ja rahvusvaheliselt aktsepteeritud maksevahendit. Limiit on korduvkasutatav: kui tagastad kasutatud osa, vabaneb limiit uuesti. Üks levinud krediitkaardi pakkuja Eestis on <strong>Coop Pank</strong>. Enne valikut tasub võrrelda aastatasu, intressi ja <strong>krediidi kulukuse määra (KKM)</strong>.',
  ],

  pros: [
    'Intressivaba periood — õigeaegsel tasumisel intressi ei lisandu',
    'Püsiv ja korduvkasutatav krediidilimiit ilma uue taotluseta',
    'Mugav maksevahend nii poes, e-poes kui reisil',
    'Sobib ka ettenägematuteks kuludeks kiire varuna',
    'Sageli lisahüved: ostukaitse, reisikindlustus või tagasimaksed',
    'Füüsiline ja virtuaalkaart turvalisteks internetiostudeks',
  ],
  cons: [
    'Intressivaba perioodi ületamisel rakendub intress kogu kasutatud summalt',
    'Tavaliselt on aastatasu (aastatasu) ja muud teenustasud',
    'Sularaha väljavõtt on enamasti tasuline ja ilma intressivaba perioodita',
    'Minimaalse tagasimakse tasumine pikendab võlga ja suurendab kogukulu',
  ],

  requirements: [
    'Vähemalt 18-aastane Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek maksevõime hindamiseks',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto ning ID-kaart, Smart-ID või Mobiil-ID tuvastamiseks',
    'Positiivne krediidiotsus pärast maksevõime hindamist',
  ],

  conditions: [
    { label: 'Krediidilimiit', value: 'individuaalne, püsiv' },
    { label: 'Intressivaba periood', value: 'kuni ~45–50 päeva' },
    { label: 'Aastatasu', value: 'sõltub pakkujast' },
    { label: 'Intress', value: 'rakendub limiidi tagastamata osalt' },
    { label: 'Kasutus', value: 'pood, e-pood, reis' },
  ],

  sections: [
    {
      id: 'kuidas-intressivaba-periood-tootab',
      title: 'Kuidas intressivaba periood töötab?',
      body: [
        '<strong>Intressivaba periood</strong> tähendab ajavahemikku ostu tegemisest kuni arve tasumise tähtajani, mille jooksul kasutatud krediidilt intressi ei arvestata. Periood koosneb tavaliselt jooksvast arveldustsüklist (nt üks kuu) ning sellele järgnevast tasumise tähtajast — kokku sageli kuni 45–50 päeva. Kui tasud kasutatud summa selle aja jooksul täies mahus, kasutad panga raha tasuta.',
        'Oluline on tasuda kogu kasutatud summa, mitte ainult minimaalne tagasimakse. Kui tasud vaid osa või jätad tähtaja ületama, rakendub intress ja intressivaba periood kaob — sellisel juhul muutub krediitkaart kallimaks maksevahendiks. Sularaha väljavõtule intressivaba periood reeglina ei kehti ning intress hakkab jooksma kohe.',
      ],
    },
    {
      id: 'krediitkaart-vs-krediidikonto',
      title: 'Krediitkaart vs krediidikonto — mis vahe on?',
      body: [
        '<strong>Krediitkaart</strong> on konkreetne maksevahend (füüsiline või virtuaalne kaart), millega tasud ostude eest poes ja internetis ning mille peamine võlu on intressivaba periood. <strong>Krediidikonto</strong> on pigem paindlik arvelduskrediit või limiidiga konto, kust saad raha kasutada ja tagasi maksta, kuid millel ei pruugi olla kaardiga seotud igapäevast maksefunktsiooni ega samasugust intressivaba perioodi.',
        'Lihtsustatult: krediitkaart sobib igapäevasteks ostudeks ja õigeaegsel tasumisel intressivabaks kasutamiseks, krediidikonto aga paindliku rahapuhvrina, kus oluline on kiire ligipääs limiidile. Mõlema puhul tasub enne lepingut vaadata aastatasu, intressi ja KKM-i ning hinnata, kumb sinu kulumustriga paremini sobib.',
      ],
    },
  ],

  faq: [
    {
      q: 'Kuidas töötab krediitkaardi intressivaba periood?',
      a: [
        'Intressivaba periood on aeg ostu hetkest kuni arve tasumise tähtajani, mille jooksul kasutatud krediidilt intressi ei arvestata. Kui tasud kogu kuu jooksul kasutatud summa õigeaegselt ja täies mahus, ei pea intressi maksma.',
        'Periood võib ulatuda kuni umbes 45–50 päevani sõltuvalt pakkujast ja sellest, millal kuus ostu teed. Tähtaja ületamisel või osalisel tasumisel intressivaba periood kaob ja intress rakendub.',
      ],
    },
    {
      q: 'Kas krediitkaardil on aastatasu?',
      a: [
        'Enamasti on krediitkaardil aastatasu (aastatasu) ning võimalikud lisatasud, näiteks kaardi väljastamise või sularaha väljavõtu tasu. Tasude suurus sõltub pakkujast ja kaardi tüübist.',
        'Tegeliku hinna hindamiseks võrdle alati krediidi kulukuse määra (KKM), mis koondab intressi ja tasud üheks aastaseks näitajaks ning võimaldab pakkumisi ausalt kõrvutada.',
      ],
    },
    {
      q: 'Kas krediitkaardiga saab sularaha välja võtta?',
      a: [
        'Jah, krediitkaardiga saab tavaliselt sularaha välja võtta, kuid see on enamasti tasuline ega kuulu intressivaba perioodi alla. Sularaha väljavõtult hakkab intress reeglina jooksma kohe väljavõtu hetkest.',
        'Seetõttu on krediitkaart mõeldud eelkõige ostude tasumiseks, mitte sularaha allikaks. Suuremaks rahavajaduseks võib soodsam olla mõni muu laenutoode.',
      ],
    },
    {
      q: 'Mis vahe on krediitkaardil ja deebetkaardil?',
      a: [
        'Deebetkaardiga maksad oma kontol oleva rahaga, krediitkaardiga aga panga antud krediidilimiidiga, mille tagastad hiljem. Krediitkaardil on intressivaba periood ja sageli lisahüved, deebetkaardil neid üldjuhul ei ole.',
        'Krediitkaart sobib seega ka olukorras, kus raha laekub hiljem kui ost tehakse, kui maksed õigeaegselt tasutakse.',
      ],
    },
    {
      q: 'Mis juhtub, kui ma intressivaba perioodi sees tagasi ei maksa?',
      a: [
        'Kui sa ei tasu kasutatud summat intressivaba perioodi jooksul täies mahus, rakendub kogu jäägile intress ja krediitkaart muutub kallimaks. Ainult minimaalse tagasimakse tasumine pikendab võlga ja suurendab kogukulu.',
        'Vastutustundliku laenamise põhimõtte kohaselt tasub krediitkaarti kasutada nii, et igakuine kasutatud summa oleks õigeaegselt tagasimakstav — see hoiab maksevahendi intressivabana.',
      ],
    },
    {
      q: 'Kuidas määratakse krediitkaardi limiit?',
      a: [
        'Krediidilimiidi määrab pakkuja sinu maksevõime hindamise põhjal, arvestades sissetulekut, olemasolevaid kohustusi ja maksekäitumist. Limiit on püsiv ja korduvkasutatav: tagastatud osa vabaneb taas kasutamiseks.',
        'Limiidi suurust saab tavaliselt hiljem taotluse alusel muuta. KKM seadusega piiratud tarbijakrediidile kehtib ka krediitkaardi puhul.',
      ],
    },
  ],
};

export default krediitkaart;
