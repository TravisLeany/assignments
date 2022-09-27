// ### **Optional Bonus challenge**

// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

// ```


let sumOfArray = 0

function lightOnOrOff(e) {
    for ( let i=0 ; i<e.length ; i++){
        sumOfArray += e[i];
    }
    console.log(sumOfArray);
    if(sumOfArray % 2 === 0){
        console.log("The light is off")
    } else {
        console.log("The light is on")
}
}

arrayOne = [2, 5, 435, 4, 3] // "The light is on"
arrayTwo = [1, 1, 1, 1, 3] // "The light is on"
arrayThree = [9, 3, 4, 2]      // "The light is off"

//passes the array into above function, gives a sum, divides by two, even are off, odd are on message
//can be passed by array as an initialized variable or even by a raw array ([1, 2, 3, 534, 8])
// is broken when i put an array inside an array...
lightOnOrOff([3, 5, 12, 8[100, 12]])




// ```

// ### **A bigger picture:**

// Your friends list, ingredients on a cooking website, posts on a feed, and just about every list is an array.

// You will want to be able to "iterate" over these arrays to inspect them, paint them to the DOM, or automate tedious processes.

// Look forward to Level 2, where you'll learn about iterator methods like `.map()` and `.filter()`. These array methods will run for loops for you. That's if you give them a callback function as an argument. This function will run for every item in the array.

// `.map()` will run a for loop that will help you create all your news feeds, lists, and anything online that's plural in React.

// ### **If you get stuck:**

// Come back here after you've approached these requirements with the 4 steps of the problem solving in mind.

// Review [those steps](https://coursework.vschool.io/problem-solving/) if you need to.

// A common pattern in code challenges will be to define a variable and assign it an "empty" value before your for loop. You then use the for loop to control it and then log or return the varibable after you've looped through your array.

// let count = 0const codes = []

// Take an hour to focus on just this assignment!