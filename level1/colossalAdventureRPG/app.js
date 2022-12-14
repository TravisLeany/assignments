
const readlineSync = require("readline-sync")


// Collossal Adventure RPG
console.log(`\nWelcome to Azdakka.\nThe land is thick with the smell of death and burning stone.\nAn archer approaches closer from within the fog.\n \nShe speaks....`)

let heroName = readlineSync.question(`??????: "What's your name stranger?"\n(type your Hero's name and press enter)\n`)
//Name is defined and initialized

let hero = {
    name: heroName,
    hp: 100,
    attack: 10,
    defense: 10,
}

//empty inventory initialized
let heroInventory ={
    potions: 0,
    tents: 0,
    cabins: 0,
    rocks: 0
}

//loot table defined
let lootTable = [{
    item: "Potion",
    healValue: 10
}, {
    item: "Tent",
    healValue: 25
}, {
    item: "Cabin",
    healValue: 50
}, {
    item: "Rock",
    healValue: 0
}]

console.log("\n❓❓❓: \n" + hero.name + " aye?")
console.log(".")
console.log("..")
console.log("❓❓❓: \nWell my name's Trigger!!")
console.log("...")
console.log("....")
console.log("Trigger:\nHey " + hero.name +", can you do me a favor?")
console.log("Trigger:\nI need you to patrol the North for me.")
console.log("Ya can ☠️ kill and 🪙 loot what ya like :)")
console.log("How does 'at sound? 😜")


function printHeroStats(){
    console.log("\nHero: " + hero.name + "\nCurrent HP: " + hero.hp +"\nCurrent Items: ")
    console.log(heroInventory)
}

function menu(){
    baseQuestion = readlineSync.question('\nWhat would you like to do? (W - Walk, I - view Inventory, Q = Quit)');
    if (baseQuestion === "W" || baseQuestion === "w"){
        walk()
    } else if (baseQuestion === "I" || baseQuestion === "i"){
        displayInventory()
    } else if (baseQuestion === "Q" || baseQuestion === "q"){
        hero.hp = 0
        console.log("\nGoodbye quitter.\n")
    } else if (baseQuestion === "p" || baseQuestion === "P" || baseQuestion === "PRINT" || baseQuestion === "Print" || baseQuestion === "print"){
        printHeroStats()
    } else {
        console.log("(WRONG BUTTON, try again, W or I?")
        menu()
    }
}

function displayInventory(){
    if (heroInventory.potions + heroInventory.tents + heroInventory.tents + heroInventory.cabins + heroInventory.rocks === 0){
        console.log("\nYou're pack is completely empty\n")
    } else {
        console.log("\nYou open your pack.\nInside you have:")
        console.log(heroInventory)
        let insideInvAction = readlineSync.questionInt("\nWould you like to use something?\nEnter 1 to use a potion.\nEnter 2 to use a tent.\nEnter 3 to use a cabin.\nEnter 4 to talk to a rock.\nEnter 5 to close the backpack.\nChoose an action 1 through 5 and press enter.\n")
        if (insideInvAction === 1){
            usePotion()
        } else if (insideInvAction === 2){
            useTent()
        } else if (insideInvAction === 3){
            useCabin()
        } else if (insideInvAction === 4){
            talkToRock()
        } else if (insideInvAction === 5){
            console.log("\n🎒 You close up the bag and ponder your next move.\n")
        }
    }
}

function walk(){
    if (Math.floor(3 * Math.random()) < 1){
        console.log("\nYou've been attacked!")
        fightTime()
    } else {
        console.log(walkMsg1 [Math.floor( 10 * Math.random())])
    }
}

