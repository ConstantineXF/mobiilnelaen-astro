import type { LoanTypeContent } from './types';

const krediidiliin: LoanTypeContent = {
  slug: 'krediidiliin',
  loanType: 'krediidiliin',
  navLabel: 'Krediidiliin',

  seoText:
    'Otsid krediidiliini, mis on alati käepärast otse telefonis? MobiilneLaen.ee koondab Eesti krediidiliini pakkumised, et saaksid nutiseadmest võrrelda limiite, intresse ja KKM-i ning valida endale sobivaima paindliku krediidiliini.',

  metaTitle: 'Krediidiliin 2026 — paindlik krediidilimiit',
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
    {
      id: 'turu-ulevaade',
      title: 'Krediidiliinide turuolukord 2026',
      body: [
        '<h3>Maht ja pakkujate arv</h3>',
        'Eesti Panga finantssektori statistika järgi ületab majapidamiste tarbimislaenude jääk <strong>1,1 miljardit eurot</strong> (allikas: Eesti Pank, finantssektori statistika, 2026. aasta I kvartal) ning uuenevate limiitide osakaal selles on viimastel aastatel kasvanud. Finantsinspektsiooni krediidiandjate ja -vahendajate registris on 2026. aasta alguse seisuga ligikaudu <strong>50 tegevusloaga krediidiandjat</strong> (allikas: fi.ee register, jaanuar 2026).',
        'Tüüpiline heakskiidetav limiit jääb <strong>500 ja 5000 euro</strong> vahele ja pakkujate KKM erineb sama profiiliga taotleja puhul sageli mitu protsendipunkti. Uueneva limiidi juures teeb hinnavahe eriti oluliseks see, et leping on tähtajatu — halb tingimus jääb kehtima aastateks, erinevalt ühekordsest <a href="/kiirlaen">kiirlaenust</a>, mis lõpeb graafiku lõppedes.',
        '<h3>Kes turul tegutsevad</h3>',
        'Eesti turul pakuvad uuenevat krediidilimiiti mitu litsentseeritud krediidiandjat — tuntumad neist on <strong>Monefit</strong>, <strong>Esto</strong> ja <strong>SmsRaha</strong>. Nimetused erinevad: üks pakkuja turundab toodet krediidiliinina, teine krediidikontona või paindliku limiidina, kuid sisu on sama — ühekordselt kinnitatud limiit, mida saad korduvalt kasutada ja mille kasutatud osalt arvestatakse intressi. Seetõttu tasub võrdlemisel vaadata mööda toote nimest ning keskenduda tingimustele.',
        'Limiidid on turul paindlikud — need määratakse iga taotleja sissetuleku ja maksevõime järgi ning võivad ulatuda mõnesajast eurost mitme tuhande euroni. Konkurents käib eelkõige kahe asja üle: <strong>intressimäär ja KKM</strong> ehk toote tegelik hind ning <strong>mobiilse iseteeninduse mugavus</strong> — kui kiiresti ja lihtsalt saad limiidist raha kontole kanda, jääki jälgida ja tagasimakseid teha otse telefonist. Enne valikut võrdle alati KKM-i, kuutasusid ja limiidi kasutamise tingimusi mitme pakkuja lõikes.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Limiiti ei kinnitatud: põhjused ja edasised sammud',
      body: [
        'Kõige sagedasem keeldumise põhjus on <strong>kehtiv maksehäire</strong> — pakkujad kontrollivad maksehäireregistrit ja aktiivse võlgnevusega taotlejale limiiti üldjuhul ei avata. Teine levinud põhjus on <strong>ebapiisav või tõendamata sissetulek</strong>: kui regulaarset laekumist kontole ei ole näha, ei saa laenuandja maksevõimet kinnitada. Kolmas ja sageli alahinnatud tegur on <strong>kogu krediidikoormus</strong> — hindamisel arvestatakse kõiki olemasolevaid kohustusi, sealhulgas juba avatud krediidilimiite ka siis, kui sa neid parasjagu ei kasuta, sest need on igal hetkel kasutusele võetavad.',
        'Kui taotlus lükatakse tagasi, tasub tegutseda järjekorras: <ul><li>kontrolli maksehäireregistrit ja tasu võimalikud võlgnevused — lõpetatud maksehäire mõju väheneb ajaga;</li><li>sulge kasutamata krediidilimiidid ja järelmaksud, mis krediidikoormust asjatult suurendavad;</li><li>hoolitse, et sissetulek laekuks korrapäraselt pangakontole ja oleks tõendatav;</li><li>oota mõni kuu stabiilset maksekäitumist ja esita uus taotlus.</li></ul> Mitme pakkuja poole samaaegselt pöördumine keeldumise järel olukorda ei paranda — mõistlikum on esmalt kõrvaldada keeldumise põhjus.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Tegevusluba, järelevalve ja tarbija õigused',
      body: [
        'Krediidiliini võib Eestis pakkuda ainult <strong>Finantsinspektsiooni tegevusloaga krediidiandja</strong> — enne lepingu sõlmimist saad pakkuja litsentsi olemasolu Finantsinspektsiooni veebilehelt kontrollida. Tarbijakrediidi hinnale seab piiri võlaõigusseadus: <strong>krediidi kulukuse määral (KKM) on seadusest tulenev ülempiir</strong>, millest kallimat lepingut sõlmida ei tohi. Lisaks kohustab seadus laenuandjat enne limiidi avamist hindama sinu <strong>maksevõimet</strong> vastutustundliku laenamise põhimõtte alusel — see kaitseb sind kohustuse eest, mida sa tegelikult kanda ei suudaks.',
        'Tarbijana on sul <strong>14-päevane taganemisõigus</strong>: lepingust võib põhjust nimetamata taganeda, tagastades kasutatud summa koos selle aja intressiga. Samuti võid <strong>krediidiliini igal ajal sulgeda</strong> — uueneva krediidilepingu saab tarbija üles öelda, tasudes kasutatud jäägi ja kogunenud intressi. Ennetähtaegne tagastamine on lubatud ilma leppetrahvita. Kui pakkujaga tekib vaidlus, saab pöörduda Tarbijakaitse ja Tehnilise Järelevalve Ameti tarbijavaidluste komisjoni poole.',
      ],
    },
    {
      id: 'hinna-kujunemine',
      title: 'Kuidas krediidiliini hind kujuneb',
      body: [
        'Krediidiliini hind ei ole üks number, vaid kolm korraga: intress kasutatud osalt, võimalik haldustasu ja väljavõtutasu. Reklaamis paistab tavaliselt ainult esimene. KKM on ainus näitaja, mis need kokku liidab, kuid uueneva limiidi puhul sõltub KKM ka sellest, kui palju ja kui kaua sa limiiti kasutad.',
        '<table><caption>Kulude näide: 2000 € limiit, intress ~21% aastas kasutatud osalt</caption><thead><tr><th>Kasutatud summa</th><th>Kestus</th><th>Intressikulu</th><th>Haldustasu (kui on, 3 €/kuus)</th><th>Kokku</th></tr></thead><tbody><tr><td>0 €</td><td>12 kuud</td><td>0 €</td><td>36 €</td><td>~36 €</td></tr><tr><td>500 €</td><td>2 kuud</td><td>~18 €</td><td>6 €</td><td>~24 €</td></tr><tr><td>1000 €</td><td>6 kuud</td><td>~105 €</td><td>18 €</td><td>~123 €</td></tr><tr><td>2000 €</td><td>12 kuud</td><td>~420 €</td><td>36 €</td><td>~456 €</td></tr></tbody></table>',
        'Näide on illustratiivne. Tähelepanuväärne on esimene rida: kui pakkujal on kuutasu, maksab ka puutumata limiit raha. Enne lepingu sõlmimist tasub seetõttu selgeks teha kaks küsimust — kas kasutamata limiidilt võetakse tasu ja kas väljavõtmine on tasuline.',
        'Kui limiit kipub püsivalt täis olema, ei ole krediidiliin enam paindlik puhver, vaid kallis pikaajaline laen. Sel juhul on jäägi refinantseerimine <a href="/vaikelaen">väikelaenu</a> alla tüüpiliselt odavam ja lõpeb kindla kuupäevaga. Ühekordse vajaduse jaoks kõrvuta ka <a href="/kiirlaen">kiirlaenu</a> tingimusi; võrdlusalused on kirjas <a href="/metoodika">metoodika lehel</a>.',
      ],
    },
    {
      id: 'kasutusstsenaariumid',
      title: 'Kolm olukorda, kus krediidiliin end õigustab',
      body: [
        '<h3>Ebaühtlane sissetulek</h3>',
        'Kui sissetulek laekub ebaregulaarselt — projektipõhine töö, hooajaline tegevus, vahelduv tundide arv — tekivad kuude vahel augud, mis ei ole püsiv puudujääk, vaid ajastuse küsimus. Uuenev limiit katab täpselt selle ja intressi maksad ainult nende päevade eest, mil raha kasutuses oli.',
        '<h3>Ootamatu, ajakriitiline kulu</h3>',
        'Katkine soojaveeboiler või hambaravi ei oota järgmist palgapäeva. Limiidi eelis üksiklaenu ees on siin see, et otsus on juba tehtud ja taotlust ei ole vaja uuesti esitada — raha on kättesaadav kohe.',
        '<h3>Puhver ilma kasutuseta</h3>',
        'Osa inimesi hoiab limiiti lihtsalt kindlustundena ega kasuta seda aastaid. See on mõistlik ainult siis, kui pakkujal ei ole kuutasu; vastasel juhul maksad kindlustunde eest igal kuul.',
        'Kolm vastupidist olukorda, kus limiit on vale valik: igakuise eelarvepuudujäägi katmine, teise kohustuse tasumine ja suurema planeeritud ostu rahastamine. Viimasel juhul on kindla graafikuga <a href="/vaikelaen">väikelaen</a> või sihtotstarbeline <a href="/autolaen">autolaen</a> nii odavam kui ka distsiplineerivam, sest võlg lõpeb ise ära.',
      ],
    },
    {
      id: 'liin-vs-konto-vs-kaart',
      title: 'Krediidiliin, krediidikonto ja krediitkaart kõrvuti',
      body: [
        'Kolm toodet töötavad sarnasel põhimõttel — uuenev limiit, intress kasutatud osalt — ja erinevad peamiselt kasutusviisi ning tasude poolest.',
        '<ul><li><strong><a href="/krediidiliin">Krediidiliin</a></strong> — raha kantakse limiidist sinu arvelduskontole ja kasutad seda nagu tavalist raha. Sobib arvete ja ülekannete jaoks.</li><li><strong><a href="/krediidikonto">Krediidikonto</a></strong> — sisuliselt sama loogika, sageli veidi väiksemad limiidid ja lihtsam iseteenindus; erinevus pakkujate vahel on suurem kui toodete vahel.</li><li><strong><a href="/krediitkaart">Krediitkaart</a></strong> — limiit on seotud maksevahendiga ja lisandub intressivaba periood, mis tähendab õigeaegsel tasumisel nullkulu. Seevastu sularaha väljavõtt on tavaliselt tasuline ja ilma intressivaba perioodita.</li></ul>',
        'Praktiline valikureegel: kui vajad raha kontole, valid liini või konto; kui vajad maksevahendit poes ja e-poes, valid kaardi. Kui vajad mõlemat, ei tasu võtta kahte toodet korraga — kogu heakskiidetud limiiti arvestatakse tulevaste laenutaotluste juures kohustusena, ka siis, kui saldo on null.',
        'Ühekordse kindla summa puhul on kõik kolm kallimad kui tavaline laen. Sellisel juhul võrdle <a href="/kiirlaen">kiirlaenu</a> ja <a href="/vaikelaen">väikelaenu</a> KKM-i — vahe võib aastas ulatuda mitmesaja euroni.',
      ],
    },
    {
      id: 'lepingu-tingimused',
      title: 'Lepingutingimused, mida tasub tähelepanelikult lugeda',
      body: [
        'Uueneva limiidi leping on tähtajatu ja seetõttu jäävad selle tingimused kehtima aastateks. Neli kohta väärivad enne allkirjastamist eraldi tähelepanu.',
        '<h3>Tasude struktuur</h3>',
        'Otsi üles kolm rida: kuu- või haldustasu, väljavõtutasu ja lepingu sõlmimise tasu. Kuutasu kehtib sageli ka siis, kui limiiti ei kasuta, ja just see muudab „tasuta puhvri“ igakuiseks kuluks. Väljavõtutasu protsendina teeb väikesed kasutused ebaproportsionaalselt kalliks.',
        '<h3>Miinimummakse ja selle mõju</h3>',
        'Miinimummakse on väikseim lubatud kuumakse, tavaliselt protsent jäägist. Ainult seda tasudes püsib võlg aastaid. Vaata lepingust, kui suur osa miinimummaksest läheb põhiosa katteks — kui see on väike, ei ole tegemist paindlikkuse, vaid pikaajalise kohustusega.',
        '<h3>Intressi muutmise õigus</h3>',
        'Tähtajatu lepingu puhul on krediidiandjal sageli õigus tingimusi teatamisega muuta. Kontrolli, milline on etteteatamistähtaeg ja kas sul on sel juhul õigus leping tasuta lõpetada.',
        '<h3>Limiidi ühepoolne muutmine</h3>',
        'Osa lepinguid annab pakkujale õiguse limiiti tõsta või langetada. Tõstmine on mugav, kuid suurendab sinu arvestuslikku laenukoormust iga järgmise taotluse juures — see mõjutab ka <a href="/vaikelaen">väikelaenu</a> ja <a href="/autolaen">autolaenu</a> heakskiidetavat summat.',
        'Kui leping sisaldab kuutasu ja sa limiiti tegelikult ei kasuta, on kõige otstarbekam samm see sulgeda. Sulgemine eeldab nullsaldot ja kirjalikku kinnitust. Ühekordse vajaduse jaoks on kindla graafikuga <a href="/kiirlaen">kiirlaen</a> läbipaistvam, sest kogusumma on teada juba allkirjastamise hetkel.',
      ],
    },
  ],

  example: {
    amount: '2000 € limiit, kasutatud 1000 €',
    period: '12 kuud',
    interest: '20,9% (kasutatud osalt)',
    apr: '24,8%',
    monthly: '~93 €',
    total: '~1116 €',
    note: 'Näide eeldab kasutatud 1000 euro tagasimaksmist 12 kuu jooksul võrdsete maksetena ja sisaldab haldustasu 0 €. Kasutamata limiidilt intressi ei arvestata, kuid osal pakkujatel on kuutasu. Tegelikud tingimused sõltuvad krediidiandja otsusest.',
  },

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
    {
      q: 'Kas krediidiliini eest tuleb maksta ka siis, kui ma seda ei kasuta?',
      a: [
        'Intressi kasutamata osalt ei arvestata, kuid osal pakkujatel on kuu- või haldustasu, mis kehtib limiidi olemasolu eest sõltumata kasutusest. Kolm eurot kuus teeb aastas 36 eurot puutumata limiidi eest — kontrolli see tingimus lepingust enne allkirjastamist.',
      ],
    },
    {
      q: 'Mis juhtub, kui limiit on pidevalt täis?',
      a: [
        'Sel juhul ei täida krediidiliin enam puhvri rolli, vaid on sisuliselt kallis pikaajaline laen ilma lõppkuupäevata. Mõistlik samm on jääk refinantseerida madalama KKM-iga väikelaenu alla, mille graafik viib võla kindla ajaga nulli, ja limiit seejärel sulgeda.',
      ],
    },
    {
      q: 'Kas krediidiliini leping on tähtajatu?',
      a: [
        'Enamasti jah — limiit kehtib kuni lepingu lõpetamiseni ühe või teise poole poolt. See on mugav, kuid tähendab ka, et tingimused jäävad kehtima pikaks ajaks. Lepingu saab igal ajal ise lõpetada, kui saldo on nullis.',
      ],
    },
  ],
};

export default krediidiliin;
