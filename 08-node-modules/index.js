const path = require('path');
const fs = require('fs');

// const pathConfigFile = `${__dirname}${path.sep}config.js`;
const pathConfigFile = path.join(__dirname, 'config.json');

// fs.readFile(pathConfigFile, 'utf8', (err, data) => {
//     if (err) throw err;
//
//     const config = JSON.parse(data);
//
//     console.log(config.protocol);
// });

try {
    const config = fs.readFileSync(pathConfigFile, 'utf8');

    console.log(JSON.parse(config));
} catch (e) {
    console.log(e.message);
}
// beaucoup de code...

console.log("Je m'affiche avant de lire le fichier");