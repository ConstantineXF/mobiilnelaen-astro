import type { LoanTypeContent } from './types';

const krediitkaart: LoanTypeContent = {
  slug: 'krediitkaart',
  loanType: 'krediitkaart',
  navLabel: 'Krediitkaart',

  seoText:
    'Otsid krediitkaarti intressivaba perioodiga, mille saaks vormistada otse telefonist? Võrdle Eesti krediitkaardi pakkumisi ühes kohas — vaata limiite, aastatasu ja KKM-i ning vali endale sobivaim krediitkaart mugavalt nutiseadmest.',

  metaTitle: 'Krediitkaart 2026 — intressivaba periood ja limiit',
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
    {
      id: 'turu-ulevaade',
      title: 'Kui palju krediitkaarte Eestis kasutatakse',
      body: [
        '<h3>Kaardid arvudes</h3>',
        'Eesti Panga makse- ja arveldusstatistika järgi on Eestis kasutuses <strong>üle kahe miljoni maksekaardi</strong>, millest krediitkaardid moodustavad väiksema, kuid stabiilse osa (allikas: Eesti Pank, maksestatistika, 2026). Majapidamiste tarbimislaenude jääk ületab <strong>1,1 miljardit eurot</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal) ja krediitkaardi jäägid on selles omaette read. Finantsinspektsiooni registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026), lisaks pakuvad kaarte pangad.',
        'Eesti eripära on see, et deebetkaart katab enamiku igapäevamaksetest ja krediitkaart võetakse pigem lisatoona — reisimiseks, internetiostudeks ja puhvriks. Just seetõttu jääb paljudel kaart aastateks kasutamata, kuigi aastatasu jookseb. Kui kaarti tegelikult ei kasuta, on selle sulgemine kõige lihtsam viis kulu vähendada ja ühtlasi tõsta oma võimekust saada tulevikus <a href="/vaikelaen">väikelaenu</a> või <a href="/autolaen">autolaenu</a>, sest maksevõime arvestuses läheb kirja kogu limiit.',
        '<h3>Pakkujad ja tingimuste erinevused</h3>',
        'Eestis pakuvad krediitkaarte peamiselt pangad — näiteks <strong>Coop Pank, LHV, SEB ja Swedbank</strong>. Kuigi toote põhimõte on kõigil sarnane, erinevad pakkumised olulistes detailides: intressivaba perioodi pikkus, aastatasu suurus, sularaha väljavõtu tingimused ja pakutav krediidilimiit. Mõni pank seob krediitkaardi lisahüvedega, nagu reisikindlustus või ostude tagasimaksed, teine hoiab kaardi lihtsa ja väiksemate tasudega. Seetõttu ei tasu valida esimest ettejuhtuvat kaarti, vaid võrrelda tingimusi ja <strong>KKM-i</strong> mitme pakkuja vahel.',
        'Turu selge trend on digitaalsus: üha rohkem kasutatakse <strong>virtuaalkaarte</strong> ja mobiilseid rahakotte nagu <strong>Apple Pay ja Google Pay</strong>, mis lasevad krediitkaardiga maksta otse telefonist või nutikellast. Ka taotlemine käib valdavalt veebis — tuvastad end ID-kaardi, Smart-ID või Mobiil-ID abil ning kaart on sageli virtuaalsel kujul kasutatav enne, kui füüsiline kaart postiga kohale jõuab. Nutiseadmest vormistamine muudab krediitkaardi kättesaadavaks ilma pangakontorisse minemata.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Kaarditaotlus tagasi lükatud: põhjused ja lahendused',
      body: [
        'Levinuimad keeldumise põhjused on <strong>kehtiv maksehäire</strong>, ebapiisav või ebaregulaarne püsiv sissetulek, liiga lühike kontoajalugu pangas ning suur olemasolevate kohustuste koormus. Pank hindab taotlust tervikuna: kui sissetulekust jääb pärast laenumaksete, liisingute ja muude püsikulude mahaarvamist liiga vähe vaba raha, on soovitud limiidi andmine vastutustundetu ja taotlus lükatakse tagasi. Ka värskelt avatud konto, kuhu palk pole veel laekuma hakanud, ei anna pangale piisavat pilti sinu maksekäitumisest.',
        'Keeldumine ei ole lõplik otsus. Esiteks võid taotleda <strong>väiksemat limiiti</strong> — see vähendab panga riski ja suurendab positiivse otsuse tõenäosust. Teiseks tasub pöörduda oma kodupanka, kuhu laekub palk ja kus on näha sinu tegelik rahavoog: tuttava kliendi maksevõimet on pangal lihtsam hinnata. Kolmandaks korrasta krediidiajalugu — tasu võlgnevused, lase maksehäire lõpetatuks märkida ja vähenda olemasolevaid kohustusi. Mõne kuu pärast stabiilse sissetuleku ja puhta maksekäitumisega on uus taotlus märksa tugevam.',
        '<h3>Keeldumise järel: järjekord, mis tegelikult aitab</h3>',
        'Kaardi puhul kipub esimene reaktsioon olema taotluse esitamine järgmisesse panka. See on kõige kallim variant, sest iga värske päring on teistele nähtav ja pilt muutub halvemaks. Mõistlik järjekord on teine: küsi kõigepealt keeldumise põhjus. Kui otsus tehti andmekogu päringu alusel, tuleb sulle tasuta öelda, millisest registrist päring tehti ja mis oli tulemus. Enda kohta käivate andmete koopia on samuti tasuta ning vale või aegunud kirje saab lasta parandada.',
        'Seejärel muuda sisendit, mitte adressaati: taotle väiksemat limiiti, suuna palk sellesse panka, kus soovid kaarti, ja vähenda olemasolevaid kohustusi. Kaks kuni kolm kuud korrapärast rahavoogu on tugevam argument kui viis taotlust ühel nädalal. Kui kaarti on vaja konkreetse ühekordse kulu jaoks, ei ole uuenev limiit üldse vajalik — kindla graafikuga <a href="/vaikelaen">väikelaen</a> on ettearvatavam ja tavaliselt odavam, samas kui <a href="/krediidikonto">krediidikonto</a> katab korduva vajaduse ilma kaardita.',
        'Kaks asja, mida keeldumise järel ei tasu teha: võtta kaarti mistahes tingimustel ainult selleks, et see olemas oleks, ja katta ühe kaardi võlga teise kaardiga. Kui vaidlus pakkujaga tekib — näiteks tasude või lepingutingimuste üle —, saab pöörduda <a href="https://ttja.ee/" target="_blank" rel="noopener noreferrer">Tarbijakaitse ja Tehnilise Järelevalve Ameti</a> tarbijavaidluste komisjoni poole; see menetlus on tarbijale tasuta.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Tarbija õigused ja kaardi turvalisus',
      body: [
        'Krediitkaart on juriidiliselt <strong>tarbijakrediit</strong>, mistõttu kehtivad sellele samad tarbijakaitse reeglid nagu teistele laenutoodetele. Pank on kohustatud enne limiidi andmist hindama sinu <strong>maksevõimet</strong> — sissetulekut, kohustusi ja maksekäitumist — ning ei tohi anda krediiti, mille teenindamisega sa tõenäoliselt hakkama ei saa. Lepingutingimustes peab olema selgelt välja toodud <strong>krediidi kulukuse määr (KKM)</strong>, mis koondab intressi ja tasud üheks võrreldavaks näitajaks. Lisaks kehtib sõlmitud lepingule <strong>14-päevane taganemisõigus</strong>, mille jooksul saad lepingust põhjust nimetamata taganeda.',
        'Sul on igal ajal õigus lasta krediidilimiiti <strong>vähendada või kaart sulgeda</strong>, kui toode enam ei sobi või soovid kohustusi kärpida. Eraldi tähelepanu väärivad <strong>hilinemistasud</strong>: kui intressivaba periood ületatakse ja arve jääb tähtajaks tasumata, lisanduvad intressile ka viivis ja võimalikud meeldetuletustasud, mis kasvatavad kogukulu kiiresti. Loe lepingust läbi, millised tasud hilinemisel rakenduvad, ning sea vajadusel püsikorraldus või e-arve, et tähtaeg kogemata ei ununeks.',
      ],
    },
    {
      id: 'kaardi-tegelik-hind',
      title: 'Krediitkaardi tegelik hind: null või sadu eurosid',
      body: [
        'Krediitkaart on ainus laenutoode, mille kasutamine võib olla täiesti tasuta — ja ka üks kallimaid, kui tingimusi ei jälgita. Vahe on ühes asjas: kas kasutatud summa tasutakse intressivaba perioodi sees täies mahus või mitte.',
        '<table><caption>Kulude näide: 1000 € ostud kaardiga, intress ~20% aastas</caption><thead><tr><th>Tagasimakse viis</th><th>Kestus</th><th>Intressikulu</th><th>Aastatasu (näites 40 €)</th><th>Kokku</th></tr></thead><tbody><tr><td>Täies mahus intressivaba perioodi sees</td><td>~45 päeva</td><td>0 €</td><td>40 €</td><td>~40 €</td></tr><tr><td>Pool kohe, pool 3 kuuga</td><td>3 kuud</td><td>~25 €</td><td>40 €</td><td>~65 €</td></tr><tr><td>Võrdsete osadena aasta jooksul</td><td>12 kuud</td><td>~110 €</td><td>40 €</td><td>~150 €</td></tr><tr><td>Ainult miinimummakse (5%)</td><td>~3 aastat</td><td>~330 €</td><td>120 €</td><td>~450 €</td></tr></tbody></table>',
        'Näide on illustratiivne, kuid viimane rida väärib eraldi tähelepanu: miinimummakse tasumine muudab tuhandeeurose ostu ligi pooleteisekordseks. Kaardi turundus rõhutab paindlikkust, kuid paindlikkus tähendab siin, et võlg ei lõpe iseenesest ära.',
        'Kaks kulu jäävad sageli märkamata. Esiteks, <strong>sularaha väljavõtt</strong> on tavaliselt tasuline ja intressivaba periood sellele ei laiene — intress hakkab jooksma kohe. Teiseks, <strong>välisvaluutas ostud</strong> kannavad konverteerimistasu. Kui plaanid kaarti kasutada püsiva rahastusena, on <a href="/vaikelaen">väikelaen</a> madalama KKM-iga ja kindla lõpuga tavaliselt odavam; korduva vajaduse puhul kõrvuta ka <a href="/krediidikonto">krediidikontoga</a> ning vaata <a href="/metoodika">metoodikat</a>.',
      ],
    },
    {
      id: 'turvalisus',
      title: 'Turvalisus ja pettuste vältimine',
      body: [
        '<h3>Mida pank kunagi ei küsi</h3>',
        'Ükski pank ega krediidiandja ei küsi telefoni teel, e-kirjas ega sotsiaalmeedias sinu PIN-koodi, kaardi turvakoodi (CVC), Smart-ID või Mobiil-ID PIN-e ega SMS-iga saadetud kinnituskoodi. Iga selline päring on pettus, ka siis, kui helistaja number näib olevat panga oma ja jutt kõlab veenvalt. Kahtluse korral lõpeta kõne ja helista ise panga ametlikul numbril.',
        '<h3>Praktilised kaitsemeetmed</h3>',
        '<ul><li>Lülita sisse tehingute teavitused — märkad võõrast tehingut minutitega, mitte kuu lõpus.</li><li>Kasuta internetiostudeks <strong>virtuaalkaarti</strong> või eraldi madala limiidiga kaarti.</li><li>Hoia e-poe limiit madalam kui kogu krediidilimiit.</li><li>Kontrolli kaardi väljavõtet iga kuu, mitte ainult siis, kui midagi tundub valesti.</li><li>Kadunud kaart sulge kohe rakendusest — see on kiirem kui telefonikõne.</li></ul>',
        '<h3>Kui raha on juba läinud</h3>',
        'Teata pangale esimesel võimalusel: tarbija vastutus on volitamata tehingute puhul seadusega piiratud, kuid see kaitse eeldab kiiret teavitamist ja seda, et sa ei ole ise turvanõudeid rikkunud. Esita ka avaldus politseile. Kaardimaksete puhul on paljudel juhtudel võimalik algatada tagasinõue (chargeback), kui kaup jäi saamata või teenus osutamata — see on krediitkaardi eelis, mida deebetkaardil sageli ei ole.',
      ],
    },
    {
      id: 'kaart-vs-laen',
      title: 'Millal kaart, millal laen?',
      body: [
        'Krediitkaart ja tarbimislaen ei ole konkurendid, vaid erineva ülesandega tööriistad. Kaart on hea makseviis ja halb pikaajaline rahastus; laen on vastupidi.',
        '<ul><li><strong>Vali kaart</strong>, kui kulu on väike, ajastus lühike ja tasumine käib intressivaba perioodi sees; kui vajad maksevahendit reisil või e-poes; kui soovid tagasinõude ja ostukaitse võimalust.</li><li><strong>Vali laen</strong>, kui summa on suurem, tagasimakse võtab kuid või aastaid ja soovid kindlat graafikut. <a href="/vaikelaen">Väikelaenu</a> KKM on selles rollis tüüpiliselt tuntavalt madalam kui kaardi oma.</li><li><strong>Vali uuenev limiit</strong>, kui vajadus on korduv, kuid maksevahendit ei ole vaja — <a href="/krediidiliin">krediidiliin</a> kannab raha otse arvelduskontole.</li><li><strong>Vali sihtotstarbeline laen</strong> suurema ostu puhul: auto rahastamisel on <a href="/autolaen">autolaen</a> või liising tagatise tõttu odavam kui kaart.</li></ul>',
        'Kui kaardi saldo on juba kuid püsinud kõrgel ja miinimummakse on ainus, mida jõuad tasuda, on aeg jääk refinantseerida. Kaardivõla koondamine madalama KKM-iga laenu alla annab kindla lõppkuupäeva ja vähendab kogukulu — tingimusel, et kaardi limiit pärast seda alandatakse või kaart suletakse. Vastasel juhul täitub saldo tavaliselt mõne kuuga uuesti.',
        'Ühekordse ja kiireloomulise vajaduse puhul, kus kaarti veel ei ole, tasub kõrvutada ka <a href="/kiirlaen">kiirlaenu</a> ja <a href="/sms-laen">SMS-laenu</a> tingimusi — need on kallimad protsentides, kuid piiritletud ajaga. Ebatäpsusest meie võrdluses saab teada anda <a href="/kontakt">kontaktilehel</a>.',
      ],
    },
    {
      id: 'kaardi-valik',
      title: 'Kontroll-loend kaardi valimiseks',
      body: [
        'Krediitkaardid näevad välja sarnased ja erinevad detailides, mis avalduvad alles kasutamisel. Need kuus punkti on need, mis rahakotti reaalselt mõjutavad.',
        '<ul><li><strong>Aastatasu ja selle tühistamise tingimus.</strong> Mõni pakkuja loobub aastatasust, kui aastane käive ületab teatud summa — kontrolli, kas sinu kulumuster selleni jõuab.</li><li><strong>Intressivaba perioodi tegelik pikkus.</strong> Reklaamitud „kuni 50 päeva“ kehtib arveldustsükli alguses tehtud ostule; tsükli lõpus tehtud ostul on see poole lühem.</li><li><strong>Miinimummakse suurus.</strong> Mida väiksem protsent, seda pikemaks võlg venib.</li><li><strong>Sularaha väljavõtu tingimused.</strong> Tavaliselt tasuline ja ilma intressivaba perioodita — intress hakkab jooksma kohe.</li><li><strong>Välisvaluuta konverteerimistasu.</strong> Reisile ja välismaistesse e-poodidesse mõeldes on see kaardi valikul üks olulisemaid ridu.</li><li><strong>Lisahüved.</strong> Reisikindlustus või ostukaitse on väärt ainult siis, kui neid päriselt kasutad; vastasel juhul maksad neid aastatasu sees niisama.</li></ul>',
        '<h3>Enne taotlemist</h3>',
        'Kontrolli, kas sul on juba avatud limiite — <a href="/krediidikonto">krediidikonto</a> või <a href="/krediidiliin">krediidiliin</a> arvestatakse kohustusena ka nullsaldo korral ja need vähendavad heakskiidetavat kaardilimiiti. Kui plaanid lähiajal taotleda suuremat laenu, tasub kaardi avamine sinna järele jätta.',
        '<h3>Pärast saamist</h3>',
        'Sea kohe kolm asja: tehingute teavitused sisse, e-poe limiit madalamale kui kogu limiit ja automaatne täissumma tasumine, kui pakkuja seda võimaldab. Viimane on kõige tõhusam viis hoida intressikulu nullis, sest see ei sõltu enam mäletamisest. Kui kaarti mõne kuu pärast ei kasuta, kaalu selle sulgemist — aastatasu jookseb ka kasutamata kaardil.',
      ],
    },
  ],

  example: {
    amount: '1500 € limiit, kasutatud 1000 €',
    period: '12 kuud',
    interest: '19,9% (tagastamata osalt)',
    apr: '25,4%',
    monthly: '~93 €',
    total: '~1116 €',
    note: 'Näide eeldab, et kasutatud 1000 eurot tagastatakse 12 kuu jooksul võrdsete maksetena, ning sisaldab aastatasu 40 €. Intressivaba perioodi sees täies mahus tasudes intressi ei lisandu. Tegelikud tingimused sõltuvad krediidiandja otsusest.',
  },

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
    {
      q: 'Kui palju maksab 1000 euro suurune kaardijääk aasta jooksul?',
      a: [
        'Intressivaba perioodi sees täies mahus tasudes ei maksa see intressi üldse, ainult võimaliku aastatasu. Sama summa võrdsete osadena aasta jooksul tagasi makstuna tähendab umbes 110 eurot intressi. Ainult miinimummakset tasudes venib tagasimakse aastateks ja kogukulu võib ulatuda mitmesaja euroni.',
      ],
    },
    {
      q: 'Kas krediitkaardi võlga saab refinantseerida?',
      a: [
        'Jah. Kaardijäägi koondamine madalama KKM-iga väikelaenu alla annab kindla lõppkuupäeva ja vähendab tavaliselt kogukulu. Oluline on pärast refinantseerimist kaardi limiiti alandada või kaart sulgeda, muidu täitub saldo mõne kuuga uuesti.',
      ],
    },
    {
      q: 'Mida teha, kui kaardilt on tehtud võõras tehing?',
      a: [
        'Sulge kaart kohe panga rakenduses ja teata pangale. Volitamata tehingute puhul on tarbija vastutus seadusega piiratud, kuid kaitse eeldab kiiret teavitamist. Esita ka avaldus politseile. Kauba või teenuse saamata jäämise korral saab paljudel juhtudel algatada tagasinõude ehk chargeback-menetluse.',
      ],
    },
  ],
};

export default krediitkaart;
