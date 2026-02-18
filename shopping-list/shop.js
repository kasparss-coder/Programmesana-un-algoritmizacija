const readline = require('readline');
const storage = require('./storage');
const utils = require('./utils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Palīgfunkcija readline pārvēršanai par Promise, lai varētu lietot await
const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

const args = process.argv.slice(2);
const command = args[0];

async function main() {
    const list = storage.loadList();
    const pricesDB = storage.loadPrices();

    switch (command) {
        case 'add':
            const name = args[1];
            const qty = parseFloat(args[2]);

            if (!name || isNaN(qty) || qty <= 0) {
                console.error('Kļūda: Norādi nosaukumu un derīgu daudzumu! (Piemēram: node shop.js add Maize 2)');
                process.exit(1);
            }

            let price;
            const existingPrice = pricesDB[name.toLowerCase()];

            if (existingPrice) {
                console.log(`Atrasta cena: ${existingPrice.toFixed(2)} EUR/gab.`);
                const choice = (await askQuestion('[A]kceptēt / [M]ainīt? ')).toUpperCase();

                if (choice === 'M') {
                    const newPriceStr = await askQuestion('Ievadi jaunu cenu: ');
                    price = parseFloat(newPriceStr);
                } else {
                    price = existingPrice;
                }
            } else {
                console.log('Cena nav zināma.');
                const newPriceStr = await askQuestion('Ievadi cenu: ');
                price = parseFloat(newPriceStr);
            }

            if (isNaN(price) || price <= 0) {
                console.error('Kļūda: Nederīga cena!');
                process.exit(1);
            }

            // Saglabājam cenu datubāzē (lowercase meklēšanai, bet vārdu oriģinālu)
            pricesDB[name.toLowerCase()] = price;
            storage.savePrices(pricesDB);

            // Pievienojam sarakstam
            list.push({ name, qty, price });
            storage.saveList(list);

            console.log(`\n✓ Pievienots: ${name} × ${qty} (${price.toFixed(2)} EUR/gab.) = ${utils.calcLineTotal({qty, price})} EUR`);
            break;

        case 'list':
            console.log('\nIepirkumu saraksts:');
            list.forEach((item, index) => {
                const lineTotal = utils.calcLineTotal(item);
                console.log(`  ${index + 1}. ${item.name} × ${item.qty} — ${item.price.toFixed(2)} EUR/gab. — ${lineTotal} EUR`);
            });
            break;

        case 'total':
            const grandTotal = utils.calcGrandTotal(list);
            const units = utils.countUnits(list);
            console.log(`\nKopā: ${grandTotal} EUR (${units} vienības, ${list.length} ieraksti)`);
            break;

        case 'clear':
            storage.saveList([]);
            console.log('✓ Saraksts notīrīts!');
            break;

        default:
            console.log('Pieejamās komandas: add [vārds] [daudzums], list, total, clear');
    }
    rl.close();
}

main();