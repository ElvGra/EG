let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("rezultat-igrac");
const computerScore_span = document.getElementById("rezultat-racunar");
const scoreBoard_div = document.querySelector(".rezultat");
const result_p = document.querySelector(".rezultat2 > p");
const rock_div = document.getElementById("kam");
const paper_div = document.getElementById("pap");
const scissors_div = document.getElementById("mak");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Kamen";
  if (letter === "s") return "Makaze";
  if (letter === "p") return "Papir";
}
function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `Izabrali ste  ${convertToWord(
    userChoice
  )} . Pobijedili ste!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("green-glow");
  }, 3000);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Izabrali ste  ${convertToWord(
    userChoice
  )} . Izgubili ste!`;
}

function draw(userChoice) {
  result_p.innerHTML = `Izabrali ste  ${convertToWord(
    userChoice
  )}  ali je nerijeseno.`;
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
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
