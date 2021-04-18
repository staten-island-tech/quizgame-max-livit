const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "How many teams are there currently in the NHL?",
    choice1: "29",
    choice2: "30",
    choice3: "31",
    choice4: "32",
    answer: 3,
  },
  {
    question:
      "At any normal given moment, how many total players should be on the ice?",
    choice1: "5",
    choice2: "6",
    choice3: "10",
    choice4: "12",
    answer: 4,
  },
  {
    question: "What does a team get when the opposing team receives a penalty?",
    choice1: "Power Play",
    choice2: "Penalty Kill",
    choice3: "Penalty Shot",
    choice4: "An extra goal",
    answer: 1,
  },
  {
    question: "How long is a minor penalty served for?",
    choice1: "1 minute",
    choice2: "90 seconds",
    choice3: "2 minutes",
    choice4: "4 minutes",
    answer: 3,
  },
  {
    question:
      "What is the name of the Trophy awarded to the team that wins the playoffs?",
    choice1: "Gretzky Championship Trophy",
    choice2: "NHL Finals Trophy",
    choice3: "Super Bowl",
    choice4: "Stanley Cup",
    answer: 4,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return window.location.assign("/src/html/end.html");
=======
    return window.location.assign("/end.html");
>>>>>>> parent of e4ab9f6 (almost)
=======
    return window.location.assign("html/end.html");
>>>>>>> parent of c7c03b9 (dasdgbdf)
=======
    return window.location.assign("html/end.html");
>>>>>>> parent of c7c03b9 (dasdgbdf)
=======
    return window.location.assign("html/end.html");
>>>>>>> parent of c7c03b9 (dasdgbdf)
=======
    return window.location.assign("html/end.html");
>>>>>>> parent of c7c03b9 (dasdgbdf)
=======
    return window.location.assign("html/end.html");
>>>>>>> parent of c7c03b9 (dasdgbdf)
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener(
    "click",
    (e) => {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];

      let classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct") {
        incrementScore(SCORE_POINTS);
      }

      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      });
    },
    1000
  );
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
