const fs = require('fs');

const SHOPPING_FILE = 'shopping.json';
const PRICES_FILE = 'prices.json';

/**
 * Ielādē iepirkumu sarakstu no JSON faila.
 * @returns {Array} Iepirkumu masīvs.
 */
const loadList = () => {
    if (!fs.existsSync(SHOPPING_FILE)) return [];
    const data = fs.readFileSync(SHOPPING_FILE, 'utf8');
    return JSON.parse(data || '[]');
};

/**
 * Saglabā iepirkumu sarakstu JSON failā.
 * @param {Array} items - Produktu masīvs.
 */
const saveList = (items) => {
    fs.writeFileSync(SHOPPING_FILE, JSON.stringify(items, null, 2));
};

/**
 * Ielādē cenu datubāzi.
 * @returns {Object} Cenu objekts.
 */
const loadPrices = () => {
    if (!fs.existsSync(PRICES_FILE)) return {};
    const data = fs.readFileSync(PRICES_FILE, 'utf8');
    return JSON.parse(data || '{}');
};

/**
 * Saglabā cenu objektu JSON failā.
 * @param {Object} prices - Cenu objekts.
 */
const savePrices = (prices) => {
    fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
};

module.exports = { loadList, saveList, loadPrices, savePrices };