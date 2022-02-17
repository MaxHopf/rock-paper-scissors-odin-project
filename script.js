//Enable strict mode
"use strict";

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