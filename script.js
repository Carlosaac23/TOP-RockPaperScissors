let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors! Ready!? Go!');
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`User score: ${humanScore} -- Computer score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
