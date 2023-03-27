#!/usr/bin/env node

// import minimist
const args = require('minimist')(process.argv.slice(2), {
    // define custom -r flag
    alias: {
        r: "rules"
    }
});

// import written functions from /lib/rpsls.js
const { playRPS, helpRPS, rulesRPS } = require("../lib/rpsls");

// first check for help and rules flags
if (args.h || args.help) {
    helpRPS();
    return;
} else if (args.r || args.rules) {
    rulesRPS();
    return;
} else {
    // otherwise pull argument from command line
    var playerMove = args._[0];

    // play rock if no argument is passed
    if (!playerMove) {
        result = { "player": "rock" };
        console.log(JSON.stringify(result));
        return result;
    }

    // if an argument is passed, make it lowercase
    playerMove = playerMove.toLowerCase();

    // play the game by randomizing cpu and return result
    result = playRPS(playerMove);
    
    // if defined, log to console, otherwise exit silently
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
        return result;
    }
    return;
}
