# JavaScript Mācību Projekts: Modulis 2 un 3

Šis repozitorijs satur manus mācību darbus JavaScript programmēšanas pamatos. Projekts ir sadalīts moduļos, lai skaidri parādītu progresu no vienkāršas izvades līdz kompleksai loģikai un mērvienību konvertācijai.

## 📂 Projekta struktūra

* **`module3/src/`** — Galvenie 3. moduļa uzdevumi (dati, operatori, loģika).
* **`src/`** — 2. moduļa pamata eksperimenti un interaktīvie skripti.
* **`docs/`** — Dokumentācija un personīgās piezīmes.

## 🚀 Izstrādātās programmas (3. modulis)

1. **`type-explorer.js`** Datu tipu pētnieks. Demonstrē darbību ar `string`, `number`, `boolean`, `null` un `undefined`, kā arī automātisko un manuālo datu tipu maiņu.

2. **`calculator.js`** Termināļa kalkulators. Atbalsta saskaitīšanu, atņemšanu, reizināšanu, dalīšanu un atlikuma aprēķināšanu. Ietver drošības pārbaudi dalīšanai ar nulli.

3. **`eligibility.js`** Atbilstības pārbaudītājs. Izmanto kompleksus loģiskos operatorus (`&&`, `||`), lai noteiktu personas tiesības balsot, īrēt auto vai saņemt atlaides.

4. **`converter.js`** Mērvienību konvertors. Veic precīzu pāreju starp km/jūdzēm, kg/mārciņām un litriem/galoniem, nodrošinot izvadi ar 2 decimālzīmju precizitāti.

## 🛠️ Kā palaist programmas

Pārliecinieties, ka jūsu datorā ir instalēts **Node.js**. Atveriet termināli projekta saknes mapē un izmantojiet šādas komandas:

```bash
# Palaist kalkulatoru
node module3/src/calculator.js 15 * 3

# Palaist mērvienību konvertoru
node module3/src/converter.js km-to-mi 100

# Pārbaudīt datu tipus
node module3/src/type-explorer.js