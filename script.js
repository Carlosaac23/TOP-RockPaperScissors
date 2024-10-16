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
  let userChoice = prompt('Rock, Paper or Scissors! Ready!? Go!').toLowerCase();
  // Validating user's choice
  while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    userChoice = prompt('Invalid choice! Please choose Rock, Paper or Scissors.').toLowerCase();
  }
  return userChoice;
}

function playGame() {
  // Scores
  let userScore = 0;
  let computerScore = 0;

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

  for (let i = 0; i < 5; i++) {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    playRound(userSelection, computerSelection);
  }

  if (userScore === computerScore) {
    console.log("IT'S A TIE! KEEP FIGHTING");
  } else if (userScore > computerScore) {
    console.log('YOU HAVE WON! YOU BEAT THE MACHINE');
  } else {
    console.log('YOU HAVE LOST! MACHINES WILL RULE THE WORLD');
  }
}

playGame();
