const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Dators iedomājas skaitli VIENU REIZI
const secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("=== SKAITĻU MINĒŠANAS SPĒLE (1-10) ===");

const guessGame = () => {
    readline.question("Ievadi savu minējumu: ", (input) => {
        const guess = Number(input);

        if (guess === secretNumber) {
            console.log("Apsveicu! Tu uzminēji! 🎉");
            readline.close();
        } else {
            // Šis aizstāj 'while' loģiku interaktīvā vidē
            if (guess > secretNumber) {
                console.log("Par lielu! Mēģini vēlreiz.");
            } else {
                console.log("Par mazu! Mēģini vēlreiz.");
            }
            guessGame(); // "Cikls" turpinās - saucam funkciju vēlreiz
        }
    });
};

guessGame();