const path = require('path');

function categorizeFile(fileInfo, config) {
    const fileName = fileInfo.name;
    const ext = path.extname(fileName).toLowerCase();

    // 1. Pārbauda, vai fails nav ignorējams [cite: 146]
    if (config.ignoredFiles.includes(fileName) || config.ignoredExtensions.includes(ext)) {
        return null; 
    }

    // 2. Pārbauda katru kategoriju pēc paplašinājuma [cite: 461-464]
    for (const [category, rules] of Object.entries(config.rules)) {
        if (rules.extensions.includes(ext)) return category;

        // 3. Pārbauda pēc regulārajām izteiksmēm (Regex) [cite: 465-467]
        for (const pattern of rules.patterns) {
            const regex = new RegExp(pattern, "i");
            if (regex.test(fileName)) return category;
        }
    }

    return config.defaultCategory; // Ja nekas neatbilst, liekam pie "Citi" [cite: 148]
}

module.exports = { categorizeFile };