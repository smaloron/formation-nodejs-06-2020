/*********************************
 *  Générateur de page statique
 ***********************************/

// Importations
const fs = require("fs");
const render = require("es6-template-strings");
const inqirer = require("inquirer");

// Paramètres de l'application
const templateFolder = "./template/";
const webFolder = "./web/";

const pageFileName = "index.html";

// Traitement

// Récupération du modèle
const templateString = fs.readFileSync(
  templateFolder + "page-template.html",
  "utf8"
);

/**
 * Génération de la page statique en
 * fonction d'un modèle et d'un objet infos
 * @param {Object} infos
 */
const generatePage = (infos) => {
  // Calcul du rendu de la page finale
  // l'application du modèle avec les infos
  const content = render(templateString, infos);

  // Enregistrement dans un fichier
  fs.writeFileSync(webFolder + pageFileName, content, "utf8");

  // Affichage de la confirmation
  console.log("Traitement teminé");
};

// Les questions qui permettent de déterminer les infos
const questions = [
  { message: "Quel est le titre", name: "title", type: "input" },
  { message: "Quel est le sous titre", name: "subtitle", type: "input" },
];

// Lancement du questionnaire
inqirer
  .prompt(questions)
  .then((infos) => {
    generatePage(infos);
  })
  .catch((error) => console.log(error));
