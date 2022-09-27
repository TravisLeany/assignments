// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door

// They can't open the door unless they find the key first.They die if they put 
// their hand in the hole.

// # **JavaScript tools that may help**

// - while loop
// - variables
// - booleans
// - if/else if/else OR switch statement
// - 
// - `readline-sync` (syntax for installing and using below)

const readline = require("readline-sync")

doorUnlocked = " \nYou use the bloody key on the door.\n          The door unlocks.\n                You're free, you go get some ice cream."
attemptWithoutKey = " \nYou attempt to open the door.\nThe door is locked.\nYou hear distant screams of many...\n.\n..\n...\n....\nPanic sets in.\n "

function deadChoice(){
    console.log("\nCuriousity killed you.\nThe hole was just too tempting.\nYou're hand is violently lopped off after you insert it into the hole.\nNow you're dead.\nBled to death.\nsuch a shame.");
    let playAgain = readline.questionInt("\nDo you want to play again (1 = Yes, 2 = No?\n(Press 1 or 2, then press enter)\n");
    if(playAgain === 1){
        start()
    } else if (playAgain === 2){
        giveUp();
    } else {
        console.log(`You did not select a valid option, you may only answer 1 (for Yes) or 1 (for No)\n`)
        playAgain
        deadChoice()        
    }
}

function nowHasKeyFunc(){
    const secondQuestion = readline.questionInt("\nNow, what you gonna do?\n1. Put your hand in the hole? (you know you want to...)\n2. Attempt to open the boring door with the super boring key.\nSelect 1 or 2, then press enter\n \n");
    if (secondQuestion === 1){
        deadChoice()
    } else if (secondQuestion === 2){
        winning()
    } else {
        console.log(`You did not select a valid option, you may only answer 1 (for Yes) or 1 (for No)\n`)
        nowHasKeyFunc()
    }
}

console.log(" \nYou are trapped in a room.\nThere is a hole in the wall, a bloodied deadman in the corner, and a door.\nYou have never seen a more grotesque scene in all your years on God's green Earth...")
function start(){let firstQuestion = readline.questionInt(" \nWhat do you do?\n1. Put hand in hole\n2. Find the key.\n3. Open the door.\n(select 1, 2, or 3, and press enter)")
if(firstQuestion === 1){
    deadChoice()
} else if (firstQuestion === 2){
    console.log( "\nYou rummage through the dead feller's pockets...\n                           ...you find a key in his jeans!")
    nowHasKeyFunc()
} else if (firstQuestion === 3){
    console.log(attemptWithoutKey);
    start()
} else {
    console.log(" \nYou didn't choose a valid option.\nTry to type more carefully while trying again\nPlease select 1, 2, or 3.")
    start()
}}

start()

function giveUp(){
    console.log("\nhave a dead, uneventful, day.\n \nYa know ya will...                    ...cause you're dead.\n ");
}
function winning(){
    console.log(`${doorUnlocked}\n***************** GNARLY MUSIC PLAYS IN THE BACKGROUND *****************`)
}