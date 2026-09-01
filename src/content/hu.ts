import type { LocaleContent } from "./types";
import { solutionsPageHu, solutionFamiliesHu, solutionDetailsHu } from "./solutions.hu";

export const hu: LocaleContent = {
  meta: {
    home: {
      title: "STP72 — AI, üzleti szoftver és adatelemzés KKV-knak",
      description:
        "Üzleti alkalmazásokat, automatizálást és adatelemzési megoldásokat fejlesztünk kis- és középvállalatoknak. A meglévő folyamatokra és rendszerekre építünk, lépésenként.",
    },
  },
  pages: {
    "ai-solutions": {
      navLabel: "AI megoldások",
      title: "AI megoldások",
      intro:
        "AI-alapú megoldások dokumentumfeldolgozáshoz, belső információkereséshez és ismétlődő adminisztratív feladatok támogatásához. Az alkalmazás módját a feladat, a rendelkezésre álló adatok és a hibakockázat alapján határozzuk meg.",
      sections: [
        {
          key: "documents",
          title: "Dokumentum- és adatfeldolgozás",
          body: "Beérkező dokumentumokból strukturált adat kinyerése, jóváhagyási lépéssel a folyamatban.",
        },
        {
          key: "assist",
          title: "Keresés és összefoglalás",
          body: "Belső anyagokban való keresés és összegzés, a forrás megjelölésével, hogy visszakövethető legyen.",
        },
        {
          key: "guardrails",
          title: "Ellenőrizhetőség",
          body: "Naplózás és jogosultságkezelés; magasabb hibakockázatnál a folyamat része lehet kötelező ellenőrzési vagy jóváhagyási pont.",
        },
      ],
      seo: {
        title: "AI megoldások – STP72",
        description:
          "Gyakorlati AI-alkalmazás konkrét üzleti feladatokra: dokumentumfeldolgozás, belső információkeresés és ismétlődő adminisztráció támogatása, ellenőrizhető módon.",
      },
    },
    "business-systems": {
      navLabel: "Üzleti rendszerek",
      title: "Üzleti rendszerek",
      intro:
        "Célzott üzleti alkalmazások olyan működési területekre, ahol a táblázatok vagy általános szoftverek már nem kezelik megfelelően a folyamatot.",
      sections: [
        {
          key: "scope",
          title: "Tipikus alkalmazási területek",
          body: "Raktár, termelés, bérlés, szerviz és belső adminisztrációs folyamatok támogatása.",
        },
        {
          key: "foundations",
          title: "A fejlesztés fókusza",
          body: "A visszatérő technikai funkciók bevált megoldásokkal készülnek, így a munka a vállalat saját folyamatára koncentrálhat.",
        },
        {
          key: "adoption",
          title: "Bevezetés",
          body: "A bevezetés jól körülhatárolt területtel indítható, majd az eredmények és az üzleti igények alapján bővíthető.",
        },
      ],
      seo: {
        title: "Üzleti rendszerek – STP72",
        description:
          "Célzott üzleti alkalmazások kis- és középvállalatok számára: raktár, termelés, bérlés és belső folyamatok, a valós működéshez illesztve.",
      },
    },
    "data-forecasting": {
      navLabel: "Adat és előrejelzés",
      title: "Adat és előrejelzés",
      intro:
        "Adatok összevezetése, vezetői és operatív kimutatások, valamint — megfelelő adatalap esetén — kereslet-, készlet- vagy kapacitás-előrejelzés.",
      sections: [
        {
          key: "foundation",
          title: "Egységes adatalap",
          body: "Meglévő rendszerekből származó adatok összevezetése ellenőrzött importtal és validációval.",
        },
        {
          key: "reporting",
          title: "Riportok",
          body: "Vezetői és operatív kimutatások, amelyek minden felhasználónak ugyanazt az eredményt adják.",
        },
        {
          key: "forecast",
          title: "Előrejelzés",
          body: "Kereslet- és kapacitástervezés idősoros módszerekkel, kiértékelési módszertannal együtt.",
        },
      ],
      seo: {
        title: "Adat és előrejelzés – STP72",
        description:
          "Egységes adatalap, vezetői riportok, kereslet- és kapacitás-előrejelzés bizonytalansági sávval kis- és középvállalatoknak.",
      },
    },
    "software-integrations": {
      navLabel: "Szoftver és integrációk",
      title: "Szoftver és integrációk",
      intro:
        "A meglévő rendszerek összekötése, hogy az adatot ne kelljen többször rögzíteni. A jól működő eszközök maradnak, azokhoz illesztünk.",
      sections: [
        {
          key: "connections",
          title: "Adatkapcsolatok",
          body: "Kapcsolat számlázó, webshop, könyvelési és logisztikai rendszerekhez, dokumentált interfészekkel.",
        },
        {
          key: "migration",
          title: "Adatmigráció",
          body: "Meglévő nyilvántartások átvétele validációval és egyeztethető eredménnyel.",
        },
        {
          key: "custom",
          title: "Egyedi fejlesztés",
          body: "Fejlesztés arra a részre koncentrálódik, ami valóban cégspecifikus.",
        },
      ],
      seo: {
        title: "Szoftver és integrációk – STP72",
        description:
          "Rendszerintegráció és egyedi fejlesztés: számlázó, webshop és könyvelési kapcsolatok, adatmigráció és validáció.",
      },
    },
    "devops-infrastructure": {
      navLabel: "DevOps és infrastruktúra",
      title: "DevOps és infrastruktúra",
      intro:
        "A megoldás akkor ér valamit, ha stabilan működik. Az üzemeltetés, a mentés és a hozzáférés-kezelés a fejlesztés része, nem utólagos feladat.",
      sections: [
        {
          key: "operations",
          title: "Üzemeltetés",
          body: "Felügyelet, hibakezelés és tervezett frissítések átlátható folyamattal.",
        },
        {
          key: "delivery",
          title: "Kiszállítás",
          body: "Automatizált build és telepítés, hogy a változás visszakövethető és visszafordítható legyen.",
        },
        {
          key: "security",
          title: "Biztonság és mentés",
          body: "Hozzáférés-kezelés, mentési rend és a helyreállítás rendszeres ellenőrzése.",
        },
      ],
      seo: {
        title: "DevOps és infrastruktúra – STP72",
        description:
          "Üzemeltetés, automatizált kiszállítás, hozzáférés-kezelés és mentési rend a bevezetett megoldások stabil működéséhez.",
      },
    },
    solutions: {
      navLabel: "Megoldások",
      title: "Megoldások",
      intro:
        "Azok a területek, amelyekre kidolgozott megközelítésünk és meglévő szakmai anyagunk van. A pontos terjedelmet mindig a vállalat saját folyamata határozza meg.",
      sections: [
        {
          key: "areas",
          title: "Megoldási területek",
          body: "Készlet és raktár, operatív folyamatok, termelés és nyomonkövetés, bérlés és eszközkezelés, dokumentumok és belső adat.",
        },
        {
          key: "scope",
          title: "Terjedelem",
          body: "Nem csomagokat árulunk: a bevezetés terjedelme az érintett folyamat és a rendelkezésre álló adat alapján készül.",
        },
      ],
      seo: {
        title: "Megoldások – STP72",
        description:
          "Megoldási területek: készlet és raktár, operatív folyamatok, termelés, bérlés, dokumentum- és adatkezelés kis- és középvállalatoknál.",
      },
    },
    references: {
      navLabel: "Referenciák",
      title: "Mérnöki referenciák",
      intro:
        "Nyilvánosan elérhető mérnöki anyagokat és referencia-architektúrákat teszünk közzé. Ezek a munkamódszerünket mutatják be — nem ügyfélreferenciák, nem kereskedelmi bevezetések és nem termékek.",
      sections: [
        {
          key: "purpose",
          title: "Mire jó",
          body: "A kód és a leírt architektúra alapján megítélhető a munkánk minősége konkrét ügyfélhivatkozás nélkül.",
        },
        {
          key: "status",
          title: "Állapotjelzés",
          body: "Minden anyag mellett látszik az érettsége: referencia-architektúra, prototípus vagy működő demonstrátor. Ezek nem ügyfélreferenciák és nem éles bevezetések.",
        },
      ],
      seo: {
        title: "Mérnöki referenciák – STP72",
        description:
          "Nyilvános mérnöki anyagok és referencia-architektúrák állapotjelzéssel. Nem ügyfélreferenciák és nem kereskedelmi bevezetések.",
      },
    },
    "how-we-work": {
      navLabel: "Hogyan dolgozunk",
      title: "Hogyan dolgozunk",
      intro:
        "Öt szakasz, mindegyik önmagában is értelmezhető eredménnyel. A folytatásról minden szakasz végén dönthetnek — és nem minden feladat jut el az utolsó szakaszig.",
      sections: [
        {
          key: "assessment",
          title: "Felmérés és első feladat",
          body: "Átnézzük a folyamatot és a rendelkezésre álló adatot, majd írásban rögzítjük a terjedelmet, a korlátokat és a javasolt első lépést.",
        },
        {
          key: "pilot",
          title: "Működő alapmegoldás",
          body: "Egy jól körülhatárolt munkafolyamatra készül működő megoldás, a rendelkezésre álló adatokkal vagy reprezentatív mintával, előre egyeztetett értékelési szempontokkal.",
        },
        {
          key: "rollout",
          title: "Kapcsolódó folyamatok és integrációk",
          body: "Adatkapcsolatok, migráció és további szerepkörök bevonása, ahol ez üzletileg indokolt.",
        },
        {
          key: "intelligence",
          title: "Riport, előrejelzés és AI, ahol indokolt",
          body: "Kimutatás, előrejelzés vagy AI-támogatás akkor kerül elő, ha az adat és az üzleti kérdés ezt megalapozza.",
        },
        {
          key: "operate",
          title: "Üzemeltetés és továbbfejlesztés",
          body: "Telepítés, felügyelet, mentés, dokumentáció és a karbantartási felelősségi határok a megoldás mértékéhez igazítva.",
        },
      ],
      seo: {
        title: "Hogyan dolgozunk – STP72",
        description:
          "Öt szakasz a felméréstől az üzemeltetésig: mit kérünk az első egyeztetéshez, mit kap a vállalat az egyes szakaszok végén, és mikor javasolunk fejlesztés helyett mást.",
      },
    },

    about: {
      navLabel: "Rólunk",
      title: "Rólunk",
      intro:
        "Gyakorlati AI és üzleti rendszerek, a vállalat működésére szabva. Kis- és középvállalatokra fókuszálunk, magyar és angol nyelven.",
      sections: [
        {
          key: "approach",
          title: "Megközelítés",
          body: "Azokat a feladatokat fejlesztjük, amelyeknél a napi működésben látszik a változás; a technikai döntéseket ehhez igazítjuk.",
        },
        {
          key: "scope",
          title: "Kiknek szól",
          body: "Elsősorban magyar kis- és középvállalatokra fókuszálunk, ahol a folyamat már túl összetett táblázatokhoz, de egy nagy vállalatirányítási rendszer bevezetése aránytalan lenne.",
        },
      ],
      seo: {
        title: "Rólunk – STP72",
        description:
          "Gyakorlati AI és üzleti rendszerek kis- és középvállalatoknak: mérnöki pontosság, lépésenkénti bevezetés, átlátható munkamódszer.",
      },
    },
    contact: {
      navLabel: "Kapcsolat",
      title: "Kapcsolat",
      intro:
        "Írjon néhány sort arról, hol tart most a folyamat és mit szeretne elérni. Egy rövid egyeztetés után elmondjuk, mi a realista első lépés — akkor is, ha az nem fejlesztés.",
      sections: [
        {
          key: "email",
          title: "E-mail",
          body: "Az e-mail a legegyszerűbb út a kiindulási helyzet és a cél rövid leírására.",
        },
        {
          key: "prepare",
          title: "Mit érdemes leírni",
          body: "Milyen folyamatról van szó, milyen rendszereket használnak most, és mi a legzavaróbb pont a napi munkában.",
        },
      ],
      seo: {
        title: "Kapcsolat – STP72",
        description:
          "Vegye fel velünk a kapcsolatot: írja le a folyamatot és a használt rendszereket, és javaslatot adunk a realista első lépésre.",
      },
    },
  },
  servicePages: {
    "ai-solutions": {
      eyebrow: "Gyakorlati AI a napi működésben",
      summary: [
        "Az AI-t egy-egy konkrét, ismétlődő munkalépésre alkalmazzuk: ott, ahol sok az információ, van kezelhető forrásanyag, és az eredmény ellenőrizhető.",
        "Nem önálló chatfelületet építünk, hanem abba a folyamatba illesztjük a megoldást, ahol a munka valójában zajlik.",
      ],
      situations: {
        title: "Milyen problémára ad választ?",
        intro:
          "Gyakori kiindulási helyzetek, amelyeknél érdemes megvizsgálni az AI alkalmazhatóságát.",
        items: [
          {
            key: "documents",
            title: "Sok beérkező dokumentum kézi feldolgozása",
            body: "Szállítói számlák, megrendelések, szerződések vagy űrlapok adatait kézzel viszik át a nyilvántartásba. A munka lassú, és a hibák csak később derülnek ki.",
          },
          {
            key: "knowledge",
            title: "A belső tudás nehezen kereshető",
            body: "A szabályzatok, műszaki leírások és korábbi levelezések több helyen vannak. Ugyanarra a kérdésre minden kolléga máshol keresi a választ.",
          },
          {
            key: "admin",
            title: "Ismétlődő adminisztratív körök",
            body: "Ugyanaz a besorolás, kivonatolás vagy továbbítás naponta többször megtörténik, mindig ugyanazon szabályok szerint.",
          },
          {
            key: "decision",
            title: "Döntés-előkészítés szétszórt adatból",
            body: "Egy ajánlat, árazás vagy prioritás összeállításához több forrásból kell adatot összegyűjteni, mielőtt bárki dönteni tudna.",
          },
        ],
      },
      criteria: {
        title: "Mikor érdemes AI-t használni?",
        intro:
          "Az AI nem minden feladatra jó válasz. A felmérés első lépése annak eldöntése, hogy egyáltalán érdemes-e belevágni.",
        items: [
          "A feladat ismétlődő és sok szöveges vagy adatjellegű információ átnézésével jár.",
          "Van azonosítható forrásanyag, amelyre az eredmény visszavezethető.",
          "Az eredmény ellenőrizhető: egy szakértő rövid idő alatt meg tudja ítélni, jó-e.",
          "Van kiindulási állapot, amelyhez mérni lehet a változást — például ráfordított idő vagy hibaarány.",
          "A hiba költsége ismert, és ehhez igazítható az ellenőrzés mértéke.",
        ],
        note: "Ha a forrásanyag hiányos vagy ellentmondásos, előbb az adat- és folyamatoldalt rendezzük. Ilyenkor az adat- és folyamatoldal rendezése az AI bevezetésének előfeltétele lehet.",
      },
      scope: {
        title: "Mit készítünk?",
        intro:
          "Működő megoldásokat adunk át, amelyek egy megnevezett munkalépést váltanak ki vagy gyorsítanak meg.",
        items: [
          {
            key: "extraction",
            title: "Dokumentumfeldolgozás",
            body: "Beérkező dokumentumokból strukturált adat kinyerése, a nyilvántartásba vezetéssel és a szükséges jóváhagyási lépéssel együtt.",
          },
          {
            key: "search",
            title: "Belső keresés és összefoglalás",
            body: "Kérdésre adott válasz a vállalat saját anyagaiból, a felhasznált forrás megjelölésével, hogy az állítás visszakereshető legyen.",
          },
          {
            key: "workflow",
            title: "Adminisztratív folyamattámogatás",
            body: "Besorolás, kivonatolás, előkészített válaszok és továbbítás a meglévő munkafolyamat lépéseihez illesztve.",
          },
          {
            key: "decision-support",
            title: "Döntés-előkészítés",
            body: "Összeállított javaslat és a mögötte lévő adatok egy helyen, hogy a döntést hozó kolléga gyorsan felül tudja bírálni.",
          },
          {
            key: "controls",
            title: "Ellenőrzés és nyomon követhetőség",
            body: "Naplózás, jogosultságkezelés és a kockázathoz igazított ellenőrzési pontok. Magasabb hibakockázatnál a megoldás része lehet kötelező ellenőrzési vagy jóváhagyási pont.",
          },
          {
            key: "measurement",
            title: "Mérés",
            body: "A bevezetés előtti és utáni állapot összehasonlítása, hogy a folytatásról adat alapján lehessen dönteni.",
          },
        ],
      },
      fit: {
        title: "Hogyan kapcsolódik a meglévő működéshez?",
        intro:
          "A megoldás a már használt rendszerekhez illeszkedik. A cél nem egy újabb felület, hanem kevesebb kézi lépés ugyanabban a folyamatban.",
        items: [
          {
            key: "systems",
            title: "A meglévő rendszerek maradnak",
            body: "A levelezés, a számlázó, a webshop és a belső nyilvántartás továbbra is az elsődleges forrás. Ezekhez csatlakozunk, nem helyettük dolgozunk.",
          },
          {
            key: "data",
            title: "Adathozzáférés szabályozva",
            body: "Csak a feladathoz szükséges körre adunk hozzáférést, a vállalati jogosultsági rendszerhez igazítva.",
          },
          {
            key: "process",
            title: "A folyamat lépéseihez illesztve",
            body: "Az eredmény ott jelenik meg, ahol a munka zajlik: a nyilvántartásban, a feladatlistában vagy a levelezésben.",
          },
          {
            key: "handover",
            title: "Átadható működés",
            body: "Dokumentált beállítások és üzemeltetési leírás, hogy a megoldás ne egyetlen ember tudásán múljon.",
          },
        ],
      },
      start: {
        title: "Hogyan indul egy projekt?",
        intro:
          "A projekt szakaszokra bontható; minden szakasz végén külön értékelhető az eredmény és a következő lépés.",
        steps: [
          {
            key: "assessment",
            name: "Felmérés",
            body: "Megnézzük a feladatot, a rendelkezésre álló forrásanyagot, a hiba költségét és az elvárt ellenőrzést. Írásos összegzéssel zárul.",
          },
          {
            key: "first",
            name: "Első megoldás",
            body: "Egy szűken meghatározott feladatra készül működő megoldás, valós anyagokon kipróbálva.",
          },
          {
            key: "rollout",
            name: "Bevezetés",
            body: "Illesztés a meglévő rendszerekhez, jogosultságok, betanítás és átállás a napi használatra.",
          },
          {
            key: "expand",
            name: "Bővítés",
            body: "Ha az első terület eredménye indokolja, a következő feladat külön döntéssel bevonható.",
          },
        ],
      },
      evidence: {
        title: "Kapcsolódó mérnöki anyagok",
        intro:
          "Nyilvános anyagaink azt mutatják, hogyan építünk fel egy adat- és folyamatvezérelt megoldást. Nem ügyfélmunkák és nem kereskedelmi termékek.",
        keys: ["forecastlabai", "crentsys"],
      },
      technical: {
        title: "Technikai háttér",
        intro:
          "Röviden a megvalósításról, azoknak, akiket ez érdekel. A megoldás választása mindig a feladattól függ.",
        items: [
          "Nyelvi modellek szolgáltatáson keresztül, a vállalati adatkör pontos meghatározásával.",
          "Forrásmegjelölt válaszok saját dokumentumbázisból, hogy az állítás visszakereshető legyen.",
          "Naplózás, jogosultságkezelés és a kockázathoz igazított jóváhagyási lépések.",
          "Illesztés meglévő rendszerekhez dokumentált interfészeken keresztül.",
        ],
      },
    },
    "business-systems": {
      eyebrow: "Célzott üzleti alkalmazások",
      summary: [
        "Nem minden problémához szükséges teljes vállalatirányítási rendszert cserélni. Sok esetben egy célzott alkalmazás vagy egy meglévő rendszer kiegészítése kisebb kockázattal vezethető be.",
        "Olyan működési területekre fejlesztünk alkalmazást, ahol a táblázat már kevés, az általános szoftver pedig nem illeszkedik a valós folyamathoz.",
      ],
      situations: {
        title: "Milyen problémára ad választ?",
        intro: "Tipikus helyzetek, amelyeknél egy célzott üzleti alkalmazás indokolt lehet.",
        items: [
          {
            key: "spreadsheets",
            title: "A folyamat kinőtte a táblázatokat",
            body: "Több párhuzamos fájl él egymás mellett, és nehéz eldönteni, melyik az érvényes verzió. Az adatot többször rögzítik.",
          },
          {
            key: "misfit",
            title: "Az általános szoftver nem illeszkedik",
            body: "A használt program a folyamat egy részét lefedi, a többit e-mailben és jegyzetben kezelik.",
          },
          {
            key: "erp",
            title: "Egy nagy rendszer bevezetése aránytalan",
            body: "A teljes vállalatirányítási rendszer költsége, ideje és kockázata nincs arányban a megoldandó feladattal.",
          },
          {
            key: "traceability",
            title: "Nincs visszakövethetőség",
            body: "Utólag nehéz megállapítani, ki mit rögzített, mikor és milyen jóváhagyással.",
          },
          {
            key: "field",
            title: "A munka nem az íróasztalnál zajlik",
            body: "A raktárban, a műhelyben vagy a telephelyen dolgozó kollégáknak papíron vagy telefonon kell adatot rögzíteniük.",
          },
        ],
      },
      scope: {
        title: "Mit készítünk?",
        intro:
          "Egy adott működési területre szabott webes alkalmazást, amely böngészőből és mobilon is használható.",
        items: [
          {
            key: "inventory",
            title: "Készlet és raktár",
            body: "Bevételezés, kiadás, készletmozgás, leltár, tétel- és lejáratkövetés, több telephely kezelése.",
          },
          {
            key: "production",
            title: "Termelés és nyomon követés",
            body: "Gyártási lépések, felhasznált anyagok, minőségellenőrzési pontok és a tételszintű visszakövethetőség dokumentálása.",
          },
          {
            key: "rental",
            title: "Bérlés és eszközkezelés",
            body: "Eszközök állapota, foglaltsága és mozgása, szerződésekhez és számlázáshoz kapcsolható nyilvántartással.",
          },
          {
            key: "service",
            title: "Szerviz és belső adminisztráció",
            body: "Munkalapok, feladatkiosztás, státuszkövetés és jóváhagyási lépések egy felületen.",
          },
          {
            key: "roles",
            title: "Jogosultság és napló",
            body: "Ki mit láthat és módosíthat, és mi történt egy tétellel — visszakereshető módon.",
          },
          {
            key: "reporting",
            title: "Kimutatások",
            body: "Vezetői és operatív riportok ugyanabból az adatbázisból, hogy ne legyen két igazság.",
          },
        ],
      },
      fit: {
        title: "Hogyan kapcsolódik a meglévő működéshez?",
        intro:
          "A már bevált rendszereket nem szükséges lecserélni. Az új alkalmazás a hiányzó részt fedi le, és a meglévő rendszerekkel közös adatot használ.",
        items: [
          {
            key: "keep",
            title: "A bevált rendszerek megmaradnak",
            body: "A számlázó, a könyvelés és a webshop a helyén marad. Nem cél a teljes rendszerpark lecserélése.",
          },
          {
            key: "integrate",
            title: "Adatkapcsolat, ahol indokolt",
            body: "Ahol a kétszeres rögzítés valódi terhet jelent, ott dokumentált interfészen kötjük össze a rendszereket.",
          },
          {
            key: "migration",
            title: "Meglévő adatok átvétele",
            body: "A táblázatokban és korábbi nyilvántartásokban lévő adat validációval kerül át, egyeztethető eredménnyel.",
          },
          {
            key: "focus",
            title: "Az egyedi fejlesztés a lényegre koncentrál",
            body: "A minden alkalmazásban visszatérő részeket — belépés, jogosultság, napló, riport, adatimport — nem kezdjük nulláról. Így a ráfordítás nagyobb része a vállalat saját folyamatára jut.",
          },
        ],
      },
      start: {
        title: "Hogyan indul egy projekt?",
        intro:
          "A bevezetés jól körülhatárolt területtel indítható, majd az eredmények és az üzleti igények alapján bővíthető.",
        steps: [
          {
            key: "assessment",
            name: "Felmérés",
            body: "Végigvesszük a folyamatot és a jelenlegi eszközöket, majd írásban rögzítjük a lehetséges megoldást és a ráfordítást.",
          },
          {
            key: "first",
            name: "Első terület",
            body: "Egy szűkebb, jól körülhatárolt területre készül működő alkalmazás, a rendelkezésre álló adatokkal és valós folyamati példákkal kipróbálva.",
          },
          {
            key: "rollout",
            name: "Bevezetés",
            body: "Adatmigráció, integrációk, jogosultságok, betanítás és átállás a napi használatra.",
          },
          {
            key: "expand",
            name: "Bővítés",
            body: "A következő terület fejlesztése akkor indul, ha az első a gyakorlatban is bevált.",
          },
        ],
      },
      evidence: {
        title: "Kapcsolódó mérnöki anyagok",
        intro:
          "Nyilvános anyagaink a működési területek felépítését mutatják be. Nem ügyfélrendszerek és nem megvásárolható termékek.",
        keys: ["warehouse-management", "wms-food-prod", "crentsys"],
      },
      technical: {
        title: "Technikai háttér",
        intro: "Rövid összefoglaló a megvalósításról.",
        items: [
          "Webes alkalmazás, amely asztali gépen és mobilon is használható, külön telepítés nélkül.",
          "Relációs adatbázis, ellenőrzött adatimporttal és adatexporttal.",
          "Szerepkör alapú jogosultságkezelés és eseménynapló.",
          "Dokumentált interfészek a meglévő rendszerekhez, mentéssel és felügyelettel.",
        ],
      },
    },
    "data-forecasting": {
      eyebrow: "Kimutatás és előrejelzés a meglévő adatokból",
      summary: [
        "A már meglévő működési adatokból készítünk egységes, ellenőrizhető kimutatásokat, majd — ahol az adat ezt megengedi — előrejelzést a kereslet, a készlet és a kapacitás tervezéséhez.",
        "Az előrejelzés önmagában nem cél. Akkor hasznos, ha ott jelenik meg, ahol a döntés születik, és látszik mellette a bizonytalanság mértéke is.",
      ],
      situations: {
        title: "Milyen problémára ad választ?",
        intro: "Ezek a helyzetek jelzik, hogy az adatoldalon van tennivaló.",
        items: [
          {
            key: "conflicting",
            title: "Forrásonként más szám jön ki",
            body: "A számlázó, a raktár és a táblázatok más eredményt adnak ugyanarra a kérdésre, és az egyeztetés kézi munka.",
          },
          {
            key: "slow",
            title: "A vezetői kimutatás késik",
            body: "A riport összeállítása napokat vesz igénybe, így a döntés mindig elavult adatra épül.",
          },
          {
            key: "planning",
            title: "A tervezés becslésen alapul",
            body: "A rendelési mennyiséget, a készletszintet és a kapacitást tapasztalati alapon határozzák meg.",
          },
          {
            key: "stock",
            title: "Egyszerre van hiány és felesleg",
            body: "Bizonyos cikkekből túl sok áll a raktárban, másokból rendszeresen kifogynak.",
          },
          {
            key: "dashboard",
            title: "A kimutatás nem épül be a napi döntésekbe",
            body: "Van kimutatás, de külön felületen, a munkafolyamattól távol, így a döntés helyén nem áll rendelkezésre.",
          },
        ],
      },
      scope: {
        title: "Mit készítünk?",
        intro:
          "Az adat rendbetételétől az előrejelzésig — a lépések önmagukban is használható eredményt adnak.",
        items: [
          {
            key: "consolidation",
            title: "Adatok összevezetése",
            body: "A meglévő rendszerekből származó adatok egy helyre gyűjtése, egységes fogalmakkal és ellenőrzött importtal.",
          },
          {
            key: "validation",
            title: "Adatminőség-ellenőrzés",
            body: "Hiányzó, ellentmondó és duplikált tételek kimutatása, hogy látható legyen, mire lehet biztonsággal építeni.",
          },
          {
            key: "reporting",
            title: "Vezetői és operatív riportok",
            body: "Ugyanabból az adatbázisból készülő kimutatások, amelyek minden felhasználónál ugyanazt az eredményt adják.",
          },
          {
            key: "forecast",
            title: "Kereslet-, készlet- és kapacitás-előrejelzés",
            body: "Idősoros előrejelzés ott, ahol elegendő és kellően megbízható előzményadat áll rendelkezésre.",
          },
          {
            key: "uncertainty",
            title: "Kiértékelés és bizonytalanság",
            body: "Az előrejelzés pontossága visszamérhető, az eredmény pedig bizonytalansági sávval együtt jeleníthető meg — nem egyetlen számként.",
          },
          {
            key: "scenario",
            title: "Forgatókönyvek",
            body: "Ahol az adat ezt lehetővé teszi, „mi lenne, ha” típusú összehasonlítás is készíthető. Ez nem minden projekt automatikus része.",
          },
        ],
      },
      fit: {
        title: "Hogyan kapcsolódik a meglévő működéshez?",
        intro:
          "Az elemzés akkor támogatja a működést, ha a döntés helyén elérhető — nem egy újabb, külön megnyitandó felületen.",
        items: [
          {
            key: "sources",
            title: "A meglévő rendszerek az adatforrások",
            body: "A számlázó, a raktári nyilvántartás, a webshop és a táblázatok maradnak. Ezekből olvasunk, ütemezett és ellenőrzött módon.",
          },
          {
            key: "inline",
            title: "A döntés helyén megjelenő szám",
            body: "A javasolt rendelési mennyiség vagy a várható terhelés ott látszik, ahol a rendelést vagy a beosztást összeállítják.",
          },
          {
            key: "ownership",
            title: "Egyértelmű fogalmak",
            body: "Rögzítjük, mit jelent pontosan egy mutató, hogy a különböző területek ugyanarról beszéljenek.",
          },
          {
            key: "review",
            title: "Emberi felülbírálat",
            body: "Az előrejelzés döntéstámogató információ; szükség esetén felülbírálható, és a módosítás indoka is rögzíthető.",
          },
        ],
      },
      maturity: {
        title: "Reális sorrend",
        intro:
          "Ha a forrásadat pontatlan, az előrejelzés is az lesz. Ezért a lépéseket ebben a sorrendben érdemes megtenni.",
        steps: [
          {
            key: "quality",
            name: "1. Adatminőség",
            body: "Az adatok összevezetése, tisztítása és a hiányosságok feltárása. Enélkül minden további lépés bizonytalan alapon áll.",
          },
          {
            key: "reporting",
            name: "2. Megbízható kimutatás",
            body: "Egységes, gyorsan elérhető riportok, amelyek a tényleges működést mutatják.",
          },
          {
            key: "forecast",
            name: "3. Előrejelzés",
            body: "Idősoros előrejelzés a stabil adatokra, rendszeres pontosságméréssel.",
          },
          {
            key: "support",
            name: "4. Döntéstámogatás",
            body: "Az előrejelzés beépítése a rendelési, készletezési és kapacitástervezési folyamatba.",
          },
        ],
      },
      figure: true,
      start: {
        title: "Hogyan indul egy projekt?",
        intro: "Az adatok átnézésével kezdünk, mert ez határozza meg, mi valósítható meg.",
        steps: [
          {
            key: "assessment",
            name: "Adatfelmérés",
            body: "Átnézzük az elérhető adatokat, azok minőségét és időbeli mélységét, majd írásban rögzítjük, mi építhető rájuk.",
          },
          {
            key: "first",
            name: "Első kimutatás",
            body: "Egy konkrét döntéshez készül kimutatás vagy előrejelzés, valós adatokon kipróbálva.",
          },
          {
            key: "rollout",
            name: "Bevezetés",
            body: "Rendszeres adatfrissítés, hozzáférések, betanítás és a napi használatba illesztés.",
          },
          {
            key: "expand",
            name: "Bővítés",
            body: "További termékkörök, telephelyek vagy döntési pontok bevonása, ha az első terület bevált.",
          },
        ],
      },
      evidence: {
        title: "Kapcsolódó mérnöki anyagok",
        intro:
          "Nyilvános anyagaink az előrejelzési és raktári adatmunka felépítését mutatják be. Nem ügyfélbevezetések.",
        keys: ["forecastlabai", "warehouse-management"],
      },
      technical: {
        title: "Technikai háttér",
        intro: "Rövid összefoglaló azoknak, akiket a megvalósítás részletei érdekelnek.",
        items: [
          "Ütemezett adatbetöltés a forrásrendszerekből, validációs szabályokkal és hibalistával.",
          "Relációs adatbázis egységes fogalmi réteggel, amelyre a riportok épülnek.",
          "Idősoros előrejelzési eljárások, visszamérés korábbi időszakokon és rendszeres pontosságkövetés.",
          "Az eredmény interfészen keresztül is elérhető, így beépíthető a használt alkalmazásokba.",
        ],
      },
    },
    "software-integrations": {
      eyebrow: "Rendszerek összekötése és célzott egyedi fejlesztés",
      summary: [
        "A számlázó, a webshop, a könyvelés, a raktári nyilvántartás és a táblázatok maradhatnak a helyükön. A cél a kétszeres adatrögzítés megszüntetése és a folyamatból hiányzó lépések pótlása.",
        "Az egyedi fejlesztés arra a részre koncentrálódik, ami valóban vállalatspecifikus; a többit lehetőség szerint a meglévő rendszerek adatára építjük.",
      ],
      situations: {
        title: "Milyen helyzetekben indokolt?",
        intro:
          "Az alábbi helyzetekben érdemes megvizsgálni, hogy adatkapcsolattal vagy célzott fejlesztéssel egyszerűsíthető-e a működés.",
        items: [
          {
            key: "double-entry",
            title: "Ugyanazt az adatot több rendszerbe rögzítik",
            body: "A megrendelés, a partneradat vagy a készletmozgás két-három helyre kerül be, kézzel. Az eltérések utólag derülnek ki.",
          },
          {
            key: "manual-reconciliation",
            title: "CSV- és Excel-egyeztetés kézzel",
            body: "A rendszerek közötti kapcsolatot exportált fájlok és képletek pótolják, jellemzően egy-két kolléga tudására építve.",
          },
          {
            key: "partial-coverage",
            title: "Egy rendszer csak a folyamat egy részét fedi le",
            body: "A munkafolyamat közepén e-mail, telefon vagy jegyzet veszi át a szerepet, és ott megszakad a nyilvántartás.",
          },
          {
            key: "legacy",
            title: "Régi vagy belső fejlesztésű eszközben van fontos adat",
            body: "A program elavult, de a benne lévő adatra és logikára a napi működésnek továbbra is szüksége van.",
          },
          {
            key: "migration",
            title: "Korábbi nyilvántartásokból át kell venni az adatot",
            body: "Rendszerváltásnál vagy összevonásnál a régi adatokat ellenőrizhető módon kell átemelni, nem újragépelni.",
          },
        ],
      },
      scope: {
        title: "Mit készítünk?",
        intro:
          "A terjedelem attól függ, milyen felületek érhetők el, és hol jelentkezik a valódi kézi teher.",
        items: [
          {
            key: "connections",
            title: "Dokumentált adatkapcsolatok",
            body: "Rendszerek közötti adatátadás leírt mezőmegfeleltetéssel, hogy később is átlátható legyen, mi honnan jön.",
          },
          {
            key: "api",
            title: "API-integráció, ahol van felület",
            body: "Ha az érintett rendszer megfelelő programozói felületet kínál, azon keresztül kötjük össze az adatot.",
          },
          {
            key: "files",
            title: "Ütemezett fájl- és adatcsere",
            body: "Ahol API nem érhető el vagy nem indokolt, ütemezett export–import működhet, hibalistával és ismételhető futtatással.",
          },
          {
            key: "migration",
            title: "Adatmigráció validációval",
            body: "Meglévő nyilvántartások átvétele ellenőrzésekkel és egyeztethető eredménnyel, hogy a számok utólag is visszamérhetők legyenek.",
          },
          {
            key: "custom",
            title: "Célzott egyedi funkció",
            body: "A hiányzó munkalépésre készülő webes vagy alkalmazásoldali funkció — nem teljes rendszercsere, hanem a folyamat kiegészítése.",
          },
          {
            key: "logging",
            title: "Naplózás és hibakezelés",
            body: "Ahol az adatkapcsolat üzletileg fontos, naplózás, hibajelzés és újrafuttathatóság épül köré.",
          },
        ],
      },
      criteria: {
        title: "Hogyan döntjük el, mit érdemes összekötni?",
        intro:
          "Nem minden kapcsolat éri meg. A felmérésen ezeket a szempontokat vesszük végig együtt.",
        items: [
          "Mekkora üzleti terhet jelent most a kétszeres rögzítés vagy a kézi egyeztetés.",
          "Melyik rendszer az adott adat elsődleges forrása, és ki felel a tartalmáért.",
          "Van-e használható interfész, és milyen a dokumentáltsága.",
          "Milyen az adat minősége: mennyi a hiányzó, duplikált vagy ellentmondó tétel.",
          "Mi történik, ha a kapcsolat átmenetileg nem működik, és hogyan állítható helyre.",
        ],
        note: "Ha egy kapcsolat aránytalanul bonyolult a várható haszonhoz képest, ezt a felmérés végén jelezzük.",
      },
      start: {
        title: "Hogyan indul?",
        intro: "Az első lépés a rendszertérkép, nem a fejlesztés.",
        steps: [
          {
            key: "mapping",
            name: "Rendszer- és folyamattérkép",
            body: "Végigvesszük, milyen rendszerek vannak használatban, milyen adat mozog közöttük, és hol történik kézi átvitel.",
          },
          {
            key: "interfaces",
            name: "Interfészek és adatminták",
            body: "Átnézzük az elérhető felületeket, exportokat és néhány valós adatmintát, hogy a megvalósíthatóság megítélhető legyen.",
          },
          {
            key: "first",
            name: "Első kapcsolat vagy migrációs szelet",
            body: "Egy jól körülhatárolt adatkapcsolat vagy migrációs részfeladat készül el, előre egyeztetett ellenőrzési szempontokkal.",
          },
          {
            key: "rollout",
            name: "Éles használat és dokumentáció",
            body: "Ütemezés, hibakezelés, felügyeleti jelzések és írásos leírás az üzemeltetéshez.",
          },
        ],
      },
      evidence: {
        title: "Kapcsolódó mérnöki anyagok",
        intro:
          "Nyilvános anyagaink az adatkapcsolatok, importok és exportok felépítését mutatják be. Nem ügyfélbevezetések.",
        keys: ["crentsys", "warehouse-management", "forecastlabai"],
      },
      technical: {
        title: "Technikai háttér",
        intro:
          "A megvalósítás módja a rendszerektől függ; az alábbiak lehetőségek, nem kötelező felépítés.",
        items: [
          "HTTP-alapú interfészek ott, ahol az érintett rendszer ilyet kínál.",
          "Fájlalapú import és export ütemezetten, hibalistával és ismételhető futtatással.",
          "Relációs adatbázis a közös adat tárolására és az egyeztetések visszamérésére.",
          "Sorok és ütemezett feladatok a hosszabb futású vagy időzített átvitelekhez, ahol indokolt.",
        ],
      },
    },
    "devops-infrastructure": {
      eyebrow: "A bevezetett rendszerek stabil működésének technikai háttere",
      summary: [
        "A fejlesztés része annak megtervezése is, hogyan telepíthető, frissíthető, felügyelhető és helyreállítható a rendszer. Az infrastruktúra mélységét a megoldás üzleti jelentősége és a vállalat meglévő környezete határozza meg.",
        "Nem általános üzemeltetési szolgáltatást kínálunk: azt a technikai hátteret alakítjuk ki, amely az általunk szállított üzleti, adat- és AI-megoldások működtetéséhez szükséges.",
      ],
      situations: {
        title: "Mikor indokolt több üzemeltetési kontroll?",
        intro:
          "Minél nagyobb a működési kockázat, annál több figyelmet érdemel a telepítés, a felügyelet és a helyreállítás.",
        items: [
          {
            key: "critical",
            title: "Üzletileg kritikus folyamat",
            body: "Ha a rendszer kiesése azonnal érinti a kiszolgálást, a gyártást vagy a számlázást, a helyreállítás módját előre rögzíteni kell.",
          },
          {
            key: "sensitive",
            title: "Érzékeny vagy belső adat",
            body: "Személyes, szerződéses vagy belső üzleti adat esetén a hozzáférés és a naplózás külön tervezést igényel.",
          },
          {
            key: "multi-site",
            title: "Több telephely vagy sok felhasználó",
            body: "Több helyszín, több műszak vagy nagyobb felhasználószám mellett a rendelkezésre állás és a hozzáférés-kezelés összetettebb.",
          },
          {
            key: "integrations",
            title: "Külső integrációk",
            body: "Ha a rendszer más rendszerekkel áll kapcsolatban, a hibák felismerése és az újrafuttatás módja is része a megoldásnak.",
          },
          {
            key: "recovery",
            title: "Helyreállítási elvárás",
            body: "Ha meghatározott időn belüli visszaállás az elvárás, a mentési és visszaállítási rendet ehhez kell tervezni.",
          },
        ],
      },
      scope: {
        title: "Mire terjedhet ki?",
        intro:
          "A felsoroltakból az kerül be, amit a megoldás jelentősége és a meglévő környezet indokol.",
        items: [
          {
            key: "deploy",
            title: "Ismételhető telepítés és kiadás",
            body: "A telepítés és a verzióváltás leírt, ismételhető lépésekkel történik, hogy a változás követhető és visszafordítható legyen.",
          },
          {
            key: "config",
            title: "Környezetek, konfiguráció, titkos adatok",
            body: "Teszt- és éles környezet elkülönítése, konfiguráció és hozzáférési kulcsok kezelése a kódtól elválasztva.",
          },
          {
            key: "monitoring",
            title: "Felügyelet, naplózás, állapotellenőrzés",
            body: "Alapvető működési jelzések és naplók, hogy a hiba ne a felhasználói bejelentésből derüljön ki először.",
          },
          {
            key: "backup",
            title: "Mentés és visszaállítás",
            body: "Mentési rend kialakítása és a visszaállítás kipróbálhatósága — a mentés önmagában nem elegendő.",
          },
          {
            key: "access",
            title: "Hozzáférés, szerepkörök, hálózati határok",
            body: "Ki mihez férhet hozzá, milyen szerepkörrel, és milyen hálózati elérés indokolt az adott rendszernél.",
          },
          {
            key: "runbook",
            title: "Frissítés, visszaállás, üzemeltetési leírás",
            body: "Írásos leírás a frissítés menetéről, a visszaállás lépéseiről és a gyakori üzemeltetési feladatokról.",
          },
        ],
      },
      criteria: {
        title: "Hol futhat a rendszer?",
        intro:
          "A futtatási környezet a vállalat meglévő gyakorlatához, adatkezelési elvárásaihoz és belső kompetenciáihoz igazodik.",
        items: [
          "A vállalat saját, helyben üzemeltetett környezetében.",
          "Felhőszolgáltatónál, ha az elérés, a skálázás vagy a karbantartás így egyszerűbb.",
          "Vegyes felállásban, ahol egyes részek helyben, mások felhőben futnak.",
        ],
        note: "Nem kötődünk egyetlen szolgáltatóhoz sem. A döntés az adatkezelési elvárásoktól, a meglévő szerződésektől és az üzemeltetési kapacitástól függ.",
      },
      fit: {
        title: "Átadás és üzemeltethetőség",
        intro:
          "A cél, hogy a rendszer működtetése ne kizárólag a fejlesztőn múljon. Ehhez az átadás része a leírás és a felelősségi határok tisztázása.",
        items: [
          {
            key: "documentation",
            title: "Dokumentált konfiguráció és telepítés",
            body: "Írásban rögzítjük, hogyan áll össze a környezet, és milyen lépésekkel telepíthető vagy frissíthető.",
          },
          {
            key: "signals",
            title: "Felügyeleti jelzések",
            body: "Meghatározzuk, mely jelzések utalnak hibára, és hol láthatók ezek a napi működés során.",
          },
          {
            key: "restore",
            title: "Mentési és visszaállítási leírás",
            body: "Leírjuk, mi kerül mentésre, milyen gyakran, és milyen lépésekkel állítható vissza.",
          },
          {
            key: "boundaries",
            title: "Felelősségi határok",
            body: "Egyértelművé tesszük, mi tartozik a vállalat belső informatikájához, a szolgáltatóhoz és hozzánk.",
          },
        ],
      },
      start: {
        title: "Hogyan indul?",
        intro: "Az üzemeltetési kérdéseket a fejlesztéssel együtt vesszük végig, nem utólag.",
        steps: [
          {
            key: "review",
            name: "Környezet áttekintése",
            body: "Átnézzük a jelenlegi kiszolgálókat, hozzáféréseket, mentéseket és a belső üzemeltetési gyakorlatot.",
          },
          {
            key: "requirements",
            name: "Elvárások rögzítése",
            body: "Írásban rögzítjük, milyen rendelkezésre állás, adatkezelés és helyreállítás indokolt az adott megoldásnál.",
          },
          {
            key: "setup",
            name: "Telepítési és felügyeleti rend kialakítása",
            body: "Környezetek, telepítési folyamat, alapvető felügyelet és mentés beállítása a megoldás mértékéhez igazítva.",
          },
          {
            key: "handover",
            name: "Átadás és leírás",
            body: "Üzemeltetési dokumentáció, a visszaállítás kipróbálása és a felelősségi határok tisztázása.",
          },
        ],
      },
      evidence: {
        title: "Kapcsolódó mérnöki anyagok",
        intro:
          "Nyilvános anyagaink a telepítési és megfigyelhetőségi megközelítést mutatják be. Nem ügyfélkörnyezetek.",
        keys: ["wms-food-prod", "warehouse-management", "forecastlabai"],
      },
      technical: {
        title: "Technikai háttér",
        intro: "Megvalósítási lehetőségek, nem kötelező architektúra vagy szolgáltatási ígéret.",
        items: [
          "Konténeres telepítés, ahol a környezet egységesítése ezt indokolja.",
          "Automatizált build és kiadás, hogy a változás követhető és visszafordítható legyen.",
          "Alapvető metrikák, naplógyűjtés és állapotellenőrzés a működés követéséhez.",
          "Fordított proxy, hálózati elkülönítés és hozzáférés-korlátozás a rendszer kitettségéhez igazítva.",
        ],
      },
    },
  },
  referencesPage: {
    eyebrow: "Nyilvános mérnöki anyagok",
    summary: [
      "Nyilvánosan elérhető mérnöki anyagokat és referencia-architektúrákat teszünk közzé, hogy a munkamódszerünk konkrét kód és leírás alapján megítélhető legyen.",
      "Ezek mérnöki referenciák, nem ügyfélreferenciák: nem kereskedelmi bevezetéseket és nem megvásárolható termékeket mutatnak be.",
    ],
    howToRead: {
      title: "Hogyan olvassa ezeket?",
      intro: "Minden anyagnál három dolgot érdemes külön nézni.",
      items: [
        {
          key: "scope",
          title: "Terjedelem",
          body: "Milyen működési területet és milyen problémát modellez az anyag — például raktári kiadást, termelési nyomon követést vagy kereslet-előrejelzést.",
        },
        {
          key: "evidence",
          title: "Bizonyíték",
          body: "Mi látható ténylegesen a nyilvános anyagban: kód, specifikáció, architektúra, adatmodell vagy üzemeltetési megközelítés.",
        },
        {
          key: "maturity",
          title: "Érettség",
          body: "Az állapotjelzés a nyilvános anyag érettségére vonatkozik, nem arra, hogy a megoldás ügyfélnél éles használatban van.",
        },
      ],
    },
    legend: {
      title: "Az állapotjelzésekről",
      intro:
        "Három szintet használunk: referencia-architektúra, prototípus és működő demonstrátor. Az anyag mellett feltüntetett jelzés az, ami rá érvényes.",
      note: "Jelenleg minden nyilvános anyagunk referencia-architektúra szinten szerepel. Az érettséget csak akkor emeljük, ha a nyilvános anyag ezt alátámasztja.",
    },
    limits: {
      title: "Mit nem jelent egy mérnöki referencia?",
      intro: "Fontos, hogy pontosan az legyen érthető, amit ezek az anyagok bizonyítanak.",
      items: [
        "Nem ügyfélreferencia, és nem jelenti azt, hogy az adott megoldás egy konkrét vállalatnál használatban van.",
        "Nem bizonyítja éles, üzemi bevezetés meglétét.",
        "Nem kész, dobozos termék, amely változtatás nélkül megvásárolható.",
      ],
      note: "Azt viszont megmutatja, hogyan gondolkodunk architektúráról, adatmodellről és megvalósítási döntésekről — a nyilvános anyagban látható mértékig.",
    },
    evidenceLabel: "Mi látható az anyagban",
  },
  processPage: {
    eyebrow: "Együttműködés szakaszokban, kötelező csomagok nélkül",
    summary: [
      "Öt szakaszban dolgozunk. Mindegyik önmagában is értelmezhető eredményt ad, és a folytatásról a szakasz végén lehet dönteni.",
      "Ezek gondolati szakaszok, nem előre megvásárolandó csomagok. Nem minden feladat jut el mindegyikig, és van, ami az elsőnél lezárul.",
    ],
    stages: {
      title: "A közös munka szakaszai",
      intro: "A szakaszok egymásra épülnek, de külön-külön is megállnak.",
      outputLabel: "Eredmény",
      items: [
        {
          key: "start",
          code: "START",
          name: "Felmérés és első feladat",
          body: "Végigvesszük az érintett folyamatot, a használt rendszereket, az elérhető adatot és a korlátokat.",
          output:
            "Írásos összefoglaló a terjedelemről, a korlátokról, az elérhető adatokról és interfészekről, javaslattal az első, jól körülhatárolt feladatra.",
        },
        {
          key: "core",
          code: "CORE",
          name: "Működő alapmegoldás",
          body: "Egy jól körülhatárolt munkafolyamatra vagy funkcióra készül működő megoldás.",
          output:
            "Használható megoldás a rendelkezésre álló adatokkal vagy reprezentatív mintával, előre egyeztetett értékelési szempontokkal.",
        },
        {
          key: "extend",
          code: "EXTEND",
          name: "Kapcsolódó folyamatok és integrációk",
          body: "A megoldás körüli folyamatok bevonása, ahol ez üzletileg indokolt.",
          output:
            "Adatkapcsolatok, migráció, további szerepkörök és munkafolyamatok — mindegyik külön eldönthető lépésként.",
        },
        {
          key: "intelligence",
          code: "INTELLIGENCE",
          name: "Riport, előrejelzés és AI, ahol indokolt",
          body: "Kimutatás, előrejelzés vagy AI-támogatás akkor kerül elő, ha az adat és az üzleti kérdés ezt megalapozza.",
          output:
            "Kimutatás, előrejelzés vagy AI-funkció kiértékelési módszerrel együtt. Ez a szakasz nem minden feladatnál indokolt.",
        },
        {
          key: "operate",
          code: "OPERATE",
          name: "Üzemeltetés és továbbfejlesztés",
          body: "A rendszer működtetéséhez szükséges technikai és szervezési keretek kialakítása.",
          output:
            "Telepítési és felügyeleti rend, mentés és visszaállítás, dokumentáció, valamint a karbantartási felelősségi határok rögzítése.",
        },
      ],
      note: "A szakaszhatárok döntési pontok: minden szakasz végén eldönthető, hogy van-e értelme a folytatásnak.",
    },
    prepare: {
      title: "Mit kérünk az első egyeztetéshez?",
      intro:
        "Semmi különlegeset. Ennyi általában elég ahhoz, hogy értelmes javaslatot tudjunk adni.",
      items: [
        "Rövid leírást arról, hogyan zajlik most az érintett folyamat.",
        "Milyen rendszereket és eszközöket használnak hozzá jelenleg.",
        "Ha van, néhány jellemző adatmintát vagy egy tipikus dokumentumot.",
        "Mi a legnagyobb zavaró pont a napi működésben.",
        "Kik használják a folyamatot, és milyen szerepben.",
      ],
      note: "Érzékeny vagy éles adatot nem kérünk a megállapodás előtt. A felméréshez általában anonimizált vagy reprezentatív minta is elegendő.",
    },
    outputs: {
      title: "Mit kap a vállalat az egyes szakaszok végén?",
      intro:
        "Minden szakasz zárása kézzelfogható: írásos anyag vagy működő megoldás, nem általános tanácsadói összefoglaló.",
      items: [
        {
          key: "written",
          title: "Írásos terjedelem és korlátok",
          body: "Mi valósítható meg, milyen adatokra épül, mi marad ki, és milyen bizonytalanságok vannak.",
        },
        {
          key: "working",
          title: "Működő megoldás",
          body: "Használható funkció vagy alkalmazás a megbeszélt munkafolyamatra, kipróbálható formában.",
        },
        {
          key: "criteria",
          title: "Értékelési szempontok",
          body: "Előre egyeztetett szempontok arról, mi alapján ítéljük meg, hogy az adott szakasz eredménye elérte-e a célt.",
        },
        {
          key: "handover",
          title: "Átadási anyag",
          body: "Telepítési, üzemeltetési és használati leírás olyan mélységben, amennyit a megoldás indokol.",
        },
      ],
    },
    stop: {
      title: "Mikor állunk meg?",
      intro: "A felmérés kimenete az is lehet, hogy fejlesztés helyett mást javaslunk.",
      items: [
        "Ha az adat vagy a folyamat jelenlegi állapota nem indokolja a fejlesztést.",
        "Ha a várható haszon nem ítélhető meg értelmesen, és így a ráfordítás sem arányosítható.",
        "Ha a meglévő rendszer beállítása, használatának rendezése vagy egy egyszerűbb szervezési lépés jobb választ ad.",
        "Ha az elvárás olyan adatra épülne, amely nem áll rendelkezésre, és rövid távon nem is teremthető elő.",
      ],
    },
    dataAccess: {
      title: "Adat és hozzáférés",
      intro: "A hozzáférést a feladathoz szükséges legszűkebb körre korlátozzuk.",
      items: [
        "A felmérés szakaszában lehetőség szerint reprezentatív vagy anonimizált mintával dolgozunk.",
        "Éles rendszerhez csak akkor kérünk hozzáférést, ha a feladat ezt megköveteli, és erről előzetesen megállapodunk.",
        "A hozzáférések köre, célja és időtartama írásban rögzíthető.",
        "A jogosultságokat a munka lezárásakor vissza lehet vonni; ezt közösen átnézzük.",
      ],
    },
  },

  solutionsPage: solutionsPageHu,
  solutionFamilies: solutionFamiliesHu,
  solutionDetails: solutionDetailsHu,

  common: {
    skipToContent: "Ugrás a tartalomra",
    languageSwitch: "Nyelv",
    mainNav: "Főnavigáció",
    openMenu: "Menü",
    closeMenu: "Menü bezárása",
    contactLabel: "Kapcsolat",
    emailLabel: "E-mail",
    moreLabel: "Továbbiak",
    homeLabel: "Kezdőlap",
    breadcrumbLabel: "Morzsamenü",
    pageInProgress:
      "Ennek az oldalnak a részletes tartalma folyamatosan bővül. Konkrét kérdés esetén írjon nekünk.",
    currentPageLabel: "Jelenlegi oldal",
    appearanceLabel: "Megjelenés",
    themeToDark: "Váltás sötét megjelenésre",
    themeToLight: "Váltás világos megjelenésre",
    openRepository: "Nyilvános tárhely megnyitása",
    detailsLabel: "Részletek",
    solutionAreasTitle: "Milyen megoldások tartoznak ide?",
    solutionAreasIntro:
      "Ez a terület több, egymástól jól elkülönülő megoldást fog össze. A bevezetés általában egyetlen részterülettel indul.",
    familyWhenTitle: "Mikor érdemes ezt a területet nézni?",
    solutionSections: {
      situations: "Milyen helyzetekben hasznos?",
      capabilities: "Mit tud a megoldás?",
      inputs: "Miből dolgozik?",
      start: "Hogyan indul?",
      evaluation: "Mit ellenőrzünk?",
      evidence: "Kapcsolódó mérnöki anyag",
      technical: "Technikai háttér",
    },
    searchLabel: "Keresés",
    searchPlaceholder: "Keresés az oldalon",
    searchClear: "Keresés törlése",
    searchClose: "Keresés bezárása",
    searchResultsCount: "{count} találat",
    searchNoResults: "Erre a kifejezésre nincs találat.",
    searchNoResultsHelp: "Törölje a keresést, nézze át a megoldási területeket, vagy írjon nekünk.",
    searchGroups: {
      page: "Oldal",
      section: "Oldalszakasz",
      service: "Szolgáltatás",
      solution: "Megoldási terület",
      "solution-detail": "Megoldás",
      situation: "Üzleti helyzet",
      reference: "Referencia",
    },
    ai: {
      label: "AI",
      disclosureTitle: "Mit tett itt az AI?",
      whatItDid: "Mit végzett",
      whatItUsed: "Milyen adatot használt",
      whatToVerify: "Mit érdemes ellenőrizni",
      close: "Bezárás",
    },
  },
  nav: [
    { key: "solutions", label: "Megoldások", href: "#megoldasok" },
    { key: "situations", label: "Mikor segítünk", href: "#helyzetek" },
    { key: "data", label: "Adat és előrejelzés", href: "#adat" },
    { key: "process", label: "Hogyan dolgozunk", href: "#folyamat" },
    { key: "references", label: "Referenciák", href: "#referenciak" },
    { key: "contact", label: "Kapcsolat", href: "#kapcsolat" },
  ],
  home: {
    hero: {
      eyebrow: "AI, üzleti szoftver és adatelemzés KKV-knak",
      title: "Digitális megoldások a vállalat napi működésére.",
      body: "Üzleti alkalmazásokat, automatizálást és adatelemzési megoldásokat fejlesztünk kis- és középvállalatok számára. A cél nem egy újabb elszigetelt rendszer, hanem a meglévő folyamatok egyszerűsítése és a már rendelkezésre álló adatok jobb felhasználása.",
      primaryCta: "Egyeztessünk a feladatról",
      secondaryCta: "Megoldásaink",
    },
    services: {
      title: "Miben segítünk",
      intro:
        "Négy fő területre fókuszálunk. Egy bevezetés elindítható egy jól körülhatárolt működési problémával, majd szükség esetén tovább bővíthető.",
    },
    situations: {
      title: "Milyen helyzetekben érdemes velünk beszélni",
      intro:
        "Az alábbi helyzetekben érdemes megvizsgálni, hogy célzott fejlesztéssel, integrációval, adatelemzéssel vagy automatizálással egyszerűsíthető-e a működés.",
      items: [
        {
          key: "excel",
          title: "Sok kézi munka és táblázat",
          body: "Az adminisztráció Excelben és e-mailben zajlik. Az adatokat többször beírják, és nehéz kideríteni, melyik verzió az érvényes.",
        },
        {
          key: "disconnected",
          title: "Egymástól elszigetelt rendszerek",
          body: "A számlázás, a raktár és a webshop külön adatbázisban dolgozik. Az összesítés kézi egyeztetéssel készül.",
        },
        {
          key: "operations",
          title: "A működésre nincs megfelelő rendszer",
          body: "A raktári, termelési, bérlési vagy szolgáltatási folyamatot egy általános szoftver nem fedi le, egy nagy ERP bevezetése pedig aránytalan lenne.",
        },
        {
          key: "reporting",
          title: "Lassú vagy ellentmondásos riportok",
          body: "A vezetői kimutatás napokkal késik, és a különböző forrásokból más számok jönnek ki.",
        },
        {
          key: "forecasting",
          title: "Tervezés megfelelő adat nélkül",
          body: "A készlet-, kapacitás- vagy beszerzési döntések tapasztalati becslésen alapulnak, mert nincs használható előrejelzés.",
        },
        {
          key: "ai",
          title: "AI, de csak valódi feladatra",
          body: "Van igény az AI bevezetésére, de csak akkor, ha egy konkrét feladat elvégzését érdemben egyszerűbbé teszi.",
        },
      ],
    },
    modular: {
      title: "Lépésenkénti bevezetés",
      body: "Nem kell mindent egyszerre lecserélni. Egy jól választott részterülettel kezdünk, azt összekötjük a már használt rendszerekkel, a bővítés pedig az eredmények és az üzleti igények alapján dönthető el.",
      points: [
        {
          key: "start",
          title: "Egy problémával kezdünk",
          body: "Olyan területet választunk, ahol a változás rövid időn belül látszik a napi munkában.",
        },
        {
          key: "connect",
          title: "A meglévő rendszerekre építünk",
          body: "A számlázó, a webshop, a könyvelés és a táblázatok maradnak, ha jól működnek. Ezekhez illesztünk, nem helyettük dolgozunk.",
        },
        {
          key: "reuse",
          title: "A fejlesztés a szükséges részre koncentrál",
          body: "A visszatérő technikai funkciók — felhasználókezelés, jogosultságok, riportok, adatimport — bevált megoldásokkal készülnek, így a munka nagyobb része a vállalat saját folyamatára fordítható.",
        },
        {
          key: "scale",
          title: "Bővítés akkor, ha indokolt",
          body: "A további modulok üzleti döntés kérdései, nem egy előre megvásárolt csomag részei.",
        },
      ],
    },
    solutions: {
      title: "Megoldási területek",
      intro:
        "Ezeken a területeken van kidolgozott megközelítésünk, amelyet nyilvános mérnöki anyagok és referencia-architektúrák támasztanak alá. Az adott feladat mindig a vállalat folyamataihoz igazodik.",
      note: "Megoldási területek és mérnöki referenciák, nem kész termékcsomagok.",
      items: [
        {
          key: "inventory",
          name: "Készlet és raktár",
          summary:
            "Bevétel, kiadás, készletmozgás és leltár átlátható kezelése, lejárat- és tételszám-követéssel, ahol ezt az iparág megkívánja.",
        },
        {
          key: "operations",
          name: "Működési folyamatok",
          summary:
            "Munkalapok, feladatkiosztás, státuszkövetés és jóváhagyási lépések egy helyen, a papír és a párhuzamos táblázatok helyett.",
        },
        {
          key: "production",
          name: "Termelés és nyomon követés",
          summary:
            "Gyártási lépések, felhasznált anyagok és minőségi ellenőrzési pontok dokumentálása visszakereshető módon.",
        },
        {
          key: "rental",
          name: "Bérlés és eszközkezelés",
          summary:
            "Eszközök állapota, foglaltsága és mozgása, szerződésekhez és számlázáshoz kapcsolható nyilvántartással.",
        },
        {
          key: "knowledge",
          name: "Vállalati adatok és dokumentumok",
          summary:
            "Dokumentumok feldolgozása, keresés a belső anyagokban és visszatérő adminisztratív lépések automatizálása.",
        },
      ],
    },
    data: {
      title: "Adat és előrejelzés",
      heading: "Az adatelemzés akkor hasznos, ha döntéshez kötődik.",
      body: "A riportokat és az előrejelzést nem külön rendszerben építjük, hanem abban a felületben, ahol a munka is zajlik. Így a kimutatás nem havi visszatekintés, hanem a napi döntések háttere: mennyit érdemes rendelni, elég-e a kapacitás, hol keletkezik felesleges készlet.",
      points: [
        "Egységes adatalap a meglévő rendszerekből, ellenőrzött importtal.",
        "Kereslet- és kapacitástervezés a tényadatok alapján.",
        "Előrejelzés a bizonytalanság jelzésével, nem egyetlen számként.",
        "Riportok, amelyek minden érintettnél ugyanazt az eredményt adják.",
      ],
      chart: {
        title: "Kereslet: tényadat és előrejelzés",
        actualLabel: "Tényadat",
        forecastLabel: "Előrejelzés",
        bandLabel: "Bizonytalansági sáv",
        xAxisLabel: "Időszak",
        yAxisLabel: "Mennyiség",
        note: "Sematikus ábra a megjelenítés bemutatására. Nem ügyféladat.",
      },
    },
    process: {
      title: "Hogyan dolgozunk",
      intro:
        "Négy szakasz, mindegyik önmagában is értékelhető eredménnyel. A folytatásról a szakasz zárásakor döntünk.",
      steps: [
        {
          key: "assessment",
          name: "Felmérés",
          body: "Átnézzük a folyamatot és a rendelkezésre álló adatokat. A végén írásban rögzítjük, mi oldható meg és milyen ráfordítással.",
        },
        {
          key: "pilot",
          name: "Első megoldás",
          body: "Egy szűkebb, valós feladatra készül működő megoldás, a rendelkezésre álló adatokkal vagy reprezentatív mintával kipróbálva, előre meghatározott értékelési szempontok szerint.",
        },
        {
          key: "rollout",
          name: "Bevezetés",
          body: "Adatmigráció, integrációk, betanítás és átállás a napi használatra, a meglévő rendszerekkel együtt.",
        },
        {
          key: "operate",
          name: "Üzemeltetés és bővítés",
          body: "Felügyelet, hibakezelés, jogosultságok és a következő terület fejlesztése — igény szerinti ütemben.",
        },
      ],
    },
    architecture: {
      title: "Megoldásterületek",
      intro:
        "Három terület, tizenhárom önállóan is bevezethető megoldás. A bevezetés jellemzően egyetlen részterülettel indul, és onnan bővül.",
      cta: "Megoldások áttekintése",
    },
    lenses: {
      switcherLabel: "Nézet választása",
      situationsTab: "Üzleti helyzetek",
      solutionsTab: "Megoldási területek",
    },
    references: {
      title: "Mérnöki referenciák",
      heading: "Nyilvános szakmai anyagok",
      body: "Nyilvánosan elérhető mérnöki anyagokat és referencia-megvalósításokat teszünk közzé. Ezek azt mutatják, hogyan építünk — nem kereskedelmi termékek és nem ügyfélmunkák.",
      cta: "Anyagok megnyitása a GitHubon",
      statusColumn: "Állapot",
      statusLabels: {
        demonstrator: "Működő demonstrátor",
        "reference-architecture": "Referencia-architektúra",
        prototype: "Prototípus",
      },
      items: [
        {
          key: "crentsys",
          name: "cRentSys",
          summary:
            "Autóbérlési működés nyilvános szakmai anyaga: foglalás, flottakezelés, munkatársi feladatkiosztás, riportok, jogosultság- és naplózási elvek. Jelenleg specifikáció szintű anyag, nem ügyfélnél működő rendszer.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/cRentSys",
          evidence: [
            "Bérlési folyamat modellezése: foglalás, átadás-átvétel és flottaállapot leírása.",
            "Munkatársi feladatkiosztás és státuszkövetés fogalmi felépítése.",
            "Szerepkör alapú jogosultság- és naplózási elvek.",
            "Riportolási igények és a hozzá tartozó adatszerkezet leírása.",
          ],
        },
        {
          key: "forecastlabai",
          name: "ForecastLabAI",
          summary:
            "Kiskereskedelmi kereslet-előrejelzés mérnöki mintamegoldása: előrejelzési munkafolyamat, kimutatások és modellkiértékelés FastAPI és PostgreSQL környezetben. Nem kereskedelmi bevezetés.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/ForecastLabAI",
          evidence: [
            "Kereslet-előrejelzési munkafolyamat felépítése adatbetöltéstől az eredmény megjelenítéséig.",
            "Modellkiértékelés korábbi időszakokon, a pontosság követésével.",
            "FastAPI-alapú alkalmazásréteg és PostgreSQL adatmodell.",
            "Kimutatások, amelyek az előrejelzést és a bizonytalanságot együtt jelenítik meg.",
            "Konténeres futtatásra épülő fejlesztői és telepítési megközelítés.",
          ],
        },
        {
          key: "wms-food-prod",
          name: "Élelmiszeripari termelési WMS specifikáció",
          summary:
            "Termelési folyamat, tételszintű nyomon követés, HACCP és minőségellenőrzési pontok, jogosultságkezelés és üzemeltetési megfigyelhetőség leírt referencia-architektúrája.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/specs-wms-food-prod",
          evidence: [
            "Termelési folyamat és raktári lépések részletes leírása.",
            "Tételszintű nyomon követés és a hozzá tartozó adatmodell.",
            "HACCP- és minőségellenőrzési pontok beépítése a folyamatba.",
            "Jogosultságkezelés és naplózás leírt elvei.",
            "Üzemeltetési megfigyelhetőség és telepítési szempontok dokumentálása.",
          ],
        },
        {
          key: "warehouse-management",
          name: "Raktárkezelő rendszer",
          summary:
            "Raktári nyilvántartás mérnöki megvalósítása: FEFO-elvű kiadás, tétel- és lejáratkövetés, több raktár, készletfoglalás, adatimport, adatexport és monitorozás.",
          status: "reference-architecture",
          url: "https://github.com/w7-mgfcode/warehouse-management-system",
          evidence: [
            "FEFO-elvű kiadás és készletfoglalás megvalósítása.",
            "Tétel- és lejáratkövetés, több raktár kezelése.",
            "Adatimport és adatexport ellenőrzésekkel.",
            "Monitorozási és üzemeltetési jelzések a működés követéséhez.",
          ],
        },
      ],
    },

    contact: {
      title: "Kapcsolat",
      heading: "Beszéljük át a konkrét feladatot.",
      body: "Írjon néhány sort arról, hol tart most a folyamat és mit szeretne elérni. Egy rövid egyeztetés után elmondjuk, mi a realista első lépés — akkor is, ha az nem fejlesztés.",
      cta: "Egyeztessünk a feladatról",
    },
  },
  footer: {
    columns: [
      {
        key: "services",
        title: "Szolgáltatások",
        pages: [
          "ai-solutions",
          "business-systems",
          "data-forecasting",
          "software-integrations",
          "devops-infrastructure",
        ],
      },
      {
        key: "company",
        title: "Vállalat",
        pages: ["solutions", "references", "how-we-work", "about", "contact"],
      },
    ],
    legal: "Minden jog fenntartva.",
  },
  services: [
    {
      key: "ai-automation",
      name: "AI és automatizálás",
      summary:
        "Visszatérő adminisztratív és döntéstámogató feladatok gépi támogatása ott, ahol a feladat, az adatok és az ellenőrzési igény alapján indokolt.",
      points: [
        "Dokumentumok és beérkező adatok feldolgozása",
        "Keresés és összefoglalás a belső anyagokban",
        "Ismétlődő lépések automatizálása, ellenőrzési pontokkal",
      ],
      tier: "primary",
      pictogram: "automation",
    },
    {
      key: "business-applications",
      name: "Üzleti alkalmazások",
      summary: "Célzott, a működésre szabott alkalmazások — nagy ERP-bevezetés helyett.",
      points: [
        "Raktár, termelés, bérlés, szolgáltatási folyamatok",
        "Jogosultságok, jóváhagyás, naplózás",
        "Webes és mobilon is használható felület",
      ],
      tier: "primary",
      pictogram: "applications",
    },
    {
      key: "data-forecasting",
      name: "Adat és előrejelzés",
      summary: "Kimutatások és előrejelzések a meglévő adatokból, a napi döntésekhez illesztve.",
      points: [
        "Egységes adatalap és ellenőrzött adatimport",
        "Vezetői és operatív riportok",
        "Kereslet- és kapacitástervezés",
      ],
      tier: "primary",
      pictogram: "forecasting",
    },
    {
      key: "integration-operations",
      name: "Integráció és üzemeltetés",
      summary:
        "A rendszerek összekötése és stabil működtetése: adatkapcsolatok, üzemeltetés, biztonság.",
      points: [
        "Kapcsolat számlázó, webshop és könyvelési rendszerekhez",
        "Adatmigráció és validáció",
        "Felügyelet, mentés, hozzáférés-kezelés",
      ],
      tier: "supporting",
      pictogram: "integration",
    },
  ],
};
