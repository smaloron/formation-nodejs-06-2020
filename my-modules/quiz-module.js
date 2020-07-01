const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let userAnswers = [];
let goodAnswersCount = 0;
let numberOfQuestions = 0;

const processAnswer = (data, q) => {
  if (data.toLowerCase() == q.goodAnswer.toLowerCase()) {
    userAnswers.push({ question: q.text, result: true });
    goodAnswersCount++;
  } else {
    userAnswers.push({ question: q.text, result: false });
  }
};

let questionList = [];

const ask = () => {
  const q = questionList.shift();
  rl.question(q.text, (answer) => {
    if (answer) {
      q.callback(answer, q);
      if (questionList.length > 0) {
        ask();
      } else {
        rl.close();
      }
    } else {
      questionList.unshift(q);
      ask();
    }
  });
};

rl.on("close", () => {
  console.log(goodAnswersCount + " bonnes réponses sur " + numberOfQuestions);
});

module.exports = {
  setQuestions: (questions) => {
    questionList = questions;
    numberOfQuestions = questions.length;
  },
  processAnswer,
  goodAnswersCount,
  ask,
};
