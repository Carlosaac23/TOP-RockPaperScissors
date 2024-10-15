let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    console.log('Piedra');
  } else if (computerChoice === 1) {
    console.log('Papel');
  } else {
    console.log('Tijeras');
  }
}
