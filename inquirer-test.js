// import de la bibliothèque
const inquirer = require("inquirer");

const requireLetterAndNumber = (pass) => {
  return pass.match(/^(?=.*?\d)(?=.*?[a-zA-Z]).+$/i) != null;
};

// Liste des questions
//  - type input mode de saisie proposé à l'utilisateur
//  - name nom de la variable qui va stocker la réponse de l'utilisateur
//  - message question posée à l'utilisateur
const questions = [
  {
    type: "password",
    message: "Votre mot de passe",
    name: "password",
    mask: "*",
    validate: requireLetterAndNumber,
  },
  { message: "Entrez votre nom", type: "input", name: "name" },
  { message: "Entrez votre âge", type: "number", name: "age" },
  { message: "Entrez votre job", type: "input", name: "job" },
  {
    message: "Entrez votre salaire annuel",
    type: "number",
    name: "salary",
    transformer: (amount) => `${amount} €`,
  },
  {
    message: "Aimez vous la bière",
    type: "confirm",
    name: "beerDrinker",
    default: true,
  },
  {
    message: "Votre ville",
    type: "list",
    name: "city",
    choices: ["Paris", "Dublin", "Bordeaux", "Cork", "Galway"],
  },
  {
    message: "Vos compétences",
    name: "skills",
    type: "checkbox",
    choices: [
      { name: "Javascript" },
      { name: "PHP" },
      { name: "Angular" },
      { name: "NodeJS" },
    ],
  },
  {
    message: "Votre bière favorite",
    type: "list",
    name: "beer",
    choices: ["Affligem", "Guiness", "Molson", "Chouffe"],
    when: (answers) => answers.beerDrinker,
  },
];

// Poser l'ensemble des questions
inquirer
  .prompt(questions)
  // Récupération de toutes les réponses
  .then((answers) => {
    console.log(answers);
  })
  // Gestion des erreurs
  .catch((error) => console.log(error));
