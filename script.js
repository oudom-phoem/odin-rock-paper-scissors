function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase().trim();
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice === "paper") {
      console.log("You Win! Scissors beats Paper.");
      humanScore++;
    } else {
      console.log("It's a draw!");
    }
  }

  // play 5 rounds
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(
      `You win, your score is ${humanScore}, computer's score is ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose, your score is ${humanScore}, computer's score is ${computerScore}`
    );
  } else {
    console.log(`It's a draw, both have ${humanScore} scores`);
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Please choose rock, paper, or scissors.");
}

playGame();
