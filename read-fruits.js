// Import file system
const fs = require("fs");

// Lecture du fichier
/*
const content = fs.readFileSync("./data/fruits.txt");

console.log(content.toString());
*/

// Lcture du contenu du dossier
const folderContent = fs.readdirSync("./data");

// Boucle sur le contenu du dossier
for (let fileName of folderContent) {
  // lecture du fichier
  console.log(`==== ${fileName} ====`);
  let fileContent = fs.readFileSync("./data/" + fileName);
  console.log(fileContent.toString());
}

const filePath = "./data/fruits.txt"; // Test de l'existence du fichier
if (fs.existsSync(filePath)) {
  // infos sur le fichier
  const infos = fs.statSync(filePath);
  console.log(infos);
}
