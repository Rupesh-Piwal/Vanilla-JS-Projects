let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result.innerHTML =convertToWord(userChoice) +" beats " + convertToWord(computerChoice) +". You win!! "; // ES5
  result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You win!!` //ES6
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result.innerHTML =convertToWord(userChoice) +" losts to " + convertToWord(computerChoice) +". You lost.. "; // ES5
  result.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} You lost..` //ES6 
}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result.innerHTML =convertToWord(userChoice) +" equals " + convertToWord(computerChoice) +". It's a draw. "; // ES5
  result.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} It's a draw.` //ES6 
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissors.addEventListener("click", function () {
    game("s");
  });
}

main();
