// Get the buttons and score elements from the DOM
const buttons = document.querySelectorAll('button');
const winsEl = document.querySelector('#wins');
const tiesEl = document.querySelector('#ties');
const lossesEl = document.querySelector('#losses');

// Initialize global variables for wins, ties, and losses
let wins = 0;
let ties = 0;
let losses = 0;

// Define a function to randomly select rock, paper, or scissors for the computer
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Define a function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    ties++;
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    wins++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    losses++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Define a function to update the score elements on the screen
function updateScore() {
  winsEl.textContent = wins;
  tiesEl.textContent = ties;
  lossesEl.textContent = losses;
}

// Add event listeners to the buttons to play a round when clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    alert(result);
    updateScore();
  });
});
