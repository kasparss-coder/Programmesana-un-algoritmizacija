const fs = require('fs');
const path = require('path');
const { categorizeFile } = require('./categorizer');
const { getUniquePath } = require('./utils');
const { generateReport } = require('./reporter'); // Pievienots atskaišu modulis

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json'), 'utf8'));
const args = process.argv.slice(2);
const dirPath = args[args.indexOf('--dir') + 1];
const isDryRun = args.includes('--dry-run');

if (!dirPath) {
    console.log("Lūdzu norādi mapi: node src/index.js --dir ./test-files");
    process.exit(1);
}

const files = fs.readdirSync(dirPath);
let stats = { moved: 0, errors: 0 };
let reportDetails = []; // Šeit glabāsim informāciju pārskatam [cite: 148]

console.log(isDryRun ? "--- DRY-RUN REŽĪMS ---" : "--- ORGANIZĒŠANA SĀKTA ---");

files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) return;

    const category = categorizeFile({ name: file }, config);
    if (!category) return;

    const targetDir = path.join(dirPath, category);
    const targetPath = getUniquePath(path.join(targetDir, file));

    if (!isDryRun) {
        try {
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);
            fs.renameSync(fullPath, targetPath);
            stats.moved++;
            reportDetails.push({ file, category }); // Pievienojam datus sarakstam
            console.log(`✓ Pārvietots: ${file}`);
        } catch (err) {
            stats.errors++;
            console.error(`❌ Kļūda: ${file}`);
        }
    } else {
        console.log(`[PLĀNS] ${file} -> ${category}/`);
    }
});

// Ja tas nebija dry-run, izveidojam atskaiti [cite: 245]
if (!isDryRun && stats.moved > 0) {
    const reportPath = generateReport(dirPath, reportDetails, stats);
    console.log(`\n=== Organizēšana pabeigta ===`);
    console.log(`Pārskats saglabāts: ${reportPath}`); // Informējam lietotāju [cite: 251, 287]
}