/**
 * Aprēķina vienas rindas kopsummu.
 * @param {Object} item - Produkta objekts {qty, price}.
 * @returns {number}
 */
const calcLineTotal = (item) => Number((item.qty * item.price).toFixed(2));

/**
 * Aprēķina visa saraksta kopsummu.
 * @param {Array} items - Produktu masīvs.
 * @returns {number}
 */
const calcGrandTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.qty * item.price), 0).toFixed(2);
};

/**
 * Saskaita kopējo vienību skaitu.
 * @param {Array} items - Produktu masīvs.
 * @returns {number}
 */
const countUnits = (items) => {
    return items.reduce((sum, item) => sum + item.qty, 0);
};

module.exports = { calcLineTotal, calcGrandTotal, countUnits };