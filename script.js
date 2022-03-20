//Enable strict mode
"use strict";

//Global Variables
let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

//DOM Element Selection
//Sections
const weaponselectSection = document.querySelector('#weaponselect-section');
const startSection = document.querySelector('#start-section');
const interimResultSection = document.querySelector('#interim-result-section');
const endResultSection = document.querySelector('#end-result-section');
//Buttons
const startButton = document.querySelector('#start-button');
const nextButton = document.querySelector('#next-button');
const newGameButton = document.querySelector('#new-game-button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
//Text Content
const humanScoreCounter = document.querySelector('#human-score');
const comuterScoreCounter = document.querySelector('#computer-score');
const interimResultText = document.querySelector('#interim-result-text');
const endResultText = document.querySelector('#end-result-text');

//Event Listenings on Buttons
startButton.addEventListener('click', () => {
    toggleDisplay(startSection);
    toggleDisplay(weaponselectSection);
});
nextButton.addEventListener('click', () => {
    toggleDisplay(interimResultSection);
    toggleDisplay(weaponselectSection);
});
newGameButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 1;
    toggleDisplay(nextButton);
    toggleDisplay(weaponselectSection);
    toggleDisplay(interimResultSection);
    toggleDisplay(endResultSection);
    setScore(humanScore, computerScore);
});
rock.addEventListener('click', function () {
    toggleDisplay(weaponselectSection);
    toggleDisplay(interimResultSection);
    playRound(rock.id, computerPlay());
    lastRound();
});
paper.addEventListener('click', function () {
    toggleDisplay(weaponselectSection);
    toggleDisplay(interimResultSection);
    playRound(paper.id, computerPlay());
    lastRound();
});
scissors.addEventListener('click', function () {
    toggleDisplay(weaponselectSection);
    toggleDisplay(interimResultSection);
    playRound(scissors.id, computerPlay());
    lastRound();
});

//Functions
//Game algorithm
function playRound(humanSelection, computerSelection) {
    roundCounter++;
    if (humanSelection == "rock" && computerSelection == "paper") {
        printInterimResult('computer', humanSelection, computerSelection);
        return 'computerWins';
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
        printInterimResult('computer', humanSelection, computerSelection);
        return 'computerWins';
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        printInterimResult('computer', humanSelection, computerSelection);
        return 'computerWins';
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        printInterimResult('human', humanSelection, computerSelection);
        return 'humanWins';
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        printInterimResult('human', humanSelection, computerSelection);
        return 'humanWins';
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        printInterimResult('human', humanSelection, computerSelection);
        return 'humanWins';
    } else {
        printInterimResult('remis', humanSelection, computerSelection);
        return 'remis';
    }
}
//Returns a random selection between rock, paper and scissors
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Math is wrong! Or is it me?");
    }
}
//Display the result of the round and set the Score
function printInterimResult(winner, humanSelection, computerSelection) {
    if (winner == 'human') {
        interimResultText.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
        ++humanScore;
    } else if (winner == 'computer') {
        interimResultText.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
        ++computerScore;
    } else {
        interimResultText.textContent = 'Remis';
        --humanScore;
        --computerScore;
    }
    interimResultSection.appendChild(interimResultText);

    setScore(humanScore, computerScore);
}
//Display the final result of the Game
function printEndResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        endResultText.textContent = `Hurray! You are the final WINNER!`;
    } else if (computerScore > humanScore) {
        endResultText.textContent = `Boooh! You are the final LOOOSER!`;
    } else {
        endResultText.textContent = `Soo lame! A draw!`;
    }
}
//Final Round Event
function lastRound() {
    if (roundCounter > 3) {
        console.log("GameOver");
        printEndResult(humanScore, computerScore);
        toggleDisplay(endResultSection);
        toggleDisplay(nextButton);
    }
}
//Set Score
function setScore(humanScore, comuterScore) {
    humanScoreCounter.textContent = humanScore;
    comuterScoreCounter.textContent = comuterScore;
}
//Switch Display activity on/off
function toggleDisplay(sectionName) {
    if (sectionName.classList.contains("active")) {
        sectionName.classList.remove("active");
    } else {
        sectionName.classList.add("active");
    }
}
//Switch Display activity on
function displayOn(sectionName) {
    sectionName.classList.add("active");
}