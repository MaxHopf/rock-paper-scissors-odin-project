//Enable strict mode
"use strict";

//Returns a random selection between rock, paper and scissors
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "Rock";
    } else if (randNum == 1) {
        return "Paper";
    } else if (randNum == 2) {
        return "Scissors";
    } else {
        console.log("Math is wrong! Or was it just me?")
    }
}
//Returns a formated version of players selection after validating the user input
function playerPlay() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    //Test if user input matches the requirements
    while (!(/^rock$|^paper$|^scissors$/i.test(playerChoice))) {
        playerChoice = prompt("Please type either \"Rock\", \"Paper\" or \"Scissors\"?");
    }
    return capitalize(playerChoice);
}
//Converts the first letter of a string to uppercase and the rest to lowercase 
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//Function to initiate playing a game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    //Determination of the winner/loser
    const playerWins = 'playerWins';
    const computerWins = 'computerWins';
    const remis = 'remis';
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerWins;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerWins;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerWins;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return playerWins;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return playerWins;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return playerWins;
    } else {
        console.log('Remis!')
        return remis;
    }
}
//Play the Game function
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 3; i++) {
        const roundResult = playRound();
        if (roundResult == "playerWins") {
            ++playerScore;
        } else if (roundResult == "computerWins") {
            ++computerScore
        } else {
            --playerScore;
            --computerScore;
        }
        console.log(`Your score = ${playerScore} vs Computer score = ${computerScore}`);
    }
    const finalPlayerWinner = 'Hurray! You are the final WINNER!';
    const finalPlayerLoser = 'Boooh! You are the final LOOOSER!';
    const remis = 'Soo lame! A draw!'
    if (playerScore > computerScore) {
        return finalPlayerWinner;
    } else if (computerScore > playerScore) {
        return finalPlayerLoser;
    } else {
        return remis;
    }
}