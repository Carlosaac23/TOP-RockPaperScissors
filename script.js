let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return 'Piedra';
  } else if (computerChoice === 1) {
    return 'Papel';
  } else {
    return 'Tijeras';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Piedra, Papel o Tijeras! Listo!?');
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`Ganaste! ${humanChoice} vence a ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Perdiste! ${computerChoice} vence a ${humanChoice}`);
    computerScore++;
  }

  console.log(`Puntaje del usuario: ${humanScore} -- Puntaje del computador: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
