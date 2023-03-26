#!/usr/bin/env node

// import minimist
const args = require('minimist')(process.argv.slice(2), {
    // define custom -r flag
    alias: {
        r: "rules"
    }
});

// import written functions from /lib/rpsls.js
const { playRPS, helpRPS, rulesRPS, playRPSLS, helpRPSLS, rulesRPSLS } = require("../lib/rpsls");

// first check for help and rules flags
// TODO: (1) Fully implement the help and rules messages in rpsls.js.
// TODO: (2) Check the documentation to see if there's anything else that needs to be handled.
// TODO: (3) Copy the rpsls fns in rpsls.js.
// TODO: (4) Copy rps-cli.js into rpsls-cli.js.
// * Should be done after that. All glory to God!
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
        result = { "player": "rock"};
        console.log(JSON.stringify(result));
        return result;
    }

    // if an argument is passed, make it lowercase
    playerMove = playerMove.toLowerCase();

    // play the game by randomizing cpu and return result
    result = playRPS(playerMove);
    console.log(JSON.stringify(result));
}
