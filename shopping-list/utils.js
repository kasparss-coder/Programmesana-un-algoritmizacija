/**
 * Aprēķina vienas rindas kopsummu (daudzums x cena).
 * @param {Object} item - Produkta objekts ar qty un price.
 * @returns {number} Summa noapaļota līdz 2 zīmēm.
 */
const calcLineTotal = (item) => Number((item.qty * item.price).toFixed(2));

/**
 * Aprēķina visa iepirkumu saraksta kopējo summu.
 * @param {Array} items - Produktu objektu masīvs.
 * @returns {string} Kopsumma kā teksts ar 2 zīmēm aiz komanta.
 */
const calcGrandTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.qty * item.price), 0).toFixed(2);
};

/**
 * Saskaita kopējo preču vienību skaitu sarakstā.
 * @param {Array} items - Produktu objektu masīvs.
 * @returns {number} Kopējais skaits.
 */
const countUnits = (items) => {
    return items.reduce((sum, item) => sum + item.qty, 0);
};

/**
 * Sagatavo sarakstu glītā teksta formātā eksportēšanai uz .txt failu.
 * @param {Array} items - Produktu objektu masīvs.
 * @returns {string} Noformēts teksts sūtīšanai vai drukāšanai.
 */
const formatListToText = (items) => {
    let text = "=== IEPIRKUMU SARAKSTS ===\n\n";
    
    items.forEach((item, index) => {
        const lineTotal = (item.qty * item.price).toFixed(2);
        text += `${index + 1}. ${item.name} x ${item.qty} (${item.price.toFixed(2)} EUR/gab.) = ${lineTotal} EUR\n`;
    });
    
    const total = items.reduce((sum, i) => sum + (i.qty * i.price), 0).toFixed(2);
    const units = items.reduce((sum, i) => sum + i.qty, 0);
    
    text += "\n--------------------------\n";
    text += `KOPĀ: ${total} EUR\n`;
    text += `Vienības: ${units}\n`;
    text += "==========================";
    
    return text;
};

module.exports = {
    calcLineTotal,
    calcGrandTotal,
    countUnits,
    formatListToText
};