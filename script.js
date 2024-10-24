let buttonsDiv = document.querySelector('.container');
let resultDiv = document.querySelector('.result');
let scoresDiv = document.querySelector('.scores');

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

function playGame() {
  // Scores
  let userScore = 0;
  let computerScore = 0;

  let roundCount = 0;

  // Play a round
  function playRound(userChoice, computerChoice) {
    // Capitalize the choices (cause it looks better)
    const userChoiceCapitalize = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    const computerChoiceCapitalize = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();

    if (userChoice === computerChoice) {
      resultDiv.textContent = "It's a tie!";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      resultDiv.textContent = `You won! ${userChoiceCapitalize} beats ${computerChoiceCapitalize}`;
      userScore++;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      resultDiv.textContent = `You won! ${userChoiceCapitalize} beats ${computerChoiceCapitalize}`;
      userScore++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      resultDiv.textContent = `You won! ${userChoiceCapitalize} beats ${computerChoiceCapitalize}`;
      userScore++;
    } else {
      resultDiv.textContent = `You lose! ${computerChoiceCapitalize} beats ${userChoiceCapitalize}`;
      computerScore++;
    }

    scoresDiv.textContent = `User score: ${userScore} --- Computer score: ${computerScore}`;
    roundCount++;

    if (roundCount === 5) {
      if (userScore === computerScore) {
        resultDiv.textContent = "IT'S A TIE! NO ONE WINS";
      } else if (userScore > computerScore) {
        resultDiv.textContent = 'YOU HAVE WON! YOU BEAT THE MACHINE';
      } else {
        resultDiv.textContent = 'YOU HAVE LOST! MACHINES WILL RULE THE WORLD';
      }

      userScore = 0;
      computerScore = 0;
      roundCount = 0;
    }
  }

  let paperBtn = document.createElement('button');
  let rockBtn = document.createElement('button');
  let scissorsBtn = document.createElement('button');

  buttonsDiv.appendChild(paperBtn);
  paperBtn.textContent = 'Paper';
  paperBtn.classList.add('button');
  buttonsDiv.appendChild(rockBtn);
  rockBtn.textContent = 'Rock';
  rockBtn.classList.add('button');
  buttonsDiv.appendChild(scissorsBtn);
  scissorsBtn.textContent = 'Scissors';
  scissorsBtn.classList.add('button');

  paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
  });
  rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
  });
  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
  });
}

document.addEventListener('DOMContentLoaded', () => playGame());
