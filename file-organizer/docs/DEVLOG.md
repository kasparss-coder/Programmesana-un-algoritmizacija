# 📔 Izstrādes žurnāls (DEVLOG)

## 🏗️ Projekta plānošana
* [cite_start]Definēta konfigurācijas struktūra JSON formātā, lai viegli pārvaldītu kategorijas [cite: 84-86].
* [cite_start]Izstrādāta loģikas shēma: nolasīt failus -> kategorizēt -> pārbaudīt dublikātus -> pārvietot [cite: 141-148].

## 🛠️ Ieviestā funkcionalitāte
* [cite_start]**Skenēšana**: Izmantots `fs.readdirSync`, lai iegūtu visus failus no norādītās mapes[cite: 144].
* [cite_start]**Kategorizēšana**: Implementēta loģika, kas pārbauda faila paplašinājumu un regulārās izteiksmes (Regex)[cite: 147].
* [cite_start]**Dublikātu apstrāde**: Izveidota funkcija, kas pievieno numuru (piemēram, `(1)`), ja fails jau eksistē, lai izvairītos no datu zaudēšanas [cite: 216-222].
* [cite_start]**Atskaites**: Pēc katras darbības tiek ģenerēts detalizēts `.txt` pārskats `reports/` mapē [cite: 245-250].

## 💡 Ko es iemācījos
* [cite_start]Iemācījos strādāt ar Node.js `fs` moduli un sinhronajām failu operācijām[cite: 16].
* [cite_start]Sapratu, kā lietot regulārās izteiksmes, lai atpazītu specifiskus failu nosaukumus (piemēram, ekrānuzņēmumus) [cite: 50-58].
* [cite_start]Apguvu praktisku "Dry-run" režīma nozīmi, lai pirms reālu izmaiņu veikšanas pārliecinātos par programmas darbību [cite: 62-64].

## 🤖 MI rīku lietojums
* [cite_start]Izmantoju MI (Gemini), lai izprastu kļūdu apstrādes principus un optimizētu failu pārvietošanas loģiku [cite: 401-402].
* MI palīdzēja izveidot dokumentācijas struktūru atbilstoši kursa prasībām.