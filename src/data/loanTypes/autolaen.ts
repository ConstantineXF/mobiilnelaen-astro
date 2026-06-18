import type { LoanTypeContent } from './types';

const autolaen: LoanTypeContent = {
  slug: 'autolaen',
  loanType: 'autolaen',
  navLabel: 'Autolaen',

  metaTitle: 'Autolaen 2026 — võrdle ja taotle soodsalt | MobiilneLaen.ee',
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
  ],

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
  ],
};

export default autolaen;
