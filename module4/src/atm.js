/** * ALGORITMS: Bankomāts
 * Sasaiste ar blokshēmu: "bankomats.drawio.png"
 */

let summa = Number(process.argv[2]);

// 1. SOLIS: Pārbaude - vai summa ir derīga?
// Blokshēmā: if summa <= 0 or summa % 5 != 0
if (summa <= 0 || summa % 5 !== 0) {
    console.log("Kļūda: summa nav derīga");
    process.exit(); // Beigas
}

// 2. SOLIS: Aprēķinām banknotes
// Izmantojam Math.floor, lai iegūtu veselo daļu (blokshēmas // analogs)
let b50 = Math.floor(summa / 50);
let atlikums = summa % 50;

let b20 = Math.floor(atlikums / 20);
atlikums = atlikums % 20;

let b10 = Math.floor(atlikums / 10);
atlikums = atlikums % 10;

let b5 = Math.floor(atlikums / 5);

// 3. SOLIS: Izvade
console.log(`Izsniegtās banknotes: 
50€: ${b50}
20€: ${b20}
10€: ${b10}
5€: ${b5}`);