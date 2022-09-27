//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let computerCount = 0
for ( var i = 0; i < officeItems.length; i++ ){
    if (officeItems[i] === 'computer'){
        computerCount += 1;
        // console.log(computerCount)
    }
}
console.log("our variable string contains "+computerCount+" computers in that mug.")

//#2
//Loop through the following array and log to the console "old enough" 
//if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  //pronoun = null;
  

  for(var i =0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    var pronoun;
    var vName;
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        vName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        // console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+' is old enough to see Mad Max.')
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            pronoun = "he"
        } else {
            pronoun = "she"
        }
        // ` <- backtick (under the tilde) what's inside the console log is the template literal both sides "${putAVariableHereFromJS}"
        console.log(`${vName} is old enough, ${pronoun} is super stoked`)
    } else {
        vName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            pronoun = "he"
        } else {
            pronoun = "she"
        }
        console.log(`${vName} is not old enough, ${pronoun} is mega sad!!`)
    }}

        // for(var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
        //     if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === male){
        //     console.log('he')
        // } else {
        //     console.log('she')
        // }}
        
    
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +' is not old enough :/. '+ peopleWhoWantToSeeMadMaxFuryRoad[i].gender +' is super bummed')
//     }
//   }  
