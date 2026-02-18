const utils = require('./src/utils/utils');
const val = require('./src/validators/validators');
const hof = require('./src/utils/higher-order');
const calc = require('./src/cli/calculator');

console.log("--- Utils tests ---");
console.log(utils.capitalize("labvakar")); // Labvakar
console.log(utils.isPrime(7)); // true
console.log(utils.average([10, 20, 30])); // 20

console.log("\n--- Validācijas tests ---");
console.log(val.isEmail("test@test.lv")); // true
console.log(val.isPhoneNumber("+371 20000000")); // true

console.log("\n--- HOF tests ---");
const numbers = [1, 2, 3];
const doubled = hof.myMap(numbers, n => n * 2);
console.log(doubled); // [2, 4, 6]

console.log("\n--- Kalkulatora tests ---");
console.log(calc.calculate(10, '+', 5)); // Rezultāts: 15