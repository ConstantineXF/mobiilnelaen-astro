import type { LoanTypeContent } from './types';

const vaikelaen: LoanTypeContent = {
  slug: 'vaikelaen',
  loanType: 'väikelaen',
  navLabel: 'Väikelaen',

  seoText:
    'Vajad väikelaenu suurema ostu, remondi või reisi jaoks? Võrdle Eesti väikelaene otse mobiilist — MobiilneLaen.ee aitab leida soodsaima väikelaenu madalaima KKM-i ja kindla kuumaksega, ilma et peaksid arvuti taha istuma.',

  metaTitle: 'Väikelaen 2026 — võrdle ja taotle soodsalt',
  metaDescription:
    'Väikelaen suuremateks plaanideks: summad kuni 20 000 €, periood kuni 84 kuud, tagatiseta. Võrdle pakkujaid KKM-i alusel ja leia kindla kuumaksega laen.',

  h1: 'Väikelaen — võrdle soodsamaid pakkumisi',
  lead:
    'Väikelaen on tagatiseta tarbimislaen suuremateks väljaminekuteks pikema tähtaja ja madalama KKM-iga kui kiirlaen. Võrdle pakkujaid ja vali kindel kuumakse.',
  highlights: [
    { value: 'kuni 20 000 €', label: 'Laenusumma' },
    { value: 'kuni 84 kuud', label: 'Tagasimakseperiood' },
    { value: 'alates 8,9%', label: 'Intress aastas' },
  ],

  intro: [
    '<strong>Väikelaen</strong> on tagatiseta tarbimislaen, mis sobib suuremate ja pikemaajaliste plaanide rahastamiseks — kodu remont, suurem ost, auto või olemasolevate laenude refinantseerimine. Erinevalt kiirlaenust on summad suuremad (sageli kuni 10 000–20 000 €) ja tagasimakseperiood pikem (kuni 72–84 kuud), mistõttu kuumakse jääb tavaliselt taskukohasemaks.',
    'Väikelaenu peamine eelis on madalam <strong>krediidi kulukuse määr (KKM)</strong> ja sageli fikseeritud intress, mis tähendab ühtlast ja ettearvatavat kuumakset kogu perioodi vältel. Enne taotlemist tasub pakkumisi alati võrrelda just KKM-i alusel, sest see näitab laenu tegelikku aastast hinda koos kõigi tasudega.',
  ],

  pros: [
    'Suuremad summad kui kiirlaenul — sageli kuni 20 000 €',
    'Pikem tagasimakseperiood (kuni 72–84 kuud) ja seega väiksem kuumakse',
    'Madalam KKM ja sageli fikseeritud intress kogu perioodiks',
    'Kindel ja ettearvatav kuumakse aitab eelarvet planeerida',
    'Sobib hästi olemasolevate kallimate laenude refinantseerimiseks',
    'Tagatist ega käendajat üldjuhul ei nõuta, taotlemine internetis',
  ],
  cons: [
    'Kõrgem intress ja KKM kui tagatisega pangalaenul (nt kodulaenul)',
    'Pikk periood tähendab suuremat intressikulu kokku',
    'Otsus võib võtta kauem kui kiirlaenul, eriti suuremate summade puhul',
    'Nõuab püsivat sissetulekut ja korrektset maksekäitumist',
  ],

  requirements: [
    'Vähemalt 18-aastane (mõnel pakkujal 21) Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek piisava maksevõime tõendamiseks',
    'Kehtivate maksehäirete puudumine maksehäireregistris',
    'Eesti pangakonto raha väljamaksmiseks ja tagasimakseteks',
    'ID-kaart või Smart-ID / Mobiil-ID isiku tuvastamiseks ja lepingu allkirjastamiseks',
  ],

  conditions: [
    { label: 'Laenusumma', value: '500 – 20 000 €' },
    { label: 'Periood', value: '6 – 84 kuud' },
    { label: 'Intress', value: 'alates ~8,9% aastas' },
    { label: 'KKM', value: 'tüüpiliselt madalam kui kiirlaenul' },
    { label: 'Otsus', value: 'tavaliselt samal tööpäeval' },
  ],

  sections: [
    {
      id: 'kuidas-valida',
      title: 'Kuidas valida soodsaim väikelaen?',
      body: [
        'Võrdle pakkumisi alati <strong>KKM-i</strong> (krediidi kulukuse määr) alusel — see hõlmab nii intressi kui ka lepingu- ja haldustasusid ning näitab laenu tegelikku aastast hinda. Madalaim kuumakse ei pruugi tähendada soodsaimat laenu, kui periood on pikk: pikema tähtajaga maksad intressi kokku rohkem, isegi kui igakuine makse tundub väiksem.',
        'Pööra tähelepanu sellele, kas intress on fikseeritud või ujuv, kui suur on lepingutasu ning kas ennetähtaegne tagastamine on tasuta. Vali summa ja periood, mille kuumakse mahub mugavalt sinu eelarvesse — vastutustundlik laenamine tähendab, et laenukohustused ei tohiks ületada sinu reaalset maksevõimet.',
      ],
    },
    {
      id: 'vaikelaen-vs-kiirlaen',
      title: 'Väikelaen vs kiirlaen — mis vahe on?',
      body: [
        '<strong>Kiirlaen</strong> on mõeldud väiksemateks summadeks ja võimalikult kiireks väljamakseks, sageli kõrgema intressi ja lühema perioodiga. <strong>Väikelaen</strong> on tüüpiliselt suurem (kuni 20 000 €) ja pikema tähtajaga (kuni 84 kuud) ning selle KKM on üldjuhul madalam, mistõttu suuremate kulude rahastamiseks tuleb see soodsam.',
        'Kui vajad väikest summat kohe ja lühikeseks ajaks, sobib kiirlaen. Kui aga rahastad suuremat ostu, remonti või soovid mitu kallimat laenu ühte soodsamasse makse refinantseerida, on väikelaen reeglina mõistlikum ja odavam valik.',
      ],
    },
    {
      id: 'turu-ulevaade',
      title: 'Väikelaenu turg Eestis',
      body: [
        'Eesti väikelaenuturul tegutsevad nii pangad kui ka spetsialiseerunud krediidiandjad. Pankadest pakuvad väikelaenu näiteks <strong>Coop Pank</strong> ja <strong>TF Bank</strong>, väljaspool pangandust on tuntud pakkuja muu hulgas <strong>Creditstar</strong>. Summad ulatuvad pakkujati kuni 10 000–20 000 euroni ja tagasimakseperiood kuni 72–84 kuuni, mistõttu leiab sobiva lahenduse nii väiksema remondi kui ka suurema ostu rahastamiseks.',
        'Üldine muster on lihtne: <strong>pankade väikelaenud on tavaliselt madalama intressi ja KKM-iga</strong>, kuid taotluse menetlemine ja väljamakse võivad võtta rohkem aega ning nõuded taotlejale on rangemad. Pangavälised krediidiandjad teevad otsuse ja väljamakse sageli kiiremini ning on paindlikumad, kuid selle mugavuse hinnaks on üldjuhul kõrgem kulukus. Seetõttu tasub enne taotlemist võrrelda mõlema grupi pakkumisi KKM-i alusel ja valida oma olukorrale sobivaim tasakaal hinna ja kiiruse vahel.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Miks väikelaenu taotlus lükatakse tagasi?',
      body: [
        'Kõige sagedasemad tagasilükkamise põhjused on <strong>kehtiv maksehäire</strong> maksehäireregistris, <strong>liiga madal sissetulek</strong> soovitud summa suhtes, <strong>suur olemasolev laenukoormus</strong> (mitu kehtivat laenu, liisingut või krediitkaarti) ning <strong>ebastabiilne töösuhe</strong> — näiteks katseaeg, tähtajaline leping või väga lühike tööstaaž. Laenuandja on kohustatud hindama sinu maksevõimet ning kui igakuised kohustused koos uue laenuga sööksid liiga suure osa sissetulekust, tuleb eitav otsus.',
        'Kui taotlus lükati tagasi, on mitu mõistlikku sammu. Küsi väiksemat summat või vali pikem periood, et kuumakse väheneks. Maksa võimalusel ära väiksemad olemasolevad kohustused — näiteks kasutamata krediidilimiidid ja järelmaksud, mis koormavad maksevõime arvestust. Kehtiv maksehäire tasub esmalt lahendada ja lasta registris kustutada. Mõni pank võimaldab kaasata ka <strong>kaastaotleja</strong>, kelle sissetulek arvestatakse maksevõime hindamisel juurde ja mis suurendab positiivse otsuse tõenäosust.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Regulatsioon ja tarbijakaitse',
      body: [
        'Väikelaenu tohib Eestis pakkuda ainult ettevõte, kellel on <strong>Finantsinspektsiooni tegevusluba</strong> krediidiandjana või kes tegutseb pangana. Lisaks piirab võlaõigusseadus tarbijakrediidi <strong>krediidi kulukuse määra ülempiiri</strong> — seda ületav leping võib olla tühine. Kehtib ka <strong>vastutustundliku laenamise põhimõte</strong>: laenuandja on kohustatud enne lepingu sõlmimist hindama sinu maksevõimet ega tohi anda laenu, mille tagasimaksmine ei ole sinu sissetulekuid ja kohustusi arvestades realistlik.',
        'Tarbijal on seadusest tulenevad kindlad õigused. Sul on <strong>14-päevane taganemisõigus</strong> — laenulepingust saab põhjust nimetamata taganeda, tagastades saadud summa koos kasutatud päevade intressiga. Samuti võid laenu igal ajal osaliselt või täielikult <strong>ennetähtaegselt tagastada ilma lisatasuta</strong>, misjuhul väheneb ka intressikulu. Enne allkirjastamist kontrolli alati, et pakkuja on kantud Finantsinspektsiooni tegevuslubade registrisse, ning loe leping ja Euroopa tarbijakrediidi standardinfo teabeleht tähelepanelikult läbi.',
      ],
    },
  ],

  faq: [
    {
      q: 'Kui suure väikelaenu saan ja kui pikaks ajaks?',
      a: [
        'Väikelaenu summad ulatuvad pakkujati tavaliselt mõnesajast eurost kuni 20 000 euroni ning tagasimakseperiood võib olla kuni 72–84 kuud. Täpne summa ja periood sõltuvad sinu sissetulekust ja olemasolevatest kohustustest, sest laenuandja peab hindama maksevõimet.',
      ],
    },
    {
      q: 'Miks on väikelaen kiirlaenust soodsam?',
      a: [
        'Väikelaenul on üldjuhul madalam intress ja KKM ning pikem periood, mis hoiab kuumakse taskukohasena. Tasub siiski meeles pidada, et pikem tähtaeg suurendab intressikulu kokku — seetõttu vali periood, mis tasakaalustab mugava kuumakse ja mõistliku kogukulu.',
      ],
    },
    {
      q: 'Mis on KKM ja miks see oluline on?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab laenu tegelikku aastast hinda protsendina — see sisaldab intressi ja kõiki tasusid. KKM-i alusel saad erinevaid pakkumisi ausalt võrrelda. Eestis on tarbijakrediidi KKM seadusega piiratud.',
      ],
    },
    {
      q: 'Kas väikelaenu saab ennetähtaegselt tagasi maksta?',
      a: [
        'Jah. Seadus annab õiguse laen igal ajal osaliselt või täielikult ennetähtaegselt tagastada ning sel juhul väheneb ka intressikulu. Lisatasu ennetähtaegse tagastamise eest reeglina ei ole, mistõttu väikelaen sobib hästi ka kallimate kohustuste refinantseerimiseks.',
      ],
    },
    {
      q: 'Kas väikelaenu saab maksehäirega?',
      a: [
        'Kehtiva maksehäire korral on väikelaenu saamine üldjuhul võimatu, sest pakkujad kontrollivad maksehäireregistrit ja hindavad vastutustundlikult sinu maksevõimet. Soovitame esmalt häire lahendada ja alles seejärel uut laenu taotleda.',
      ],
    },
    {
      q: 'Kas väikelaenuks on vaja tagatist või käendajat?',
      a: [
        'Ei, väikelaen on tagatiseta tarbimislaen ning üldjuhul ei nõuta tagatist ega käendajat. Otsus tehakse sinu sissetuleku ja maksekäitumise põhjal. Tagatisega laenud (nt kinnisvara tagatisel) võimaldavad suuremaid summasid ja madalamat intressi, kuid eeldavad vara pantimist.',
      ],
    },
  ],
};

export default vaikelaen;
