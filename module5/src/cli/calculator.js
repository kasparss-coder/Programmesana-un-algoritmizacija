const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => (b === 0 ? "Kļūda: Dalīšana ar 0" : a / b);

const formatResult = (res) => `Rezultāts: ${res}`;

function calculate(a, op, b) {
  const operations = { '+': add, '-': sub, '*': mult, '/': div };
  const operation = operations[op];
  
  if (!operation) return "Nezināma darbība";
  return formatResult(operation(a, b));
}

module.exports = { calculate };