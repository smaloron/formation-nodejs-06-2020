// imports
const fs = require("fs");
const crypto = require("crypto");

// fonction qui génére un hash
// à partir d'une chaine de carcatères
const getHash = (pass, algo = "sha256") => {
  return crypto.createHash(algo).update(pass).digest("hex");
};

// Lecture du fichier des mots de passe
const plainPasswordsContent = fs.readFileSync("./data/plain-passwords.txt");
const passList = plainPasswordsContent.toString().split("\n");
// Tableau pour stocker les mots de passe hashés
const hashedPassword = [];
// Boucle sur la liste des mots de passe
for (let pwd of passList) {
  // ajout du hash au tableau
  hashedPassword.push(getHash(pwd));
}

// Ecriture dans un fichier
fs.writeFileSync("./data/hashed-passwords", hashedPassword.join("\n"), "utf8");

console.log("Traitement terminé");
