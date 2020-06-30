// imports
const fs = require("fs");
const security = require("./my-modules/security");

// Lecture du fichier des mots de passe
const plainPasswordsContent = fs.readFileSync("./data/plain-passwords.txt");
const passList = plainPasswordsContent.toString().split("\n");
// Tableau pour stocker les mots de passe hashés
const hashedPassword = [];
// Boucle sur la liste des mots de passe
for (let pwd of passList) {
  // ajout du hash au tableau
  hashedPassword.push(security.getHash(pwd));
}

// Ecriture dans un fichier
fs.writeFileSync("./data/hashed-passwords", hashedPassword.join("\n"), "utf8");

console.log("Traitement terminé");
