// Function to play one round of the game
function playRound() {
    // Function to get human choice
    function getHumanChoice() {
        let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase().trim();
        }
        return choice;
    }

    // Function to get computer choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Get choices
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Display computer's choice
    console.log(`Computer chooses ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return("human");
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return("computer");
    }
}

// Function to play the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Let's play 5 rounds.");

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        let result = playRound();

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Scores after Round ${round}: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }
}

// Start the game
playGame();

  