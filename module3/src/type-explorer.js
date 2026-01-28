console.log (typeof ("5" + 3)) // JavaScript redz + zīmi un vismaz viens no elementiem ir teksts (string), viņš uzskata, ka tu vēlies nevis rēķināt, bet gan "salīmēt" tekstus kopā
console.log (typeof ("5" - 3)) // JavaScript redz mīnusa zīmi, viņš saprot, ka tekstu "atņemt" nevar, tāpēc viņš mēģina tekstu pārvērst par skaitli
// const: Ja vērtība nekad nemainīsies (piemēram, tavs vārds).
// let: Ja vērtība vēlāk tiks pārrakstīta (piemēram, temperatūra vai spēles rezultāts).
const vards = "Kaspars"; // Teksts (string) Vienmēr liec pēdiņās.
let pilseta = 'Rīga'; // // Teksts (string) Vienmēr liec pēdiņās.
const vecums = 51; // Skaitļi (number) Raksti vienkārši ciparus (bez pēdiņām!).
let temperatura = -5.5; // Skaitļi (number) Raksti vienkārši ciparus (bez pēdiņām!).
const irStudents = true; // Jā/Nē vērtības (boolean) Tikai divi varianti: true (patiess) vai false (aplams).
let irPabeidzisKursu = false; // Jā/Nē vērtības (boolean) Tikai divi varianti: true (patiess) vai false (aplams).
const tuksaKaste = null; // Apzināts tukšums (null) Tu pats pasaki, ka te nekā nav.
let lietotajaBilde = null; // Bilde vēl nav pievienota // Apzināts tukšums (null) Tu pats pasaki, ka te nekā nav.
let nezinamaVertiba; // Definīcijas trūkums (undefined) Kaste ir izveidota, bet tajā vēl nekas nav ielikts Ja tu nepiešķir vērtību, tā automātiski ir undefined
const velVienaNezinama = undefined;
console.log("--- MAINĪGO TIPI ---");
console.log("Vārds ir:", vards, "| Tips:", typeof vards);
console.log("Vecums ir:", vecums, "| Tips:", typeof vecums);
console.log("Temperatura ir:", temperatura, "| Tips:", typeof temperatura);
console.log("Vai students:", typeof irStudents);
console.log("Tukša kaste:", typeof tuksaKaste); // Atceries: šis izvadīs "object"! [cite: 124]
console.log("Nezināms:", typeof nezinamaVertiba);
console.log("--- EKSPLICĪTĀ KONVERSIJA ---");
console.log("Teksts uz skaitli:", Number("123")); // Pārvērš par skaitli 123
console.log("Kļūdaina konversija:", Number("abc")); // Izvadīs NaN (Not a Number) [cite: 11, 44]
console.log("Tukša teksta loģika:", Boolean("")); // Izvadīs false [cite: 11]
