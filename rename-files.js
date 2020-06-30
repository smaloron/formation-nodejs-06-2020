// imports
const fs = require("fs");

// Zéro initial
const padLeft = (num) => {
  let temp = "0" + num;
  return temp.substr(-2);
};

// Le dossier à traiter
const folderName = "./data-copy";
// Lecture du contenu du dossier
const folderContent = fs.readdirSync(folderName);
// Boucle sur l'ensemble des fichiers
for (fileName of folderContent) {
  // Obtenir les infos sur le fichier
  const fileStats = fs.statSync(folderName + "/" + fileName);
  // Si le fichier n'est un dossier
  if (fileStats.isFile) {
    // définition du nouveau nom
    const newName =
      "" +
      fileStats.birthtime.getFullYear() +
      padLeft(fileStats.birthtime.getMonth() + 1) +
      padLeft(fileStats.birthtime.getDate()) +
      fileName;

    // renommer le fichier
    fs.renameSync(folderName + "/" + fileName, folderName + "/" + newName);
  }
}

console.log("traitement terminé");
