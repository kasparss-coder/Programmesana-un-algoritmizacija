const fs = require('fs');
const path = require('path');

/**
 * Ģenerē un saglabā organizēšanas pārskatu[cite: 245].
 */
function generateReport(dirPath, details, stats) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const fileName = `report-${timestamp}.txt`;
    const filePath = path.join(__dirname, '../reports', fileName);

    // Veidojam pārskata tekstu [cite: 248-249]
    let content = `=== Organizēšanas pārskats ===\n`;
    content += `Datums: ${new Date().toLocaleString()}\n`;
    content += `Direktorija: ${dirPath}\n\n`;

    content += `STATISTIKA\n`;
    content += `Pārvietoti: ${stats.moved}\n`;
    content += `Kļūdas: ${stats.errors}\n\n`;

    content += `DETALIZĒTS SARAKSTS\n`;
    details.forEach(item => {
        content += `${item.file} -> ${item.category}/${item.file}\n`;
    });

    // Saglabājam failā [cite: 250]
    fs.writeFileSync(filePath, content, 'utf8');
    return filePath;
}

module.exports = { generateReport };