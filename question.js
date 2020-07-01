const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let userAnswers = [];
let goodAnswersCount = 0;

const processAnswer = (data, q) => {
  if (data == q.goodAnswer) {
    userAnswers.push({ question: q.text, result: true });
    goodAnswersCount++;
  } else {
    userAnswers.push({ question: q.text, result: false });
  }
};

const questionList = [
  {
    text: "Combien de bits dans un octect ? ",
    goodAnswer: 8,
    callback: processAnswer,
  },
  {
    text: "Que veut dire HTTP ? ",
    goodAnswer: "HyperText Transfer Protocol",
    callback: processAnswer,
  },
  {
    text: "Qui a inventé HTML ? ",
    goodAnswer: "Tim Berners Lee",
    callback: processAnswer,
  },
];
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
  console.log(goodAnswersCount + " bonnes réponses");
});

ask();
