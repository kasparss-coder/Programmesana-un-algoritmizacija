// process.argv[2] ir pirmais vārds pēc faila nosaukuma (vārds)
// process.argv[3] ir otrais vārds (dzimšanas gads)
const vards = process.argv[2];
const dzimsanasGads = process.argv[3];

// Iegūstam pašreizējo gadu
const pasreizejaisGads = new Date().getFullYear();

// Aprēķinām vecumu
const vecums = pasreizejaisGads - Number(dzimsanasGads);

// Pārbaudām, vai dati ir ievadīti, un izvadam sveicienu
if (vards && dzimsanasGads) {
    console.log(`Sveiks, ${vards}! Tev ir ${vecums} gadi.`);
} else {
    console.log("Lūdzu, ievadi vārdu un dzimšanas gadu! (Piemēram: node greeter.js Anna 1995)");
}