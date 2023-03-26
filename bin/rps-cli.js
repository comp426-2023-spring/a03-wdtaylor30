#!/usr/bin/env node

// import minimist
const args = require('minimist')(process.argv.slice(2));

// import written functions from /lib/rpsls.js
const { playRPS, helpRPS, rulesRPS, playRPSLS, helpRPSLS, rulesRPSLS } = require("../lib/rpsls");

// pull argument from command line and make it lowercase
var playerMove = args._[0];

// play rock if no argument is passed
if (!playerMove) {
    result = { "player": "rock"};
    console.log(JSON.stringify(result));
    return result;
}

// if an argument is passed, convert it to lowercase
playerMove = playerMove.toLowerCase();

// TODO: Here, put logic for the -h and -r flags.

// TODO: Initial thought is to put these in an if statement
// TODO: before the playRPS call. The playRPS call will be an
// TODO: else condition if the other flags aren't given.

// then randomize the game and return the json result
result = playRPS(playerMove);
console.log(JSON.stringify(result));
