// This file contains all of the exportable functions for both rps and rpsls.

// #region rps
// RPS functions
const rpsMoves = ["rock", "paper", "scissors"]

function playRPS(playerMove) {
    // first, check the validity of the player's move
    if (!rpsMoves.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);
    }

    // if the player's move is valid, proceed w the game
    // randomly generate the computer's move within the rps ruleset
    const randIndex = Math.floor(Math.random() * rpsMoves.length);
    const computerMove = rpsMoves[randIndex];

    // compare computer and player moves
    // tie
    if (playerMove == computerMove) { return { "result": "tie" } };

    // player wins
    // player == rock && cpu == scissors
    // player == scissors && cpu == paper
    // player == paper && cpu == rock
    if (
        (playerMove == "rock" && (computerMove == "scissors")) ||
        (playerMove == "scissors" && computerMove == "paper") ||
        (playerMove == "paper" && computerMove == "rock")
        ) { return (
            {
                "player": playerMove,
                "opponent": computerMove,
                "result": "win"
            }
        )
        } else {
            return (
            {
                "player": playerMove,
                "opponent": computerMove,
                "result": "loss"
            }
        )
        }

}

function helpRPS() {
    // print command help
}

function rulesRPS() {
    // print rules for regular rps
}

// #endregion

// #region rpsls
const rpslsMoves = ["rock", "paper", "scissors", "lizard", "spock"]

function playRPSLS() {}

function helpRPSLS() {
    // print command help
}

function rulesRPSLS() {
    // print rules for rpsls
}

//#endregion

module.exports = {
    playRPS,
    helpRPS,
    rulesRPS,
    playRPSLS,
    helpRPSLS,
    rulesRPSLS
}