function fightTime(){
    let randomEnemy = Math.floor(3 * Math.random())
    //Don't remember why I started to add this line below
    //let currentEnemy = monsters[randomEnemy]
    let enemyDmgDealt
    let enemyDmgTaken    
    //function allowing for a random amount each time based on enemy dmg parameters
    function attacked(){
        enemyDmgDealt = Math.floor(Math.random() * (monsters[randomEnemy].maxDmg - monsters[randomEnemy].minDmg) + monsters[randomEnemy].minDmg);
    }
    //function allowing for a random dmg from player each time based on Hero's attack with a plus or minus 5 offset
    function attacks(){
        enemyDmgTaken = Math.floor(Math.random() * ((hero.attack + 5) - (hero.attack -5)) + (hero.attack - 5));
    }
    console.log("A giant " + monsters[randomEnemy].name + " approaches!")
    for(let i = 0; monsters[randomEnemy].hp > 0 && hero.hp > 0; i++){
        let fightCommand = readlineSync.question('\nWhat is your action?\n⚔️ Attack (A)?\n🏃‍♂️Run (R)?\n')
        if (fightCommand === "A" || fightCommand === "a" || fightCommand === "attack" || fightCommand === "ATTACK" || fightCommand === "Attack") {
            attacks();
            console.log(i)
            if ( i === 0 ) {
                console.log("\n🤺\nIt's on!\nYou attack the " + monsters[randomEnemy].name + " and deal " + enemyDmgTaken + " damage")
            } else {
                console.log("\n ⚔️   ⚔️   ⚔️   ⚔️\nThe battle rages on!!!!\nYou attack the " + monsters[randomEnemy].name + " and deal " + enemyDmgTaken + " damage")
            }
            monsters[randomEnemy].hp = monsters[randomEnemy].hp - enemyDmgTaken
            attacked();
            console.log("The " + monsters[randomEnemy].name + " lunges at you, dealing " + enemyDmgDealt + " damage.")
            hero.hp = hero.hp - enemyDmgDealt;
            if (hero.hp < 1){
                dead()
            } else if (monsters[randomEnemy].hp < 1){
                console.log("\nVictory! You defeated the " + monsters[randomEnemy].name + " with " + hero.hp+ " HP remaining.")
                let lootDecide = Math.floor(4 * Math.random())
                let itemDropped = lootTable[lootDecide].item
                console.log("Looks like the " + monsters[randomEnemy].name + " dropped a " + itemDropped + ".\nYou stash the " + itemDropped + " in your inventory")
                afterBattleHeal = Math.floor(Math.random() * (20 - 5) + 5)
                hero.hp = hero.hp + afterBattleHeal
                console.log("You feel your strength slowly recover as you regain " + afterBattleHeal + " hit points.\nYou now have " + hero.hp + " hit points.")
                if ( lootDecide === 0){
                    heroInventory.potions = heroInventory.potions + 1
                } else if (lootDecide === 1){
                    heroInventory.tents = heroInventory.tents + 1
                } else if (lootDecide === 2){
                    heroInventory.cabins = heroInventory.cabins + 1
                } else {
                    heroInventory.rocks = heroInventory.rocks + 1
                }
            }
        } else if (fightCommand === "R" || fightCommand === "r" || fightCommand === "Run" || fightCommand === "run" || fightCommand === "RUN"){
            let escape = Math.floor(2 * Math.random())
            if (escape < 1){
                console.log("You attempt to escape...  \n__ 🏃____\nThe monster blocks your path!")
                attacked();
                console.log("The " + monsters[randomEnemy].name + " lunges at you, dealing " + enemyDmgDealt + " damage.")
                hero.hp = hero.hp - enemyDmgDealt;                
                console.log("\nYour current HP @ " + hero.hp + "\n")
            } else {
                console.log("\n__ 🏃‍♂️💨 _____________\nYou attempt to escape, and......  \n!!!!!     VICTORY     !!!!!\n       ...you escaped \n(●'◡'●)")
                monsters[randomEnemy].hp = 0;
                fightCommand = ""
            }
        } else {
            console.log("\nWHOOPS!!!\n🤭🤭🤭🤭🤭🤭\nthat's not an option.\nAttack (A)? or Run (R)?\n")
        }
    }
    monsters[0].hp = 30
    monsters[1].hp = 40
    monsters[2].hp = 50
}

let monsters = [{
    name: "Spider Monkey 🐒",
    hp : 30,
    minDmg: 1,
    maxDmg: 9
}, {
    name: "Fluffer Nuffer 👻",
    hp : 40,
    maxDmg: 14,
    minDmg: 4
}, {
    name: "Gorgomasher 👹",
    hp : 50,
    minDmg: 7,
    maxDmg: 19
}]

function useItem(){
    heal = Math.floor(Math.random() * (40 - 20) + 20)
}

const walkMsg1 = ["\nYou take some steps...\nThe ice wind burns your face\nGoddam, it's cold.", 
"\n🍃Your feet heavily trudge along...\nYou ask yourself, 🤔 why the hell did you agree to this...",
"\nA deafening scream 😱 drounds out the sound of the wind. \nYou wonder if something...\nor someone just died in this hell🔥",
"\nYou briskley pick up the pace on this patrol.👍\nDamn you covered some good ground!🌋\nNot many more legs like this and job will be done.\nTrigger will be SO PROUD!😁",
"\nAnother small step for Trigger. \nWe've come so far.\n Gotta make it home!",
"\nYou come out of the clearing in and see a 🌫️ fog 🌫️ everywhere \n It's crazy, you see something shiny ✨....\nThen you remember you got a job to do.",
"\nYou take two steps and second guess all of your life's decisions thus far. 😕",
"\n 🕹️ So this is what early games were like?\nOH lawdy, we are having FUN!!",
"\nWhen in doubt, keep patrolling. 💪😁💪",
"\nAnother minute dredges by as you walk on forth like a good soldier. \n Starting to wonder if it will ever end. \nIt will. \nI hope. \nEmbrace the suck.🍭"];

function stillPlaying(){
    let playAgain = readlineSync.question("\ndo you want to play again?\n");
    if (playAgain === "Y"){
        hero.hp = 100
        console.log(hero.hp)
        restart()
    } else if (playAgain === "N"){
        return ("have a daring day!")
    } else {
        console.log("pushed something wrong there, what ya wanna do? Want to play again?");
        stillPlaying();
    }
}

function start() {
    while (hero.hp > 0){
        menu()
    }
}

function restart(){
    console.log("\nGet right back on that horse and make ol' Trigger proud!!!\n")
    start()
}

start()

if (hero.hp < 0) {
    dead()
}






function dead(){
    console.log("looks like ya done died\n😐😵💀☠️\nAwesome!!!\n");
    stillPlaying()
}

// favorToAsk()

// function favorToAsk(){
//     console.log("\n??????: " + hero.name + " aye?")
//     setTimeout(() => { console.log("."); }, 1000);
//     setTimeout(() => { console.log(".."); }, 1500);
//     setTimeout(() => { console.log("??????: Well my name's Trigger!!"); }, 2000);
//     setTimeout(() => { console.log("..."); }, 2500);
//     setTimeout(() => { console.log("...."); }, 5000);
//     setTimeout(() => { console.log("Trigger: Hey " + hero.name +", can you do me a favor?"); }, 3000);
//     setTimeout(() => { console.log("I need you to patrol the North for me."); },6000);
//     setTimeout(() => { console.log("Ya can kill and loot what ya like :)"); }, 6500);
//     setTimeout(() => { console.log("Hows 'at sound? :P"); }, 7000);
//     setTimeout(() => { menu(); }, 7600);
//     setTimeout(() => { hero.hp = 100;}, 7599);
// }
