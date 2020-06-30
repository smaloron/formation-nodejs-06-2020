const ws = require("fs");
// import d'un seul élément du module console
const { Console } = require("console");
// Envoi de la sortie et des erreurs vers un flux d'écriture
const output = ws.createWriteStream("./stdout.log");
const errOutput = ws.createWriteStream("./stderr.log");
// Création d'une nouvelle instance perso de la console
const print = new Console(output, errOutput);
//Utilisation
const roll = 42;

print.log("nombre : %d", roll);
print.error("Une erreur");
print.log("Ce message apparaitra dans un fichier");
