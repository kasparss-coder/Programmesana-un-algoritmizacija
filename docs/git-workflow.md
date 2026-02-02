# Git darba plūsmas dokumentācija (Uzdevums 4.6)

Šajā modulī tika praktizēta **Feature Branch** izstrādes pieeja.

## Veiktie soļi:
1. **Zara izveide**: Izveidots jauns zars `feature/loops`, lai izolētu jauno funkciju izstrādi no stabilās versijas.
2. **Izstrāde un Commits**:
   - Ieviests FizzBuzz algoritms (`for` cikla prakse).
   - Implementēti 1. moduļa algoritmi: Kafijas aparāts un Bankomāts (`if/else` loģika).
   - Izveidota interaktīva skaitļu minēšanas spēle (`while` cikla un `readline` prakse).
3. **Sapludināšana**: Pēc testēšanas zars `feature/loops` tika sapludināts (`merge`) ar `main` zaru, izmantojot *Fast-forward* metodi.
4. **Sinhronizācija**: Izmaiņas tika nosūtītas uz attālināto krātuvi (GitHub) ar `git push origin main`.

## Secinājumi:
Darbs ar zariem ļauj droši eksperimentēt ar kodu, nesabojājot galveno projektu. Vismaz 5 loģiski commits palīdzēja izsekot progresam