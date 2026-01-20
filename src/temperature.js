const gradi = Number(process.argv[2]); // Nolasām pirmo skaitli
const mervieniba = process.argv[3];    // Nolasām C vai F

if (mervieniba === "C") {
    let fahrenheit = gradi * 9/5 + 32;
    console.log(`${gradi}°C = ${fahrenheit}°F`);
} else if (mervieniba === "F") {
    // ŠEIT IR TAVS DARBS: uzraksti formulu, lai pārvērstu no F uz C
    // Formula: let celsius = (gradi - 32) * 5/9;
    let celsius = (gradi - 32) * 5/9;
    console.log(`${gradi}°F = ${celsius.toFixed(1)}°C`);
} else {
    console.log("Lūdzu, norādi mērvienību C vai F!");
}