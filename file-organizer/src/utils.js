const fs = require('fs');
const path = require('path');

/**
 * Atrod unikālu faila ceļu, pievienojot numuru, ja fails jau eksistē [cite: 224-226].
 */
function getUniquePath(targetPath) {
    if (!fs.existsSync(targetPath)) return targetPath; // Ja neeksistē, viss kārtībā [cite: 230]

    const dir = path.dirname(targetPath);
    const ext = path.extname(targetPath);
    const name = path.basename(targetPath, ext);
    let counter = 1;
    let newPath;

    do {
        newPath = path.join(dir, `${name} (${counter})${ext}`); // Pievieno (1), (2) utt. [cite: 241]
        counter++;
    } while (fs.existsSync(newPath));

    return newPath;
}

module.exports = { getUniquePath };