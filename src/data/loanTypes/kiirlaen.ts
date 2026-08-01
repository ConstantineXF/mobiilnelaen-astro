import type { LoanTypeContent } from './types';

const kiirlaen: LoanTypeContent = {
  slug: 'kiirlaen',
  loanType: 'kiirlaen',
  navLabel: 'Kiirlaen',

  seoText:
    'Otsid kiirlaenu, mille saaks vormistada kohe ja otse telefonist? MobiilneLaen.ee koondab Eesti kiirlaenud ühele lehele, et saaksid mugavalt nutiseadmest võrrelda intresse, summasid ja KKM-i ning valida soodsaima kiirlaenu juba mõne minutiga.',

  metaTitle: 'Kiirlaen 2026 — võrdle kiirlaene ja taotle kohe',
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
    {
      id: 'turu-ulevaade',
      title: 'Kiirlaenu turg Eestis — mida numbrid näitavad',
      body: [
        '<h3>Turg numbrites</h3>',
        'Finantsinspektsiooni krediidiandjate ja -vahendajate registris on 2026. aasta algupoolel kirjas ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: Finantsinspektsiooni register, fi.ee, seisuga jaanuar 2026). Eesti Panga finantssektori statistika järgi ulatub majapidamiste tarbimislaenude jääk <strong>üle 1,1 miljardi euro</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal), millest tagatiseta kiirlaenud moodustavad väiksema, kuid kõige kiiremini vormistatava osa. Creditinfo Eesti andmetel on maksehäireregistris igal ajahetkel kümneid tuhandeid aktiivseid maksehäireid — just seda registrit kontrollib laenuandja esimese sammuna.',
        'Praktiline järeldus tarbijale on lihtne: pakkujaid on palju ja nende hinnad erinevad kordades, seega ühe pakkumise põhjal otsustamine on peaaegu alati kallis. Kui vajad suuremat summat pikemaks ajaks, vaata kõrvale ka <a href="/vaikelaen">väikelaenu</a> tingimusi, ja kui vajadus on korduv, siis <a href="/krediidikonto">krediidikonto</a> loogikat, kus intressi arvestatakse ainult kasutatud osalt.',
        '<h3>Kes turul tegutsevad</h3>',
        'Eesti kiirlaenuturul tegutseb mitukümmend litsentseeritud krediidiandjat — tuntumate seas <strong>SmsRaha, Bondora, Creditstar</strong> ja teised. Tihe konkurents on tarbija jaoks hea uudis: pakkujad võistlevad soodsama intressi, madalamate tasude ja kiirema menetluse nimel, mistõttu tasub enne otsust alati mitut pakkumist võrrelda. Tüüpilised kiirlaenusummad jäävad üldjuhul vahemikku <strong>100–10 000 €</strong> ning tagasimakseperiood ulatub mõnest kuust mitme aastani.',
        'Selge trend on kogu protsessi liikumine mobiili: taotluse esitamine, isiku tuvastamine <strong>Smart-ID</strong> või Mobiil-ID abil, lepingu allkirjastamine ja väljamakse jälgimine käivad tänapäeval otse telefonist, ilma kontorikülastuse või paberdokumentideta. See on muutnud kiirlaenu kättesaadavaks igal ajal ja igas kohas — samas jääb tarbija vastutus hinnata, kas laen on tõesti vajalik ja kuumakse jõukohane.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Miks kiirlaenu taotlus lükatakse tagasi?',
      body: [
        'Levinumad keeldumise põhjused on: <ul><li><strong>kehtiv maksehäire</strong> — pakkujad kontrollivad maksehäireregistrit ja aktiivne võlg tähendab üldjuhul automaatset eitavat otsust;</li><li><strong>ebapiisav sissetulek</strong> — vastutustundliku laenamise nõuded kohustavad laenuandjat veenduma, et kuumakse on jõukohane;</li><li><strong>liiga suur olemasolev laenukoormus</strong> — kui suur osa sissetulekust läheb juba kohustuste teenindamiseks, uut laenu ei väljastata;</li><li><strong>vale või puudulik info taotluses</strong> — vastuolud andmetes vähendavad usaldusväärsust.</li></ul>',
        'Kui said eitava otsuse, kontrolli esmalt oma seisu maksehäireregistris ja lahenda võimalikud võlgnevused. Seejärel proovi <strong>väiksemat summat või pikemat perioodi</strong>, et kuumakse mahuks paremini sinu eelarvesse, või maksa enne osa olemasolevatest kohustustest tagasi. Ära esita korraga palju taotlusi eri pakkujatele — parem on oodata, parandada maksekäitumist ja taotleda uuesti mõne kuu pärast tugevama profiiliga.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Regulatsioon ja tarbijakaitse',
      body: [
        'Eestis tohib kiirlaene väljastada ainult ettevõte, kellel on <strong>Finantsinspektsiooni krediidiandja tegevusluba</strong>. Litsents tähendab, et pakkuja peab järgima vastutustundliku laenamise põhimõtteid, hindama kliendi maksevõimet ja avaldama kõik tasud läbipaistvalt. Lisaks piirab <strong>võlaõigusseadus</strong> krediidi kulukuse määra — KKM-il on seadusega kehtestatud ülempiir, mis kaitseb tarbijat liigkasuvõtmise eest.',
        'Tarbijal on seadusest tulenevalt <strong>14-päevane taganemisõigus</strong>: laenulepingust võib põhjust nimetamata taganeda, tagastades laenusumma ja kasutatud päevade intressi. Samuti on igal laenusaajal õigus laen <strong>tasuta ennetähtaegselt tagastada</strong> — sel juhul väheneb ka intressikulu. Enne lepingu sõlmimist kontrolli alati, et pakkuja on kantud Finantsinspektsiooni tegevuslubade registrisse aadressil <strong>fi.ee</strong>.',
      ],
    },
    {
      id: 'kuumakse-vs-kogukulu',
      title: 'Kuumakse või kogukulu — kumb otsustab?',
      body: [
        'Kiirlaenu reklaamis paistab kõige paremini silma kuumakse, sest see on väikseim number. Tegelik hind peitub aga kogukulus: mitu eurot maksad laenu lõpuks tagasi rohkem, kui laenasid. Sama 2000 eurot võib maksta 240 eurot või 900 eurot — vahe tuleb ainult perioodist ja KKM-ist.',
        '<table><caption>Kulude näide: 2000 € laen erineva perioodi korral, KKM ~25%</caption><thead><tr><th>Periood</th><th>Ligikaudne kuumakse</th><th>Tagasi kokku</th><th>Ülekulu</th></tr></thead><tbody><tr><td>6 kuud</td><td>~356 €</td><td>~2136 €</td><td>~136 €</td></tr><tr><td>12 kuud</td><td>~188 €</td><td>~2256 €</td><td>~256 €</td></tr><tr><td>24 kuud</td><td>~106 €</td><td>~2544 €</td><td>~544 €</td></tr><tr><td>36 kuud</td><td>~79 €</td><td>~2844 €</td><td>~844 €</td></tr><tr><td>48 kuud</td><td>~66 €</td><td>~3168 €</td><td>~1168 €</td></tr></tbody></table>',
        'Tabel on illustratiivne ja arvutatud annuiteetgraafiku alusel; täpsed summad sõltuvad konkreetse pakkuja intressist ja tasudest. Loogika on siiski universaalne: perioodi kahekordistamine ei kahekorda kuumakset, küll aga kasvatab ülekulu ligikaudu kaks korda. Kui kuumakse tundub liiga suur, on õigem vähendada laenusummat, mitte venitada tähtaega.',
        'Kolm asja, mis kogukulu tegelikult liigutavad: <ul><li><strong>periood</strong> — suurima mõjuga tegur, iga lisandunud aasta on puhas intressikulu;</li><li><strong>KKM, mitte intress</strong> — lepingutasu ja kuutasu võivad tõsta 19% intressi 30% KKM-iks;</li><li><strong>osaline ennetähtaegne tagasimakse</strong> — iga lisamakse lühendab perioodi ja kärbib intressi kohe.</li></ul>',
        'Enne allkirja tasub arv läbi mängida meie kalkulaatoris ja kõrvutada see <a href="/vaikelaen">väikelaenu</a> graafikuga: sama summa pikemal perioodil ja madalamal KKM-il annab sageli väiksema kogukulu kui kiirlaen lühikesel perioodil. Kuidas me pakkumisi kõrvutame, on kirjas <a href="/metoodika">metoodika lehel</a>.',
      ],
    },
    {
      id: 'taotluse-teekond',
      title: 'Kiirlaenu taotlemine telefonist samm-sammult',
      body: [
        '<h3>1. Ettevalmistus enne taotlust</h3>',
        'Enne vormi avamist pane kirja täpne summa ja põhjus. Ligikaudne „umbes kolm tuhat“ viib peaaegu alati liiga suure laenuni. Vaata üle viimase kolme kuu kontoväljavõte: laenuandja teeb sedasama ja hindab, kui palju vaba raha pärast püsikulusid alles jääb. Kontrolli ka oma seisu Creditinfo maksehäireregistris — aktiivne häire tähendab enamasti automaatset eitavat otsust ja iga taotlus jätab jälje.',
        '<h3>2. Taotluse täitmine</h3>',
        'Taotlusvorm küsib isikukoodi, sissetuleku suurust ja allikat, olemasolevaid kohustusi ning leibkonna suurust. Andmed peavad ühtima sellega, mida pank näeb konto agregeerimisel — vastuolu on üks sagedasemaid keeldumise põhjuseid. Isik tuvastatakse Smart-ID või Mobiil-ID-ga, PIN-koodi ei küsi keegi telefoni teel ega e-kirjas.',
        '<h3>3. Otsus, leping ja väljamakse</h3>',
        'Automaatne eelotsus tuleb tavaliselt mõne minutiga, käsitsi ülevaatamisele suunatud taotlus võib võtta tunde. Enne allkirjastamist saad <strong>Euroopa tarbijakrediidi standardinfo teabelehe</strong> — seal on KKM, kogusumma ja graafik ühel lehel. Loe seda, mitte reklaami. Allkirjastamine käib digitaalselt ja raha jõuab kontole sageli sama tööpäeva jooksul; nädalavahetusel esitatud taotlus makstakse välja esimesel pangapäeval.',
        'Kui protsess tundub liiga kiire, siis see ongi kiirlaenu risk. Sama teekond kehtib ka <a href="/sms-laen">SMS-laenu</a> puhul, ainult summad on väiksemad; suurema summa korral lisandub <a href="/vaikelaen">väikelaenu</a> juures põhjalikum maksevõime kontroll ja otsus võib võtta kauem.',
      ],
    },
    {
      id: 'levinud-vead',
      title: 'Vead, mis teevad kiirlaenu kallimaks kui vaja',
      body: [
        'Enamik kalleid kiirlaene ei ole kallid halva pakkuja, vaid halva otsuse tõttu. Need vead korduvad kõige sagedamini:',
        '<ul><li><strong>Võrdlemine kuumakse järgi.</strong> Väikseim kuumakse tähendab tavaliselt pikimat perioodi ja suurimat ülekulu.</li><li><strong>Ümardamine ülespoole.</strong> „Võtan igaks juhuks 500 eurot rohkem“ — see 500 eurot maksab intressi kogu perioodi vältel.</li><li><strong>Mitu taotlust korraga.</strong> Viis päringut ühel päeval näeb laenuandja silmis välja nagu meeleheide, mitte nagu võrdlus.</li><li><strong>Tasude eiramine.</strong> Lepingutasu, kuutasu ja graafiku muutmise tasu ei kajastu intressis, küll aga KKM-is.</li><li><strong>Vana laenu katmine uuega.</strong> Kui uue laenu KKM on kõrgem, kasvab võlg iga ringiga.</li><li><strong>Automaatne pikendamine.</strong> Mõne pakkuja juures saab tähtaega tasu eest edasi lükata; see on tavaliselt kõige kallim viis aega osta.</li><li><strong>Lepingu lugemata jätmine.</strong> Viivisemäär ja meeldetuletustasud on kirjas just seal, kuhu keegi ei vaata.</li></ul>',
        'Kõige lihtsam kaitse on ajapikendus iseendale: kirjuta vajalik summa üles ja tee otsus järgmisel päeval. Kui vajadus on siis endiselt olemas, on see reaalne. Kui laen on mõeldud korduvaks kasutuseks, ei ole kiirlaen õige tööriist — <a href="/krediidiliin">krediidiliin</a> või <a href="/krediidikonto">krediidikonto</a> maksavad korduva vajaduse korral vähem, sest intressi arvestatakse ainult kasutatud osalt.',
        'Ja kui laen on juba võetud ning graafik pingul, ei tasu vaikida. Krediidiandjal on kohustus makseraskustes klienti teavitada ja sageli on võimalik graafikut ümber teha enne, kui tekib maksehäire. Maksehäire kustub registrist alles kolm aastat pärast võla tasumist ja see mõjutab kõiki tulevasi taotlusi, kaasa arvatud <a href="/autolaen">autolaenu</a> ja <a href="/krediitkaart">krediitkaardi</a> omi.',
      ],
    },
    {
      id: 'taganemisoigus',
      title: '14 päeva taganemisõigust: kuidas seda praktikas kasutada',
      body: [
        'Võlaõigusseadus annab tarbijakrediidi puhul <strong>14-päevase taganemisõiguse</strong>. See tähendab, et võid lepingust põhjust nimetamata taganeda 14 päeva jooksul lepingu sõlmimisest. Õigus kehtib ka siis, kui raha on juba kontole laekunud ja isegi siis, kui oled selle ära kulutanud — tagastada tuleb laenusumma ja kasutatud päevade eest arvestatud intress, mitte leppetrahv.',
        'Praktiline kord on lihtne, aga tähtajaline: <ul><li>saada taganemisavaldus <strong>kirjalikult</strong> (e-kiri või iseteeninduse vorm) enne 14 päeva möödumist;</li><li>tagasta laenusumma <strong>hiljemalt 30 päeva jooksul</strong> taganemisavalduse esitamisest;</li><li>küsi krediidiandjalt täpne summa koos päevaintressiga — see erineb algsest väljamaksest;</li><li>säilita kinnitus, et leping on lõpetatud, kuni näed seda ka lepingute ülevaates.</li></ul>',
        'Taganemisõigus on kasulik just siis, kui otsus tehti kiirustades: pakkumine osutus oodatust kallimaks, raha vajadus kadus või leidsid vahepeal soodsama tingimuse. Eraldi õigus on <strong>ennetähtaegne tagastamine</strong>, mis kehtib kogu perioodi vältel — laenu võib igal ajal osaliselt või täielikult tagasi maksta ja intressikulu väheneb võrdeliselt. Tarbijakrediidi puhul on see Eestis reeglina tasuta.',
        'Kui krediidiandja keeldub taganemisõigust tunnustamast, saab pöörduda Tarbijakaitse ja Tehnilise Järelevalve Ameti tarbijavaidluste komisjoni poole. Litsentseeritud pakkuja üle teostab järelevalvet Finantsinspektsioon ja tegevusloa olemasolu saab igaüks kontrollida registrist. Küsimuste või ebatäpsuse korral meie võrdluses anna teada <a href="/kontakt">kontaktilehel</a>.',
      ],
    },
    {
      id: 'millal-mitte',
      title: 'Millal kiirlaen ei ole parim lahendus',
      body: [
        'Kiirlaen on hea tööriist ühekordse, ajakriitilise ja piiritletud kulu jaoks. Kolmes olukorras on ta peaaegu alati vale valik.',
        '<h3>Kui vajadus on korduv</h3>',
        'Kui raha on vaja mitu korda aastas, tähendab iga uus kiirlaen uut lepingutasu ja uut intressiarvestust täissummalt. Uuenev limiit on sel juhul odavam: <a href="/krediidikonto">krediidikonto</a> ja <a href="/krediidiliin">krediidiliin</a> arvestavad intressi ainult kasutatud osalt ja kasutamata limiit ei maksa tavaliselt midagi.',
        '<h3>Kui summa on suur ja periood pikk</h3>',
        'Üle 5000 euro ja üle kahe aasta muutub KKM-i vahe otsustavaks. <a href="/vaikelaen">Väikelaenu</a> KKM on tüüpiliselt tuntavalt madalam ja intress sageli fikseeritud kogu perioodiks, mis teeb kuumakse ettearvatavaks. Auto ostmisel tasub kõrvutada ka <a href="/autolaen">autolaenu</a> ja liisingu varianti, kus tagatis alandab intressi.',
        '<h3>Kui laen läheb teise laenu katteks</h3>',
        'Vana kohustuse katmine uue, kallima kohustusega on kõige levinum tee võlaspiraali. Kui kohustusi on mitu, on õige suund refinantseerimine ühe soodsama laenu alla, mitte uus kiirlaen. Vestlus krediidiandjaga maksegraafiku muutmiseks on tasuta ja peaaegu alati odavam kui uus leping.',
        'Ja on olukordi, kus laenu ei ole vaja üldse: ostu edasilükkamine kuu võrra, olemasoleva <a href="/krediitkaart">krediitkaardi</a> intressivaba periood või tööandjaga kokku lepitud ettemaks lahendavad sama probleemi ilma KKM-ita.',
      ],
    },
    {
      id: 'sonastik',
      title: 'Lepingu sõnastik: mõisted, mille taha otsus jääb',
      body: [
        'Laenulepingu keel on täpne, mitte keeruline. Kui need kaksteist mõistet on selged, saab pakkumisi võrrelda ilma müügijututa.',
        '<h3>Hinda puudutavad mõisted</h3>',
        '<ul><li><strong>Intressimäär</strong> — aastane protsent laenujäägilt. Ei sisalda tasusid, seega üksi ei kõlba võrdlemiseks.</li><li><strong>KKM (krediidi kulukuse määr)</strong> — aastane protsent, mis sisaldab intressi ja kõiki kohustuslikke tasusid. Ainus aus võrdlusalus.</li><li><strong>Lepingutasu</strong> — ühekordne tasu lepingu sõlmimisel, sageli 1–3% summast.</li><li><strong>Haldustasu</strong> — igakuine tasu lepingu haldamise eest; väike number, mis pika perioodi jooksul kasvab suureks.</li><li><strong>Tagasimakstav kogusumma</strong> — põhiosa pluss kogu intress ja tasud. Kõige olulisem number lepingus.</li></ul>',
        '<h3>Graafikuga seotud mõisted</h3>',
        '<ul><li><strong>Annuiteetgraafik</strong> — makse on iga kuu ühesuurune, alguses on selles rohkem intressi, lõpus rohkem põhiosa.</li><li><strong>Väheneva põhiosaga graafik</strong> — makse on alguses suurem ja väheneb; kogukulu on väiksem kui annuiteedil.</li><li><strong>Maksepuhkus</strong> — kokkulepitud paus põhiosa tasumises; intress jookseb edasi ja tavaliselt on see tasuline.</li><li><strong>Viivis</strong> — lisatasu makse hilinemise eest, arvestatakse päevade kaupa.</li></ul>',
        '<h3>Õigustega seotud mõisted</h3>',
        '<ul><li><strong>Taganemisõigus</strong> — 14 päeva lepingu sõlmimisest, põhjust nimetamata.</li><li><strong>Ennetähtaegne tagastamine</strong> — õigus maksta laen igal ajal osaliselt või täielikult tagasi; tarbijakrediidil reeglina tasuta.</li><li><strong>Vastutustundliku laenamise põhimõte</strong> — krediidiandja kohustus veenduda enne lepingut, et laen on sulle jõukohane.</li></ul>',
        'Need mõisted kehtivad ühtmoodi ka <a href="/vaikelaen">väikelaenu</a>, <a href="/autolaen">autolaenu</a> ja <a href="/sms-laen">SMS-laenu</a> puhul. Uuenevatel toodetel — <a href="/krediidikonto">krediidikontol</a> ja <a href="/krediidiliin">krediidiliinil</a> — lisandub veel miinimummakse mõiste, mis tähendab väikseimat lubatud kuumakset, mitte soovitatavat tagasimaksetempot.',
      ],
    },
  ],

  example: {
    amount: '2000 €',
    period: '24 kuud',
    interest: '19,9% (fikseeritud)',
    apr: '24,6%',
    monthly: '~101 €',
    total: '~2436 €',
    note: 'Näide sisaldab lepingutasu 30 € ja kuutasu 0 €. Tegelik KKM sõltub pakkujast, summast, perioodist ja krediidiotsusest.',
  },

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
    {
      q: 'Kui palju kiirlaen kokku maksab, kui võtan 2000 eurot?',
      a: [
        'See sõltub perioodist. 2000 eurot 12 kuuks KKM-iga umbes 25% tähendab ligikaudu 256 euro suurust ülekulu, sama summa 48 kuuks juba üle 1100 euro. Kuumakse väheneb perioodi pikendades, kogukulu kasvab — võrdle alati mõlemat numbrit korraga.',
      ],
    },
    {
      q: 'Mitu kiirlaenu taotlust võib korraga esitada?',
      a: [
        'Tehniliselt piirangut ei ole, kuid iga taotlus jätab krediidiandjatele nähtava jälje. Mitu päringut lühikese aja jooksul tõlgendatakse riskimärgina ja see vähendab heakskiidu tõenäosust. Mõistlik on võrrelda tingimusi eelnevalt ja esitada üks-kaks taotlust.',
      ],
    },
    {
      q: 'Kas kiirlaenust saab 14 päeva jooksul taganeda?',
      a: [
        'Jah. Võlaõigusseadus annab tarbijale 14-päevase taganemisõiguse alates lepingu sõlmimisest. Esita taganemisavaldus kirjalikult ja tagasta laenusumma koos kasutatud päevade intressiga 30 päeva jooksul. Leppetrahvi taganemise eest nõuda ei tohi.',
      ],
    },
    {
      q: 'Kuidas kontrollida, kas laenuandjal on tegevusluba?',
      a: [
        'Finantsinspektsioon peab krediidiandjate ja -vahendajate registrit, mis on avalik ja tasuta kättesaadav aadressil fi.ee. Ilma tegevusloata ettevõte ei tohi Eestis tarbijakrediiti pakkuda. MobiilneLaen.ee võrdluses on ainult litsentseeritud pakkujad.',
      ],
    },
  ],
};

export default kiirlaen;
