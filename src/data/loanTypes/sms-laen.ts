import type { LoanTypeContent } from './types';

const smsLaen: LoanTypeContent = {
  slug: 'sms-laen',
  loanType: 'sms-laen',
  navLabel: 'SMS-laen',

  seoText:
    'Vajad SMS-laenu kohe ja otse mobiilist? Võrdle Eesti SMS-laenu pakkujaid ühel lehel — MobiilneLaen.ee näitab summad, tingimused ja KKM-i, et leiaksid kiire SMS-laenu otse nutiseadmest mõne minutiga.',

  metaTitle: 'SMS-laen 2026 — kiire väikelaen kohe, võrdle KKM-i',
  metaDescription:
    'SMS-laen on väike kiirlaen, mille taotled tänapäeval internetis Smart-ID-ga mõne minutiga. Võrdle tingimusi, summasid ja KKM-i ning laena vastutustundlikult.',

  h1: 'SMS-laen — väike ja kiire laen kohe',
  lead:
    'SMS-laen on väike lühiajaline kiirlaen ootamatuteks väljaminekuteks. Nimi viitab vanale SMS-i teel taotlemisele, kuid tänapäeval vormistad laenu turvaliselt internetis mõne minutiga.',
  highlights: [
    { value: 'alates ~50 €', label: 'Väike laenusumma' },
    { value: '~5 min', label: 'Taotlus ja otsus' },
    { value: 'Samal päeval', label: 'Raha kontole' },
  ],

  intro: [
    '<strong>SMS-laen</strong> on väikese summa ja lühikese tähtajaga tagatiseta kiirlaen, mis sai nime ajast, mil laenu sai sõna otseses mõttes taotleda lühisõnumiga. Tänapäeval on „SMS“ pigem ajalooline nimetus — tegelik taotlemine ja lepingu allkirjastamine käib täielikult internetis Smart-ID või Mobiil-ID abil ning kogu protsess võtab vaid mõne minuti.',
    'SMS-laen sobib väikeste ootamatute kulude katmiseks palgapäevani — näiteks ühe arve või väiksema ostu jaoks. Kuna tegu on lühiajalise väikelaenuga, on selle <strong>krediidi kulukuse määr (KKM)</strong> protsentides sageli kõrge, mistõttu tasub laenu kasutada läbimõeldult ja võrrelda pakkumisi alati KKM-i alusel.',
  ],

  pros: [
    'Taotlemine 100% internetis Smart-ID või Mobiil-ID-ga, ilma SMS-ita',
    'Otsus tavaliselt mõne minutiga',
    'Raha kontole sageli juba samal tööpäeval',
    'Väikesed summad sobivad lühiajaliseks vajaduseks',
    'Tagatist ega käendajat ei nõuta',
    'Ennetähtaegne tagastamine on seadusega lubatud ilma trahvita',
  ],
  cons: [
    'Lühiajalise väikelaenu KKM on protsentides sageli kõrge',
    'Väikesed summad ei sobi suuremate ostude rahastamiseks',
    'Lühike tagasimakseperiood tähendab suuremat kuumakset',
    'Korduv kasutamine palgapäevani võib viia võlgade spiraali',
    'Nõutav püsiv sissetulek ja korrektne maksekäitumine',
  ],

  requirements: [
    'Vähemalt 18-aastane Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto isikutuvastuse ja väljamakse jaoks',
    'Smart-ID või Mobiil-ID isiku tuvastamiseks ja lepingu allkirjastamiseks',
  ],

  conditions: [
    { label: 'Laenusumma', value: 'väike, alates ~50 €' },
    { label: 'Periood', value: 'lühike, paarist nädalast mõne kuuni' },
    { label: 'Taotlemine', value: 'internetis, Smart-ID / Mobiil-ID' },
    { label: 'Otsus', value: 'mõne minutiga' },
    { label: 'Väljamakse', value: 'samal tööpäeval' },
  ],

  sections: [
    {
      id: 'kuidas-sms-laen-tootab',
      title: 'Kuidas SMS-laen tänapäeval töötab?',
      body: [
        'Vaatamata nimele ei pea SMS-laenu tänapäeval enam lühisõnumiga taotlema. Taotlus täidetakse laenuandja kodulehel, isik tuvastatakse <strong>Smart-ID või Mobiil-ID</strong> abil ja leping allkirjastatakse digitaalselt. Laenuandja kontrollib taotleja maksevõimet ja maksehäireregistrit ning teeb otsuse tavaliselt mõne minutiga.',
        'Pärast positiivset otsust ja lepingu allkirjastamist kantakse raha taotleja Eesti pangakontole, sageli juba samal tööpäeval. „SMS“ on seega jäänud pigem tooteliigi nimeks, mis tähistab väikest ja kiiret laenu — taotlemine ise on kolinud täielikult internetti.',
      ],
    },
    {
      id: 'sms-laen-vs-kiirlaen',
      title: 'SMS-laen vs kiirlaen — mis vahe on?',
      body: [
        '<strong>SMS-laen</strong> on sisuliselt kiirlaenu väiksem alaliik: tüüpiliselt veel väiksemad summad ja lühem tähtaeg. <strong>Kiirlaen</strong> katab laiema vahemiku ja võimaldab sageli suuremaid summasid ning pikemat tagasimakseperioodi. Mõlemad on tagatiseta laenud, mille saab kiiresti internetis vormistada.',
        'Kui vajad väikest summat vaid lühikeseks ajaks palgapäevani, sobib SMS-laen. Suurema kulu või pikema tähtaja korral tasub vaadata tavalist kiirlaenu või väikelaenu, mille KKM on tihti soodsam. Valiku tegemisel võrdle alati laenu tegelikku hinda KKM-i alusel.',
      ],
    },
    {
      id: 'turu-ulevaade',
      title: 'Turg numbrites: kust SMS-laen tuli ja kus ta täna on',
      body: [
        '<h3>Kui suur segment see täna on</h3>',
        'Eesti Panga finantssektori statistika järgi ulatub majapidamiste tarbimislaenude jääk üle <strong>1,1 miljardi euro</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal). Lühiajalised väikesummalised laenud, mida turul SMS-laenuks nimetatakse, on sellest jäägist üks väiksemaid osi — keskmine väljastatav summa jääb tüüpiliselt <strong>100 ja 500 euro</strong> vahele ning periood ühest kuust kuuni kuueni. Finantsinspektsiooni krediidiandjate registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026), kellest väikelaenudele on spetsialiseerunud vaid osa.',
        'Väike summa ei tähenda väikest hinda: just lühikese perioodi tõttu tuleb protsentides väljendatud KKM kõrge. Kui vajad rohkem kui paarsada eurot või pikemat perioodi, on <a href="/kiirlaen">kiirlaen</a> ja eriti <a href="/vaikelaen">väikelaen</a> mõõdetavalt odavamad — vahe kogukulus võib olla mitmekordne.',
        '<h3>Kuidas toode ajas muutus</h3>',
        'SMS-laen jõudis Eestisse 2000. aastatel ja oli toona täpselt see, mida nimi lubab: väike laen, mida taotleti lühisõnumiga ja mille otsus tuli samuti telefoni. Toode muutus kiiresti populaarseks just lihtsuse tõttu, kuid samal ajal kasvasid ka probleemid — läbimõtlemata laenamine, kõrged kulud ja võlgnevused. Tänaseks on nimi jäänud, kuid sisu on täielikult muutunud: taotlemine käib laenuandja kodulehel, isik tuvastatakse <strong>Smart-ID või Mobiil-ID</strong> abil ja leping allkirjastatakse digitaalselt.',
        'Ka turg ise näeb välja teistsugune kui algusaastatel. Regulatsiooni karmistamine — muu hulgas kiirlaenureklaami piirangud ja <strong>krediidi kulukuse määra ülempiir</strong> — sõelus turult välja vastutustundetumad tegijad ning alles jäid litsentseeritud pakkujad, kelle üle teeb järelevalvet Finantsinspektsioon. Väikelaenudele spetsialiseerunud pakkujaid, näiteks SmsRaha (Placet Group), iseloomustab tänapäeval sama loogika mis muid tarbimislaene: maksevõime hindamine, selged lepingutingimused ja avalik KKM. Summad on jäänud väikeseks — SMS-laen on endiselt lühiajaline väikelaen, mitte suurema ostu rahastamise tööriist.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Kui taotlus jääb rahuldamata',
      body: [
        'Kõige sagedasemad keeldumise põhjused on: <ul><li><strong>kehtiv maksehäire</strong> — laenuandjad kontrollivad maksehäireregistrit ja aktiivse võlgnevusega taotlus lükatakse üldjuhul tagasi;</li><li><strong>tõendamata või ebapiisav sissetulek</strong> — kui pangakonto väljavõttelt ei paista regulaarset laekumist või kuumakse ei mahu maksevõime piiresse;</li><li><strong>palju hiljutisi laenutaotlusi</strong> — mitu taotlust lühikese aja jooksul viitab rahalisele survele ja tõstab riskihinnangut;</li><li>vigased või puudulikud andmed taotluses.</li></ul>',
        'Kui said eitava otsuse, ära esita kohe uusi taotlusi teistele pakkujatele. Mõistlikum on põhjus kõrvaldada: lahenda maksehäire, lase sissetulekul kontole regulaarselt laekuda ja oota mõni kuu enne uut taotlust. Kui kõik litsentseeritud laenuandjad keelduvad, on see märk, et laen ei ole praegu sinu eelarvele jõukohane — <strong>ära pöördu litsentsita või eraisikust laenuandjate poole</strong>. Nende tingimused ei allu järelevalvele, kulud võivad olla röövellikud ja tarbijakaitse sind sellisel juhul ei kaitse.',
        '<h3>Kolm sammu keeldumise järel</h3>',
        '<strong>1. Küsi põhjus, mitte uut pakkujat.</strong> Kui otsus tugines andmekogu päringule, pead saama tasuta teada, millisest registrist päring tehti ja mis oli tulemus. Enda kohta käivate andmete koopia on samuti tasuta — sellega saab kontrollida, kas kirje on ikka õige ja ajakohane.',
        '<strong>2. Anna ajale aega.</strong> SMS-laenu summad on väikesed, seega on ka otsus enamasti automaatne ja tugineb värsketele andmetele. Kui sama nädala jooksul esitada veel viis taotlust, muutub pilt halvemaks, mitte paremaks. Mõistlik paus on paar kuud, mille sees palk laekub korrapäraselt samale kontole ja lõpetatud maksehäired saavad registris kinnitatud.',
        '<strong>3. Vali teine tee, kui vastus kordub.</strong> Kui ka väikese summa puhul tuleb ei, ei ole probleem pakkujas. Tasuta võlanõustamine kohalikus omavalitsuses, arve tähtaja pikendamine müüjaga või olemasoleva <a href="/krediitkaart">krediitkaardi</a> intressivaba periood lahendavad sama vajaduse ilma uue kohustuseta. Suurema ja pikema vajaduse puhul on <a href="/vaikelaen">väikelaen</a> odavam kui korduvad väikelaenud üksteise otsa.',
        'Vaidluse korral pakkujaga saab pöörduda <a href="https://ttja.ee/" target="_blank" rel="noopener noreferrer">Tarbijakaitse ja Tehnilise Järelevalve Ameti</a> poole, kelle juures töötab tarbijavaidluste komisjon. Ükski meie võrdluses olev pakkuja ei saa sind kohustada uut taotlust esitama ja ühegi keeldumise eest ei tohi küsida tasu.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Järelevalve: kes vastutab ja mille eest',
      body: [
        'Just SMS-laenude segment oli omal ajal peamine põhjus, miks Eesti kiirlaenuturgu hakati rangemalt reguleerima. Tänapäeval tohib tarbijakrediiti väljastada ainult <strong>Finantsinspektsiooni tegevusloaga</strong> krediidiandja, laenu tegelikku hinda piirab <strong>krediidi kulukuse määra ülempiir</strong> ning kiirlaenude reklaamile kehtivad ranged piirangud — reklaam ei tohi jätta muljet, et laenamine on muretu või kiire lahendus rahamurele. Lisaks peab laenuandja enne lepingu sõlmimist hindama taotleja maksevõimet.',
        'Tarbijal on seadusest tulenevad õigused, mida ükski leping ära võtta ei saa: <strong>14-päevane taganemisõigus</strong> ehk võimalus lepingust põhjust nimetamata taganeda, ning õigus laen <strong>igal ajal ennetähtaegselt tagastada ilma leppetrahvita</strong>, mille korral väheneb ka intressikulu. Enne taotluse esitamist kontrolli alati, et pakkujal on kehtiv tegevusluba — litsentseeritud krediidiandjate nimekiri on avalik Finantsinspektsiooni lehel <strong>fi.ee</strong>. Kui pakkujat sealt ei leia, ära temaga lepingut sõlmi.',
      ],
    },
    {
      id: 'mida-see-maksab',
      title: 'Mida väike laen tegelikult maksab?',
      body: [
        'Kui summa on väike, tundub ka hind väike. Absoluutarvudes sageli ongi — 300 eurot kolmeks kuuks võib maksta paarkümmend eurot. Protsentides on sama laen kallis, sest lepingutasu jaotub lühikesele perioodile ja KKM arvutatakse aasta baasil. Mõlemad numbrid on õiged; otsuse jaoks on vaja vaadata neid koos.',
        '<table><caption>Kulude näide: väike laen erineva summa ja perioodi korral</caption><thead><tr><th>Summa</th><th>Periood</th><th>Ligikaudne makse kuus</th><th>Tagasi kokku</th><th>Ülekulu</th></tr></thead><tbody><tr><td>100 €</td><td>1 kuu</td><td>~112 €</td><td>~112 €</td><td>~12 €</td></tr><tr><td>300 €</td><td>3 kuud</td><td>~112 €</td><td>~336 €</td><td>~36 €</td></tr><tr><td>500 €</td><td>6 kuud</td><td>~96 €</td><td>~576 €</td><td>~76 €</td></tr><tr><td>800 €</td><td>12 kuud</td><td>~80 €</td><td>~960 €</td><td>~160 €</td></tr></tbody></table>',
        'Tabel on illustratiivne ja koostatud tüüpilise turuhinna põhjal; konkreetse pakkuja tingimused võivad erineda mõlemas suunas. Loe seda nii: <ul><li><strong>ülekulu eurodes</strong> ütleb, kas laen on jõukohane;</li><li><strong>KKM protsentides</strong> ütleb, kas pakkumine on turu kontekstis mõistlik;</li><li><strong>kuumakse</strong> ütleb, kas see mahub sinu järgmise kuu eelarvesse ilma uut laenu võtmata.</li></ul>',
        'Kui kolmas punkt tekitab kahtlust, on see kõige olulisem hoiatussignaal. Väike laen, mille tagasimakse eeldab järgmist väikest laenu, muutub kalliks väga kiiresti. Suurema summa või pikema perioodi puhul kõrvuta arvud <a href="/vaikelaen">väikelaenu</a> graafikuga ja vaata ka <a href="/metoodika">meie metoodikat</a>, mille alusel pakkumisi järjestame.',
      ],
    },
    {
      id: 'kellele-sobib',
      title: 'Kellele see laen sobib ja kellele mitte',
      body: [
        '<h3>Sobib</h3>',
        'Ühekordne, täpselt teadaolev ja ajakriitiline kulu, mille katteks on raha juba olemas — see saabub lihtsalt hiljem. Näiteks arve, mille tähtaeg jääb kolm päeva palgapäevast varasemaks, või väiksem remont, mille edasilükkamine läheks kallimaks kui laenu ülekulu. Sellisel juhul on periood lühike, ülekulu piiritletud ja tagasimakse allikas teada.',
        '<h3>Ei sobi</h3>',
        'Püsiv eelarvepuudujääk. Kui sissetulek ei kata igakuisi kulusid, ei ole see laenuprobleem ja laen teeb olukorra halvemaks — järgmisel kuul on lisaks samale puudujäägile ka tagasimakse. Samuti ei sobi väike lühiajaline laen suurema ostu rahastamiseks: 2000 euro laenamine kolmeks kuuks tähendab ligi 700-eurost kuumakset, mis on enamiku eelarve jaoks võimatu. Sellisel juhul on õige tööriist <a href="/vaikelaen">väikelaen</a> või <a href="/kiirlaen">kiirlaen</a> pikema graafikuga.',
        '<h3>Kaalu enne alternatiive</h3>',
        'Korduva vajaduse korral on uuenev limiit odavam kui rida üksiklaene: <a href="/krediidikonto">krediidikonto</a> puhul arvestatakse intressi ainult kasutatud osalt ja kasutamata limiit ei maksa reeglina midagi. Olemasoleva <a href="/krediitkaart">krediitkaardi</a> intressivaba periood katab sama vajaduse tihti nullkuluga, kui makse jõuab tähtajaks. Ja mõnikord piisab müüjaga kokku lepitud maksetähtaja pikendusest — see on tasuta ega jäta krediidiajalukku jälge.',
      ],
    },
    {
      id: 'mida-kontrollitakse',
      title: 'Mida laenuandja sinu kohta kontrollib',
      body: [
        'Vastutustundliku laenamise põhimõte kohustab krediidiandjat veenduma, et laen on taotlejale jõukohane. See ei ole vormitäide — kontroll on automatiseeritud ja üsna põhjalik ka väikeste summade puhul.',
        '<ul><li><strong>Maksehäireregister.</strong> Creditinfo andmebaasis olev aktiivne häire tähendab enamasti automaatset eitavat otsust. Häire kustub alles kolm aastat pärast võla tasumist.</li><li><strong>Sissetuleku regulaarsus.</strong> Vaadatakse laekumiste mustrit, mitte ainult summat: ühekordne suur laekumine kaalub vähem kui stabiilne kuupalk.</li><li><strong>Olemasolev laenukoormus.</strong> Kokku liidetakse kõik teadaolevad kohustused, sealhulgas <a href="/krediitkaart">krediitkaardi</a> ja <a href="/krediidiliin">krediidiliini</a> limiidid, ka siis, kui neid parasjagu ei kasuta.</li><li><strong>Hiljutised päringud.</strong> Mitu taotlust lühikese aja jooksul tõstab riskihinnangut.</li><li><strong>Andmete kooskõla.</strong> Taotlusel märgitud sissetulek peab ühtima sellega, mida näitab konto.</li></ul>',
        'Isikusamasus tuvastatakse <strong>Smart-ID või Mobiil-ID</strong> abil ja leping allkirjastatakse digitaalselt. Ükski litsentseeritud krediidiandja ei küsi sinu PIN-koode telefoni teel, e-kirjas ega sotsiaalmeedias — selline päring on alati pettus. Samuti ei nõua ükski järelevalve all olev pakkuja „menetlustasu“ ettemaksena enne laenuotsust.',
        'Kui kontroll läheb läbi, näed enne allkirjastamist Euroopa tarbijakrediidi standardinfo teabelehte, kus on kirjas KKM, kogusumma ja maksegraafik. See dokument on võrdlemiseks palju usaldusväärsem kui pakkumise leht ja seda tasub lugeda ka siis, kui laenusumma on väike.',
      ],
    },
    {
      id: 'makse-hilineb',
      title: 'Kui tagasimakse hilineb',
      body: [
        'Väikese laenu puhul tundub paaripäevane hilinemine tühine, kuid just siit algab enamik võlgnevusi. Kulud kasvavad kiiresti ja tagajärjed ulatuvad kaugemale kui üks leping.',
        '<h3>Mis juhtub tähtajast alates</h3>',
        '<ul><li><strong>Viivis</strong> hakkab jooksma esimesest hilinenud päevast ja arvestatakse päevade kaupa.</li><li><strong>Meeldetuletustasud</strong> lisanduvad iga saadetud teate eest; nende suurus on lepingus kirjas.</li><li><strong>Sissenõudemenetlus</strong> algab tavaliselt mõne kuu pärast ja lisab inkassotasud.</li><li><strong>Maksehäirekanne</strong> Creditinfo registris tekib pikema võlgnevuse korral ja jääb nähtavaks kolm aastat pärast võla tasumist.</li></ul>',
        '<h3>Mida teha kohe</h3>',
        'Võta krediidiandjaga ise ühendust enne tähtaega või kohe pärast seda. Litsentseeritud pakkujal on kohustus makseraskustes klienti teavitada tema võimalustest ja praktikas on graafiku muutmine tavaliselt võimalik — see on peaaegu alati odavam kui viivis ja kindlasti odavam kui uus laen vana katteks. Uue laenu võtmine vana tasumiseks on kõige levinum viis väikesest võlast suur teha.',
        '<h3>Miks see mõjutab tulevikku</h3>',
        'Maksehäire ei mõjuta ainult järgmist väikest laenu. Sama kanne takistab hiljem ka <a href="/vaikelaen">väikelaenu</a>, <a href="/autolaen">autolaenu</a> ja kodulaenu saamist ning võib takistada <a href="/krediitkaart">krediitkaardi</a> avamist. Kolm aastat on pikk aeg, kui vahepeal tekib vajadus suurema ostu järele.',
        'Kui olukord on juba keeruline ja kohustusi mitu, on õige suund koondamine ühe madalama KKM-iga lepingu alla, mitte uus lühiajaline laen. Võlanõustamise teenus on Eestis kättesaadav ka tasuta kohalike omavalitsuste kaudu.',
      ],
    },
    {
      id: 'kontroll-loend',
      title: 'Kontroll-loend enne taotluse esitamist',
      body: [
        'Viis küsimust, millele tuleks vastata enne vormi täitmist. Kui mõni vastus puudub, ei ole taotlus veel valmis.',
        '<ul><li><strong>Kas summa on täpne?</strong> Kirjuta vajalik summa eurodes välja. Ümardamine ülespoole on kõige kallim harjumus.</li><li><strong>Kust tuleb tagasimakse?</strong> Nimeta konkreetne laekumine ja kuupäev. „Kuidagi saab“ ei ole vastus.</li><li><strong>Mis on KKM ja kogusumma?</strong> Mõlemad peavad olema teada enne allkirja, mitte pärast.</li><li><strong>Kas pakkujal on tegevusluba?</strong> Kontrolli Finantsinspektsiooni registrist fi.ee — see võtab minuti.</li><li><strong>Kas alternatiiv on olemas?</strong> Maksetähtaja pikendus müüjaga, olemasolev limiit või ostu edasilükkamine on sageli tasuta.</li></ul>',
        'Kui kõik viis vastust on olemas ja laen on ikka mõistlik, on otsus tehtud teadlikult. Suurema summa või pikema perioodi puhul tasub sama loend läbi käia ka <a href="/kiirlaen">kiirlaenu</a> ja <a href="/vaikelaen">väikelaenu</a> tingimustega, sest hinnavahe on seal kordades suurem. Meie võrdluse alused on kirjas <a href="/metoodika">metoodika lehel</a>.',
      ],
    },
  ],

  example: {
    amount: '400 €',
    period: '6 kuud',
    interest: '24,9% (fikseeritud)',
    apr: '39,8%',
    monthly: '~73 €',
    total: '~438 €',
    note: 'Näide sisaldab lepingutasu 15 €. Lühikese perioodi tõttu on protsentides väljendatud KKM kõrge, kuigi ülekulu eurodes on väike. Tegelikud tingimused sõltuvad krediidiandja otsusest.',
  },

  faq: [
    {
      q: 'Kas SMS-laenu jaoks pean tegelikult SMS-i saatma?',
      a: [
        'Ei. „SMS-laen“ on tänapäeval pigem tooteliigi nimi, mis pärineb ajast, mil laenu sai taotleda lühisõnumiga. Praegu täidad taotluse laenuandja kodulehel ja tuvastad end Smart-ID või Mobiil-ID abil — lühisõnumit saatma ei pea.',
      ],
    },
    {
      q: 'Kui kiiresti saan SMS-laenu raha kätte?',
      a: [
        'Enamasti teeb laenuandja otsuse mõne minutiga ja kannab raha samal tööpäeval. Kui taotled ja allkirjastad lepingu pangapäeval, jõuab raha kontole tavaliselt mõne tunni jooksul.',
      ],
    },
    {
      q: 'Kui suure summa SMS-laenuna saab?',
      a: [
        'SMS-laen on mõeldud väikesteks summadeks lühikeseks ajaks, sageli vaid ühe arve või väiksema ostu katmiseks. Suuremate kulude rahastamiseks sobivad paremini tavaline kiirlaen või väikelaen pikema tähtaja ja soodsama KKM-iga.',
      ],
    },
    {
      q: 'Miks on SMS-laenu KKM nii kõrge?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab laenu tegelikku aastast hinda protsendina, sisaldades intressi ja kõiki tasusid. Lühiajalise väikelaenu puhul jaotuvad tasud lühikesele perioodile, mistõttu aastane KKM tuleb protsentides sageli kõrge. Just seetõttu tasub SMS-laenu kasutada vastutustundlikult ja võrrelda pakkumisi KKM-i alusel.',
      ],
    },
    {
      q: 'Kas maksehäirega saab SMS-laenu?',
      a: [
        'Kehtiva maksehäire korral on SMS-laenu saamine üldjuhul võimatu, sest laenuandjad kontrollivad maksehäireregistrit ja peavad hindama taotleja maksevõimet. Soovitame esmalt häire lahendada ja alles seejärel uut laenu taotleda.',
      ],
    },
    {
      q: 'Kas SMS-laenu saab ennetähtaegselt tagasi maksta?',
      a: [
        'Jah. Seadus annab õiguse laen igal ajal osaliselt või täielikult ennetähtaegselt tagastada ning sel juhul väheneb ka intressikulu. Lisatasu ennetähtaegse tagastamise eest reeglina ei ole, mis muudab varase tagasimakse mõistlikuks viisiks laenu kogukulu vähendada.',
      ],
    },
    {
      q: 'Kas väikest laenu saab pikendada, kui tagasimakse päev tuleb halvasti välja?',
      a: [
        'Mõned pakkujad võimaldavad tähtaega tasu eest edasi lükata. See on kõige kallim viis aega osta ja korduval kasutamisel kasvab võlg kiiresti. Mõistlikum on pöörduda krediidiandja poole enne tähtaega ja paluda maksegraafiku muutmist — see on tavaliselt tasuta ega tekita maksehäiret.',
      ],
    },
    {
      q: 'Kas väike laen mõjutab hilisemat suurema laenu saamist?',
      a: [
        'Korrektselt tagasi makstud laen ei kahjusta krediidiajalugu, pigem kinnitab maksekäitumist. Küll aga arvestatakse aktiivne kohustus sinu laenukoormuse hulka, mis vähendab järgmise laenu maksimaalset summat. Hilinenud maksed ja maksehäired mõjutavad kõiki tulevasi taotlusi, kaasa arvatud autolaenu ja kodulaenu omi.',
      ],
    },
  ],
};

export default smsLaen;
