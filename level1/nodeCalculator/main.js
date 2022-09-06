const readline = require("readline-sync")

// // const userName = readline.question('May I have your name? ');
// // console.log('Hi ' + userName + '!');

// const num1 = readline.question('Was ist deine erste nummer (What you got for a first number?) ')
// const num2 =  readline.question('Perfekt! Ihre erste Zahl ist ' + num1 +'. Wie lautet Ihre zweite Zahl? (AMAZEBALLS! Your first number is ' + num1 +'. Give me a second second number...')


// const operationTime = readline.question('Please enter the operation to perform...')

// function addTwoNum(num1, num2){
//     let sum = num1 + num2;
//     readline. console.log('Awesome! The sum of ' + num1 + ' and ' + num2 + ' equals ' + sum + '.' );
// }

// function subtractTwoNum(num1, num2){

// }



// if (operationTime === 'add'){
//     addTwoNum();
//     // } else if {
//     //     operationTime.textContent == 'subtract'
//     //     subtractTwoNum();
//     } else {
//         console.log('hello world')
//     }



// VARIABLES:

let operations = ['+', '-', '*', '/'];
let index = null;
let operation = null;

const num1 = readline.questionInt('Please enter your first number. ')
console.log('\n ')
const num2 = readline.questionInt('Please enter your second number ')
console.log('\n ')


operation = readline.question('Please enter the first three letters of the operation to perform:'
    +'\n add ('+operations[0]+')'
    +'\n sub ('+operations[1]+')'
    +'\n mul ('+operations[2]+')'
    +'\n div ('+operations[3]+') '
);
console.log('\n ')
switch(operation){
    case 'add':
        console.log('The result of '+num1+' + '+num2+' = '+ (num1+num2)+'\n');
        break;
    case 'sub':
        console.log('The result of '+num1+' - '+num2+' = '+ (num1-num2)+'\n');
        break;
    case 'mul':
        console.log('The result of '+num1+' * '+num2+' = '+ (num1*num2)+'\n');
        break;
    case 'div':
        console.log('The result of '+num1+' / '+num2+' = '+ (num1/num2)+'\n');
        break;
    default: console.log('HOW HECK DID THAT HAPPEN? MY DUDE?!? Well, ya must have mis-typed :('+'\n');
    }

