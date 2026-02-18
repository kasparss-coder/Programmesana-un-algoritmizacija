/**
 * Padara pirmo burtu lielu.
 * @param {string} str 
 * @returns {string}
 * @example capitalize("saule") // "Saule"
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Apgriež tekstu, ja tas ir par garu.
 * @param {string} str 
 * @param {number} maxLen 
 * @returns {string}
 */
const truncate = (str, maxLen) => str.length > maxLen ? str.substring(0, maxLen) + "..." : str;

/**
 * Saskaita vārdus tekstā.
 * @param {string} str 
 * @returns {number}
 */
const countWords = (str) => str.trim().split(/\s+/).length;

/**
 * Ierobežo skaitli diapazonā.
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * Pārbauda vai skaitlis ir pirmskaitlis.
 */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

/**
 * Aprēķina faktoriālu (n!).
 */
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

/**
 * Masīva summa (bez iebūvētām metodēm).
 */
const sum = (arr) => {
  let total = 0;
  for (let val of arr) total += val;
  return total;
};

/**
 * Vidējais aritmētiskais.
 */
const average = (arr) => (arr.length === 0 ? 0 : sum(arr) / arr.length);

module.exports = { capitalize, truncate, countWords, clamp, isPrime, factorial, sum, average };