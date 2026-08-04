import type { LoanTypeContent } from './types';

const vaikelaen: LoanTypeContent = {
  slug: 'vaikelaen',
  loanType: 'väikelaen',
  navLabel: 'Väikelaen',

  seoText:
    'Vajad väikelaenu suurema ostu, remondi või reisi jaoks? Võrdle Eesti väikelaene otse mobiilist — MobiilneLaen.ee aitab leida soodsaima väikelaenu madalaima KKM-i ja kindla kuumaksega, ilma et peaksid arvuti taha istuma.',

  metaTitle: 'Väikelaen 2026 — võrdle ja taotle soodsalt, intress ja KKM',
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
      title: 'Kui suur on väikelaenude turg Eestis?',
      body: [
        '<h3>Maht ja pakkujate arv</h3>',
        'Eesti Panga finantssektori statistika järgi ületab majapidamiste tarbimislaenude jääk <strong>1,1 miljardit eurot</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal) ning väikelaen ehk tagatiseta tarbimislaen on selle mahukaim osa. Finantsinspektsiooni krediidiandjate ja -vahendajate registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026), lisaks pakuvad väikelaenu pangad, kes tegutsevad krediidiasutuse loa alusel.',
        'Tüüpiline väljastatav summa jääb <strong>3000 ja 10 000 euro</strong> vahele ning valitud periood 36–60 kuu kanti. Sama profiiliga taotleja saab eri pakkujatelt KKM-i, mis erineb sageli <strong>viis kuni kümme protsendipunkti</strong> — kaheksa tuhande euro ja viie aasta juures on see mitmesaja-eurone vahe. Just seepärast on võrdlemine siin tulusam kui väiksemate laenude puhul, kus vahe jääb kümnetesse eurodesse; kõrvutamiseks sobivad ka <a href="/kiirlaen">kiirlaenu</a> ja <a href="/autolaen">autolaenu</a> tingimused.',
        '<h3>Pangad ja pangavälised pakkujad</h3>',
        'Eesti väikelaenuturul tegutsevad nii pangad kui ka spetsialiseerunud krediidiandjad. Pankadest pakuvad väikelaenu näiteks <strong>Coop Pank</strong> ja <strong>TF Bank</strong>, väljaspool pangandust on tuntud pakkuja muu hulgas <strong>Creditstar</strong>. Summad ulatuvad pakkujati kuni 10 000–20 000 euroni ja tagasimakseperiood kuni 72–84 kuuni, mistõttu leiab sobiva lahenduse nii väiksema remondi kui ka suurema ostu rahastamiseks.',
        'Üldine muster on lihtne: <strong>pankade väikelaenud on tavaliselt madalama intressi ja KKM-iga</strong>, kuid taotluse menetlemine ja väljamakse võivad võtta rohkem aega ning nõuded taotlejale on rangemad. Pangavälised krediidiandjad teevad otsuse ja väljamakse sageli kiiremini ning on paindlikumad, kuid selle mugavuse hinnaks on üldjuhul kõrgem kulukus. Seetõttu tasub enne taotlemist võrrelda mõlema grupi pakkumisi KKM-i alusel ja valida oma olukorrale sobivaim tasakaal hinna ja kiiruse vahel.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Eitav otsus — mis edasi?',
      body: [
        'Kõige sagedasemad tagasilükkamise põhjused on <strong>kehtiv maksehäire</strong> maksehäireregistris, <strong>liiga madal sissetulek</strong> soovitud summa suhtes, <strong>suur olemasolev laenukoormus</strong> (mitu kehtivat laenu, liisingut või krediitkaarti) ning <strong>ebastabiilne töösuhe</strong> — näiteks katseaeg, tähtajaline leping või väga lühike tööstaaž. Laenuandja on kohustatud hindama sinu maksevõimet ning kui igakuised kohustused koos uue laenuga sööksid liiga suure osa sissetulekust, tuleb eitav otsus.',
        'Kui taotlus lükati tagasi, on mitu mõistlikku sammu. Küsi väiksemat summat või vali pikem periood, et kuumakse väheneks. Maksa võimalusel ära väiksemad olemasolevad kohustused — näiteks kasutamata krediidilimiidid ja järelmaksud, mis koormavad maksevõime arvestust. Kehtiv maksehäire tasub esmalt lahendada ja lasta registris kustutada. Mõni pank võimaldab kaasata ka <strong>kaastaotleja</strong>, kelle sissetulek arvestatakse maksevõime hindamisel juurde ja mis suurendab positiivse otsuse tõenäosust.',
        '<h3>Keeldumise järel: mida päriselt teha</h3>',
        'Väikelaenu taotlus on pikem ja põhjalikum kui kiirlaenul, seega on ka eitava otsuse põhjus tavaliselt konkreetne ja kõrvaldatav. Alusta sellest, et küsid põhjuse välja. Kui otsus tehti andmekogu päringu põhjal, on krediidiandja kohustatud sulle tasuta ütlema, millist registrit ta kasutas ja mida see näitas. Sinu enda andmetega tutvumine on samuti tasuta — nii saad kontrollida, kas registris on vana või vale kirje, mille parandamiseks piisab avaldusest.',
        'Järgmise taotluseni tasub jätta aega. Kaks kuni kolm kuud stabiilset maksekäitumist muudab profiili rohkem kui uue pakkuja otsimine samal nädalal, sest iga värske päring on teistele nähtav. Selle aja sees on mõttekas kärpida kohustusi (kasutamata limiidid, järelmaksud), vähendada soovitud summat või pikendada perioodi ühe astme võrra ning vajadusel kaasata kaastaotleja. Kui vajadus on korduv, mitte ühekordne, vaata pigem <a href="/krediidikonto">krediidikonto</a> loogikat, kus intressi arvestatakse ainult kasutatud osalt.',
        'Kui ükski tegevusloaga krediidiandja laenu ei anna, on see maksevõime signaal, mitte formaalsus. Sel juhul aitab tasuta võlanõustamine omavalitsuse sotsiaalosakonnas ja olemasolevate graafikute ümbertegemine. Nõuded krediidiandjale ja tarbija kaitse on kirjas <a href="https://www.riigiteataja.ee/akt/119032015004?leiaKehtiv" target="_blank" rel="noopener noreferrer">krediidiandjate ja -vahendajate seaduses</a> — sealt on näha, mida pakkuja tohib ja mida ei tohi küsida.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Kes väikelaene tohib väljastada',
      body: [
        'Väikelaenu tohib Eestis pakkuda ainult ettevõte, kellel on <strong>Finantsinspektsiooni tegevusluba</strong> krediidiandjana või kes tegutseb pangana. Lisaks piirab võlaõigusseadus tarbijakrediidi <strong>krediidi kulukuse määra ülempiiri</strong> — seda ületav leping võib olla tühine. Kehtib ka <strong>vastutustundliku laenamise põhimõte</strong>: laenuandja on kohustatud enne lepingu sõlmimist hindama sinu maksevõimet ega tohi anda laenu, mille tagasimaksmine ei ole sinu sissetulekuid ja kohustusi arvestades realistlik.',
        'Tarbijal on seadusest tulenevad kindlad õigused. Sul on <strong>14-päevane taganemisõigus</strong> — laenulepingust saab põhjust nimetamata taganeda, tagastades saadud summa koos kasutatud päevade intressiga. Samuti võid laenu igal ajal osaliselt või täielikult <strong>ennetähtaegselt tagastada ilma lisatasuta</strong>, misjuhul väheneb ka intressikulu. Enne allkirjastamist kontrolli alati, et pakkuja on kantud Finantsinspektsiooni tegevuslubade registrisse, ning loe leping ja Euroopa tarbijakrediidi standardinfo teabeleht tähelepanelikult läbi.',
      ],
    },
    {
      id: 'kogukulu-vs-kuumakse',
      title: 'Kuumakse langeb, kogukulu kasvab — kuidas seda tasakaalustada',
      body: [
        'Väikelaenu puhul on periood pikk ja just see teeb otsuse tähtsaks. Kuumakse ja kogukulu liiguvad vastassuundades: iga lisandunud aasta muudab makse mugavamaks ja laenu kallimaks. Nõuanne „vali lühim periood, mida eelarve kannatab“ on lihtne, aga tähendab praktikas sadu eurosid.',
        '<table><caption>Kulude näide: 8000 € väikelaen, KKM ~12%</caption><thead><tr><th>Periood</th><th>Ligikaudne kuumakse</th><th>Tagasi kokku</th><th>Intressikulu</th></tr></thead><tbody><tr><td>24 kuud</td><td>~377 €</td><td>~9048 €</td><td>~1048 €</td></tr><tr><td>36 kuud</td><td>~265 €</td><td>~9540 €</td><td>~1540 €</td></tr><tr><td>48 kuud</td><td>~210 €</td><td>~10 080 €</td><td>~2080 €</td></tr><tr><td>60 kuud</td><td>~178 €</td><td>~10 680 €</td><td>~2680 €</td></tr><tr><td>84 kuud</td><td>~141 €</td><td>~11 844 €</td><td>~3844 €</td></tr></tbody></table>',
        'Näide on illustratiivne ja arvutatud annuiteetgraafiku alusel. Muster on siiski üldkehtiv: perioodi pikendamine 24 kuult 84 kuule vähendab kuumakset ligi kaks ja pool korda, kuid kasvatab intressikulu peaaegu neljakordseks. Mõistlik tasakaal on periood, mille juures kuumakse jääb <strong>alla kolmandiku vabast rahast</strong> pärast püsikulusid — see jätab puhvri ka siis, kui sissetulek kõigub.',
        'Kaks võtet, mis kogukulu päriselt vähendavad: <ul><li><strong>osaline ennetähtaegne tagasimakse</strong> — iga lisamakse läheb põhiosa katteks ja lühendab perioodi; tarbijakrediidi puhul on see Eestis reeglina tasuta;</li><li><strong>refinantseerimine</strong> — kui kannad mitut kallimat kohustust, näiteks <a href="/kiirlaen">kiirlaenu</a> või <a href="/krediitkaart">krediitkaardi</a> jääki, võib nende koondamine ühe madalama KKM-i alla anda kohese võidu.</li></ul>',
        'Enne allkirja tasub sama summa ja periood läbi arvutada meie kalkulaatoris ning kõrvutada tulemus <a href="/autolaen">autolaenu</a> tingimustega, kui laen on mõeldud sõiduki ostuks — tagatis alandab intressi tuntavalt. Võrdluse alused on kirjas <a href="/metoodika">metoodika lehel</a>.',
      ],
    },
    {
      id: 'refinantseerimine',
      title: 'Väikelaen kui refinantseerimise tööriist',
      body: [
        'Kõige tulusam väikelaenu kasutus ei ole sageli uus ost, vaid vanade kohustuste koondamine. Kui kannad korraga mitut kallimat lepingut, maksad iga lepingu eest eraldi haldustasu ja iga lepingu KKM on eraldi kõrge. Üks madalama KKM-iga laen asendab need ühe graafikuga.',
        '<h3>Millal see end ära tasub</h3>',
        'Arvuta kokku kõigi olemasolevate kohustuste järelejäänud tagasimaksed ja võrdle neid uue laenu kogusummaga. Refinantseerimine on kasulik siis, kui <strong>uue laenu kogukulu on väiksem</strong> — mitte siis, kui uus kuumakse on väiksem. Väiksem kuumakse pikema perioodiga võib maksta rohkem, kuigi tundub kergem.',
        '<h3>Mida jälgida</h3>',
        '<ul><li>Kas vanade lepingute ennetähtaegne lõpetamine on tasuta — tarbijakrediidi puhul on see reeglina jah, aga liisingul võivad olla eritingimused.</li><li>Kas uus laenuandja kannab summa otse vanale võlausaldajale või sinu kontole; teine variant nõuab distsipliini.</li><li>Kas vanad lepingud saavad päriselt suletud — kontrolli kirjalikku kinnitust, mitte ainult nullsaldot.</li><li>Kas mõni kohustus on juba peaaegu lõpus; sellise refinantseerimine harva tasub end ära.</li></ul>',
        'Refinantseerimisele hästi sobivad kohustused on lühiajalised kallid laenud ja tagastamata <a href="/krediidikonto">krediidikonto</a> või <a href="/krediidiliin">krediidiliini</a> jäägid, mida ei ole õnnestunud kiiresti nulli viia. Halvasti sobivad tagatisega laenud, mille intress on juba madal. Kui koondamise järel jääb vana limiit avatuks, sulge see — muidu on mõne kuu pärast lisaks uuele laenule ka vana võlg tagasi.',
      ],
    },
    {
      id: 'nouded-taotlejale',
      title: 'Nõuded taotlejale ja maksevõime hindamine',
      body: [
        'Väikelaen on suurem ja pikem kui kiirlaen, seega on ka kontroll põhjalikum. Krediidiandja peab vastutustundliku laenamise põhimõtte kohaselt hindama, kas kohustus on jõukohane kogu perioodi vältel, mitte ainult esimesel kuul.',
        '<h3>Mida vaadatakse</h3>',
        '<ul><li><strong>Sissetuleku stabiilsus</strong> — laekumiste muster viimase 3–6 kuu jooksul, tööandja vahetused, katseaeg.</li><li><strong>Vaba raha pärast püsikulusid</strong> — eluase, kommunaalid, transport, ülalpeetavad.</li><li><strong>Olemasolev laenukoormus</strong> — sealhulgas kasutamata <a href="/krediitkaart">krediitkaardi</a> ja <a href="/krediidiliin">krediidiliini</a> limiidid, mida arvestatakse potentsiaalse kohustusena.</li><li><strong>Maksekäitumine</strong> — Creditinfo maksehäireregistri kanded ja nende vanus.</li><li><strong>Laenu otstarve</strong> — suuremate summade puhul küsitakse sageli, milleks raha kasutatakse.</li></ul>',
        '<h3>Kuidas oma positsiooni parandada</h3>',
        'Kolm asja töötavad kõige kindlamalt. Esiteks, lase palgal laekuda samale kontole, mille väljavõtet esitad — hajutatud rahavood teevad pildi ebamääraseks. Teiseks, sulge kasutamata limiidid enne taotlust; need vähendavad maksimaalset summat ka siis, kui saldo on null. Kolmandaks, taotle realistlikku summat: liiga suur soov tähendab sageli eitavat otsust, kuigi väiksem summa oleks saanud heakskiidu.',
        'Kaastaotleja või käendaja lisamine on võimalik mõne pakkuja juures ja tõstab heakskiidu tõenäosust, kuid tähendab, et kohustus on ka teisel isikul täies ulatuses. Enne sellist sammu tasub tingimused mõlemale poolele läbi rääkida — vastutus ei jagune pooleks, vaid kehtib kummalegi tervikuna.',
      ],
    },
    {
      id: 'levinud-vead',
      title: 'Vead, mis väikelaenu kallimaks teevad',
      body: [
        'Väikelaenu vead maksavad rohkem kui kiirlaenu omad, sest periood on pikk ja iga viga kordub mitukümmend kuud.',
        '<ul><li><strong>Perioodi valimine kuumakse järgi.</strong> Pikim graafik annab väikseima makse ja suurima kogukulu. Vali lühim periood, mis eelarvesse mahub.</li><li><strong>Summa ümardamine ülespoole.</strong> Iga „igaks juhuks“ lisatud tuhat eurot kannab intressi kogu perioodi.</li><li><strong>Intressi võrdlemine KKM-i asemel.</strong> Lepingutasu ja kuutasu ei kajastu intressis; kaks 9,9% pakkumist võivad KKM-ilt erineda mitu protsendipunkti.</li><li><strong>Kindlustuse automaatne lisamine.</strong> Laenukindlustus võib olla mõistlik, kuid see on eraldi toode oma hinnaga — kontrolli, kas see on lisatud vaikimisi.</li><li><strong>Graafiku muutmise tasude eiramine.</strong> Maksepuhkus ja kuupäeva muutmine on sageli tasulised.</li><li><strong>Refinantseerimine ilma arvutuseta.</strong> Kui uus KKM on kõrgem või periood oluliselt pikem, koondamine kaotab mõtte.</li><li><strong>Vana limiidi avatuks jätmine.</strong> Refinantseerimise järel suletamata limiit täitub tavaliselt uuesti.</li></ul>',
        'Kõige lihtsam kontrollküsimus enne allkirja: kas tead peast, mitu eurot maksad tagasi kokku? Kui ei, siis pole standardinfo teabeleht veel loetud. Kui pakkumine ei kannata kõrvutamist — näiteks <a href="/kiirlaen">kiirlaenu</a> lühema graafikuga või <a href="/krediidikonto">krediidikonto</a> paindliku limiidiga — on aeg enne otsust hästi kulutatud. Ebatäpsusest meie andmetes saab teada anda <a href="/kontakt">kontaktilehel</a>.',
      ],
    },
    {
      id: 'makseraskused',
      title: 'Maksepuhkus, graafiku muutmine ja makseraskused',
      body: [
        'Pikk periood tähendab, et elu jõuab lepingu jooksul muutuda. Töökoht vahetub, sissetulek kõigub, kulud kasvavad. Väikelaenu puhul on need olukorrad tavalised ja neile on olemas lahendused — tingimusel, et pöördud krediidiandja poole enne, kui makse jääb tasumata.',
        '<h3>Graafiku muutmine</h3>',
        'Kõige lihtsam samm on maksekuupäeva nihutamine palgapäevale lähemale. See on sageli tasuta ja lahendab üllatavalt suure osa hilinemistest. Järgmine võimalus on perioodi pikendamine, mis alandab kuumakset — arvesta, et kogukulu seejuures kasvab.',
        '<h3>Maksepuhkus</h3>',
        'Maksepuhkus tähendab pausi põhiosa tasumises, tavaliselt kolm kuni kuus kuud. Intress jookseb selle aja jooksul edasi ja liidetakse jäägile, seega laen läheb kallimaks. Osal pakkujatel on maksepuhkuse vormistamine tasuline. Tööriistana on see mõeldud ajutise raskuse silumiseks, mitte püsiva puudujäägi katmiseks.',
        '<h3>Kui makse on juba hilinenud</h3>',
        '<ul><li>Viivis arvestatakse päevade kaupa alates esimesest hilinenud päevast.</li><li>Meeldetuletustasud lisanduvad iga teate eest.</li><li>Pikem võlgnevus viib maksehäirekandeni Creditinfo registris, mis jääb nähtavaks kolm aastat pärast võla tasumist.</li><li>Sissenõudemenetlus lisab inkasso- ja õigusabikulud.</li></ul>',
        'Kõige halvem lahendus on katta väikelaenu makse uue lühiajalise laenuga — <a href="/kiirlaen">kiirlaenu</a> või <a href="/sms-laen">SMS-laenu</a> KKM on kõrgem ja võlg kasvab iga ringiga. Kui kohustusi on mitu ja graafikud kattuvad, on õige suund refinantseerimine ühe soodsama lepingu alla või kokkulepe olemasoleva krediidiandjaga. Võlanõustamine on Eestis kättesaadav ka tasuta kohalike omavalitsuste kaudu ning sinna pöördumine varakult maksab end alati ära.',
      ],
    },
  ],

  example: {
    amount: '8000 €',
    period: '60 kuud',
    interest: '10,9% (fikseeritud)',
    apr: '12,4%',
    monthly: '~173 €',
    total: '~10 380 €',
    note: 'Näide sisaldab lepingutasu 100 € ja kuutasu 0 €. Tegelik intress ja KKM sõltuvad krediidiandja otsusest, laenusummast, perioodist ning taotleja maksevõimest.',
  },

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
      q: 'Kuidas võrrelda väikelaenu KKM-i panga ja krediidiandja vahel?',
      a: [
        'Võrdle sama summa ja sama perioodi juures, sest KKM sõltub mõlemast. Panga pakkumises on intress sageli madalam, kuid lisandub lepingutasu; krediidiandja juures võib intress olla kõrgem, aga menetlus kiirem. Otsustab tagasimakstav kogusumma, mis on kirjas Euroopa tarbijakrediidi standardinfo teabelehel — küsi see enne allkirjastamist mõlemalt pakkujalt ja võrdle kahte numbrit, mitte kahte reklaami.',
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
    {
      q: 'Kas mitme laenu koondamine ühe väikelaenu alla tasub end ära?',
      a: [
        'Tasub siis, kui uue laenu kogukulu on väiksem kui kõigi olemasolevate kohustuste järelejäänud maksete summa. Ainult väiksem kuumakse ei ole piisav põhjus — pikem periood võib teha koondamise lõppkokkuvõttes kallimaks. Arvuta mõlemad numbrid enne otsust läbi ja sulge vanad limiidid.',
      ],
    },
    {
      q: 'Kuidas mõjutab periood väikelaenu kogukulu?',
      a: [
        'Väga tugevalt. 8000 eurot KKM-iga umbes 12% maksab 24 kuu jooksul ligikaudu 1050 eurot intressi, 84 kuu jooksul juba ligi 3800 eurot. Kuumakse langeb umbes 377 eurolt 141 eurole, kuid kogukulu kasvab peaaegu neljakordseks.',
      ],
    },
    {
      q: 'Kas kasutamata krediitkaardi limiit mõjutab väikelaenu otsust?',
      a: [
        'Jah. Maksevõime hindamisel arvestatakse ka kasutamata limiite potentsiaalse kohustusena, sest need on igal hetkel kasutatavad. Kui limiiti tegelikult ei vaja, tasub see enne suurema laenu taotlemist sulgeda — see võib tõsta heakskiidetavat summat.',
      ],
    },
  ],
};

export default vaikelaen;
