# 🚀 JavaScript Mācību Projekts

Šis repozitorijs satur manus mācību darbus JavaScript programmēšanas pamatos. Projekts ir sadalīts moduļos, lai skaidri parādītu progresu no vienkāršas izvades līdz kompleksai loģikai, modularitātei un darbam ar failu sistēmu.

## 📂 Projekta struktūra

* **`shopping-list/`** — 6. modulis: CLI Iepirkumu saraksts (Datu persistence, JSON, readline).
* **`module5/`** — 5. modulis: Funkcijas un modularitāte (JSDoc, Arrow functions, HOF).
* **`module4/src/`** — 4. modulis: Algoritmi un loģikas uzdevumi.
* **`module3/src/`** — 3. modulis: Dati, operatori un interaktīvi skripti.
* **`src/`** — 2. moduļa pamata eksperimenti.
* **`docs/`** — Dokumentācija un personīgās piezīmes.

---

## 🛒 Iepirkumu saraksta CLI (6. modulis)
Šī ir interaktīva komandrindas lietotne, kas palīdz pārvaldīt iepirkumu sarakstu, saglabājot datus lokālos JSON failos.

### Galvenās iespējas:
* **Datu persistence**: Iepirkumi un cenas tiek saglabāti `shopping.json` un `prices.json` failos.
* **Viedā cenu atmiņa**: Programma atceras iepriekš ievadītās cenas un piedāvā tās izmantot atkārtoti vai mainīt.
* **Eksportēšana**: Iespēja ģenerēt glīti noformētu sarakstu `shopping-list.txt` formātā.
* **Modularitāte**: Kods ir organizēts atsevišķos moduļos (`storage.js`, `utils.js`, `shop.js`).

---

## ⚡ Izstrādātās programmas (3. modulis)

1. **`type-explorer.js`**: Datu tipu pētnieks. Demonstrē darbību ar `string`, `number`, `boolean`, `null` un `undefined`.
2. **`calculator.js`**: Termināļa kalkulators. Atbalsta visas pamatdarbības un ietver drošības pārbaudi dalīšanai ar nulli.
3. **`eligibility.js`**: Atbilstības pārbaudītājs. Izmanto kompleksus loģiskos operatorus (`&&`, `||`), lai noteiktu personas tiesības.
4. **`converter.js`**: Mērvienību konvertors. Veic precīzu pāreju starp km/mi, kg/lb un l/gal ar 2 decimālzīmju precizitāti.

---

## 🛠️ Kā palaist programmas

Pārliecinieties, ka jūsu datorā ir instalēts **Node.js**. Atveriet termināli projekta saknes mapē un izmantojiet šādas komandas:

### 6. modulis (Iepirkumu saraksts)
Vispirms ieejiet mapē: `cd shopping-list`
```bash
# Pievienot preci
node shop.js add Maize 2

# Apskatīt sarakstu vai eksportēt
node shop.js list
node shop.js export