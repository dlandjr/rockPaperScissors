let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play one round of the game
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultsDiv = document.querySelector('#results');
    const scoreDiv = document.querySelector('#score');

    // Determine the winner
    let resultMessage = "";
    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Both chose <strong>${playerSelection}</strong>.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        resultMessage = `You win! <strong>${playerSelection}</strong> beats <strong>${computerSelection}</strong>.`;
    } else {
        computerScore++;
        resultMessage = `You lose! <strong>${computerSelection}</strong> beats <strong>${playerSelection}</strong>.`;
    }

    // Display the results of the round
    resultsDiv.innerHTML = `<p>${resultMessage}</p>`;

    // Update and display the score
    scoreDiv.innerHTML = `<p>Score: You - ${humanScore} | Computer - ${computerScore}</p>`;

    // Check for a winner
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "The Computer";
        resultsDiv.innerHTML += `<p><strong>${winner} won the game!</strong></p>`;
        disableButtons(); // Disable buttons when game is over
    }
}

// Add event listeners to buttons
document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
