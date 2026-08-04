import type { LoanTypeContent } from './types';

const krediidikonto: LoanTypeContent = {
  slug: 'krediidikonto',
  loanType: 'krediidikonto',
  navLabel: 'Krediidikonto',

  seoText:
    'Soovid paindlikku krediidikontot, mille saaks avada otse nutitelefonist? Siit leiad Eesti krediidikonto pakkumised ühes kohas — võrdle limiite, intresse ja KKM-i mugavalt mobiilist ning vali endale paindlikem krediidikonto.',

  metaTitle: 'Krediidikonto 2026 — paindlik krediidilimiit ja intress',
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
    {
      id: 'turu-ulevaade',
      title: 'Kes Eestis krediidikontot pakuvad',
      body: [
        '<h3>Turg numbrites</h3>',
        'Eesti Panga finantssektori statistika järgi ületab majapidamiste tarbimislaenude jääk <strong>1,1 miljardit eurot</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal) ning uuenevad limiidid — krediidikontod, krediidiliinid ja krediitkaardid — moodustavad sellest märkimisväärse osa. Finantsinspektsiooni krediidiandjate ja -vahendajate registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026), kellest osa pakub just uuenevat limiiti.',
        'Tüüpiline heakskiidetav krediidikonto limiit jääb <strong>500 ja 5000 euro</strong> vahele ning kasutusaktiivsus on ebaühtlane: paljud kliendid hoiavad limiiti puhvrina ja kasutavad seda paar korda aastas. Just sellises mustris on uuenev limiit odavam kui rida üksikuid <a href="/kiirlaen">kiirlaene</a>, sest iga uus laenuleping tähendaks uut lepingutasu.',
        '<h3>Kes seda pakuvad</h3>',
        'Krediidikonto on Eestis kujunenud üheks populaarsemaks paindliku krediidi vormiks ning seda pakuvad mitmed litsentseeritud krediidiandjad, tuntumate seas <strong>Credit24, Monefit, SmsRaha ja Ferratum</strong>. Limiidid jäävad enamasti vahemikku <strong>500–10 000 €</strong>, kusjuures uuele kliendile kinnitatakse sageli esmalt väiksem limiit, mida korrektse maksekäitumise korral hiljem tõstetakse. Kuna intress jookseb ainult kasutatud summalt, kasutavad paljud inimesed krediidikontot <strong>varuplaanina</strong> — limiit on olemas ootamatuteks kuludeks, kuid seni, kuni seda ei kasutata, kulu ei teki.',
        'Selge turutrend on krediidikonto haldamise kolimine <strong>mobiilirakendusse ja iseteenindusse</strong>: raha väljavõtmine, tagasimaksed, limiidi jälgimine ja lepingu muudatused käivad üha sagedamini otse nutitelefonist ilma kontorit külastamata. Pakkujate tingimused erinevad siiski märgatavalt — intressimäär, halduskuu- ja väljamaksetasud ning limiidi tõstmise põhimõtted varieeruvad, mistõttu tasub enne lepingu sõlmimist alati võrrelda <strong>KKM-i</strong>, mitte ainult reklaamitud intressi.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Levinumad põhjused, miks limiiti ei anta',
      body: [
        'Kõige sagedasem keeldumise põhjus on <strong>kehtiv maksehäire</strong> — pakkujad kontrollivad maksehäireregistrit ja aktiivse võlgnevusega taotlus lükatakse üldjuhul automaatselt tagasi. Teine levinud põhjus on <strong>ebapiisav või tõendamata sissetulek</strong>: kui regulaarne laekumine pangakontole puudub või seda ei saa kontoväljavõttega kinnitada, ei suuda krediidiandja maksevõimet hinnata. Kolmas põhjus on <strong>suur olemasolev krediidikoormus</strong> — kui sissetulekust läheb juba märkimisväärne osa laenude, järelmaksude ja limiitide teenindamiseks, ei mahu uus kohustus vastutustundliku laenamise raamidesse.',
        'Keeldumise korral tasub esmalt üle vaadata oma kohustused. Abi võib olla järgmistest sammudest: <ul><li>taotle <strong>väiksemat limiiti</strong> — madalam limiit tähendab väiksemat hinnatavat kohustust;</li><li>maksa tagasi või sulge teised limiidid ja krediitkaardid — oluline on teada, et <strong>ka kasutamata krediidilimiit loetakse kohustuseks</strong>, sest selle saab igal hetkel kasutusele võtta;</li><li>korrasta maksekäitumine ja lase lõpetatud maksehäired registris sulgeda, sest värske negatiivne ajalugu mõjutab otsust veel mõnda aega.</li></ul> Mõne kuu pärast, kui koormus on väiksem ja sissetulek tõendatav, on uue taotluse õnnestumise tõenäosus oluliselt suurem.',
        '<h3>Keeldumine ei ole lõpp-punkt: tegevuskava</h3>',
        'Uueneva limiidi puhul on otsus peaaegu alati automaatne, seega on ka põhjus konkreetne. Alusta põhjuse väljaküsimisest: kui otsus tugines andmekogu päringule, on krediidiandja kohustatud sulle tasuta teatama, millisest registrist päring tehti ja mis oli tulemus. Enda kohta käivate andmete koopia on tasuta ka registripidajalt — <a href="https://creditinfo.ee/" target="_blank" rel="noopener noreferrer">Creditinfo</a> peab Eestis maksehäireregistrit ja vananenud või vale kirje saab lasta parandada.',
        'Edasi on kolm reaalset hooba. Esiteks <strong>limiidi suurus</strong>: 5000 euro asemel 1000 on hoopis teine kohustus ja sageli piisav. Teiseks <strong>olemasolevad limiidid</strong>: kasutamata krediitkaart või teine konto arvestatakse kohustuseks ka nullsaldo korral, seega tasub ülearused sulgeda enne uut taotlust, mitte pärast. Kolmandaks <strong>aeg</strong>: kaks-kolm kuud korrapärast sissetulekut samale kontole muudab pilti rohkem kui uus taotlus järgmisel päeval.',
        'Kui vajadus on ühekordne ja summa teada, ei ole uuenev limiit üldse õige toode — kindla graafikuga <a href="/vaikelaen">väikelaen</a> on sel juhul odavam ja ka otsus tuleb teistel alustel. Kui aga ka väikest limiiti ei kinnitata, on see märk, et eelarves ei ole praegu vaba raha; tasuta võlanõustamine omavalitsuse sotsiaalosakonna kaudu on siin kasulikum kui järgmine taotlus.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Millised seadused krediidikontot puudutavad',
      body: [
        'Krediidikontot võib Eestis pakkuda ainult <strong>Finantsinspektsiooni tegevusloaga krediidiandja</strong>, kes peab järgima krediidiandjate ja -vahendajate seadust ning võlaõigusseaduse tarbijakrediidi reegleid. Tarbijakrediidi <strong>krediidi kulukuse määrale (KKM) kehtib seadusest tulenev ülempiir</strong>, mis kaitseb tarbijat ebamõistlikult kalli krediidi eest. Lisaks on krediidiandjal kohustus hinnata taotleja <strong>maksevõimet</strong> — ja seda mitte ainult konto avamisel, vaid ka iga kord, kui limiiti soovitakse <strong>tõsta</strong>. Automaatne limiiditõus ilma maksevõime kontrollita ei ole lubatud.',
        'Tarbijal on lepingust <strong>14-päevane taganemisõigus</strong>: selle aja jooksul võib lepingust põhjust nimetamata taganeda, tagastades kasutatud summa koos kasutusaja intressiga. Samuti on sul õigus <strong>igal ajal limiiti vähendada või krediidikonto sulgeda ilma leppetrahvita</strong> — piisab kasutatud osa tagasimaksmisest ja pakkuja teavitamisest. Kui limiiti parasjagu ei vaja, on selle vähendamine või konto sulgemine mõistlik ka seetõttu, et kasutamata limiit arvestatakse tulevaste laenutaotluste juures kohustuste hulka.',
      ],
    },
    {
      id: 'mida-limiit-maksab',
      title: 'Mida uuenev limiit tegelikult maksab?',
      body: [
        'Krediidikonto hinda on raskem hinnata kui tavalise laenu oma, sest kulu tekib ainult siis ja täpselt nii kaua, kui raha kasutad. Sama 3000-eurose limiidi juures võib aastane kulu olla null või mitusada eurot — vahe teeb ainult kasutusmuster.',
        '<table><caption>Kulude näide: 3000 € limiit, intress ~20% aastas kasutatud osalt</caption><thead><tr><th>Kasutusmuster</th><th>Keskmine kasutatud summa</th><th>Kestus</th><th>Ligikaudne intressikulu</th></tr></thead><tbody><tr><td>Limiit puutumata</td><td>0 €</td><td>12 kuud</td><td>0 €</td></tr><tr><td>Ühekordne kasutus, kiire tagastus</td><td>1000 €</td><td>1 kuu</td><td>~17 €</td></tr><tr><td>Hooajaline kasutus</td><td>1500 €</td><td>3 kuud</td><td>~75 €</td></tr><tr><td>Pidev osaline kasutus</td><td>2000 €</td><td>12 kuud</td><td>~400 €</td></tr><tr><td>Limiit pidevalt täis</td><td>3000 €</td><td>12 kuud</td><td>~600 €</td></tr></tbody></table>',
        'Näide on illustratiivne ja ei sisalda võimalikke haldus- või kuutasusid, mis mõne pakkuja juures lisanduvad ka kasutamata limiidile. Just neid tasub lepingust esimesena otsida: kuutasu muudab „tasuta puhvri“ igakuiseks kuluks ja tõstab KKM-i tuntavalt.',
        'Praktiline järeldus: krediidikonto on odav lühikeste kasutuste puhul ja kallis siis, kui limiit on aasta läbi täis. Viimasel juhul on tegemist varjatud pikaajalise laenuga ja soodsam lahendus on jääk refinantseerida <a href="/vaikelaen">väikelaenu</a> alla, kus KKM on madalam ja graafik lõpeb kindla kuupäevaga. Ühekordse suurema kulu jaoks tasub kõrvutada ka <a href="/kiirlaen">kiirlaenu</a> tingimusi ning meie <a href="/metoodika">võrdlusmetoodikat</a>.',
      ],
    },
    {
      id: 'limiidi-haldamine',
      title: 'Limiidi haldamine ilma võlga kasvatamata',
      body: [
        '<h3>Sea endale reegel enne esimest kasutust</h3>',
        'Uuenev limiit erineb laenust ühe olulise asja poolest: sellel ei ole lõppkuupäeva. Tavalisel laenul on graafik, mis viib saldo nulli ilma sinu osaluseta. Krediidikonto saldo läheb nulli ainult siis, kui sa selle sinna viid. Seepärast on mõistlik kokku leppida iseendaga tagasimaksetempo juba enne esimest väljavõtmist — näiteks „iga kasutus tagasi kolme kuuga“.',
        '<h3>Minimaalne makse ei ole eesmärk</h3>',
        'Miinimummakse katab tavaliselt intressi ja väikese osa põhiosast. Ainult miinimumi tasudes püsib võlg aastaid ja kogukulu kasvab vaikselt. Kui saldo ei ole kolme kuuga vähenenud, on see märk, et limiit toimib laenuna, mitte puhvrina.',
        '<h3>Limiidi tõstmine ja alandamine</h3>',
        'Pakkujad pakuvad limiidi tõstmist sageli ise, sest see on neile kasulik. Enne nõustumist küsi endalt, kas vajadus on päriselt kasvanud. Limiidi saab ka alandada — see vähendab kiusatust ja mõjub soodsalt tulevastele laenutaotlustele, sest maksevõime hindamisel arvestatakse kogu limiiti, mitte ainult kasutatud osa. Sama loogika kehtib <a href="/krediitkaart">krediitkaardi</a> ja <a href="/krediidiliin">krediidiliini</a> puhul.',
        'Kui kasutad limiiti korduvalt ja saldo ei lange, on aeg vaadata alternatiive: kindla graafikuga laen on kallim kuumakse poolest, aga odavam kogukulu poolest ja lõpeb päriselt ära.',
      ],
    },
    {
      id: 'kellele-sobib',
      title: 'Kellele krediidikonto sobib',
      body: [
        'Krediidikonto lahendab kindlat tüüpi probleemi: <strong>ettearvamatu ajastusega, korduv ja piiritletud rahavajadus</strong>. Kui see kirjeldus ei kattu sinu olukorraga, on tõenäoliselt olemas odavam tööriist.',
        '<ul><li><strong>Sobib hästi</strong> — ebaregulaarse sissetulekuga inimesele, kes vajab puhvrit kuude vahel; kodus ettetulevate ootamatute kulude katteks; väiksemate hooajaliste väljaminekute silumiseks.</li><li><strong>Sobib tinglikult</strong> — planeeritud ühekordse ostu jaoks, kui summa on väike ja tagastamine kiire; suurema ostu puhul on <a href="/vaikelaen">väikelaen</a> madalama KKM-iga.</li><li><strong>Ei sobi</strong> — igakuise eelarvepuudujäägi katmiseks; teiste kohustuste tasumiseks; pikaajaliseks rahastuseks, kus limiit jääb aastateks täis.</li></ul>',
        'Eraldi tasub mõelda, mitu uuenevat limiiti korraga hoida. Kui sul on juba krediitkaart, siis krediidikonto lisamine kahekordistab kättesaadava krediidi ja seda kogusummat arvestatakse iga järgmise laenutaotluse puhul kohustusena — ka siis, kui saldo on null. See võib tähendada, et suurema laenu, näiteks <a href="/autolaen">autolaenu</a> taotlemisel jääb heakskiidetud summa oodatust väiksemaks.',
        'Kõige praktilisem test on lihtne: kui suudad nimetada konkreetse kuu, mil limiit saab tagasi nulli, on krediidikonto sobiv lahendus. Kui ei suuda, on tegemist laenuvajadusega ja seda on odavam katta kindla graafikuga tootega. Ebatäpsusest meie andmetes anna teada <a href="/kontakt">kontaktilehel</a>.',
      ],
    },
    {
      id: 'avamine-ja-sulgemine',
      title: 'Konto avamine, kasutamine ja sulgemine',
      body: [
        '<h3>Avamine</h3>',
        'Taotlus täidetakse pakkuja iseteeninduses ja isik tuvastatakse Smart-ID või Mobiil-ID abil. Küsitakse sissetulekut, olemasolevaid kohustusi ja leibkonna suurust; andmed peavad ühtima kontoväljavõttega, mida krediidiandja näeb. Otsus tuleb tavaliselt minutitega ja koos sellega heakskiidetud limiit, mis võib olla soovitust väiksem. Enne allkirjastamist saad Euroopa tarbijakrediidi standardinfo teabelehe — sealt otsi üles KKM, kuutasu ja miinimummakse suurus.',
        '<h3>Kasutamine</h3>',
        'Raha kantakse limiidist sinu arvelduskontole soovitud summas. Intress hakkab jooksma väljakandmise hetkest ja ainult kasutatud osalt. Praktiline soovitus: võta korraga täpselt vajalik summa, mitte kogu limiit — vahe tekib kohe intressikulus. Jälgi saldot igakuiselt ja sea eesmärgiks selle vähenemine, mitte püsimine.',
        '<h3>Sulgemine</h3>',
        'Lepingu saab lõpetada, kui saldo on nullis. See on mõttekas kahel juhul: kui limiiti ei kasuta ja pakkujal on kuutasu, ning enne suurema laenu taotlemist. Maksevõime hindamisel arvestatakse kogu heakskiidetud limiiti kohustusena, seega kasutamata konto vähendab summat, mille saad <a href="/vaikelaen">väikelaenuna</a> või <a href="/autolaen">autolaenuna</a>. Küsi sulgemise kohta kirjalik kinnitus ja kontrolli, et leping päriselt lõppes, mitte ei jäänud nullsaldoga avatuks.',
        'Kui sama pakkuja pakub hiljem limiidi taasavamist ühe klikiga, tasub meeles pidada, et tegemist on uue krediidiotsusega ja vanad tingimused ei pruugi kehtida. Alternatiivide kõrvutamiseks vaata <a href="/krediidiliin">krediidiliini</a> ja <a href="/krediitkaart">krediitkaardi</a> tingimusi ning <a href="/metoodika">meie metoodikat</a>.',
      ],
    },
  ],

  example: {
    amount: '3000 € limiit, kasutatud 1500 €',
    period: '12 kuud',
    interest: '19,9% (kasutatud osalt)',
    apr: '23,1%',
    monthly: '~139 €',
    total: '~1668 €',
    note: 'Näide eeldab, et kasutatud 1500 eurot makstakse tagasi 12 kuu jooksul võrdsete maksetena, ja sisaldab kuutasu 0 €. Kasutamata limiidilt intressi ei arvestata. Tegelikud tingimused sõltuvad krediidiandja otsusest.',
  },

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
    {
      q: 'Kas kasutamata krediidilimiit maksab midagi?',
      a: [
        'Intressi kasutamata osalt reeglina ei arvestata, kuid osa pakkujaid võtab kuu- või haldustasu ka siis, kui limiiti ei kasuta. See tasu tuleb lepingust üles otsida — just see muudab „tasuta puhvri“ igakuiseks kuluks ja tõstab KKM-i.',
      ],
    },
    {
      q: 'Kas krediidikonto vähendab minu võimalust saada suuremat laenu?',
      a: [
        'Jah, kaudselt. Maksevõime hindamisel arvestatakse kogu heakskiidetud limiiti võimaliku kohustusena, ka siis, kui saldo on null. Kui plaanid taotleda suuremat laenu, tasub kasutamata limiit enne seda sulgeda või seda alandada.',
      ],
    },
    {
      q: 'Mis vahe on miinimummaksel ja tegelikul tagasimaksel?',
      a: [
        'Miinimummakse katab intressi ja väikese osa põhiosast — ainult seda tasudes püsib võlg pikka aega ja kogukulu kasvab. Kui soovid limiidi tõesti vabastada, tuleb maksta rohkem kui miinimum ja jälgida, et saldo iga kuu väheneks.',
      ],
    },
  ],
};

export default krediidikonto;
