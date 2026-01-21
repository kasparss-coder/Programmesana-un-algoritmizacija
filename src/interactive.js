// Ielādējam iebūvēto Node.js rīku darbam ar termināli
const readline = require('readline');

// Izveidojam saskarni (interface) datu ievadei un izvadei
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sākam jautājumu sēriju (secīgi)
rl.question('Kāds ir Tavs mīļākais hobijs? ', (hobijs) => {
  
  rl.question('Kāda ir Tava mīļākā krāsa? ', (krasa) => {
    
    rl.question('Kādā pilsētā Tu dzīvo? ', (pilseta) => {
      
      // Izvadam kopsavilkumu beigās
      console.log(`\n--- Kopsavilkums ---`);
      console.log(`Tavs hobijs ir: ${hobijs}`);
      console.log(`Tava mīļākā krāsa ir: ${krasa}`);
      console.log(`Tava pilsēta ir: ${pilseta}`);

      // Obligāti aizveram saskarni, lai programma beigtu darbu
      rl.close();
    });
  });
});