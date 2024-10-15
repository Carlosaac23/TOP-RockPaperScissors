// Scores
let userScore = 0;
let computerScore = 0;

// Create a computer choice
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

// Gets user's choice
function getUserChoice() {
  const userChoice = prompt('Rock, Paper or Scissors! Ready!? Go!');
  return userChoice.toLocaleLowerCase();
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

// Play a round
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
    userScore++;
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
    userScore++;
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You won! ${userChoice} beats ${computerChoice}`);
    userScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    computerScore++;
  }

  console.log(`User score: ${userScore} --- Computer score: ${computerScore}`);
}

playRound(userSelection, computerSelection);
