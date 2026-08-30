import type {
  SolutionDetailContent,
  SolutionFamilyContent,
  SolutionsPageContent,
} from "./types";
import type { SolutionFamilyKey, SolutionKey } from "@/config/solutions";

/** Magyar nyelvű megoldáskatalógus: három terület, tizenhárom részmegoldás. */

export const solutionsPageHu: SolutionsPageContent = {
  eyebrow: "Megoldáskatalógus",
  title: "Megoldások konkrét működési feladatokra",
  summary: [
    "Az STP72 három területen dolgozik: AI-megoldások, üzleti rendszerek, valamint adatelemzés és előrejelzés. Ezek együtt is működnek, de a bevezetés szinte mindig egyetlen, jól körülhatárolt feladattal indul.",
    "Az alábbi katalógus azt mutatja meg, milyen működési problémákra van kidolgozott megközelítésünk. A pontos terjedelmet mindig a vállalat saját folyamata és a rendelkezésre álló adat határozza meg.",
  ],
  switcherLabel: "Megoldási területek",
  supporting: {
    title: "Támogató mérnöki képességek",
    intro:
      "A fenti területek önmagukban ritkán állnak meg: a bevezetett megoldásnak illeszkednie kell a meglévő környezethez, és üzemeltethetőnek kell maradnia. Ezt két támogató képesség fedi le.",
    items: [
      {
        key: "software-integrations",
        body: "A bevezetett megoldást összeköti a már használt rendszerekkel: adatcsere, interfészek, jogosultsági és hibakezelési kérdések.",
      },
      {
        key: "devops-infrastructure",
        body: "A leszállított rendszert telepíthetővé, megfigyelhetővé és karbantarthatóvá teszi: környezetek, telepítés, mentés, naplózás és riasztás.",
      },
    ],
  },
};

export const solutionFamiliesHu: Record<SolutionFamilyKey, SolutionFamilyContent> = {
  ai: {
    label: "AI megoldások",
    title: "AI megoldások",
    description:
      "Az AI itt nem önálló cél, hanem képesség egy meglévő folyamaton belül: dokumentumok és belső tudás elérhetővé tétele, ismétlődő adminisztratív előkészítés, illetve modellek beépítése működő alkalmazásokba.",
    when: [
      "A szükséges információ meglévő dokumentumokban van, de keresni és összerakni időigényes.",
      "Sok az ismétlődő, szabályozható adminisztratív előkészítő munka.",
      "Egy már működő alkalmazásba kellene modellképesség, új rendszer bevezetése nélkül.",
      "Fontos, hogy legyen emberi ellenőrzési pont a kockázatosabb lépéseknél.",
    ],
  },
  business: {
    label: "Üzleti rendszerek",
    title: "Üzleti rendszerek",
    description:
      "Folyamat- és nyilvántartás-központú szoftver: készlet, működésirányítás, termelés, bérlés és eszközkezelés, illetve olyan egyedi munkafolyamat, amelyre nincs megfelelő dobozos rendszer. Az AI ezekben legfeljebb kiegészítő elem.",
    when: [
      "A működés több táblázatban és e-mailben zajlik, és nehéz követni az aktuális állapotot.",
      "A dobozos rendszer a folyamat egy részét lefedi, de a lényegi lépést nem.",
      "Tételszintű nyomon követés vagy szabályozott kiadási rend szükséges.",
      "Több szerepkör dolgozik ugyanazon a nyilvántartáson, eltérő jogosultságokkal.",
    ],
  },
  data: {
    label: "Adat és előrejelzés",
    title: "Adat és előrejelzés",
    description:
      "Döntéstámogatás: a működési adat összerendezése, egységes mutatók, előrejelzés a bizonytalanság feltüntetésével, valamint feltételezéseken alapuló szcenáriószámítás. A cél nem a jóslás, hanem az, hogy a döntés előtt legyen mire támaszkodni.",
    when: [
      "Több rendszerből származó adatból kell egységes képet adni.",
      "A kereslet, a készlet vagy a kapacitás tervezése ma tapasztalati becslésen alapul.",
      "Alternatív terveket kellene összehasonlítani, mielőtt döntés születik.",
      "A vezetői kimutatás elkészítése ma kézi munka.",
    ],
  },
};

const s = (
  key: SolutionKey,
  value: SolutionDetailContent,
): [SolutionKey, SolutionDetailContent] => [key, value];

