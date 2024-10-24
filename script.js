let buttonsDiv = document.querySelector('.container');
let resultDiv = document.querySelector('.result');
let scoresDiv = document.querySelector('.scores');

// User's buttons
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
      resultDiv.textContent = `It's a tie! Both have chosen ${userChoiceCapitalize}`;
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

    scoresDiv.innerHTML = '';

    const userScoreDiv = document.createElement('div');
    userScoreDiv.textContent = `User score: ${userScore}`;
    scoresDiv.appendChild(userScoreDiv);

    const computerScoreDiv = document.createElement('div');
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    scoresDiv.appendChild(computerScoreDiv);

    roundCount++;

    if (roundCount === 5) {
      if (userScore === computerScore) {
        resultDiv.textContent = "IT'S A TIE! NO ONE WINS";
      } else if (userScore > computerScore) {
        resultDiv.textContent = 'YOU HAVE WON! YOU BEAT THE MACHINE';
      } else {
        resultDiv.textContent = 'YOU HAVE LOST! MACHINES WILL RULE THE WORLD';
      }

      // Delete all after 2.5 seconds to start playing again
      setTimeout(() => {
        userScore = 0;
        computerScore = 0;
        roundCount = 0;
        resultDiv.textContent = '';
        scoresDiv.textContent = '';
      }, 2500);
    }
  }

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

playGame();
