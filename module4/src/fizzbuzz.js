// Paņemam skaitli no termināļa vai izmantojam 100 kā noklusējumu
const n = Number(process.argv[2]) || 100;

console.log(`--- FizzBuzz no 1 līdz ${n} ---`);

for (let i = 1; i <= n; i++) {
    // 1. Vispirms pārbaudām, vai dalās ar 15 (gan 3, gan 5)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // 2. Ja nē, pārbaudām, vai dalās ar 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // 3. Ja joprojām nē, pārbaudām, vai dalās ar 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // 4. Ja neviens no iepriekšējiem, izvadam skaitli
    else {
        console.log(i);
    }
}