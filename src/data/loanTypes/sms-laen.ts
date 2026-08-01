import type { LoanTypeContent } from './types';

const smsLaen: LoanTypeContent = {
  slug: 'sms-laen',
  loanType: 'sms-laen',
  navLabel: 'SMS-laen',

  seoText:
    'Vajad SMS-laenu kohe ja otse mobiilist? Võrdle Eesti SMS-laenu pakkujaid ühel lehel — MobiilneLaen.ee näitab summad, tingimused ja KKM-i, et leiaksid kiire SMS-laenu otse nutiseadmest mõne minutiga.',

  metaTitle: 'SMS-laen 2026 — kiire väikelaen kohe',
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
      title: 'SMS-laenu turg Eestis',
      body: [
        'SMS-laen jõudis Eestisse 2000. aastatel ja oli toona täpselt see, mida nimi lubab: väike laen, mida taotleti lühisõnumiga ja mille otsus tuli samuti telefoni. Toode muutus kiiresti populaarseks just lihtsuse tõttu, kuid samal ajal kasvasid ka probleemid — läbimõtlemata laenamine, kõrged kulud ja võlgnevused. Tänaseks on nimi jäänud, kuid sisu on täielikult muutunud: taotlemine käib laenuandja kodulehel, isik tuvastatakse <strong>Smart-ID või Mobiil-ID</strong> abil ja leping allkirjastatakse digitaalselt.',
        'Ka turg ise näeb välja teistsugune kui algusaastatel. Regulatsiooni karmistamine — muu hulgas kiirlaenureklaami piirangud ja <strong>krediidi kulukuse määra ülempiir</strong> — sõelus turult välja vastutustundetumad tegijad ning alles jäid litsentseeritud pakkujad, kelle üle teeb järelevalvet Finantsinspektsioon. Väikelaenudele spetsialiseerunud pakkujaid, näiteks SmsRaha (Placet Group), iseloomustab tänapäeval sama loogika mis muid tarbimislaene: maksevõime hindamine, selged lepingutingimused ja avalik KKM. Summad on jäänud väikeseks — SMS-laen on endiselt lühiajaline väikelaen, mitte suurema ostu rahastamise tööriist.',
      ],
    },
    {
      id: 'keeldumine',
      title: 'Miks SMS-laenu taotlus lükatakse tagasi?',
      body: [
        'Kõige sagedasemad keeldumise põhjused on: <ul><li><strong>kehtiv maksehäire</strong> — laenuandjad kontrollivad maksehäireregistrit ja aktiivse võlgnevusega taotlus lükatakse üldjuhul tagasi;</li><li><strong>tõendamata või ebapiisav sissetulek</strong> — kui pangakonto väljavõttelt ei paista regulaarset laekumist või kuumakse ei mahu maksevõime piiresse;</li><li><strong>palju hiljutisi laenutaotlusi</strong> — mitu taotlust lühikese aja jooksul viitab rahalisele survele ja tõstab riskihinnangut;</li><li>vigased või puudulikud andmed taotluses.</li></ul>',
        'Kui said eitava otsuse, ära esita kohe uusi taotlusi teistele pakkujatele. Mõistlikum on põhjus kõrvaldada: lahenda maksehäire, lase sissetulekul kontole regulaarselt laekuda ja oota mõni kuu enne uut taotlust. Kui kõik litsentseeritud laenuandjad keelduvad, on see märk, et laen ei ole praegu sinu eelarvele jõukohane — <strong>ära pöördu litsentsita või eraisikust laenuandjate poole</strong>. Nende tingimused ei allu järelevalvele, kulud võivad olla röövellikud ja tarbijakaitse sind sellisel juhul ei kaitse.',
      ],
    },
    {
      id: 'regulatsioon',
      title: 'Regulatsioon ja tarbijakaitse',
      body: [
        'Just SMS-laenude segment oli omal ajal peamine põhjus, miks Eesti kiirlaenuturgu hakati rangemalt reguleerima. Tänapäeval tohib tarbijakrediiti väljastada ainult <strong>Finantsinspektsiooni tegevusloaga</strong> krediidiandja, laenu tegelikku hinda piirab <strong>krediidi kulukuse määra ülempiir</strong> ning kiirlaenude reklaamile kehtivad ranged piirangud — reklaam ei tohi jätta muljet, et laenamine on muretu või kiire lahendus rahamurele. Lisaks peab laenuandja enne lepingu sõlmimist hindama taotleja maksevõimet.',
        'Tarbijal on seadusest tulenevad õigused, mida ükski leping ära võtta ei saa: <strong>14-päevane taganemisõigus</strong> ehk võimalus lepingust põhjust nimetamata taganeda, ning õigus laen <strong>igal ajal ennetähtaegselt tagastada ilma leppetrahvita</strong>, mille korral väheneb ka intressikulu. Enne taotluse esitamist kontrolli alati, et pakkujal on kehtiv tegevusluba — litsentseeritud krediidiandjate nimekiri on avalik Finantsinspektsiooni lehel <strong>fi.ee</strong>. Kui pakkujat sealt ei leia, ära temaga lepingut sõlmi.',
      ],
    },
  ],

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
  ],
};

export default smsLaen;
