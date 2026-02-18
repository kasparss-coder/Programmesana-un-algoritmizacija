JavaScript Mācību Projekts
Šis repozitorijs satur manus mācību darbus JavaScript programmēšanas pamatos. Projekts ir sadalīts moduļos, lai skaidri parādītu progresu no vienkāršas izvades līdz kompleksai loģikai, modularitātei un darbam ar failu sistēmu.

📂 Projekta struktūra

file-organizer/ — 7. modulis: Noslēguma projekts. Automātisks failu šķirošanas rīks (CLI, Node.js fs modulis, JSON konfigurācija).
+2

shopping-list/ — 6. modulis: CLI Iepirkumu saraksts (Datu persistence, JSON, readline).

module5/ — 5. modulis: Funkcijas un modularitāte (JSDoc, Arrow functions, HOF).

module4/src/ — 4. modulis: Algoritmi un loģikas uzdevumi.

module3/src/ — 3. modulis: Dati, operatori un interaktīvi skripti.


docs/ — Dokumentācija, plūsmas diagrammas un izstrādes žurnāls .

📁 Failu organizēšanas rīks (7. modulis - Noslēguma projekts)
Šis ir komandrindas rīks, kas automātiski organizē failus direktorijā, pamatojoties uz pielāgojamiem noteikumiem.

Galvenās iespējas:

Automātiska kategorizēšana: Skenē mapi un šķiro failus (Attēli, Dokumenti, Video u.c.) pēc paplašinājuma vai nosaukuma parauga.
+1


Dry-run režīms: Drošības mehānisms, kas parāda plānotās darbības, faktiski nepārvietojot nevienu failu .


Dublikātu apstrāde: Ja mērķa mapē fails jau eksistē, rīks pievieno kārtas numuru (piem., foto (1).jpg), nepārrakstot esošos datus .


Organizēšanas pārskati: Pēc katras darbības tiek ģenerēts detalizēts .txt pārskats reports/ mapē.
+1


Pielāgojama konfigurācija: Noteikumus un kategorijas var mainīt config/config.json failā.
+1

🛒 Iepirkumu saraksta CLI (6. modulis)
Šī ir interaktīva komandrindas lietotne, kas palīdz pārvaldīt iepirkumu sarakstu, saglabājot datus lokālos JSON failos.

Galvenās iespējas:
Datu persistence: Iepirkumi un cenas tiek saglabāti shopping.json un prices.json failos.

Viedā cenu atmiņa: Programma atceras iepriekš ievadītās cenas.

Eksportēšana: Iespēja ģenerēt noformētu sarakstu shopping-list.txt formātā.

Modularitāte: Kods organizēts atsevišķos moduļos (storage.js, utils.js, shop.js).

⚡ Izstrādātās programmas (3. modulis)
type-explorer.js: Datu tipu pētnieks. Demonstrē darbību ar dažādiem JS tipiem.

calculator.js: Termināļa kalkulators ar pamatdarbībām un drošības pārbaudēm.

eligibility.js: Atbilstības pārbaudītājs, izmantojot loģiskos operatorus.

converter.js: Mērvienību konvertors (km/mi, kg/lb, l/gal).

🛠️ Kā palaist programmas
Pārliecinieties, ka jūsu datorā ir instalēts Node.js. Atveriet termināli projekta saknes mapē un izmantojiet šādas komandas:

7. modulis (Failu organizētājs)
Dodoties uz moduli: cd file-organizer

Bash
# 1. Priekšskatīt darbības (Dry-run režīms) [cite: 70]
node src/index.js --dir ./test-files --dry-run

# 2. Izpildīt failu organizēšanu [cite: 67]
node src/index.js --dir ./test-files
Piezīme: Lai sakārtotu jebkuru citu mapi datorā, norādiet pilno ceļu pēc --dir parametra.

6. modulis (Iepirkumu saraksts)
Dodoties uz moduli: cd shopping-list

Bash
# Pievienot preci
node shop.js add Maize 2

# Apskatīt sarakstu vai eksportēt
node shop.js list
node shop.js export
🛡️ Drošības pasākumi
Izstrādes laikā vienmēr tika izmantota test-files/ mape, lai izvairītos no nejaušas sistēmas failu ietekmēšanas.
+1

Pirms reālas failu pārvietošanas obligāti tiek izmantota --dry-run opcija.

Dublikātu apstrāde nodrošina, ka neviens esošs fails netiek pārrakstīts.


Izstrādāts "Programmēšanas pamati un algoritmi" kursa ietvaros (2025./2026. m.g.).