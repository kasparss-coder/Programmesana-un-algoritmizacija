// Ielādējam iebūvēto Node.js rīku darbam ar termināli
const readline = require('readline');

// Izveidojam saskarni (interface) datu ievadei un izvadei
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sākam jautājumu sēriju (secīgi)
rl.question('Kāds ir Tavs kājas izmērs? ', (kajasizmers) => {
  
  rl.question('Kāda ir Tava mīļākā filma? ', (filma) => {
    
    rl.question('Kādā pasaulē Tu dzīvo? ', (pasaule) => {
      
      // Izvadam kopsavilkumu beigās
      console.log(`\n--- Kopsavilkums ---`);
      console.log(`Tavs kājas izmērs ir: ${kajasizmers}`);
      console.log(`Tava mīļākā filma ir: ${filma}`);
      console.log(`Tava pasaule ir: ${pasaule}`);

      // Obligāti aizveram saskarni, lai programma beigtu darbu
      rl.close();
    });
  });
});