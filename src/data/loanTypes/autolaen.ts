import type { LoanTypeContent } from './types';

const autolaen: LoanTypeContent = {
  slug: 'autolaen',
  loanType: 'autolaen',
  navLabel: 'Autolaen',

  seoText:
    'Plaanid autot osta ja otsid soodsat autolaenu? Võrdle Eesti autolaenu pakkumisi otse mobiilist — MobiilneLaen.ee aitab leida nii tagatiseta kui tagatisega autolaenu parima KKM-i ja sobiva kuumaksega.',

  metaTitle: 'Autolaen 2026 — võrdle ja taotle soodsalt, KKM ja kuumakse',
  metaDescription:
    'Osta auto autolaenuga: võrdle tagatiseta ja tagatisega pakkumisi ühel lehel. Summad kuni 20 000 €, periood kuni 84 kuud, kiire otsus. Vaata intresse ja KKM-i.',

  h1: 'Autolaen — võrdle ja vali soodsaim',
  lead:
    'Autolaen on laen auto ostuks: kas tagatiseta tarbimislaenuna või auto tagatisel madalama intressiga. Võrdle pakkujaid, vali sobiv KKM ja vorm.',
  highlights: [
    { value: 'kuni 20 000 €', label: 'Laenusumma' },
    { value: 'kuni 84 kuud', label: 'Tagasimakseperiood' },
    { value: 'Tagatisega või ilma', label: 'Kaks laenuvormi' },
  ],

  intro: [
    '<strong>Autolaen</strong> on sihtotstarbeline laen sõiduki ostuks, mida pakutakse Eestis kahel viisil. Esimene on <strong>tagatiseta autolaen</strong> — tavaline tarbimislaen, mille saad ostuks kasutada ilma autot pandiks seadmata; see on lihtsam ja kiirem, kuid intress on kõrgem. Teine on <strong>auto tagatisel laen ehk liising</strong>, kus ostetav sõiduk jääb tagatiseks, mis võimaldab madalamat intressi ja suuremat summat.',
    'Õige valik sõltub auto hinnast, vanusest ja sellest, kui kiiresti raha vajad. Enne lepingu sõlmimist tasub alati võrrelda <strong>krediidi kulukuse määra (KKM)</strong>, sest just see näitab laenu tegelikku aastast hinda koos kõigi tasudega. Arvesta ka kindlustuse kuluga: tagatisega laenu või liisingu puhul nõutakse sageli kaskokindlustust.',
  ],

  pros: [
    'Saad auto osta kohe, ilma kogu summat ette maksmata',
    'Tagatiseta variant ei nõua auto pantimist ega esmast sissemakset',
    'Auto tagatisel madalam intress ja suurem laenusumma',
    'Paindlik periood kuni 84 kuud — kuumakse mahub eelarvesse',
    'Taotlemine internetis, otsus tavaliselt kiiresti',
    'Ennetähtaegne tagastamine on seadusega lubatud ilma trahvita',
  ],
  cons: [
    'Tagatiseta autolaenu intress ja KKM on kõrgemad kui tagatisega laenul',
    'Auto tagatisel võib pank nõuda sissemakset ja kohustuslikku kaskokindlustust',
    'Pikk periood suurendab kogukulu, kuigi kuumakse on väiksem',
    'Tagatise korral on auto käsutamine piiratud kuni laenu lõpuni',
  ],

  requirements: [
    'Vähemalt 18-aastane Eesti kodanik või kehtiva elamisloaga isik',
    'Regulaarne ja tõendatav sissetulek maksevõime hindamiseks',
    'Kehtivate maksehäirete puudumine',
    'Eesti pangakonto ning ID-kaart, Smart-ID või Mobiil-ID tuvastamiseks',
    'Tagatisega laenu või liisingu puhul andmed ostetava sõiduki kohta',
  ],

  conditions: [
    { label: 'Laenusumma', value: 'kuni 20 000 €' },
    { label: 'Periood', value: '12 – 84 kuud' },
    { label: 'Intress', value: 'alates ~9,9% aastas' },
    { label: 'Laenuvorm', value: 'tagatiseta või auto tagatisel' },
    { label: 'Otsus', value: 'sageli samal päeval' },
  ],

  sections: [
    {
      id: 'tagatisega-vs-tagatiseta',
      title: 'Autolaen tagatisega vs tagatiseta',
      body: [
        '<strong>Tagatiseta autolaen</strong> on sisuliselt tavaline tarbimislaen, mille kasutad auto ostuks. Sa ei pea sõidukit pandiks seadma ega tegema esmast sissemakset, taotlemine on kiire ja sageli pole kohustuslikku kaskokindlustust. Vastutasuks on intress ja KKM kõrgemad ning maksimaalne summa väiksem. See variant sobib soodsama või vanema kasutatud auto ostuks ning olukorras, kus tahad jääda auto täielikuks omanikuks.',
        '<strong>Auto tagatisel laen ehk liising</strong> tähendab, et ostetav sõiduk jääb tagatiseks kuni laenu lõpliku tagastamiseni. See võimaldab madalamat intressi, pikemat perioodi ja suuremat summat, kuid laenuandja nõuab tavaliselt sissemakset ja <strong>kaskokindlustust</strong> kogu lepingu ajaks. Kui sissetulekut jätkub ja auto on uuem, on tagatisega lahendus üldjuhul soodsam. Võrdle alati mõlema variandi KKM-i, mitte ainult kuumakset.',
      ],
    },
    {
      id: 'kuidas-valida',
      title: 'Kuidas valida soodsaim autolaen?',
      body: [
        'Võrdle pakkumisi <strong>KKM-i</strong> alusel — see sisaldab intressi ja kõiki tasusid ning näitab laenu tegelikku aastast hinda. Madalaim kuumakse ei tähenda alati odavaimat laenu, sest pikk periood võib kogukulu oluliselt suurendada. Vaata ka lepingu- ja haldustasusid ning seda, kas ennetähtaegne tagastamine on tasuta.',
        'Arvesta kogukuluga: lisaks laenule tuleb maksta liiklus- ja sageli kaskokindlustuse eest, mis tagatisega laenu puhul on tihti kohustuslik. Vali periood, mis hoiab kuumakse eelarves, kuid ära veni seda asjatult pikaks. Laena vastutustundlikult ja vaid summas, mille tagasimaksmises oled kindel ka muutuvas olukorras.',
      ],
    },
    {
      id: 'turu-ulevaade',
      title: 'Autoturg ja rahastamine numbrites',
      body: [
        '<h3>Turg arvudes</h3>',
        'Maanteeameti ja Transpordiameti liiklusregistri andmetel registreeritakse Eestis aastas ligikaudu <strong>20 000–25 000 uut sõiduautot</strong> ning kasutatud autode omanikuvahetusi mitu korda rohkem (allikas: Transpordiamet, liiklusregistri statistika, 2026). Eesti Panga finantssektori statistika järgi ületab majapidamiste liisingu- ja autolaenuportfell <strong>800 miljonit eurot</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal). Finantsinspektsiooni registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026), kellest osa on spetsialiseerunud just sõidukite rahastamisele.',
        'Tarbija jaoks tähendab see, et sama auto kohta saab reaalselt kolm-neli erinevat pakkumist ja nende KKM-i vahe ulatub sageli viie protsendipunktini. Kaheteistkümne tuhande euro ja viie aasta juures on see üle tuhande euro. Kui summa jääb alla paari tuhande, on mõistlik kõrvutada ka <a href="/vaikelaen">väikelaenu</a> ja <a href="/kiirlaen">kiirlaenu</a> tingimusi, kus tagatist ei nõuta üldse.',
        '<h3>Kes turul tegutsevad</h3>',
        'Eesti autofinantseerimise turul tegutsevad kõrvuti <strong>pangad</strong> (näiteks TF Bank), <strong>pangavälised krediidiandjad</strong> (näiteks Primero) ja spetsialiseerunud <strong>liisingufirmad</strong>. Laenuvõtja vaatest jaguneb turg kaheks: tagatiseta tarbimislaen auto ostuks ja auto tagatisel laen ehk liising. Tagatiseta variandi puhul saad raha kontole ja ostad sõiduki iseseisvalt — müüja ega auto vanus laenuandjat üldjuhul ei huvita. Liisingu puhul finantseerib ettevõte konkreetset sõidukit, mis jääb lepingu lõpuni tagatiseks.',
        'Praktikas kujuneb valik sageli auto järgi: <strong>kasutatud ja vanema sõiduki</strong> ostuks võetakse pigem tagatiseta autolaen, sest liisinguandjad seavad sõiduki vanusele ja seisukorrale piiranguid; <strong>uue või uuema auto</strong> puhul on liising tavaliselt soodsam tänu madalamale intressile. Tagatiseta autolaenu summad ulatuvad Eestis üldjuhul kuni umbes 20 000 euroni, millest piisab enamiku kasutatud autode ostuks. Suurema summa vajadusel tuleb kõne alla just tagatisega lahendus.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Kui autolaenu taotlus tagasi lükatakse',
      body: [
        'Kõige sagedasem keeldumise põhjus on <strong>kehtiv maksehäire</strong> — enamik laenuandjaid ei väljasta laenu, kui registris on aktiivne võlg. Teine tüüpiline põhjus on sissetuleku ja soovitud kuumakse ebakõla: kui kuumakse koos olemasolevate kohustustega võtab liiga suure osa netosissetulekust, hindab laenuandja maksevõime ebapiisavaks. Arvesse läheb kogu <strong>krediidikoormus</strong> — teised laenud, järelmaksud, krediitkaardid ja liisingud. Auto tagatisel laenu puhul võib takistuseks saada ka sõiduk ise: liiga vana, kehvas seisukorras või madala turuväärtusega auto ei sobi tagatiseks.',
        'Kui taotlus lükati tagasi, ära esita kohe uusi taotlusi kõikjale — tegele põhjusega. Võimalusel tasu maksehäire ja oota selle aegumist registris. Kaalu <strong>suuremat sissemakset</strong> või odavamat autot, et vajaminev summa ja kuumakse väheneksid. Pikem periood alandab kuumakset ja parandab maksevõime suhtarvu, kuigi suurendab kogukulu. Kui sissetulek jääb üksi napiks, võib lahenduseks olla <strong>kaastaotleja</strong> — näiteks abikaasa —, kelle sissetulek liidetakse maksevõime hindamisel sinu omaga.',
        '<h3>Mida teha keeldumise järel — ja mida mitte</h3>',
        'Autolaenu puhul on kaks eraldi küsimust: kas keelduti <em>sinust</em> või <em>autost</em>. Esimene samm on see vahe välja selgitada, sest lahendused on täiesti erinevad. Küsi krediidiandjalt põhjus — kui otsus tehti andmekogu päringu alusel, tuleb sulle tasuta öelda, millisest registrist päring tehti ja mida see näitas. Oma andmetega tutvumine on samuti tasuta ja tasub ära, kui kahtlustad vana või vale kirjet.',
        'Kui takistus on taotlejas, aitab aeg ja koormuse vähendamine: paar kuud korrapärast maksekäitumist, kasutamata limiitide sulgemine ja alles seejärel uus taotlus. Kui takistus on sõidukis — liiga vana auto, ebaselge päritolu või madal turuväärtus —, siis ükski ooteaeg ei aita: muutuma peab auto. Sel juhul on valikuteks suurem sissemakse, odavam sõiduk või tagatiseta <a href="/vaikelaen">väikelaen</a>, mille puhul auto ei ole lepingu osa ja müüjale ei ole vahet, kust raha tuleb.',
        'Mida mitte teha: esitada sama nädala jooksul taotlusi mitmele pakkujale, võtta autot järelmaksuga ilma kogukulu välja arvutamata või katta sissemakset <a href="/kiirlaen">kiirlaenuga</a> — siis maksad kahe lepingu intressi korraga. Tarbija õigused, sealhulgas 14-päevane taganemisõigus ja tasuta ennetähtaegne tagastamine, on kirjas <a href="https://www.riigiteataja.ee/akt/961235?leiaKehtiv" target="_blank" rel="noopener noreferrer">võlaõigusseaduses</a>; need kehtivad ka siis, kui leping sai alla kirjutatud autosalongis.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Seadus, tegevusluba ja sinu õigused',
      body: [
        'Eestis tohib tarbijale krediiti anda vaid ettevõte, kellel on <strong>Finantsinspektsiooni tegevusluba</strong> — enne taotlemist saad pakkuja litsentsi Finantsinspektsiooni veebilehelt üle kontrollida. Tarbijakrediidi <strong>KKM-il on seadusega ülempiir</strong>, mis kaitseb ebamõistlikult kalli laenu eest. Sul on õigus lepingust <strong>14 päeva jooksul taganeda</strong> ilma põhjust esitamata ning laenu igal ajal <strong>ennetähtaegselt tagastada</strong> — sel juhul maksad intressi vaid tegeliku kasutusaja eest.',
        'Auto tagatisel laenu ja liisingu puhul loe leping eriti hoolikalt läbi. Tüüpiliselt nõutakse <strong>kaskokindlustust</strong> kogu lepingu ajaks — see on arvestatav püsikulu, mis tuleb kuumaksele juurde arvata, ja kindlustuse puudumine võib olla lepingu rikkumine. Sama oluline on mõista, millistel tingimustel võib laenuandja maksehäire korral <strong>sõiduki tagasi võtta</strong> ja kuidas toimub selle müük ning võlgnevuse tasaarveldus. Küsimuste või vaidluse korral saad pöörduda Tarbijakaitse ja Tehnilise Järelevalve Ameti poole.',
      ],
    },
    {
      id: 'kuupakett-vs-kogukulu',
      title: 'Auto tegelik hind: kuumakse ei ole kogukulu',
      body: [
        'Autoostu juures on kiusatus vaadata ainult kuumakset, sest just seda müüakse. Tegelik hind koosneb aga neljast osast: laenu põhiosa, intress, kindlustus ja auto ülalpidamine. Esimesed kaks paistavad graafikult, ülejäänud kaks jäävad sageli arvestamata ja moodustavad pikas plaanis suurema summa kui intress.',
        '<table><caption>Kulude näide: 12 000 € autolaen erineva perioodi ja vormi korral</caption><thead><tr><th>Vorm ja periood</th><th>KKM</th><th>Kuumakse</th><th>Tagasi kokku</th><th>Ülekulu</th></tr></thead><tbody><tr><td>Tagatisega, 36 kuud</td><td>~11%</td><td>~393 €</td><td>~14 148 €</td><td>~2148 €</td></tr><tr><td>Tagatisega, 60 kuud</td><td>~11%</td><td>~261 €</td><td>~15 660 €</td><td>~3660 €</td></tr><tr><td>Tagatiseta, 60 kuud</td><td>~17%</td><td>~298 €</td><td>~17 880 €</td><td>~5880 €</td></tr><tr><td>Tagatiseta, 84 kuud</td><td>~17%</td><td>~239 €</td><td>~20 076 €</td><td>~8076 €</td></tr></tbody></table>',
        'Tabel on illustratiivne, kuid näitab kahte olulist asja korraga. Esiteks, tagatis alandab KKM-i tuntavalt ja sama perioodi juures on vahe kogukulus tuhandeid eurosid. Teiseks, perioodi venitamine kuumakse pärast on kallim kui tundub: 84 kuud tagatiseta laenu maksab peaaegu neli korda rohkem ülekulu kui 36 kuud tagatisega laenu.',
        'Arvestusse kuuluvad ka kohustuslik liikluskindlustus, tagatisega laenu või liisingu puhul enamasti <strong>kaskokindlustus</strong>, hooldus ja rehvivahetus. Kaskokindlustus võib sõltuvalt autost maksta 300–800 eurot aastas — viie aasta peale on see samas suurusjärgus kui osa intressikulust. Kui laenu suurus lubab valikut, kaalu ka lihtsalt väiksemat summat: <a href="/vaikelaen">väikelaen</a> madalama põhiosaga koos suurema omafinantseeringuga annab sageli parema koguhinna kui maksimaalne rahastus.',
      ],
    },
    {
      id: 'auto-valik',
      title: 'Sõiduki valik mõjutab laenutingimusi',
      body: [
        'Erinevalt tavalisest tarbimislaenust ei sõltu autolaenu tingimused ainult taotlejast, vaid ka ostetavast autost. Tagatisega laenu või liisingu puhul on sõiduk krediidiandja risk ja seda hinnatakse eraldi.',
        '<h3>Vanus ja jääkväärtus</h3>',
        'Enamik pakkujaid seab piiri sõiduki vanusele lepingu lõpus — tüüpiliselt <strong>10–15 aastat</strong>. See tähendab, et kaheksa-aastasele autole ei anta seitsmeaastast tagatisega laenu. Vanema auto puhul jääb üle tagatiseta variant, mille intress on kõrgem, või lühem periood.',
        '<h3>Ostukoht</h3>',
        'Esindusest või autokauplusest ostmine on krediidiandja jaoks lihtsam: müügileping, käibemaksuarve ja ajalugu on olemas. Eraisikult ostmisel nõutakse sageli täiendavaid dokumente ja hindamisakti ning osa pakkujaid tagatisega laenu üldse ei anna. Sel juhul on tagatiseta <a href="/kiirlaen">kiirlaen</a> või <a href="/vaikelaen">väikelaen</a> praktiline lahendus, kuigi kallim.',
        '<h3>Sissemakse</h3>',
        'Tagatisega laenu ja liisingu puhul küsitakse tavaliselt <strong>10–30% omafinantseeringut</strong>. Suurem sissemakse alandab nii kuumakset kui ka intressimäära, sest krediidiandja risk väheneb. Kui sissemakseks raha ei ole, ei tasu seda katta teise laenuga — kaks paralleelset kohustust ühe ostu jaoks on kiireim tee eelarve ülekoormamiseni.',
        'Kontrolli enne ostu ka seda, kas sõidukil lasub olemasolev pant või liisingjääk. Liikluskindlustuse register ja müüja esitatud dokumendid annavad esmase pildi, kuid tagatisega laenu puhul teeb kontrolli ka krediidiandja ise.',
      ],
    },
    {
      id: 'liising-vs-laen',
      title: 'Liising, järelmaks või laen — kolm teed sama auto juurde',
      body: [
        'Eestis saab sama auto rahastada vähemalt kolmel viisil ja need erinevad omandi, intressi ja paindlikkuse poolest.',
        '<ul><li><strong>Kapitalirent (liising).</strong> Auto on sinu nimel registris, kuid pandi all; lepingu lõpus jääb omand sulle. Intress on madalaim, kaskokindlustus enamasti kohustuslik.</li><li><strong>Kasutusrent.</strong> Maksad kasutamise eest ja lepingu lõpus tagastad auto või ostad selle jääkväärtusega välja. Kuumakse on väiksem, kuid omandit ilma väljaostuta ei teki.</li><li><strong>Tagatiseta autolaen.</strong> Raha tuleb sinu kontole, auto ostad ise ja see ei ole pandi all. Intress on kõrgem, vabadus suurem — võid auto igal ajal maha müüa.</li></ul>',
        'Valik sõltub sellest, mis on tähtsam. Kui prioriteet on madalaim hind ja auto on uuem, võidab liising. Kui tahad sõiduki üle täielikku kontrolli, ostad eraisikult või ostad vanema auto, on tagatiseta laen sageli ainus töötav variant. Väiksemate summade puhul, näiteks kuni paar tuhat eurot, on erinevus väiksem ja mõistlik on kõrvutada tavalise <a href="/vaikelaen">väikelaenu</a> tingimustega.',
        'Eraldi tähelepanu väärib <strong>järelmaks autokaupluses</strong>. See on mugav, kuid selle KKM on tihti kõrgem kui pangalaenul ja tingimused seotud konkreetse müüjaga. Enne allkirja küsi kirjalikult KKM ja tagasimakstav kogusumma ning kõrvuta neid kolme-nelja sõltumatu pakkumisega. Kuidas me pakkumisi järjestame, on kirjeldatud <a href="/metoodika">metoodika lehel</a>.',
      ],
    },
    {
      id: 'levinud-vead',
      title: 'Kuus viga autolaenu võtmisel',
      body: [
        '<ul><li><strong>Auto valimine kuumakse, mitte koguhinna järgi.</strong> Pikk graafik teeb kalli auto „taskukohaseks“ ja ülekulu kahekordseks.</li><li><strong>Kindlustuse arvestamata jätmine.</strong> Kaskokindlustus on tagatisega laenu puhul enamasti kohustuslik ja lisandub kuumaksele.</li><li><strong>Maksimaalse summa võtmine.</strong> Heakskiidetud limiit ei ole soovitus — sissemakse suurendamine alandab nii intressi kui kogukulu.</li><li><strong>Vanuse piirangu eiramine.</strong> Kui auto on lepingu lõpuks liiga vana, ei saa tagatisega laenu ja tingimused muutuvad ootamatult kallimaks.</li><li><strong>Ostu kiirustamine müüja juures.</strong> Kaupluse pakkumine on mugav, aga võrdlemata pakkumine on peaaegu alati kallim.</li><li><strong>Ennetähtaegse lõpetamise tingimuste kontrollimata jätmine.</strong> Tarbijakrediidil on ennetähtaegne tagastamine reeglina tasuta, kuid rendilepingutel võivad olla eritingimused.</li></ul>',
        'Kõige kasulikum harjumus on arvutada enne ostu välja auto <strong>kogumaksumus viie aasta kohta</strong>: laenu tagasimaksed, kindlustus, hooldus, kütus ja maks kokku. See number on ausam kui hinnasilt ja teeb valiku kahe auto vahel palju lihtsamaks.',
        'Kui rahastuse vajadus osutub oodatust väiksemaks, ei ole autolaen ainus tee — lühema perioodi ja väiksema summa puhul võib <a href="/krediidikonto">krediidikonto</a> või <a href="/krediitkaart">krediitkaardi</a> intressivaba periood katta osa kulust ilma pikaajalise kohustuseta. Küsimuste või ebatäpsuse korral meie võrdluses kirjuta <a href="/kontakt">kontaktilehe</a> kaudu.',
      ],
    },
    {
      id: 'tehingu-kaik',
      title: 'Dokumendid ja tehingu käik',
      body: [
        'Autolaenu vormistamine erineb tavalisest tarbimislaenust selle poolest, et lisaks sinule kontrollitakse ka sõidukit ja tehingut. Käik on tüüpiliselt viieastmeline.',
        '<h3>1. Eeltaotlus ja eelotsus</h3>',
        'Esita taotlus enne auto valimist. Eelotsus näitab, milline summa ja kuumakse on sulle reaalne, ja hoiab ära olukorra, kus auto on juba broneeritud, aga rahastus ei tule. Eelotsus kehtib tavaliselt paar nädalat.',
        '<h3>2. Sõiduki valik ja andmete esitamine</h3>',
        'Tagatisega laenu või liisingu puhul esitatakse registreerimisnumber, VIN-kood, läbisõit ja hind. Krediidiandja kontrollib, kas sõiduk vastab vanuse ja väärtuse tingimustele ning kas sellel ei lasu olemasolevat panti.',
        '<h3>3. Lepingud</h3>',
        'Allkirjastatakse laenu- või liisinguleping ja müügileping. Enne allkirja loe Euroopa tarbijakrediidi standardinfo teabelehte, kus on KKM, kogusumma ja graafik. Kontrolli, kas kaskokindlustus on lepingu tingimus ja kes selle sõlmib.',
        '<h3>4. Väljamakse</h3>',
        'Tagatiseta laenu puhul laekub raha sinu kontole ja tasud müüjale ise. Tagatisega laenu ja liisingu puhul kannab krediidiandja summa otse müüjale ning sina tasud sissemakse.',
        '<h3>5. Registreerimine</h3>',
        'Sõiduk registreeritakse liiklusregistris; tagatisega laenu korral tehakse sinna märge pandi kohta. Alles pärast laenu lõplikku tagastamist saab märke kustutada ja auto vabalt võõrandada.',
        'Dokumendid, mis tasub eelnevalt valmis panna: isikut tõendav dokument, viimaste kuude kontoväljavõte või sissetuleku tõend ning sõiduki andmed. Kui tehing tehakse eraisikuga, lisandub tavaliselt hindamisakt. Kui rahastus osutub oodatust keerukamaks, on tagatiseta <a href="/vaikelaen">väikelaen</a> praktiline varuplaan, kuigi kõrgema KKM-iga; väiksema summa puhul kõrvuta ka <a href="/kiirlaen">kiirlaenu</a> tingimusi ja meie <a href="/metoodika">võrdlusmetoodikat</a>.',
      ],
    },
  ],

  example: {
    amount: '12 000 €',
    period: '60 kuud',
    interest: '9,9% (fikseeritud)',
    apr: '11,3%',
    monthly: '~254 €',
    total: '~15 240 €',
    note: 'Näide on koostatud auto tagatisel laenu kohta ja sisaldab lepingutasu 150 €. Kaskokindlustuse kulu ei sisaldu. Tagatiseta autolaenu KKM on tüüpiliselt tuntavalt kõrgem.',
  },

  faq: [
    {
      q: 'Kas autolaenuks on vaja teha sissemakset?',
      a: [
        'Tagatiseta autolaenu puhul sissemakset üldjuhul ei nõuta — saad rahastada kogu ostusumma. Auto tagatisel laenu ehk liisingu korral küsib laenuandja sageli sissemakset (näiteks osa auto hinnast), mis vähendab laenusummat ja kuumakset.',
      ],
    },
    {
      q: 'Kas kaskokindlustus on autolaenu puhul kohustuslik?',
      a: [
        'Tagatiseta autolaenu korral kaskokindlustust tavaliselt ei nõuta, kuna auto ei ole pandiks. Auto tagatisel laenu või liisingu puhul on kasko sageli kohustuslik kogu lepingu ajaks, sest sõiduk on tagatis ja laenuandja soovib selle väärtust kaitsta.',
      ],
    },
    {
      q: 'Kas autolaenu saab kasutatud auto ostuks?',
      a: [
        'Jah. Tagatiseta autolaen sobib hästi kasutatud sõiduki ostuks, sest auto ei pea olema pandiks. Auto tagatisel laenu puhul võib laenuandja seada piiranguid sõiduki vanusele ja seisukorrale, sest vanema auto väärtus tagatisena on madalam.',
      ],
    },
    {
      q: 'Kui pikaks ajaks saab autolaenu võtta?',
      a: [
        'Autolaenu periood ulatub tavaliselt kuni 84 kuuni. Pikem periood vähendab kuumakset, kuid suurendab kokku makstavat intressi. Vali periood nii, et kuumakse mahub mugavalt eelarvesse, ilma laenu asjatult venitamata.',
      ],
    },
    {
      q: 'Mis on KKM ja miks see autolaenu puhul oluline on?',
      a: [
        'KKM ehk krediidi kulukuse määr näitab laenu tegelikku aastast hinda protsendina — see sisaldab intressi ja kõiki tasusid. KKM-i alusel saad tagatiseta ja tagatisega pakkumisi ausalt võrrelda. Eestis on tarbijakrediidi KKM seadusega piiratud.',
      ],
    },
    {
      q: 'Mille poolest erineb auto tagatisel laen tagatiseta autolaenust?',
      a: [
        'Tagatiseta autolaenu puhul jääd auto omanikuks ja sõidukit pandiks ei seata, kuid intress on kõrgem ja summa väiksem. Auto tagatisel laenu korral on sõiduk tagatiseks, mis võimaldab madalamat intressi ja suuremat summat, ent eeldab tavaliselt sissemakset ja kaskokindlustust.',
      ],
    },
    {
      q: 'Kui palju maksab 12 000 euro suurune autolaen kokku?',
      a: [
        'Tagatisega laenuna KKM-iga umbes 11% ja 60 kuu jooksul on ülekulu ligikaudu 3600 eurot. Sama summa tagatiseta laenuna KKM-iga 17% ja 84 kuu jooksul maksab üle 8000 euro rohkem kui laenatud summa. Tagatis ja lühem periood on kaks kõige tugevamat hinnamõjurit.',
      ],
    },
    {
      q: 'Kas eraisikult ostetud autole saab autolaenu?',
      a: [
        'Tagatiseta autolaenu saab, sest raha kantakse sinu kontole ja ostad sõiduki ise. Tagatisega laenu või liisingu puhul on eraisikult ostmine keerukam: nõutakse hindamisakti ja täiendavaid dokumente ning osa pakkujaid sellist tehingut ei rahasta.',
      ],
    },
    {
      q: 'Kas autolaenu saab enne tähtaega tagasi maksta?',
      a: [
        'Tarbijakrediidina vormistatud autolaenu võib igal ajal osaliselt või täielikult ennetähtaegselt tagastada ja intressikulu väheneb vastavalt. Kasutusrendi ja mõne liisingulepingu puhul võivad kehtida eritingimused — kontrolli need lepingust enne allkirjastamist.',
      ],
    },
  ],
};

export default autolaen;
