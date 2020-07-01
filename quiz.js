// Import du module des quizzes
const quiz = require("./my-modules/quiz-module");

// Définir les questions
quiz.setQuestions([
  {
    text: "Qui a tué Henri IV",
    callback: quiz.processAnswer,
    goodAnswer: "Ravaillac",
  },
  {
    text: "Quel est la couleur de la côte d'azur",
    callback: quiz.processAnswer,
    goodAnswer: "bleu",
  },
  {
    text: "1515",
    callback: quiz.processAnswer,
    goodAnswer: "Marignan",
  },
]);

// Lancement du quiz
quiz.ask();
