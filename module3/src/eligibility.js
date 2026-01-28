// Testa dati - vari mainīt šīs vērtības, lai pārbaudītu dažādus rezultātus
const age = 5;           // Skaitlis (number)
const hasLicense = true;  // Vai ir autovadītāja apliecība (boolean)
const isVeteran = false;  // Vai ir veterāns (boolean)
const isStudent = true;   // Vai ir students (boolean)
// 1. Balsošana 
const canVote = age >= 18;
console.log(`Vai drīkst balsot: ${canVote}`);

// 2. Auto īre 
const canRentCar = age >= 21 && hasLicense;
console.log(`Vai drīkst īrēt auto: ${canRentCar}`);

// 3. Senioru atlaide: Vecums ir vismaz 65 VAI ir veterāns.
const hasSeniorDiscount = age >= 65 || isVeteran
console.log(`Vai pienākas senioru atlaide: ${hasSeniorDiscount}`);

const hasStudentDiscount = age >= 16 && age <= 26 && isStudent;
console.log(`Vai pienākas studentu atlaide: ${hasStudentDiscount}`);