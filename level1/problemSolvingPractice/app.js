// // test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40





function returnLargest(sampleArray){
    //console.log(sampleArray)
    let largerNum = sampleArray[0]
    //console.log(largerNum)
    for( let i=0 ; i < sampleArray.length ; i++){
        if (sampleArray[i] > largerNum)
            largerNum = sampleArray[i]
    }
    return largerNum
    //or use console.log(largerNum) here to make a simple function
    // console.log cannot be called below by console.log
}

console.log(returnLargest([6, 13, 250, 3]))  //typo on actual lesson, "]" is missing
console.log(returnLargest([3, 5, 2, 8, 1]))
console.log(returnLargest([-13, 40, 3, 0, 19, 22]))



function lettersWithStrings(strArray, strInput){
    console.log(strArray)
    let i;
    let bingoWords = [];
    for( let i = 0; i< strArray.length ; i++){
        if (strArray[i].includes(strInput))
            bingoWords.push(strArray[i])
    }
    return bingoWords
}


// test data  //typo again on lesson first item below
// last ")" is missing;

// also, first log should have two returns not the one...
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []



function isDivisible(a, b){
    if (a % b === 0 ){
        return true
    } else {
        return false
    }
}

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
