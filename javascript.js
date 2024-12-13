function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length); // Get an index (0, 1, or 2)
    return choices[randomIndex];
}

function getHumanChoice() {
    // Prompt the user for their choice
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase().trim();

    // Validate the input to ensure it's one of the valid choices
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        // If invalid input, ask again
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase().trim();
    }

    // Return the valid user choice
    return choice;
}

console.log(getHumanChoice());
