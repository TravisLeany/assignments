// // for(var i = 0; i < 10; i++){
// //     console.log(i)
// // }

// // for(var i=9; i > -1; i--){
// //     console.log(i)
// // }

// // const fruit = ["banana", "orange", "apple", "kiwi"]

// // for (var i =0; i<fruit.length; i++){
// //     console.log(fruit[i])
// // }

// // const arrayReq = []

// // for(var i=0; i <1; i++){
// //     for(var j = 0; j < 10; j++){
// //         arrayReq.push(j);
// //     }
// //     console.log(arrayReq)
// // }

// // for(var i=0;i<101;i++){
// //     if([i] % 2 === 0)
// //     console.log(i)
// // }


// const everyOtherFruit = []

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

//     for(var j=0;j<fruit.length;j++){
//         console.log(j % 2 === 0)
//         if(j % 2 === 0){
//             everyOtherFruit.push(fruit[j]);
//         }
//     }
//     console.log(everyOtherFruit)

// secondArrayOfArray = []
// arrayOfArrays = []

// for(var i=0; i<3;i++){
//     for(var j=0; j<3; j++){
//         arrayOfArrays.push(j)

//     }
//     secondArrayOfArray.push(arrayOfArrays)
//     arrayOfArrays = []
// }
// console.log(secondArrayOfArray)




// thirdArrayOfArray = []
// secondArrayOfArray = []
// arrayOfArrays = []

// for(var i=0; i<3;i++){
//     for(var j=0; j<3; j++){
//         arrayOfArrays.push(j)
//         secondArrayOfArray.push(arrayOfArrays)

//     }
//     secondArrayOfArray.push(arrayOfArrays)
//     arrayOfArrays = []
// }
// console.log(secondArrayOfArray)










const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

var namesOfAll = []



var occupations = []
  for(var i=0; i < peopleArray.length; i++){
    i%2===0 ? namesOfAll.push(peopleArray[i].name) : occupations.push(peopleArray[i].occupation)
  }   //   ^^^ ternary operator condition "?" (if true executes) ";" (if false execute)

  console.log(namesOfAll)
  console.log(occupations)

// var mammals = new Array("cat","dog","human","whale","seal");
// var animalString = "";
// for (var i = 0; i < mammals. length; i++) {
//    animalString += mammals[i] + " ";
// }
// console.log(animalString);