/** * ALGORITMS: Kafijas pagatavošana
 * Sasaiste ar blokshēmu: "kaf pagatavosa.jpeg"
 */

// Ievades parametri (simulējam sensorus/izvēli)
const irRozete = process.argv[2] === "true";
const irElektriba = process.argv[3] === "true";
const veliesKafiju = process.argv[4] === "true";
const irUdensAparata = process.argv[5] === "true";
const irPupinasAparata = process.argv[6] === "true";

// 1. SOLIS: Vai aparāts ir rozetē?
if (!irRozete) {
    console.log("Darbība: Pievienot pie strāvas");
}

// 2. SOLIS: Vai ir elektrība?
if (!irElektriba) {
    console.log("Kļūda: NAV ELEKTRĪBA");
    process.exit(); // Beigas
}

// 3. SOLIS: Vai vēlies kafiju?
if (!veliesKafiju) {
    console.log("Beigas: Lietotājs nevēlas kafiju");
    process.exit();
}

console.log("Darbība: Ieliet ūdeni aparātā");

// 4. SOLIS: Pārbaude par ūdeni un pupiņām
if (irUdensAparata && irPupinasAparata) {
    console.log("Darbība: Gatavot kafiju");
    console.log("Darbība: Paņemt kafiju");
} else {
    if (!irUdensAparata) console.log("Kļūda: NAV ŪDENS");
    if (!irPupinasAparata) console.log("Kļūda: NAV PUPIŅAS");
    console.log("Beigas");
}