
// function capilizeAndLowercase(funcEntry){
//     //ensure toUpperCase or toLowerCase is initialized as variable
//     var upperMod = funcEntry.toUpperCase();
//     console.log(upperMod);
//     var lowerMod = funcEntry.toLowerCase();
//     console.log(lowerMod);
//     output = upperMod.concat(lowerMod)
//     console.log(output)  
// }

// capilizeAndLowercase("HelLo") // => "HELLOhello"



// //Exercise 2
// // Write a function that takes a string as a parameter and returns a number 
// // that is half the string's length, rounded down.

// // > Hint: You'll need to use Math.floor().

// function findMiddleIndex(strInput){
//     inputDivByTwo = strInput.length/2;
//     outputFloored = Math.floor(inputDivByTwo);
//     console.log(outputFloored);
// }

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5



//exercise 3 
//
//need to pin in it because need to learn to slice in half and round down 
//
// function returnFirstHalf(exThreeEntry){
//     halfThreeEntry = exThreeEntry.length/2;
//     halfThreeFloored = Math.floor(halfThreeEntry);
//         halfOutputString = exThreeEntry.slice(0, halfThreeFloored)
//         console.log(halfOutputString)    
// }
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"


// function returnFirstHalf(exThreeEntry){
//     halfThreeEntry = exThreeEntry.length/2;
//     halfThreeFloored = Math.floor(halfThreeEntry);
//         firstHalf = exThreeEntry.slice(0, halfThreeFloored)
//         finalFirst = firstHalf.toUpperCase()
//         secondHalf = exThreeEntry.slice(halfThreeFloored)
//         finalSecond = secondHalf.toLowerCase()
//         finalOutput = finalFirst.concat(finalSecond)
//         console.log(finalOutput)    
// }
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"



//maybe a for loop to caplitalize the index of the entire array created "splitInput"


//Below function takes a string as an argument,
// splits it into an Array,
// performs a for loop on the Array,
// capitalizes the first letter of each string inside array and substring used to add the rest
//     from index indicated,
// outside the loop new variable initialized and joins the loop modified contents,
// then spits it out to console.

function capitalize(a){
    const words = a.split(" ");
    console.log(words)
    for (let i=0; i <words.length; i++){
        words[i] = words[i][0].toUpperCase()+ words[i].substring(1)
        console.log(words[i])
    }
    newSentence = words.join(" ");
    console.log(newSentence)
}

capitalize("what the heck is going on my dude") // -> "Hey Friends! Practice Practice Practice!"




// how to capitalize a single word
const singleWord = "greatTimes"

let newWord = singleWord[0].toUpperCase()+singleWord.substring(1);
console.log(newWord)