export const solutionDetailsHu: Record<SolutionKey, SolutionDetailContent> = Object.fromEntries([
  s("company-knowledge-ai", {
    navLabel: "Vállalati tudás és AI-keresés",
    title: "Vállalati tudás és AI-keresés",
    eyebrow: "Belső információ megtalálása",
    summary: [
      "A legtöbb vállalatnál a szükséges információ már létezik: szabályzatokban, eljárásrendekben, termékleírásokban, korábbi ajánlatokban és a használt rendszerekben. A probléma nem az információ hiánya, hanem a megtalálása.",
      "Ez a megoldás a meglévő anyagok kereshetővé tételére épül. A válasz ott hivatkozik vissza a forrásra, ahol a megvalósítás ezt lehetővé teszi, így a felhasználó ellenőrizni tudja, mire támaszkodott a rendszer.",
    ],
    catalogSummary:
      "Belső dokumentumok, eljárásrendek és szakmai anyagok kereshetővé tétele forráshivatkozással.",
    catalogPoints: [
      "Természetes nyelvű kérdés a meglévő anyagokra",
      "Forráshivatkozás ott, ahol a megvalósítás támogatja",
      "Jogosultsághoz igazodó találatok, ha a forrásrendszer megadja a hozzáférési kontextust",
    ],
    situations: [
      "Az ügyfélkérdésekre adott válasz több dokumentum összeolvasását igényli.",
      "Új munkatárs betanulása lassú, mert a tudás sok helyen szétszórtan áll rendelkezésre.",
      "Ugyanarra a kérdésre eltérő válasz születik attól függően, ki válaszol.",
      "A szabályzatok frissülnek, de nem biztos, hogy a napi munkában a friss változat kerül elő.",
    ],
    capabilities: [
      "Kérdés feltétele természetes nyelven, a vállalat saját anyagaira szűkítve.",
      "Válasz mellett a felhasznált forrásrészletek megjelenítése, ahol az adatforrás ezt lehetővé teszi.",
      "Dokumentumtípusonként eltérő feldolgozás: szabályzat, műszaki leírás, táblázatos adat.",
      "Jogosultsághoz igazodó lekérdezés, ha a forrásrendszer átadja a hozzáférési információt.",
      "Visszajelzés gyűjtése a hasznos és a téves válaszokról, a tartalom javításához.",
    ],
    inputs: [
      "Belső dokumentumok: szabályzatok, eljárásrendek, kézikönyvek, sablonok.",
      "Termék- és műszaki leírások, árlisták, korábbi ajánlatok.",
      "Strukturált tudásbázis vagy wiki, ha van ilyen.",
      "Kiválasztott üzleti rendszerek olvasási interfésze, ha az adott adat oda tartozik.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Átnézzük, milyen anyagok léteznek, hol tárolják őket, és melyik kérdéskör okozza a legtöbb keresési időt.",
      },
      {
        key: "slice",
        name: "Reprezentatív anyagrész",
        body: "Egy szűk, de valós dokumentumkört választunk, amelyen a feldolgozás és a keresés minősége értékelhető.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy felhasználói kör, egy dokumentumhalmaz, valós kérdésekkel. Itt derül ki, mit kell a tartalmon javítani.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További anyagok és felhasználói körök bevonása, ha az első szakasz eredménye ezt indokolja.",
      },
    ],
    evaluation: [
      "Valós kérdéslistát állítunk össze a mindennapi munkából, és ezen mérjük a találatok használhatóságát.",
      "Ellenőrizzük, hogy a válasz visszavezethető-e a forrásra, és a forrás valóban tartalmazza-e az állítást.",
      "Külön vizsgáljuk azokat az eseteket, ahol a rendszer nem talál elég információt: itt a helyes viselkedés a nemleges válasz.",
      "A jogosultsághoz kötött anyagoknál ellenőrizzük, hogy nem jelenik-e meg olyan tartalom, amit a felhasználó nem láthat.",
    ],
    evidenceKeys: [],
    technical: [
      "Dokumentumfeldarabolás és keresési index a tartalom típusához igazítva.",
      "Modellhívás szolgáltatói interfészen keresztül, naplózható be- és kimenettel.",
      "Forrásmegjelölés tárolása a válaszhoz, ahol a feldolgozás ezt megengedi.",
      "Hozzáférési kontextus átvétele a forrásrendszertől, ha az ilyet biztosít.",
    ],
    seo: {
      title: "Vállalati tudás és AI-keresés – STP72",
      description:
        "Belső dokumentumok, szabályzatok és szakmai anyagok kereshetővé tétele természetes nyelvű kérdésekkel, forráshivatkozással.",
    },
  }),
  s("ai-automation", {
    navLabel: "AI automatizálás",
    title: "AI automatizálás",
    eyebrow: "Ismétlődő adminisztratív munka",
    summary: [
      "Sok vállalatnál jelentős idő megy el olyan adminisztratív előkészítésre, amely nagyrészt szabályozható: beérkező dokumentumok szétválogatása, adatok kigyűjtése, összefoglalók készítése, továbbítás a megfelelő kollégához.",
      "Ez a megoldás ezeket a lépéseket készíti elő gépi úton. A kockázatosabb pontokon emberi jóváhagyás marad a folyamatban, mert az automatizálás célja az előkészítés gyorsítása, nem a felelősség kiváltása.",
    ],
    catalogSummary:
      "Dokumentumbeérkezés, adatkinyerés, besorolás és továbbítás gépi előkészítése, emberi ellenőrzési pontokkal.",
    catalogPoints: [
      "Dokumentumok besorolása és adatkinyerés",
      "Összefoglalás és továbbítás a felelős kollégához",
      "Emberi jóváhagyás a kockázatosabb lépéseknél",
    ],
    situations: [
      "Naponta sok e-mail vagy dokumentum érkezik, és a szétválogatásuk kézi munka.",
      "Ugyanazokat az adatokat többször gépelik be különböző rendszerekbe.",
      "A beérkező anyagok feldolgozása egy-két kollégán múlik, és torlódik, ha ők kiesnek.",
      "A hosszabb anyagokból kézzel készül összefoglaló a döntéshez.",
    ],
    capabilities: [
      "Beérkező dokumentumok fogadása és típus szerinti besorolása.",
      "Mezőszintű adatkinyerés strukturált formában, további feldolgozásra alkalmasan.",
      "Rövid, tényszerű összefoglaló készítése hosszabb anyagokból.",
      "Továbbítás a felelős szerepkörhöz a tartalom alapján.",
      "Jóváhagyási pont beépítése ott, ahol a hibás döntés következménye jelentős.",
      "Naplózás: mi történt, milyen bemenetből, és ki hagyta jóvá.",
    ],
    inputs: [
      "E-mail postafiók vagy dokumentumtár, amelybe az anyagok érkeznek.",
      "Beolvasott vagy digitálisan érkező dokumentumok: számla, megrendelés, szerződés, jegyzőkönyv.",
      "Törzsadat a besoroláshoz: partnerek, cikkek, szerepkörök.",
      "A célrendszer interfésze, ha az eredményt oda kell átadni.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Kiválasztjuk azt az adminisztratív lépést, amely gyakori, jól leírható és mérhető időt vesz el.",
      },
      {
        key: "slice",
        name: "Mintaanyag",
        body: "Valós dokumentumokból álló mintát dolgozunk fel, beleértve a szabálytalan és hiányos eseteket is.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy dokumentumtípus végigvitele a beérkezéstől a jóváhagyásig, éles adaton.",
      },
      {
        key: "rollout",
        name: "Kiterjesztés",
        body: "További dokumentumtípusok vagy szervezeti egységek bevonása, ha az első szakasz ezt indokolja.",
      },
    ],
    evaluation: [
      "A kinyert adatokat összevetjük a kézi feldolgozás eredményével ugyanazon a mintán.",
      "Külön vizsgáljuk a hiányos, rossz minőségű és nem szabványos dokumentumokat.",
      "Megnézzük, hogy a bizonytalan esetek valóban emberi jóváhagyáshoz kerülnek-e.",
      "Követjük, hogy a jóváhagyók milyen arányban javítanak a gépi eredményen, és mit javítanak.",
    ],
    evidenceKeys: [],
    technical: [
      "Dokumentumbeolvasás és szövegkinyerés a forrás formátumához igazítva.",
      "Strukturált kimenet séma szerint, hogy a következő rendszer feldolgozhassa.",
      "Bizonytalansági küszöb, amely fölött a folyamat emberi jóváhagyást kér.",
      "Naplózás és újrafuttathatóság hibás feldolgozás esetén.",
    ],
    seo: {
      title: "AI automatizálás – STP72",
      description:
        "Dokumentumbeérkezés, adatkinyerés, besorolás és továbbítás gépi előkészítése, emberi ellenőrzési pontokkal.",
    },
  }),
  s("ai-agents", {
    navLabel: "AI agentek",
    title: "AI agentek",
    eyebrow: "Több lépésből álló, körülhatárolt feladat",
    summary: [
      "Az agent itt körülhatárolt szoftverkomponenst jelent, amely egy előre meghatározott, több lépésből álló feladatot tud összefogni: információt gyűjt, előkészít egy strukturált műveletet, és meghívja azokat az eszközöket, amelyekhez engedélyt kapott.",
      "Ez nem önálló munkatárs és nem korlátlan rendszerhozzáférés. A jogosultságokat, a naplózást és a jóváhagyási pontokat a feladat kockázatához igazítjuk.",
    ],
    catalogSummary:
      "Körülhatárolt, több lépéses feladat összefogása engedélyezett eszközökkel, naplózás és jóváhagyás mellett.",
    catalogPoints: [
      "Előre meghatározott feladat, nem szabad hatáskör",
      "Csak engedélyezett eszközök és interfészek",
      "Naplózás és jóváhagyási pont a kockázat szerint",
    ],
    situations: [
      "Egy visszatérő feladat több rendszer megnyitását és kézi összefésülését igényli.",
      "A folyamat lépései jól leírhatók, de sok apró váltást igényelnek a munkatárstól.",
      "Az előkészítés gépesíthető, de a végső döntést mindenképpen embernek kell meghoznia.",
      "Az elvégzett lépéseket utólag vissza kell tudni követni.",
    ],
    capabilities: [
      "Feladat lebontása előre definiált lépésekre, rögzített határokkal.",
      "Információgyűjtés az engedélyezett forrásokból.",
      "Strukturált művelet előkészítése: űrlap, rekord, üzenet vagy összesítés.",
      "Engedélyezett eszközök és interfészek hívása, más nem érhető el.",
      "Megállás jóváhagyási ponton, ha a lépés következménye jelentős.",
      "Teljes lépésnapló a végrehajtott műveletekről.",
    ],
    inputs: [
      "Az érintett folyamat leírása lépésenként, a döntési pontokkal együtt.",
      "Azoknak a rendszereknek az interfésze, amelyeket az agent használhat.",
      "Jogosultsági szabályok: mit olvashat és mit írhat.",
      "A jóváhagyók köre és az a küszöb, amely fölött jóváhagyás kötelező.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Kiválasztunk egy feladatot, amely többlépéses, ismétlődő és pontosan leírható.",
      },
      {
        key: "boundaries",
        name: "Határok kijelölése",
        body: "Rögzítjük, milyen eszközöket használhat, mit nem tehet meg, és hol kötelező a jóváhagyás.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Az agent egyetlen feladatot visz végig, kezdetben minden lépésnél jóváhagyással.",
      },
      {
        key: "rollout",
        name: "Fokozatos oldás",
        body: "A jóváhagyási pontok csak ott lazulnak, ahol a napló alapján ez indokolható.",
      },
    ],
    evaluation: [
      "Végigjátsszuk a feladatot valós eseteken, és összevetjük a kézi végrehajtás eredményével.",
      "Ellenőrizzük, hogy az agent nem lép ki a számára engedélyezett eszközkörből.",
      "Külön teszteljük a hibás és hiányos bemenetet: itt a helyes viselkedés a megállás.",
      "A naplóból visszakövethetőnek kell lennie minden végrehajtott műveletnek.",
    ],
    evidenceKeys: [],
    technical: [
      "Eszközhívások explicit listája, alapértelmezetten tiltó hozzáféréssel.",
      "Lépésenkénti napló a bemenetről, a döntésről és az eredményről.",
      "Jóváhagyási állapotok kezelése a folyamat állapotgépében.",
      "Időkorlát és leállási feltétel a végtelen próbálkozás elkerülésére.",
    ],
    seo: {
      title: "AI agentek – STP72",
      description:
        "Körülhatárolt, több lépéses feladatokat összefogó szoftveragentek engedélyezett eszközökkel, naplózással és jóváhagyási pontokkal.",
    },
  }),
  s("ai-integration", {
    navLabel: "AI integráció",
    title: "AI integráció",
    eyebrow: "Modellképesség meglévő alkalmazásban",
    summary: [
      "Nem minden AI-feladathoz kell új rendszer. Sok esetben a legjobb megoldás az, ha a modellképesség abba az alkalmazásba vagy folyamatba kerül be, amelyet a munkatársak amúgy is használnak.",
      "Ez a munka a határfelületről szól: hol hívjuk a modellt, milyen strukturált bemenetet kap, milyen formában adja vissza az eredményt, és mi történik akkor, ha a szolgáltatás nem elérhető vagy értelmezhetetlen választ ad.",
    ],
    catalogSummary:
      "Modellképesség beépítése meglévő alkalmazásba vagy folyamatba, kontrollált be- és kimenettel.",
    catalogPoints: [
      "Modell- és szolgáltatói határfelület kialakítása",
      "Strukturált be- és kimenet, séma szerint",
      "Naplózás és tartalék viselkedés hiba esetén",
    ],
    situations: [
      "Van működő alkalmazás, és egyetlen ponton kellene modellképesség.",
      "A meglévő üzleti rendszert nem szeretné a vállalat lecserélni.",
      "Több szolgáltató szóba jöhet, és nem szeretnének egyhez kötődni.",
      "Az AI-hívás eredményét naplózni és auditálni kell.",
    ],
    capabilities: [
      "Modellhívás beillesztése a meglévő alkalmazás munkafolyamatába.",
      "Szolgáltatófüggetlen határfelület, hogy a modell cserélhető maradjon.",
      "Séma szerinti strukturált kimenet, amelyet a rendszer további része feldolgozhat.",
      "Naplózás: bemenet, kimenet, időbélyeg, felhasználó.",
      "Tartalék viselkedés hiba, időtúllépés vagy értelmezhetetlen válasz esetén.",
      "Költség- és felhasználásfigyelés, ahol ez indokolt.",
    ],
    inputs: [
      "A meglévő alkalmazás vagy folyamat pontja, ahová a képesség kerül.",
      "A rendelkezésre álló interfészek: API, adatbázis, üzenetsor.",
      "A szolgáltatói hozzáférés és a hozzá tartozó felhasználási feltételek.",
      "Az adatkezelési korlátok: mi az, ami nem hagyhatja el a vállalati környezetet.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Megnézzük, hol van a folyamatban az a pont, ahol a modell valós különbséget hoz.",
      },
      {
        key: "slice",
        name: "Határfelület kialakítása",
        body: "Rögzítjük a be- és kimeneti sémát, majd egy szűk funkción kipróbáljuk.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy funkció éles használatba adása naplózással és tartalék viselkedéssel.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További funkciók bekötése, ha a napló és a visszajelzés ezt indokolja.",
      },
    ],
    evaluation: [
      "Ellenőrizzük, hogy a kimenet megfelel-e az elvárt sémának, és a hibás válasz kezelt eset-e.",
      "Teszteljük a szolgáltatás kiesését: a folyamatnak ilyenkor is értelmes állapotban kell maradnia.",
      "Összevetjük a modell eredményét a korábbi kézi vagy szabályalapú megoldással.",
      "Nyomon követjük a naplót: mennyi hívás, milyen hibaarány, milyen tipikus problémák.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Szolgáltatói hívás elkülönített rétegben, cserélhető megvalósítással.",
      "Séma szerinti válaszfeldolgozás és validáció.",
      "Újrapróbálkozás és időtúllépés kezelése.",
      "Naplózás olyan részletességgel, amely auditálható marad.",
    ],
    seo: {
      title: "AI integráció – STP72",
      description:
        "Modellképesség beépítése meglévő alkalmazásba: strukturált be- és kimenet, naplózás, tartalék viselkedés, szolgáltatófüggetlen határfelület.",
    },
  }),

  s("inventory-wms", {
    navLabel: "Készlet és WMS",
    title: "Készlet és WMS",
    eyebrow: "Raktári nyilvántartás és készletmozgás",
    summary: [
      "A készletnyilvántartás akkor okoz problémát, amikor a rendszerben szereplő és a raktárban ténylegesen meglévő mennyiség eltér. Ennek oka jellemzően nem a szoftver hiánya, hanem az, hogy a mozgásokat nem ott és nem akkor rögzítik, ahol keletkeznek.",
      "Ez a megoldás a bevételezéstől a kiadásig fedi le a raktári folyamatot, a vállalat saját szabályaihoz igazítva: tétel- és lejáratkövetés, foglalás, több raktár, valamint naplózott, szerepkörhöz kötött hozzáférés.",
    ],
    catalogSummary:
      "Raktári folyamat és készletnyilvántartás: bevételezés, kiadás, foglalás, tétel- és lejáratkövetés, több raktár.",
    catalogPoints: [
      "Bevételezés, kiadás és készletmozgás rögzítése",
      "Tétel, sarzs és lejárat követése, FEFO ahol a folyamat megkívánja",
      "Foglalás, több raktár, adatimport és adatexport",
    ],
    situations: [
      "A nyilvántartott és a tényleges készlet rendszeresen eltér.",
      "A lejárathoz kötött árunál nem egyértelmű, melyik tételt kell kiadni.",
      "Több raktár vagy tárolási hely között mozog az áru, és nincs egységes kép.",
      "A leltár hosszú, mert a mozgásokat utólag rekonstruálják.",
      "Nincs nyoma annak, ki és mikor módosított egy készletadatot.",
    ],
    capabilities: [
      "Bevételezés és kiadás rögzítése a tényleges munkavégzés helyén.",
      "Készletmozgások és áthelyezések követése tárolási hely szintjén.",
      "Foglalás: az elígért készlet elkülönítése a szabadon felhasználhatótól.",
      "Tétel-, sarzs- és lejáratkövetés, FEFO szerinti kiadás ott, ahol a folyamat ezt kívánja.",
      "Több raktár és tárolási struktúra kezelése.",
      "Adatimport és adatexport ellenőrzésekkel, szerepkör alapú jogosultság és naplózás.",
    ],
    inputs: [
      "Cikktörzs és a hozzá tartozó mértékegységek, csomagolási egységek.",
      "Raktár- és tárolóhely-struktúra.",
      "Beérkező és kimenő bizonylatok, ha ezek másik rendszerből jönnek.",
      "A meglévő számlázó vagy ERP interfésze, ha a készletadatot oda is át kell adni.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Végigvesszük a tényleges raktári folyamatot, és megkeressük, hol keletkezik az eltérés.",
      },
      {
        key: "slice",
        name: "Egy folyamatszakasz",
        body: "Egy raktár vagy egy árucsoport folyamatát írjuk le pontosan, valós adattal.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Bevételezés és kiadás éles használata egy körben, a mozgások helyben rögzítésével.",
      },
      {
        key: "rollout",
        name: "Kiterjesztés",
        body: "További raktárak, árucsoportok és interfészek bekötése.",
      },
    ],
    evaluation: [
      "Összevetjük a rendszerben lévő és a fizikailag megszámolt készletet egy körülhatárolt körben.",
      "Ellenőrizzük, hogy a foglalás valóban megakadályozza-e a kétszeres elígérést.",
      "Lejárathoz kötött árunál teszteljük, hogy a kiadási sorrend a szabálynak megfelel-e.",
      "Átnézzük a naplót: minden készletváltozás visszavezethető-e felhasználóra és bizonylatra.",
    ],
    evidenceKeys: ["warehouse-management", "wms-food-prod"],
    technical: [
      "Készletmozgás-alapú adatmodell, ahol az aktuális állapot a mozgásokból áll elő.",
      "Tétel- és lejáratszintű nyilvántartás, ha a folyamat ezt igényli.",
      "Import- és exportcsatornák ellenőrzésekkel és hibajelentéssel.",
      "Szerepkör alapú jogosultság és teljes körű naplózás.",
    ],
    seo: {
      title: "Készlet és WMS – STP72",
      description:
        "Raktári folyamat és készletnyilvántartás: bevételezés, kiadás, foglalás, tétel- és lejáratkövetés, FEFO, több raktár, naplózás.",
    },
  }),
  s("erp-operations", {
    navLabel: "ERP és működésirányítás",
    title: "ERP és működésirányítás",
    eyebrow: "Operatív folyamatok egy helyen",
    summary: [
      "Ez nem egy teljes vállalatirányítási rendszer ígérete. Középvállalati méretben többnyire nem az a kérdés, hogyan lehet mindent egyetlen nagy rendszerbe tenni, hanem az, hogyan lehet a napi működés lényegi lépéseit követhetővé és átadhatóvá tenni.",
      "A cél egy szűkebb, a vállalat folyamatára szabott működésirányítási réteg: törzsadat, megrendelések és munkák állapota, jóváhagyások, operatív rögzítés és néhány valóban használt vezetői nézet.",
    ],
    catalogSummary:
      "Szűkített terjedelmű, folyamatra szabott működésirányítás: törzsadat, munkaállapotok, jóváhagyás, vezetői nézetek.",
    catalogPoints: [
      "Törzsadat és operatív nyilvántartás egy helyen",
      "Megrendelések, munkák és állapotok követése",
      "Jóváhagyási lépések és alap vezetői kimutatások",
    ],
    situations: [
      "A működés több táblázatban zajlik, és a napi állapot csak kérdezéssel deríthető ki.",
      "A megrendelés és a teljesítés között több kézi átadás van, ahol elveszhet az információ.",
      "Nincs egységes törzsadat: ugyanaz a partner vagy cikk több néven szerepel.",
      "A jóváhagyás e-mailben történik, és utólag nehéz rekonstruálni.",
    ],
    capabilities: [
      "Törzsadatok kezelése: partnerek, cikkek, szerepkörök, telephelyek.",
      "Megrendelések, munkák és feladatok nyilvántartása állapotokkal.",
      "Jóváhagyási lépések a folyamat kockázatos pontjain.",
      "Operatív rögzítés: teljesítés, mennyiség, időráfordítás, megjegyzés.",
      "Alapszintű vezetői nézetek a folyamat aktuális állapotáról.",
      "Kapcsolódás számlázó vagy könyvelési rendszerhez, ahol az interfész ezt megengedi.",
    ],
    inputs: [
      "A jelenlegi folyamat leírása és a ma használt táblázatok.",
      "Meglévő törzsadat, akár több forrásból, tisztítási igénnyel.",
      "A számlázó vagy könyvelő rendszer interfésze, ha van.",
      "Szerepkörök és jogosultsági elvárások.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Meghatározzuk azt a folyamatszakaszt, ahol a rendszerezés a legnagyobb különbséget hozza.",
      },
      {
        key: "slice",
        name: "Törzsadat és állapotok",
        body: "Rögzítjük a törzsadat szerkezetét és a munkafolyamat állapotait, valós eseteken.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy folyamat végigvitele éles használatban, jóváhagyásokkal együtt.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További folyamatok és integrációk bevonása, ha ezt az első szakasz indokolja.",
      },
    ],
    evaluation: [
      "Végigvezetünk valós eseteket a folyamaton, és megnézzük, hol akad el a rögzítés.",
      "Ellenőrizzük, hogy az állapotok tükrözik-e a tényleges működést, nem csak az elméleti folyamatot.",
      "Megvizsgáljuk, hogy a jóváhagyás visszakereshető és egyértelmű-e.",
      "Összevetjük a vezetői nézetet a ma használt táblázatos kimutatással.",
    ],
    evidenceKeys: ["crentsys"],
    technical: [
      "Állapotgép alapú munkafolyamat, egyértelmű átmenetekkel.",
      "Szerepkör alapú jogosultság és naplózás a módosításokra.",
      "Interfészréteg a számlázó vagy könyvelő rendszer felé, ahol elérhető.",
      "Kimutatások közvetlenül az operatív adatból, külön riportadatbázis nélkül, ha a méret ezt megengedi.",
    ],
    seo: {
      title: "ERP és működésirányítás – STP72",
      description:
        "Folyamatra szabott működésirányítás középvállalatoknak: törzsadat, megrendelések, állapotok, jóváhagyás és vezetői nézetek.",
    },
  }),
  s("production", {
    navLabel: "Termelés",
    title: "Termelés",
    eyebrow: "Gyártási folyamat és nyomon követés",
    summary: [
      "A termelésben a legtöbb vitát az okozza, ha utólag nem lehet megmondani, melyik alapanyagból melyik termék készült, és melyik lépésnél mi történt. Ez a kérdés minőségügyi és ügyfélkezelési szempontból is visszatér.",
      "Ez a megoldás a gyártási munkák, az anyagmozgás és a tételszintű nyomon követés rögzítésére épül, a folyamatba illesztett minőségi ellenőrzési pontokkal ott, ahol az adott iparág ezt megköveteli.",
    ],
    catalogSummary:
      "Gyártási munkák, anyagmozgás és tételszintű nyomon követés, minőségi ellenőrzési pontokkal.",
    catalogPoints: [
      "Gyártási munkák és futások rögzítése",
      "Anyagfelhasználás és tételszintű nyomon követés",
      "Minőségi és folyamatellenőrzési pontok, ahol szükséges",
    ],
    situations: [
      "Visszahívás vagy reklamáció esetén nehéz megállapítani az érintett tételek körét.",
      "Az alapanyag-felhasználás csak összesítve ismert, gyártási munkára bontva nem.",
      "A minőségi ellenőrzés papíron történik, és nem kapcsolódik a gyártási rekordhoz.",
      "A gyártás aktuális állapotát kérdezéssel lehet csak megtudni.",
    ],
    capabilities: [
      "Gyártási munkák és futások nyilvántartása állapotokkal.",
      "Alapanyag-felhasználás rögzítése a felhasznált tételek megjelölésével.",
      "Tételszintű nyomon követés alapanyagtól a késztermékig.",
      "Minőségi és folyamatellenőrzési pontok beépítése oda, ahol az eljárásrend előírja.",
      "Készterméki bevételezés és a raktári készlet frissítése.",
      "Állapotkövetés és üzemi visszajelzés a gyártás előrehaladásáról.",
    ],
    inputs: [
      "Termékek receptúrája vagy anyagjegyzéke, ha rendelkezésre áll.",
      "Alapanyag- és késztermék-törzs, tételazonosítási gyakorlattal együtt.",
      "A meglévő minőségügyi eljárásrend és az ellenőrzési pontok listája.",
      "A raktári nyilvántartás, ha külön rendszerben van.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Végigkísérünk egy tényleges gyártási folyamatot, és megjelöljük a rögzítési pontokat.",
      },
      {
        key: "slice",
        name: "Egy terméktípus",
        body: "Egy terméken vagy gyártósoron írjuk le pontosan az anyagmozgást és a nyomon követést.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy gyártási folyamat éles rögzítése tételkövetéssel és az előírt ellenőrzési pontokkal.",
      },
      {
        key: "rollout",
        name: "Kiterjesztés",
        body: "További termékek, gyártósorok és a raktári oldal bekötése.",
      },
    ],
    evaluation: [
      "Kiválasztunk egy késztermék-tételt, és visszavezetjük az összes felhasznált alapanyagtételig.",
      "Ellenőrizzük, hogy az ellenőrzési pontok kihagyhatatlanok-e ott, ahol kötelezőek.",
      "Összevetjük az elszámolt és a ténylegesen felhasznált anyagmennyiséget.",
      "Megnézzük, hogy az üzemi rögzítés valóban elvégezhető-e a munkakörülmények között.",
    ],
    evidenceKeys: ["wms-food-prod"],
    technical: [
      "Tételszintű adatmodell, amely mind a felhasználást, mind a keletkezést rögzíti.",
      "Ellenőrzési pontok a munkafolyamat állapotgépébe kötve.",
      "Üzemi felület, amely kevés lépéssel használható.",
      "Naplózás és jogosultságkezelés a minőségügyi adatokra.",
    ],
    seo: {
      title: "Termelés – STP72",
      description:
        "Gyártási munkák, anyagfelhasználás és tételszintű nyomon követés, a folyamatba illesztett minőségi ellenőrzési pontokkal.",
    },
  }),
  s("rental-asset-management", {
    navLabel: "Bérlés és eszközkezelés",
    title: "Bérlés és eszközkezelés",
    eyebrow: "Eszközök rendelkezésre állása és mozgása",
    summary: [
      "Bérlésnél és eszközkezelésnél a legfontosabb kérdés egyszerű: mi van most szabadon, mi van kint, és mikor jön vissza. Ha erre nincs megbízható válasz, abból foglalási ütközés és kihasználatlan eszköz egyaránt keletkezik.",
      "Ez a megoldás az eszközállomány rendelkezésre állását, a foglalásokat és az átadás-visszavétel folyamatát követi, a hozzá tartozó dokumentumokkal és állapotrögzítéssel együtt.",
    ],
    catalogSummary:
      "Eszköz- és flottaállomány rendelkezésre állása, foglalás, átadás-visszavétel, állapot és dokumentumok.",
    catalogPoints: [
      "Rendelkezésre állás és foglalási naptár",
      "Átadás-visszavétel állapotrögzítéssel",
      "Bérleti dokumentumok és árazási szabályok",
    ],
    situations: [
      "A foglalások több helyen vannak nyilvántartva, és előfordul ütközés.",
      "Az eszköz visszavételekor keletkező sérülés nincs dokumentálva.",
      "A karbantartási időszakok nem látszanak a rendelkezésre állásban.",
      "A bérleti dokumentumok kézzel készülnek, esetenként eltérő tartalommal.",
    ],
    capabilities: [
      "Eszköz- és flottanyilvántartás állapottal és rendelkezésre állással.",
      "Foglalások kezelése ütközésvizsgálattal.",
      "Átadás és visszavétel rögzítése, állapot- és sérülésleírással.",
      "Karbantartáshoz kötött kiesések megjelenítése a rendelkezésre állásban.",
      "Árazási szabályok és a bérléshez tartozó dokumentumok előállítása.",
      "Tulajdonosi és vezetői nézetek a kihasználtságról, ahol az adat ezt megengedi.",
    ],
    inputs: [
      "Eszköztörzs: azonosítók, kategóriák, telephely.",
      "A jelenlegi foglalási nyilvántartás, akár táblázatos formában.",
      "Árazási szabályok és a használt szerződéssablonok.",
      "Karbantartási rend, ha az eszköz rendelkezésre állását befolyásolja.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Áttekintjük a jelenlegi foglalási és átadási gyakorlatot, és megkeressük az ütközések forrását.",
      },
      {
        key: "slice",
        name: "Egy eszközkör",
        body: "Egy kategóriára vagy telephelyre írjuk le pontosan a rendelkezésre állás szabályait.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Foglalás és átadás-visszavétel éles használata, dokumentumkészítéssel.",
      },
      {
        key: "rollout",
        name: "Kiterjesztés",
        body: "További eszközkörök, telephelyek és vezetői nézetek bevonása.",
      },
    ],
    evaluation: [
      "Valós foglalási eseteken teszteljük, hogy az ütközésvizsgálat megbízhatóan működik-e.",
      "Ellenőrizzük, hogy a visszavételkor rögzített állapot később visszakereshető-e.",
      "Összevetjük a rendszerben látható rendelkezésre állást a tényleges eszközállapottal.",
      "Megnézzük, hogy a generált dokumentum tartalma megfelel-e a jelenlegi gyakorlatnak.",
    ],
    evidenceKeys: ["crentsys"],
    technical: [
      "Időintervallum-alapú foglalási modell ütközésvizsgálattal.",
      "Eszközállapot-történet, amely az átadás-visszavételi eseményekből áll össze.",
      "Dokumentumsablonok kiszolgálása a bérlési adatokból.",
      "Szerepkör alapú jogosultság és naplózás.",
    ],
    seo: {
      title: "Bérlés és eszközkezelés – STP72",
      description:
        "Eszköz- és flottakezelés: rendelkezésre állás, foglalás ütközésvizsgálattal, átadás-visszavétel, állapotrögzítés és bérleti dokumentumok.",
    },
  }),
  s("custom-business-system", {
    navLabel: "Egyedi üzleti rendszer",
    title: "Egyedi üzleti rendszer",
    eyebrow: "Hiányzó munkafolyamat pótlása",
    summary: [
      "Sok vállalatnál a működés lényegi része két dobozos rendszer közé esik: az egyik lefedi a számlázást, a másik a készletet, de a köztük lévő munkafolyamatot senki nem kezeli. Ez a rész marad táblázatban és e-mailben.",
      "Egyedi rendszer alatt nem azt értjük, hogy mindent újraírunk. A cél a hiányzó munkafolyamat megépítése úgy, hogy a jól működő meglévő rendszerek a helyükön maradjanak.",
    ],
    catalogSummary:
      "A meglévő rendszerek közé eső, vállalatspecifikus munkafolyamat megépítése a működő rendszerek megtartásával.",
    catalogPoints: [
      "Csak a hiányzó folyamat épül meg",
      "Szerepkörök, űrlapok, nyilvántartás és jóváhagyás",
      "Integráció a megmaradó rendszerekhez",
    ],
    situations: [
      "A folyamat egy szakaszát táblázatban és e-mailben kezelik, mert nincs rá rendszer.",
      "A dobozos megoldás testreszabása többe kerülne, mint a hiányzó rész megépítése.",
      "Több rendszer adatait kell egy munkafolyamatban összefogni.",
      "A folyamat a vállalat sajátja, és versenyelőnyt jelent, hogy másképp működik.",
    ],
    capabilities: [
      "Munkafolyamat és állapotkezelés a vállalat tényleges gyakorlata szerint.",
      "Szerepkörök, űrlapok és nyilvántartások a folyamathoz igazítva.",
      "Jóváhagyási lépések és naplózás.",
      "Kimutatások a folyamat állapotáról és átfutásáról.",
      "Integráció a megmaradó rendszerekhez, ahol az interfész elérhető.",
      "Fokozatos bővítés: a rendszer a folyamat változásával együtt módosítható.",
    ],
    inputs: [
      "A jelenlegi folyamat leírása, a ma használt táblázatokkal és sablonokkal együtt.",
      "A megmaradó rendszerek interfészei és adatszerkezete.",
      "Szerepkörök és jóváhagyási szabályok.",
      "Az adatminőség jelenlegi állapota, ha az adat több forrásból származik.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Pontosan meghatározzuk, mi hiányzik, és mi az, amit nem érdemes újraépíteni.",
      },
      {
        key: "slice",
        name: "Folyamatszelet",
        body: "Egy jól körülhatárolt szakaszt írunk le valós esetekkel és adatokkal.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "A hiányzó szakasz éles használatba adása, a meglévő rendszerek megtartásával.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További szakaszok és integrációk, ha a használat ezt indokolja.",
      },
    ],
    evaluation: [
      "Valós eseteket viszünk végig, és megnézzük, hol tér el a rendszer a tényleges gyakorlattól.",
      "Ellenőrizzük, hogy a párhuzamos táblázatos nyilvántartás valóban elhagyható-e.",
      "Megvizsgáljuk, hogy az integrációk hibás vagy késleltetett adat esetén is kezelhető állapotban maradnak-e.",
      "Átnézzük a jogosultságokat és a naplózást a folyamat érzékeny pontjain.",
    ],
    evidenceKeys: ["crentsys", "warehouse-management"],
    technical: [
      "Moduláris felépítés, hogy a folyamat változása ne igényelje a rendszer újraírását.",
      "Állapotgép alapú munkafolyamat, egyértelmű átmenetekkel.",
      "Integrációs réteg a megmaradó rendszerek felé, hibakezeléssel.",
      "Szerepkör alapú jogosultság és naplózás.",
    ],
    seo: {
      title: "Egyedi üzleti rendszer – STP72",
      description:
        "Vállalatspecifikus munkafolyamat megépítése a meglévő rendszerek megtartásával: szerepkörök, nyilvántartás, jóváhagyás, integráció.",
    },
  }),

  s("analytics", {
    navLabel: "Adatelemzés",
    title: "Adatelemzés",
    eyebrow: "Egységes kép a működésről",
    summary: [
      "A legtöbb vállalatnál nem az adat hiányzik, hanem az egységes értelmezése. Ugyanarra a mutatóra több szám létezik, mert mindenki más forrásból és más definícióval számolja.",
      "Ez a munka az operatív adat összerendezésével, a mutatók egyértelmű meghatározásával és olyan kimutatásokkal foglalkozik, amelyek ott jelennek meg, ahol a döntés születik.",
    ],
    catalogSummary:
      "Operatív adat összerendezése, egységes mutatódefiníciók és a döntéshez közel elhelyezett kimutatások.",
    catalogPoints: [
      "Több rendszer adatának összerendezése",
      "Egységes, dokumentált mutatódefiníciók",
      "Vezetői és operatív kimutatások, lebontással",
    ],
    situations: [
      "Ugyanarra a kérdésre két osztály két különböző számot ad.",
      "A havi kimutatás kézi táblázatmásolással készül.",
      "Az adat több rendszerben van, és nincs közös azonosító.",
      "A döntéshozó nem látja a részleteket, csak az összesítést.",
    ],
    capabilities: [
      "Adatforrások összekötése és rendszeres betöltés.",
      "Mutatók egységes, dokumentált meghatározása.",
      "Vezetői és operatív kimutatások ugyanabból az adatból.",
      "Lebontás és szegmentálás ott, ahol az adat ezt valóban lehetővé teszi.",
      "Adatminőségi ellenőrzések és jelzés, ha a betöltés hibás.",
      "Kimutatás elhelyezése a munkafolyamatban, nem külön rendszerben.",
    ],
    inputs: [
      "Az érintett rendszerek adatbázisai vagy exportjai.",
      "A jelenleg használt kimutatások és a mögöttük lévő számítási logika.",
      "A mutatók üzleti definíciója, ahogy a vezetés érti őket.",
      "Törzsadat a források összekapcsolásához.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Kiválasztunk néhány mutatót, amely ma is vitát okoz, és tisztázzuk a definíciójukat.",
      },
      {
        key: "slice",
        name: "Adatszelet",
        body: "Egy forrásból, egy időszakra betöltjük az adatot, és ellenőrizzük a minőségét.",
      },
      {
        key: "scope",
        name: "Első működő kimutatás",
        body: "Egy valóban használt kimutatás előállítása automatikusan, a definiált mutatókkal.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További források, mutatók és felhasználói körök bevonása.",
      },
    ],
    evaluation: [
      "Összevetjük az új kimutatást a ma használt kézi számítással, és megmagyarázzuk az eltéréseket.",
      "Ellenőrizzük, hogy a betöltés hibája észrevehető-e, vagy csendben rossz adatot ad.",
      "Megnézzük, hogy a lebontás olyan mélységig működik-e, amennyire az adat ténylegesen alkalmas.",
      "A definíciókat írásban rögzítjük, és a kimutatáson elérhetővé tesszük.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Rendszeres betöltés a forrásrendszerekből, futásnaplóval.",
      "Mutatók számítása egy helyen, hogy ne keletkezzen párhuzamos logika.",
      "Adatminőségi ellenőrzések a betöltés részeként.",
      "Kimutatások kiszolgálása abban a felületben, ahol a felhasználó dolgozik.",
    ],
    seo: {
      title: "Adatelemzés – STP72",
      description:
        "Operatív adat összerendezése, egységes mutatódefiníciók, vezetői és operatív kimutatások adatminőségi ellenőrzésekkel.",
    },
  }),
  s("forecasting", {
    navLabel: "Előrejelzés",
    title: "Előrejelzés",
    eyebrow: "Kereslet, készlet és kapacitás tervezése",
    summary: [
      "Az előrejelzés célja nem az, hogy megmondja a jövőt, hanem az, hogy a tervezés ne pusztán tapasztalati becslésen alapuljon. Ehhez a becslés mellé mindig kell egy sáv is, amely megmutatja, mekkora a bizonytalanság.",
      "A módszert a történeti adaton visszamérve választjuk ki, és a kimenetet úgy jelenítjük meg, hogy a tervező látja, mennyire megbízható az adott előrejelzés.",
    ],
    catalogSummary:
      "Kereslet-, készlet- vagy kapacitás-előrejelzés történeti visszaméréssel és a bizonytalanság feltüntetésével.",
    catalogPoints: [
      "Előrejelzés bizonytalansági sávval",
      "Visszamérés korábbi időszakokon",
      "Modellek összehasonlítása, ahol ez indokolt",
    ],
    situations: [
      "A rendelés mennyisége tapasztalati becslésen alapul, és rendszeresen alul- vagy túltervezett.",
      "Szezonális ingadozás van, de nincs rá számszerű kezelés.",
      "A készlet egyszerre túl magas néhány cikknél, és hiányos másoknál.",
      "A kapacitástervezéshez nincs mire támaszkodni a következő időszakra nézve.",
    ],
    capabilities: [
      "Kereslet, készletigény vagy kapacitásigény előrejelzése az adat jellegétől függően.",
      "Bizonytalansági sáv megjelenítése a pontbecslés mellett.",
      "Visszamérés korábbi időszakokon, a pontosság követésével.",
      "Több módszer összehasonlítása, ahol az adat ezt lehetővé teszi.",
      "Kivételkezelés: azon tételek jelzése, ahol az előrejelzés nem megbízható.",
      "Felülírás és felülvizsgálat lehetősége ott, ahol a folyamat ezt igényli.",
    ],
    inputs: [
      "Historikus értékesítési, kiadási vagy termelési adat, lehetőleg több évre.",
      "Cikk- és partnertörzs a szegmentáláshoz.",
      "Ismert külső tényezők: akciók, szezonalitás, nyitvatartás, kampányok.",
      "A jelenlegi tervezési gyakorlat, hogy legyen mihez viszonyítani.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Megnézzük, milyen historikus adat áll rendelkezésre, és milyen minőségben.",
      },
      {
        key: "slice",
        name: "Reprezentatív adatszelet",
        body: "Egy termékkörre vagy telephelyre készítünk előrejelzést, és visszamérjük.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Az előrejelzés bekötése a tervezési folyamatba, a bizonytalanság megjelenítésével.",
      },
      {
        key: "rollout",
        name: "Kiterjesztés",
        body: "További termékkörök, időtávok és felhasználói körök bevonása.",
      },
    ],
    evaluation: [
      "Korábbi időszakokon futtatjuk az előrejelzést, és összevetjük a tényleges adattal.",
      "Összehasonlítjuk a jelenlegi tervezési gyakorlattal, ugyanazon az időszakon.",
      "Külön vizsgáljuk azokat a tételeket, ahol kevés vagy szabálytalan az adat.",
      "Nyomon követjük az élesben mért eltérést, hogy a módszer romlása látható legyen.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Előrejelzési munkafolyamat az adatbetöltéstől az eredmény megjelenítéséig.",
      "Visszamérés korábbi időszakokon, tárolt eredményekkel.",
      "Bizonytalanság számítása és megjelenítése a kimutatásban.",
      "Ütemezett újrafuttatás, futásnaplóval.",
    ],
    seo: {
      title: "Előrejelzés – STP72",
      description:
        "Kereslet-, készlet- és kapacitás-előrejelzés történeti visszaméréssel, bizonytalansági sávval és modellösszehasonlítással.",
    },
  }),
  s("what-if-planning", {
    navLabel: "What-if és szcenáriótervezés",
    title: "What-if és szcenáriótervezés",
    eyebrow: "Alternatív tervek összehasonlítása",
    summary: [
      "A döntés előtt gyakran nem az a kérdés, mi fog történni, hanem az, hogy melyik terv bírja el jobban, ha másképp alakul. Ehhez a feltételezéseket ki kell mondani, és számszerűsíteni kell a hatásukat.",
      "A szcenárió a felhasználó feltételezéseiből áll össze, és élesen elkülönül az adatból számított előrejelzéstől. A szcenárió kimenete nem jóslat, hanem a megadott feltételezések következménye.",
    ],
    catalogSummary:
      "Kimondott feltételezéseken alapuló alternatív tervek összehasonlítása és érzékenységvizsgálat.",
    catalogPoints: [
      "Feltételezések explicit megadása",
      "Alternatív tervek összevetése",
      "Érzékenységvizsgálat kereslet, készlet és kapacitás mentén",
    ],
    situations: [
      "Kapacitásbővítésről kell dönteni, és a hatás nem nyilvánvaló.",
      "Több beszerzési vagy árazási változat közül kell választani.",
      "Meg kell mutatni, mi történik, ha a kereslet a vártnál gyengébb.",
      "A tervezési vita azon megy, hogy ki milyen feltételezésből indul ki.",
    ],
    capabilities: [
      "Feltételezések megadása és rögzítése, hogy a terv utólag is értelmezhető legyen.",
      "Több szcenárió párhuzamos futtatása és összehasonlítása.",
      "Érzékenységvizsgálat: mely feltételezés befolyásolja leginkább az eredményt.",
      "Az adatból számított előrejelzés és a felhasználói szcenárió elkülönített megjelenítése.",
      "Szcenáriók mentése és későbbi visszamérése a tényleges adattal.",
      "Összehasonlító kimutatás a döntés dokumentálásához.",
    ],
    inputs: [
      "A meglévő előrejelzés vagy historikus adat kiindulásként.",
      "A vállalat tervezési feltételezései: árak, kapacitás, átfutás, kihasználtság.",
      "Költség- és kapacitáskorlátok, ha ezek a döntés részei.",
      "A jelenlegi tervezési táblázatok, hogy a logika összevethető legyen.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Meghatározzuk a konkrét döntést és azokat a feltételezéseket, amelyek befolyásolják.",
      },
      {
        key: "slice",
        name: "Két összevethető változat",
        body: "Két szcenáriót építünk fel valós adatból, kimondott feltételezésekkel.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "A szcenáriószámítás bekötése a tervezési folyamatba, összehasonlító nézettel.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További változók, korlátok és felhasználói körök bevonása.",
      },
    ],
    evaluation: [
      "Ellenőrizzük, hogy a szcenárió eredménye a megadott feltételezésekből következik-e, és hogy ez követhető-e.",
      "Visszamérünk korábbi döntési helyzeteket: mit mutatott volna a modell akkor.",
      "Megvizsgáljuk a szélső feltételezéseket, hogy a modell ne adjon értelmezhetetlen eredményt.",
      "A megjelenítésben elkülönítjük az előrejelzést és a felhasználói feltételezést.",
    ],
    evidenceKeys: ["forecastlabai"],
    technical: [
      "Szcenárió mint elkülönített, verziózott adathalmaz a feltételezésekkel együtt.",
      "Számítás újrafuttathatóan, hogy az eredmény reprodukálható legyen.",
      "Összehasonlító nézet, amely a különbséget és nem csak az abszolút értéket mutatja.",
      "Az előrejelzés és a szcenárió eltérő jelölése a kimutatásban.",
    ],
    seo: {
      title: "What-if és szcenáriótervezés – STP72",
      description:
        "Alternatív tervek összehasonlítása kimondott feltételezésekkel, érzékenységvizsgálattal, az előrejelzéstől elkülönítve.",
    },
  }),
  s("ai-analyst", {
    navLabel: "AI elemző",
    title: "AI elemző",
    eyebrow: "Kérdés és válasz a vállalati adatra",
    summary: [
      "Az adatelemzés akkor is akadozik, ha a kimutatások készen állnak: a vezetői kérdés gyakran nem illeszkedik egyetlen meglévő riporthoz sem, és az elemzés elkészítése napokat vesz igénybe.",
      "Az AI elemző célja az, hogy üzleti kérdésre a szabályozott, definiált adatból adjon strukturált választ. Nem hoz döntést, és nem helyettesíti az elemzőt: a válasz mellé a felhasznált adatforrás és a számítás alapja is megjelenik, ahol ez lehetséges.",
    ],
    catalogSummary:
      "Természetes nyelvű üzleti kérdés a szabályozott vállalati mutatókra, strukturált, forrásmegjelölt válasszal.",
    catalogPoints: [
      "Kérdés természetes nyelven a definiált mutatókra",
      "Strukturált magyarázat és összehasonlítás",
      "Forrásmegjelölés, találgatás helyett átadás elemzésre",
    ],
    situations: [
      "A vezetői kérdés nem illeszkedik a meglévő kimutatásokhoz.",
      "Az ad hoc elemzés minden alkalommal az adatcsapat kapacitásától függ.",
      "A kimutatások megvannak, de a köztük lévő összefüggést kézzel kell kikeresni.",
      "A döntés előtt gyors, de ellenőrizhető összehasonlításra van szükség.",
    ],
    capabilities: [
      "Üzleti kérdés feltétele természetes nyelven.",
      "A kérdéshez tartozó, előre definiált mutató és adatforrás azonosítása.",
      "Strukturált magyarázat, összehasonlítás és időbeli bontás.",
      "A felhasznált forrás és számítási alap megjelenítése, ahol ez lehetséges.",
      "Átadás részletes kimutatásra vagy elemzésre, ha a kérdés túlmutat a definiált mutatókon.",
      "Nemleges válasz, ha az adat nem támasztja alá a kérdés megválaszolását.",
    ],
    inputs: [
      "A dokumentált mutatódefiníciók és a hozzájuk tartozó adatforrások.",
      "Az adatelemzési réteg, ahol a mutatók egységesen elő vannak állítva.",
      "Jogosultsági szabályok arról, ki milyen adatot láthat.",
      "Tipikus vezetői kérdések listája a kiértékeléshez.",
    ],
    start: [
      {
        key: "assess",
        name: "Felmérés",
        body: "Összegyűjtjük azokat a kérdéseket, amelyek ténylegesen visszatérnek a vezetői munkában.",
      },
      {
        key: "slice",
        name: "Szabályozott mutatókör",
        body: "Egy szűk, dokumentált mutatókészletre korlátozzuk a válaszadást.",
      },
      {
        key: "scope",
        name: "Első működő terjedelem",
        body: "Egy felhasználói kör számára élesítjük, forrásmegjelöléssel és visszajelzési lehetőséggel.",
      },
      {
        key: "rollout",
        name: "Bővítés",
        body: "További mutatók és adatterületek bevonása, ha a kiértékelés ezt indokolja.",
      },
    ],
    evaluation: [
      "Valós kérdéslistán mérjük, hogy a válasz a helyes mutatóra és időszakra vonatkozik-e.",
      "Ellenőrizzük, hogy a megjelenített szám visszavezethető-e a mögöttes adatra.",
      "Külön teszteljük azokat a kérdéseket, amelyekre az adat nem ad választ: itt a nemleges válasz a helyes.",
      "Figyeljük a jogosultsági határokat: a felhasználó nem kaphat olyan adatot, amit nem láthat.",
    ],
    evidenceKeys: [],
    technical: [
      "Válaszadás kizárólag előre definiált mutatókból, szabad adatbázis-hozzáférés nélkül.",
      "A kérdés leképezése ismert mutatóra és időszakra, egyértelmű visszautasítással, ha nem sikerül.",
      "Forrásmegjelölés és a számítás alapjának tárolása a válasz mellett.",
      "Jogosultsági kontextus érvényesítése a lekérdezésben.",
    ],
    seo: {
      title: "AI elemző – STP72",
      description:
        "Természetes nyelvű üzleti kérdés a szabályozott vállalati mutatókra: strukturált, forrásmegjelölt válasz, találgatás nélkül.",
    },
  }),
]) as Record<SolutionKey, SolutionDetailContent>;
