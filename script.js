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
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "Remis!";
    }
}